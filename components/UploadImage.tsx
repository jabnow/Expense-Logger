import { Button, Image, View, ScrollView } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { StyleSheet } from "react-native";

const UploadImage: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);

  // Function to pick an image from the library
  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Permission to access the photo library is required!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setImage(result.assets[0].uri);
    }
  };


  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <ThemedView style={styles.subTabContainer}>
        <View style={styles.buttonContainer}>
          <Button title="Pick an Image from Library" onPress={pickImage} />
        </View>
        {image && <Image source={{ uri: image }} style={styles.uploadedImage} />}
      </ThemedView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  subTabContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    gap: 10,
    marginVertical: 15,
  },
  uploadedImage: {
    width: 200,
    height: 200,
    marginTop: 15,
    borderRadius: 10,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default UploadImage;
