import React, { useEffect } from "react";
import { Text, View } from "react-native";
import Tesseract from "tesseract.js";



export default function Index() {
  useEffect(() => {
    const recognizeText = async () => {
      try {
        const { data: { text } } = await Tesseract.recognize(
          '../lol.jpeg', // Provide the correct path to the image
          'eng',
          { logger: (m) => console.log(m) }
        );
        console.log("Recognized text:", text);
      } catch (error) {
        console.error("Error recognizing text:", error);
      }
    };

    recognizeText(); // Call the function to initiate OCR
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit lll/index.tsx to edit this screen.</Text>
    </View>
  );
}