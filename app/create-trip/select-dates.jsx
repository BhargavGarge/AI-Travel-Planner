import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router, useNavigation, useRouter } from "expo-router";
import { Colors } from "../../constants/Colors";
import CalendarPicker from "react-native-calendar-picker";
import { CreateTripContext } from "../../context/CreateTripContext";
import moment from "moment";
const SelectDates = () => {
  const router = useRouter();
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const { tripData, setTripData } = useContext(CreateTripContext);

  const onDateChange = (date, type) => {
    if (type == "START_DATE") {
      setSelectedStartDate(moment(date));
    } else {
      setSelectedEndDate(moment(date));
    }
  };
  const onDateSelect = () => {
    if (!selectedStartDate && !selectedEndDate) {
      Alert.alert("Please select dates for travel");
    }
    const totalDays = selectedEndDate.diff(selectedStartDate, "days");
    console.log(totalDays + 1);
    setTripData({
      ...tripData,
      startDate: selectedStartDate,
      endDate: selectedEndDate,
      totalDays: totalDays + 1,
    });
    router.push("/create-trip/select-budget");
  };

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
          fontSize: 35,
          fontFamily: "outfit-bold",
          marginTop: 20,
        }}
      >
        Travel
      </Text>
      <View
        style={{
          marginTop: 10,
        }}
      >
        <CalendarPicker
          onDateChange={onDateChange}
          allowRangeSelection={true}
          minDate={new Date()}
          maxRangeDuration={5}
          selectedRangeStyle={{
            backgroundColor: Colors.PRIMARY,
          }}
          selectedDayTextStyle={{
            color: Colors.WHITE,
          }}
        />
      </View>
      <TouchableOpacity
        onPress={onDateSelect}
        style={{
          padding: 15,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 15,
          marginTop: 40,
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
          Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SelectDates;

const styles = StyleSheet.create({});
