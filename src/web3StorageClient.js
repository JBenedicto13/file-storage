import { create } from "@web3-storage/w3up-client";

export async function initializeClient() {
  const client = await create();
  const did = "did:key:z6Mkqyg4hcYcYKrYg2g2yWVWNr8Hg2RbSXfe3bR3NCk7McNF";
  try {
    // Login to the account
    const myAccount = await client.login("benedictojohnbenedict@gmail.com");

    // Provision the space
    await myAccount.provision(did);

    // Set the current space
    await client.setCurrentSpace(did);
  } catch (error) {
    console.error("Error setting space:", error);
  }

  return client;
}

export async function uploadFile(client, file) {
  try {
    // Convert the file to a Blob
    const blob = new Blob([file], { type: file.type });

    // Create a File object
    const fileObj = new File([blob], file.name, { type: file.type });

    // Upload the file as a directory (even if it's a single file)
    const cid = await client.uploadDirectory([fileObj]);

    console.log("File uploaded successfully. \nCID:" + cid);
    return cid;
  } catch (error) {
    console.error("Error uploading file:", error);
  }
}
