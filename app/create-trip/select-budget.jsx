import { View, Text, TouchableOpacity, Alert } from "react-native";

import { CreateTripContext } from "../../context/CreateTripContext";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useContext, useEffect, useState } from "react";
import OptionCard from "../../components/CreateTrip/OptionCard";
import { BudgetOptions } from "../../constants/Options";
import { Colors } from "../../constants/Colors";
import { router } from "expo-router";

export default function SelectBudget() {
  const { tripData, setTripData } = useContext(CreateTripContext);
  //select option state
  const [selectedOption, setSelectedOption] = useState();
  useEffect(() => {
    selectedOption &&
      setTripData({
        ...tripData,
        budget: selectedOption?.title,
      });
  }, [selectedOption]);
  //on click continue
  const continuePressed = () => {
    if (!selectedOption) {
      Alert.alert("  Select your budget");
      return;
    }
    router.push("/create-trip/review-trip");
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
      {" "}
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
        Budget
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
          Plan Smart, Travel Far
        </Text>
        <FlatList
          data={BudgetOptions}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={{
                marginVertical: 10,
              }}
              onPress={() => setSelectedOption(item)}
            >
              <OptionCard option={item} selectedOption={selectedOption} />
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
        onPress={continuePressed}
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
}
