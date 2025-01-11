import React from "react";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import Toast from "react-native-toast-message";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    outfit: require("./../assets/fonts/Outfit-Regular.ttf"),
    "outfit-medium": require("./../assets/fonts/Outfit-Medium.ttf"),
    "outfit-bold": require("./../assets/fonts/Outfit-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="(tabs)" />
      </Stack>

      {/* Add Toast outside the Stack to ensure it renders */}
      <Toast position="top" topOffset={60} />
    </>
  );
}
