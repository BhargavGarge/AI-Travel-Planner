import React, { useState } from "react";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import Toast from "react-native-toast-message";
import { CreateTripContext } from "../context/CreateTripContext";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    outfit: require("./../assets/fonts/Outfit-Regular.ttf"),
    "outfit-medium": require("./../assets/fonts/Outfit-Medium.ttf"),
    "outfit-bold": require("./../assets/fonts/Outfit-Bold.ttf"),
  });

  // Hooks are always called
  const [tripData, setTripData] = useState([]);

  // Conditionally render UI
  if (!fontsLoaded) {
    return (
      <></> // Render an empty fragment while fonts are loading
    );
  }

  return (
    <>
      <CreateTripContext.Provider value={{ tripData, setTripData }}>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="(tabs)" />
        </Stack>

        {/* Add Toast outside the Stack to ensure it renders */}
        <Toast position="top" topOffset={60} />
      </CreateTripContext.Provider>
    </>
  );
}
