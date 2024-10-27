import React, { useEffect } from "react";
import Tesseract from "tesseract.js";

// Define the Index component to accept props
export default function Index({ imageName }: { imageName: string }) {
  useEffect(() => {
    const recognizeText = async () => {
      try {
        const {
          data: { text },
        } = await Tesseract.recognize(
          imageName, // Use the imageName prop
          "eng",
          { logger: (m) => console.log(m) }
        );
        console.log("Recognized text:", text);
      } catch (error) {
        console.error("Error recognizing text:", error);
      }
    };

    if (imageName) {
      recognizeText(); // Call the function to initiate OCR if imageName is valid
    }
  }, [imageName]); // Add imageName as a dependency

  return null; // Or render some JSX if needed
}