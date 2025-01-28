import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Linking } from "react-native"; // To open the URL
import { Colors } from "../../constants/Colors";

const FlightInfo = ({ flightData }) => {
  // Ensure flightData is available
  if (!flightData) {
    return (
      <View
        style={{
          marginTop: 20,
          borderWidth: 1,
          borderColor: Colors.LG,
          padding: 10,
          borderRadius: 15,
        }}
      >
        <Text style={{ fontFamily: "outfit", fontSize: 18 }}>
          Loading flight information...
        </Text>
      </View>
    );
  }

  // Extract URLs from the booking_url string
  const bookingUrls = flightData.booking_url.split(" or "); // Split by " or " to get two URLs
  const selectedUrl = bookingUrls[1]; // Choose the second URL (Kayak)

  return (
    <View
      style={{
        marginTop: 20,
        borderWidth: 1,
        borderColor: Colors.LG,
        padding: 10,
        borderRadius: 15,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 20,
          }}
        >
          ✈️ Flights
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: Colors.PRIMARY,
            padding: 15,
            borderRadius: 7,
            marginTop: 10,
          }}
          onPress={() => {
            Linking.openURL(selectedUrl); // Open the selected URL
          }}
        >
          <Text
            style={{
              color: Colors.WHITE,
              textAlign: "center",
              fontFamily: "outfit-medium",
              fontSize: 18,
            }}
          >
            Book Here
          </Text>
        </TouchableOpacity>
      </View>

      <Text
        style={{
          fontFamily: "outfit",
          fontSize: 18,
          marginTop: 15,
        }}
      >
        Airline: {flightData.example_airline || "N/A"}
      </Text>
      <Text
        style={{
          fontFamily: "outfit",
          fontSize: 18,
        }}
      >
        Price: {flightData.example_price || "N/A"}
      </Text>
    </View>
  );
};

export default FlightInfo;
