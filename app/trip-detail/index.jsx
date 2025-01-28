import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router, useLocalSearchParams } from "expo-router";
import { Colors } from "../../constants/Colors";
import moment from "moment";
import FlightInfo from "../../components/TripDetails/FlightInfo";
import HotelList from "../../components/TripDetails/HotelList";
import TripPlanner from "../../components/TripDetails/TripPlanner";

const TripDetails = () => {
  const { trip } = useLocalSearchParams();
  const [tripDetails, setTripDetails] = useState({}); // Initialize as an object
  const [parsedTripData, setParsedTripData] = useState(null);

  useEffect(() => {
    console.log("Received trip param:", trip); // Check if trip is coming correctly
    try {
      if (trip) {
        const parsedTrip = JSON.parse(trip); // Safely parse the trip data
        console.log("Parsed Trip Data:", parsedTrip); // Log the parsed data
        setTripDetails(parsedTrip); // Update state with parsed trip data

        // Parse the tripData field which is a stringified JSON
        if (parsedTrip?.tripData) {
          const tripData = JSON.parse(parsedTrip.tripData);
          setParsedTripData(tripData); // Set parsed tripData to display in the UI
        }
      } else {
        console.error("Error: No trip data received.");
      }
    } catch (error) {
      console.error("Failed to parse trip data:", error);
    }
  }, [trip]);

  // Safely handle undefined data
  const locationInfo = parsedTripData?.locationInfo || {};
  const travelerCount = parsedTripData?.travelerCount || {};
  const startDate = moment(parsedTripData?.startDate).format("DD MMM YYYY");
  const endDate = moment(parsedTripData?.endDate).format("DD MMM YYYY");

  return (
    <ScrollView
      style={{
        padding: 2,
        paddingTop: 75,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Image
        style={{
          width: "100%", // Adjusted size
          height: 330,
          resizeMode: "cover",
        }}
        source={{
          uri: locationInfo?.photoRef
            ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${locationInfo?.photoRef}&key=`
            : "https://via.placeholder.com/120", // Fallback image
        }}
      />
      <View
        style={{
          padding: 15,
          backgroundColor: Colors.WHITE,
          height: "100%",
          marginTop: -30,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        }}
      >
        {/* Corrected Location Name */}
        <Text
          style={{
            fontSize: 30,
            fontFamily: "outfit-bold",
          }}
        >
          {locationInfo?.name || "Unknown Location"}
        </Text>
        {/* Corrected Start and End Dates */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 5,
            marginTop: 5,
          }}
        >
          <Text
            style={{ fontFamily: "outfit", fontSize: 18, color: Colors.GRAY }}
          >
            {startDate || "Start"}
          </Text>
          <Text
            style={{ fontFamily: "outfit", fontSize: 18, color: Colors.GRAY }}
          >
            - {endDate || "End"}
          </Text>
        </View>
        {/* Corrected Traveler Info */}
        <Text
          style={{
            fontFamily: "outfit",
            fontSize: 17,
            color: Colors.GRAY,
          }}
        >
          🚌 {travelerCount?.title || "Traveler Info"}
        </Text>
        {/* flight info */}
        <FlightInfo flightData={tripDetails?.tripPlan?.flights?.details} />
        {/*  Hotel Info */}
        <HotelList hotelList={tripDetails?.tripPlan?.hotel_options || []} />
        {/* Place info */}
        <TripPlanner details={tripDetails?.tripPlan?.places_to_visit || []} />
      </View>
    </ScrollView>
  );
};

export default TripDetails;
