import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
import LoadingDots from "react-native-loading-dots";

export default function Login() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true); // State to track image loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Stop loading after 2 seconds
    }, 2000);

    return () => clearTimeout(timer); // Clear timeout when component unmounts
  }, []);

  return (
    <View>
      {isLoading && ( // Show loading dots while image is loading
        <View style={styles.loadingScreen}>
          <View style={styles.dotsWrapper}>
            <LoadingDots />
          </View>
        </View>
      )}
      <Image
        source={require("../assets/images/login.jpg")}
        style={{
          width: "100%",
          height: 400,
        }}
        onLoad={() => setIsLoading(false)} // Set loading state to false when the image is loaded
      />
      {!isLoading && ( // Show the rest of the content after the image has loaded
        <View style={styles.container}>
          <Text
            style={{
              fontSize: 30,
              color: "black",
              fontFamily: "outfit-bold",
              textAlign: "center",
              marginTop: 10,
            }}
          >
            AI Travel Planner
          </Text>
          <Text
            style={{
              fontFamily: "outfit",
              fontSize: 17,
              textAlign: "center",
              color: Colors.GRAY,
              marginTop: 20,
            }}
          >
            "Your trusted companion for seamless travel planning, smart
            navigation, and unforgettable adventures around the world."
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/auth/sign-in")}
          >
            <Text
              style={{
                color: Colors.WHITE,
                fontSize: 18,
                fontFamily: "outfit",
                textAlign: "center",
              }}
            >
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    marginTop: -20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: "100%",
    padding: 25,
  },
  button: {
    padding: 15,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 99,
    marginTop: "18%",
  },
  loadingScreen: {
    position: "absolute", // Make the loading screen overlay the content
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.WHITE, // Match background color for smooth transition
  },
  dotsWrapper: {
    width: 100, // Adjust the width to properly fit the dots
  },
});
