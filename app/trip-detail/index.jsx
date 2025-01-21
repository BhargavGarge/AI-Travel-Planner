import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router, useLocalSearchParams } from "expo-router";
import { Colors } from "../../constants/Colors";
import moment from "moment";
import FlightInfo from "../../components/TripDetails/FlightInfo";
import HotelList from "../../components/TripDetails/HotelList";
import TripPlanner from "../../components/TripDetails/TripPlanner";
const TripDetails = () => {
  const { trip } = useLocalSearchParams();
  const [tripDetails, setTripDetails] = useState([]);
  const formatData = (data) => {
    return JSON.parse(data);
  };

  const tripData = formatData(tripDetails.tripData);
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
      <Image
        style={{
          width: "100%", // Adjusted size
          height: 330,

          resizeMode: "cover",
        }}
        source={{
          uri: tripData.locationInfo?.photoRef
            ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${tripData.locationInfo.photoRef}&key=`
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
        <Text
          style={{
            fontSize: 30,
            fontFamily: "outfit-bold",
          }}
        >
          {tripDetails?.tripPlan?.travelPlan?.location}
        </Text>
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
            {moment(tripDetails.startDate).format("DD MMM YYYY")}
          </Text>
          <Text>- {moment(tripDetails.endDate).format("DD MMM YYYY")}</Text>
        </View>
        <Text
          style={{
            fontFamily: "outfit",
            fontSize: 17,
            color: Colors.GRAY,
          }}
        >
          🚌 {formatData(tripDetails.tripData).traveler?.title}
        </Text>
        {/* flight info */}
        <FlightInfo flightData={tripDetails?.tripPlan?.flights} />
        {/* Hotels List  */}
        <HotelList hotelList={tripDetails?.tripPlan?.hotel_options} />
        {/* trip day planner */}
        <TripPlanner
          details={tripDetails?.tripPlan?.travelPlan?.daily_itinerary}
        />
      </View>
    </View>
  );
};

export default TripDetails;
