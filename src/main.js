// src/main.js
import { Web3 } from "web3";
import { contractABI } from "./contractABI";
import { POLYGON_AMOY_CONFIG, CONTRACT_ADDRESS } from "./config";
import {
  initializeClient,
  uploadFile as uploadToWeb3Storage,
} from "./web3StorageClient.js";

// Loader Functions
// Show the loader
function showLoader(loadingNote) {
  document.getElementById("loader").style.display = "flex";
  if (loadingNote) {
    document.getElementById("loaderNote").innerHTML = loadingNote;
  }
}

// Hide the loader
function hideLoader() {
  document.getElementById("loader").style.display = "none";
}

// Make Buffer global
class FileStorageApp {
  constructor() {
    this.initializeElements();
    this.addEventListeners();
  }

  initializeElements() {
    this.connectBtn = document.getElementById("connectWallet");
    this.networkStatus = document.getElementById("networkStatus");
    this.walletStatus = document.getElementById("walletStatus");
    this.fileInput = document.getElementById("fileInput");
    this.uploadBtn = document.getElementById("uploadButton");
    this.fileList = document.getElementById("fileList");
    this.storageTypeSelect = document.getElementById("storageType");
    this.storageClassSelect = document.getElementById("storageClass");
  }

  addEventListeners() {
    this.connectBtn.addEventListener("click", () => this.connectWallet());
    this.uploadBtn.addEventListener("click", () => this.uploadFile());
  }

