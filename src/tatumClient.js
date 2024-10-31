// src/tatumClient.js
import { TATUM_API_KEY } from "./config";

export async function uploadToTatum(file) {
  try {
    console.log("Starting file upload to Tatum...");

    // Ensure the file is correctly read
    if (!file) {
      throw new Error("No file selected for upload.");
    }
    console.log("File selected:", file);

    const formData = new FormData();
    formData.append("file", file, file.name);

    const response = await fetch("https://api.tatum.io/v3/ipfs", {
      method: "POST",
      headers: {
        accept: "application/json",
        "x-api-key": TATUM_API_KEY,
      },
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Failed to upload file: ${errorData.message}`);
    }

    const data = await response.json();
    console.log("File uploaded successfully. \nResponse:", data);

    return data;
  } catch (error) {
    console.error("Error uploading file to Tatum:", error);
    throw error;
  }
}
