import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useContext } from "react";
import { Colors } from "../../constants/Colors";
import { useRouter } from "expo-router";
import { CreateTripContext } from "../../context/CreateTripContext";
import moment from "moment";

export default function ReviewTrip() {
  const { tripData } = useContext(CreateTripContext);
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
          fontFamily: "outfit-bold",
          fontSize: 35,
          marginTop: 20,
        }}
      >
        Review Trip
      </Text>
      <View
        style={{
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 20,
          }}
        >
          One Last Look Before You Go!
        </Text>
        {/* Destination */}
        <View
          style={{
            marginTop: 20,
            display: "flex",
            flexDirection: "row",
            gap: 20,
          }}
        >
          <Ionicons name="location-sharp" size={34} color="black" />
          <View>
            <Text style={{ fontFamily: "outfit", fontSize: 20 }}>
              Destination
            </Text>
            <Text style={{ fontFamily: "outfit-medium", fontSize: 20 }}>
              {tripData?.locationInfo?.name || "Not selected"}
            </Text>
          </View>
        </View>

        {/* Travel Dates */}
        <View
          style={{
            marginTop: 20,
            display: "flex",
            flexDirection: "row",
            gap: 20,
          }}
        >
          <Ionicons name="calendar-sharp" size={34} color="black" />
          <View>
            <Text style={{ fontFamily: "outfit", fontSize: 20 }}>
              Travel Dates
            </Text>
            <Text style={{ fontFamily: "outfit-medium", fontSize: 20 }}>
              {moment(tripData?.startDate).format("MMM DD, YYYY")} -{" "}
              {moment(tripData?.endDate).format("MMM DD, YYYY") + "  "}(
              {tripData?.totalDays} days)
            </Text>
          </View>
        </View>

        {/* Budget */}
        <View
          style={{
            marginTop: 20,
            display: "flex",
            flexDirection: "row",
            gap: 20,
          }}
        >
          <Ionicons name="cash-sharp" size={34} color="black" />
          <View>
            <Text style={{ fontFamily: "outfit", fontSize: 20 }}>
              {" "}
              Selected Budget
            </Text>
            <Text style={{ fontFamily: "outfit-medium", fontSize: 20 }}>
              {tripData?.budget || "Not selected"}
            </Text>
          </View>
        </View>

        {/* Travel */}
        <View
          style={{
            marginTop: 20,
            display: "flex",
            flexDirection: "row",
            gap: 20,
          }}
        >
          <Ionicons name="airplane-sharp" size={34} color="black" />
          <View>
            <Text style={{ fontFamily: "outfit", fontSize: 20 }}>
              {" "}
              Who is Traveling
            </Text>
            <Text style={{ fontFamily: "outfit-medium", fontSize: 20 }}>
              {tripData?.travelerCount.title}
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={{
          padding: 15,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 15,
          marginTop: 20,
        }}
        onPress={() => router.push("/create-trip/select-dates")}
      >
        <Text
          style={{
            color: Colors.WHITE,
            textAlign: "center",

            fontFamily: "outfit-medium",
            fontSize: 20,
          }}
        >
          Continue
        </Text>
      </TouchableOpacity>{" "}
      <TouchableOpacity
        style={{
          padding: 15,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 15,
          marginTop: 20,
        }}
      >
        <Text
          style={{
            color: Colors.WHITE,
            textAlign: "center",

            fontFamily: "outfit-medium",
            fontSize: 20,
          }}
        >
          Build My Trip
        </Text>
      </TouchableOpacity>
    </View>
  );
}