  async switchToAmoyNetwork() {
    try {
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [POLYGON_AMOY_CONFIG],
      });

      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: POLYGON_AMOY_CONFIG.chainId }],
      });

      return true;
    } catch (error) {
      console.error("Failed to switch network:", error);
      this.networkStatus.innerHTML = `
                <span class="text-red-500">
                    Please switch to Polygon Amoy Testnet
                </span>
            `;
      return false;
    }
  }

  async checkNetwork() {
    const chainId = await window.ethereum.request({ method: "eth_chainId" });
    console.log("Connected to chain:", chainId);
    if (chainId !== POLYGON_AMOY_CONFIG.chainId) {
      this.networkStatus.innerHTML =
        "Wrong network. Switching to Polygon Amoy...";
      return await this.switchToAmoyNetwork();
    }
    this.networkStatus.innerHTML = `
            <span class="text-green-500">
                Connected to Polygon Amoy Testnet
            </span>
        `;
    return true;
  }

  async getGasPrice() {
    try {
      const gasPrice = await this.web3.eth.getGasPrice();
      // Add 10% to ensure transaction goes through
      const gasPriceBigInt = gasPrice.valueOf();
      return gasPriceBigInt.toString();
    } catch (error) {
      console.error("Error getting gas price:", error);
      return "10000000000"; // fallback gas price
    }
  }

  async connectWallet() {
    if (typeof window.ethereum === "undefined") {
      alert("Please install MetaMask");
      return;
    }

    try {
      this.connectBtn.disabled = true;
      this.connectBtn.innerHTML = "Connecting...";

      // Check and switch network first
      const networkSwitched = await this.checkNetwork();
      if (!networkSwitched) {
        throw new Error("Failed to switch network");
      }

      // Request account access
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      this.web3 = new Web3(window.ethereum);
      this.account = accounts[0];
      this.contract = new this.web3.eth.Contract(contractABI, CONTRACT_ADDRESS);

      // Update UI
      this.connectBtn.innerHTML = "Connected";
      this.walletStatus.innerHTML = `
                <span class="font-mono">
                    ${this.account.substring(0, 6)}...${this.account.substring(
        38
      )}
                </span>
            `;

      // Enable file upload
      this.fileInput.disabled = false;
      this.uploadBtn.disabled = false;

      showLoader();

      // Load data
      await this.loadStorageOptions();
      await this.loadUserFiles();

      hideLoader();

      // Setup event listeners
      this.setupEventListeners();
    } catch (error) {
      console.error("Connection error:", error);
      this.connectBtn.innerHTML = "Connect Wallet";
      this.connectBtn.disabled = false;
      alert(`Connection error: ${error.message}`);
    }
  }

  async uploadFile() {
    if (!this.account || !this.contract) {
      alert("Please connect your wallet first");
      return;
    }

    const file = this.fileInput.files[0];
    if (!file) {
      alert("Please select a file to upload");
      return;
    }

    showLoader("Make sure you have metamask installed and it's up to date");

    const storageType = this.storageTypeSelect.value;
    const storageClass = this.storageClassSelect.value;

    try {
      // Create a simple hash of the file
      const hash = await this.createFileHash(file);

      try {
        // Initialize Web3 Storage client
        const client = await initializeClient();

        // Upload file to Web3 Storage
        const cid = await uploadToWeb3Storage(client, file);

        if (cid) {
          // Generate a simple base URL (in production, you'd use actual IPFS or storage URL)
          const baseUrl = `https://${cid}.ipfs.w3s.link`;

          // Get current gas price
          const gasPrice = await this.getGasPrice();

          // Estimate gas for the transaction
          const gasEstimate = await this.contract.methods
            .addFile(
              file.name,
              file.type,
              file.size,
              hash,
              "File uploaded via dApp",
              storageType,
              baseUrl,
              storageClass
            )
            .estimateGas({ from: this.account });

          console.log(gasEstimate);
          const tx = await this.contract.methods
            .addFile(
              file.name,
              file.type,
              file.size,
              hash,
              "File uploaded via dApp",
              storageType,
              baseUrl,
              storageClass
            )
            .send({
              from: this.account,
              gas: gasEstimate, // Add 20% to gas estimate
              gasPrice: gasPrice,
            });

          console.log("File metadata stored:", tx);
          this.fileInput.value = "";
          await this.loadUserFiles();
          alert("File metadata stored successfully");

          // display the tx hash
          document.getElementById("txHash").innerHTML = tx.transactionHash;

          // Inject the transaction hash into the href of the <a> tag
          const txLinkElement = document.getElementById("txLink");
          txLinkElement.href = `https://www.oklink.com/amoy/tx/${tx.transactionHash}`; // For Amoy Network
          // txLinkElement.href = `https://polygonscan.com/tx/${tx.transactionHash}`; // For Polygon Network

          // Display transaction info
          document.getElementById("txInfo").style.display = "block";
        }
      } catch (error) {
        console.error("Error uploading file:", error);
        console.log("Error uploading file.");
      }
    } catch (error) {
      console.error("Error storing file metadata:", error);
      alert("Error storing file metadata");
    }
    hideLoader();
  }
  async createFileHash(file) {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = function (e) {
        const text = e.target.result;
        const hash = this.simpleHash(text + file.name + Date.now());
        resolve(hash);
      }.bind(this);
      reader.readAsText(file);
    });
  }

  simpleHash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash;
    }
    return "hash_" + Math.abs(hash).toString(16);
  }
  setupEventListeners() {
    window.ethereum.on("accountsChanged", (accounts) => {
      if (accounts.length > 0) {
        this.account = accounts[0];
        this.loadUserFiles();
        this.walletStatus.innerHTML = `
                    <span class="font-mono">
                        ${this.account.substring(
                          0,
                          6
                        )}...${this.account.substring(38)}
                    </span>
                `;
      } else {
        this.resetConnection();
      }
    });

    window.ethereum.on("chainChanged", (chainId) => {
      if (chainId !== POLYGON_AMOY_CONFIG.chainId) {
        this.networkStatus.innerHTML = `
                    <span class="text-red-500">
                        Wrong network. Please switch to Polygon Amoy Testnet
                    </span>
                `;
        this.resetConnection();
      } else {
        this.networkStatus.innerHTML = `
                    <span class="text-green-500">
                        Connected to Polygon Amoy Testnet
                    </span>
                `;
      }
    });
  }

  async loadStorageOptions() {
    try {
      const networks = await this.contract.methods
        .viewAllStorageNetworks()
        .call();
      const classes = await this.contract.methods
        .viewAllStorageClasses()
        .call();

      this.storageTypeSelect.innerHTML = networks
        .filter((network) => network.isActive)
        .map(
          (network, index) => `
                    <option value="${index + 1}">${network.name}</option>
                `
        )
        .join("");

      this.storageClassSelect.innerHTML = classes
        .filter((cls) => cls.isActive)
        .map(
          (cls, index) => `
                    <option value="${index + 1}">${cls.name}</option>
                `
        )
        .join("");
    } catch (error) {
      console.error("Error loading storage options:", error);
      alert("Error loading storage options");
    }
  }

  async loadUserFiles() {
    if (!this.account || !this.contract) return;

    try {
      const fileIds = await this.contract.methods
        .getUserFiles(this.account)
        .call();

      const files = await Promise.all(
        fileIds.map((id) => this.contract.methods.getFile(id).call())
      );

      // Clear the existing file list
      document.getElementById("fileListTable").innerHTML = "";
      document.getElementById("fileList").innerHTML = "";

      files
        .filter((file) => file.isActive)
        .forEach((file, index) => this.createFileElement(file, fileIds[index]));
    } catch (error) {
      console.error("Error loading files:", error);
      document.getElementById("fileListTable").innerHTML = `
            <tr>
                <td colspan="5" class="text-red-500 p-4 text-center">
                    Error loading files. Please try again.
                </td>
            </tr>
        `;
      document.getElementById("fileList").innerHTML = `
            <div class="text-red-500 p-4">
                Error loading files. Please try again.
            </div>
        `;
    }
  }

  createFileElement(file, fileId) {
    const maxLength = 15; // Adjust the maxLength as needed
    const truncatedFileName =
      file.fileName.length > maxLength
        ? file.fileName.substring(0, maxLength) + "..."
        : file.fileName;

    // Table row for larger screens
    const tableRow = `
        <tr class="bg-gray-100 border-b border-gray-200">
            <td class="px-4 py-2">${truncatedFileName}</td>
            <td class="px-4 py-2">${file.fileType}</td>
            <td class="px-4 py-2">${file.fileSize}</td>
            <td class="px-4 py-2">${file.timestamp}</td>
            <td class="px-4 py-2 flex flex-col gap-3">
                <a href="${file.baseUrl}" target="_blank" class="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition-colors w-full text-center">View on IPFS</a>
                <button onclick="app.deleteFile(${fileId})" class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors w-full">Delete</button>
            </td>
        </tr>
    `;

    // List item for smaller screens
    const listItem = `
        <div class="border p-4 rounded-lg shadow-sm bg-white hover:shadow-md transition-shadow">
            <div class="flex justify-between items-start">
                <div>
                    <h3 class="font-semibold text-lg">${truncatedFileName}</h3>
                    <div class="space-y-1 mt-2 text-sm text-gray-600">
                        <p>Type: ${file.fileType}</p>
                        <p>Size: ${file.fileSize}</p>
                        <p>Uploaded: ${file.timestamp}</p>
                        <a href="${file.baseUrl}" target="_blank" class="text-blue-500 hover:text-blue-700 inline-block mt-2">View on IPFS</a>
                    </div>
                </div>
                <button onclick="app.deleteFile(${fileId})" class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors">Delete</button>
            </div>
        </div>
    `;

    // Insert the table row and list item into the appropriate containers
    document
      .getElementById("fileListTable")
      .insertAdjacentHTML("beforeend", tableRow);
    document
      .getElementById("fileList")
      .insertAdjacentHTML("beforeend", listItem);
  }

  async deleteFile(fileId) {
    if (!confirm("Are you sure you want to delete this file?")) return;

    try {
      // Estimate gas for the transaction
      const gasEstimate = await this.contract.methods
        .deleteFile(fileId)
        .estimateGas({ from: this.account });
      const gasPrice = await this.getGasPrice();
      const tx = await this.contract.methods.deleteFile(fileId).send({
        from: this.account,
        gas: gasEstimate, // Add 20% to gas estimate
        gasPrice: gasPrice,
      });

      await this.loadUserFiles();
    } catch (error) {
      console.error("Error deleting file:", error);
      alert("Error deleting file");
    }
  }

  resetConnection() {
    this.account = null;
    this.connectBtn.innerHTML = "Connect Wallet";
    this.connectBtn.disabled = false;
    this.walletStatus.innerHTML = "Not connected";
    this.fileInput.disabled = true;
    this.uploadBtn.disabled = true;
    this.fileList.innerHTML = "";
  }

  formatFileSize(bytes) {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  }

  formatDate(timestamp) {
    return new Date(timestamp * 1000).toLocaleString();
  }
}

// Initialize app and make it globally available
window.app = new FileStorageApp();
