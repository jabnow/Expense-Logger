import { Image, StyleSheet, Platform, ScrollView, View, SafeAreaView } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import MyForm from "@/components/MyForm";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { TabView, SceneMap } from 'react-native-tab-view';
import { useState } from "react";
import UploadImage from "@/components/UploadImage";


const Tab = createMaterialTopTabNavigator();

const SubTab1: React.FC = () => (
  <ThemedView style={styles.subTabContainer}>
    <ThemedText type="default">hello world</ThemedText>
    <HelloWave />
  </ThemedView>
);

const SubTab2: React.FC = () => (
  <ThemedView style={styles.subTabContainer}>
    <UploadImage />
  </ThemedView>
);

const SubTab3: React.FC = () => (
  <ThemedView style={styles.subTabContainer}>
    <MyForm />
  </ThemedView>
);

const renderScene = SceneMap({
  first: SubTab1,
  second: SubTab2,
  third: SubTab3,
});

export default function AddNew() {

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
  ]);

  return (
    <>
        <ParallaxScrollView
        headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
        headerImage={
        <Ionicons size={310} name="pencil" style={styles.headerImage} />
       }
    >
         <ThemedText type="title">Add New Expense</ThemedText>
         <HelloWave />
    </ParallaxScrollView>
       <Tab.Navigator
         screenOptions={{
           tabBarActiveTintColor: "#6200ee",
           tabBarIndicatorStyle: { backgroundColor: "#6200ee" },
         }}
       >
         <Tab.Screen name="Scan Receipt" component={SubTab1} options={{ title: "Scan Receipt" }} />
         <Tab.Screen name="Upload Photo" component={SubTab2} options={{ title: "Upload Photo" }} />
         <Tab.Screen name="Enter manually" component={MyForm} options={{ title: "Enter manually" }} />
       </Tab.Navigator>

    {/* // <Ionicons size={310} name="pencil" style={styles.headerImage} />
    //   <TabView
    //   navigationState={{ index, routes }}
    //   renderScene={renderScene}
    //   onIndexChange={setIndex}
    //   /> */}
     
    </>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  subTabContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
