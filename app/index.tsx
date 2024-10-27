import { Image, StyleSheet, Platform } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./(tabs)/home";
import SignInScreen from "./login";
import SignUpScreen from "./signup";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { Button, Text, TextInput, View } from "react-native";

import { Redirect } from "expo-router";
import RedirectHome from "./redirect";

const Stack = createNativeStackNavigator();

function SplashScreen() {
  return (
    <View>
      <Text>Loading...</Text>
    </View>
  );
}

const getIsSignedIn = () => {
  // custom logic
  console.log("hi");
  return true;
};

export default function App() {
  const isSignedIn = getIsSignedIn();

  const linking = {
    prefixes: [],
    config: {
      screens: {},
    },
  };

  return (
    <NavigationContainer
      linking={linking}
      fallback={<Text>Loading...</Text>}
      independent={true}
    >
      <Stack.Navigator initialRouteName="/home">
        {isSignedIn ? (
          <>
            <Stack.Screen
              name="home"
              component={RedirectHome}
              options={{
                headerShown: false,
              }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="SignIn"
              component={SignInScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUpScreen}
              options={{
                headerShown: false,
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
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
});
