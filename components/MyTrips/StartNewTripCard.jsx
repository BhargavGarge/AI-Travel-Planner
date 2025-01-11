import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "../../constants/Colors";

export default function StartNewTripCard() {
  return (
    <View
      style={{
        padding: 20,
        paddingTop: 50,
        display: "flex",
        alignItems: "center",
        gap: 25,
      }}
    >
      <Ionicons name="location-sharp" size={30} color="black" />
      <Text
        style={{ fontSize: 25, marginTop: 10, fontFamily: "outfit-medium" }}
      >
        No trips planned yet
      </Text>
      <Text
        style={{
          fontSize: 20,
          marginTop: 10,
          fontFamily: "outfit",
          textAlign: "center",
          color: Colors.GRAY,
        }}
      >
        Looks like it's time to plan a new travel experinece! Get stated below
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: Colors.PRIMARY,
          padding: 10,
          borderRadius: 10,
          paddingHorizontal: 30,
        }}
      >
        <Text
          style={{
            color: Colors.WHITE,
            fontFamily: "outfit-medium",
            fontSize: 20,
          }}
        >
          Start a new trip
        </Text>
      </TouchableOpacity>
    </View>
  );
}
