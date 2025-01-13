import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "../../constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";

import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
export default function SearchPlace() {
  const router = useRouter();
  return (
    <View
      style={{
        padding: 25,
        paddingTop: 75,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 30,
          fontFamily: "outfit-bold",
          marginTop: 20,
          textAlign: "center",
        }}
      >
        Search & Explore
      </Text>
      <GooglePlacesAutocomplete
        placeholder="Search...."
        onPress={(data, details = null) => {
          console.log(data, details);
        }}
        query={{
          key: "YOUR API KEY",
          language: "en",
        }}
      />
    </View>
  );
}
