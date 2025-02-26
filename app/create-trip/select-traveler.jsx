import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useContext, useEffect, useState } from "react";

import { Colors } from "../../constants/Colors";
import { SelectTravelerOptions } from "../../constants/Options";
import OptionCard from "../../components/CreateTrip/OptionCard";
import { CreateTripContext } from "../../context/CreateTripContext";
import { router, Link } from "expo-router";
const SelectTraveler = () => {
  const [selectedTravelers, setSelectTravelers] = useState();
  const { tripData, setTripData } = useContext(CreateTripContext);

  useEffect(() => {
    setTripData({ ...tripData, travelerCount: selectedTravelers });
  }, [selectedTravelers]);

  useEffect(() => {
    console.log(tripData);
  }, [tripData]);
  return (
    <View
      style={{
        padding: 25,
        paddingTop: 80,
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
          martop: 20,
        }}
      >
        Who's Traveling ?
      </Text>
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
          Choose Your Travelers
        </Text>
        <FlatList
          data={SelectTravelerOptions}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={{
                marginVertical: 10,
              }}
              onPress={() => setSelectTravelers(item)}
            >
              <OptionCard option={item} selectedOption={selectedTravelers} />
            </TouchableOpacity>
          )}
        />
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
      </TouchableOpacity>
    </View>
  );
};

export default SelectTraveler;

const styles = StyleSheet.create({});
