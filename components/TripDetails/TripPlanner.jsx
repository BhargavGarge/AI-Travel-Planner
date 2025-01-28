import { Text, View, ScrollView } from "react-native";
import React from "react";
import PlacedCard from "../TripDetails/PlacedCard";

const TripPlanner = ({ details = [] }) => {
  if (!details || details.length === 0) {
    return <Text>No places to visit found.</Text>; // Handle no places scenario
  }

  return (
    <ScrollView style={{ marginTop: 20, paddingHorizontal: 10 }}>
      <Text style={{ fontSize: 20, fontFamily: "outfit-bold" }}>
        Plan Details
      </Text>
      <Text
        style={{ fontSize: 18, fontFamily: "outfit-medium", marginTop: 10 }}
      >
        Places to Visit:
      </Text>
      {details.map((place, index) => (
        <PlacedCard key={index} place={place} />
      ))}
    </ScrollView>
  );
};

export default TripPlanner;
