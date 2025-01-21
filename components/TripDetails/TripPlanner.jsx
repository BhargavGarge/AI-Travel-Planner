import { View, Text } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import PlacedCard from "./PlacedCard";

const TripPlanner = ({ details }) => {
  return (
    <View
      style={{
        marginTop: 20,
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontFamily: "outfit-bold",
        }}
      >
        Plans Details
      </Text>
      {Object.entries(details)
        .reverse()
        .map(([day, details]) => {
          <View>
            <Text
              style={{
                fontFamily: "outfit-medium",
                fontSize: 20,
                marginTop: 20,
              }}
            >
              {day.charAt(0).toUpperCase() + day.slice(1)}
            </Text>
            {details.plan.map((place, index) => (
              <PlacedCard place={place} key={index} />
            ))}
          </View>;
        })}
    </View>
  );
};

export default TripPlanner;
