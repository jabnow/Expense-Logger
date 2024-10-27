import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  View,
  SafeAreaView,
  Button,
  Modal,
  Pressable,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as ImagePicker from "expo-image-picker";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SuccessModal from "../../components/SuccessModal";
import { HelloWave } from "@/components/HelloWave";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import MyForm from "@/components/MyForm";
import UploadImage from "@/components/UploadImage";
import Index from "../tessaract";

const Tab = createMaterialTopTabNavigator();

const Track = () => {
  const [image, setImage] = useState<string | null>(null);
  const [index, setIndex] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [routes] = useState([
    { key: "scanReceipt", title: "Scan Receipt" },
    { key: "uploadPhoto", title: "Upload Photo" },
    { key: "enterManually", title: "Enter Manually" },
  ]);

  // Function to capture a photo with the camera
  const takePhoto = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      alert("Permission to access the camera is required!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setImage(result.assets[0].uri);
      setModalVisible(true);
    }
  };

  const SubTab1 = () => (
    <ThemedView style={styles.subTabContainer}>
      <Button title="Take a Photo" onPress={takePhoto} />
    </ThemedView>
  );

  const SubTab2 = () => (
    <ThemedView style={styles.subTabContainer}>
      <UploadImage />
    </ThemedView>
  );

  const SubTab3 = () => (
    <ThemedView style={styles.subTabContainer}>
      <MyForm />
    </ThemedView>
  );

  return (
    <>
      <ThemedText style={styles.titleContainer}>
        <ThemedText type="title">Add New Expense</ThemedText>
      </ThemedText>
      
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#66999b",
          tabBarIndicatorStyle: { backgroundColor: "#66999b" },
        }}
      >
        <Tab.Screen
          name="Scan Receipt"
          component={SubTab1}
        />
        <Tab.Screen
          name="Upload Photo"
          component={SubTab2}
        />
        <Tab.Screen
          name="Enter Manually"
          component={SubTab3}
        />
      </Tab.Navigator>
      <SuccessModal setModalVisible={setModalVisible} modalVisible={modalVisible}/>
      {image && <Index imageName={image} />} 
    </>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginVertical: 20,
  },
  subTabContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Track;