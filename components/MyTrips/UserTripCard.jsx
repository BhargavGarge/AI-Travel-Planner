import { View, Text, Image } from "react-native";
import React from "react";
import moment from "moment";
import { Colors } from "../../constants/Colors";

const UserTripCard = ({ trip }) => {
  const formatData = (data) => {
    return JSON.parse(data);
  };

  const tripData = formatData(trip.tripData);

  return (
    <View
      style={{
        marginTop: 20,
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
      }}
    >
      <Image
        style={{
          width: 120, // Adjusted size
          height: 120,
          borderRadius: 15,
          resizeMode: "cover",
        }}
        source={{
          uri: tripData.locationInfo?.photoRef
            ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${tripData.locationInfo.photoRef}&key=`
            : "https://via.placeholder.com/120", // Fallback image
        }}
      />

      <View>
        <Text style={{ fontFamily: "outfit-medium", fontSize: 18 }}>
          {tripData.locationInfo?.name || "Unknown Location"}
        </Text>

        <Text
          style={{ fontFamily: "outfit", fontSize: 14, color: Colors.GRAY }}
        >
          {moment(tripData.startDate).format("DD MMM YYYY")} -{" "}
          {moment(tripData.endDate).format("DD MMM YYYY")}
        </Text>

        <Text
          style={{ fontFamily: "outfit", fontSize: 14, color: Colors.GRAY }}
        >
          Traveling: {tripData.travelerCount?.title || "Unknown"}
        </Text>
      </View>
    </View>
  );
};

export default UserTripCard;
