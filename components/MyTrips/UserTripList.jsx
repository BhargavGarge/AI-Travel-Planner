import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import moment from "moment";
import { Colors } from "../../constants/Colors";
import UserTripCard from "./UserTripCard";
import { router } from "expo-router";

const UserTripList = ({ userTrips }) => {
  const LatestTrip = JSON.parse(userTrips[0].tripData);

  // Fix malformed keys
  if (LatestTrip.travelerCount && !LatestTrip.travelerCount.title) {
    LatestTrip.travelerCount.title =
      LatestTrip.travelerCount["ti \n tle"] || "Unknown";
    delete LatestTrip.travelerCount["ti \n tle"];
  }

  console.log("Parsed LatestTrip:", LatestTrip);
  return (
    <View>
      <View
        style={{
          marginTop: 20,
        }}
      >
        {LatestTrip?.locationInfo?.photoRef ? (
          <Image
            style={{
              width: "100%",
              height: 240,
              borderRadius: 15,
              objectFit: "cover",
            }}
            source={{
              uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${LatestTrip.locationInfo?.photoRef}&key=`,
            }}
          />
        ) : (
          <Image
            source={"/"}
            style={{
              width: "100%",
              height: 240,
              borderRadius: 15,
              objectFit: "cover",
            }}
          />
        )}

        <View style={{ marginTop: 10 }}>
          <Text
            style={{
              fontFamily: "outfit-medium",
              fontSize: 20,
            }}
          >
            {LatestTrip?.locationInfo?.name}
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              display: "flex",
              marginTop: 5,
            }}
          >
            <Text
              style={{
                fontFamily: "outfit",
                fontSize: 17,
                color: Colors.GRAY,
              }}
            >
              {moment(LatestTrip.startDate).format("DD MMM YYYY")}
            </Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: Colors.PRIMARY,
              padding: 15,
              borderRadius: 15,
              marginTop: 10,
            }}
            onPress={() =>
              router.push({
                pathname: "/trip-detail",
                params: {
                  trip: JSON.stringify(userTrips[0]),
                },
              })
            }
          >
            <Text
              style={{
                color: Colors.WHITE,
                textAlign: "center",
                fontFamily: "outfit-medium",
                fontSize: 18,
              }}
            >
              See Your Plan
            </Text>
          </TouchableOpacity>
        </View>
        {userTrips.map((trip, index) => (
          <UserTripCard trip={trip} key={index} />
        ))}
      </View>
    </View>
  );
};

export default UserTripList;

const styles = StyleSheet.create({});
