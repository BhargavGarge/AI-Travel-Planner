import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";

const GenerateTrip = () => {
  return (
    <View
      style={{
        padding: 25,
        paddingTop: 75,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <Text
        style={{
          fontFamily: "outfit-bold",
          fontSize: 35,
          marginTop: 20,
          textAlign: "center",
        }}
      >
        Please Wait
      </Text>
      <View
        style={{
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontFamily: "outfit-medium",
            fontSize: 20,
            textAlign: "center",
            color: Colors.GRAY,
          }}
        >
          Almost there! We’re curating your travel experience. 🌍🚀
        </Text>
      </View>
      <Image
        source={{
          uri: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDYzdGhmNmoxOGR0ajZxMjdtdHYxeDUyeTJxdjgwaHhzcTdzYm5kYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/h7LSkHSEbjvGihtSv1/giphy.gif",
        }}
        style={{
          height: 300,
          width: "100%",
        }}
      />
      <Text
        style={{
          fontFamily: "outfit-medium",
          fontSize: 20,
          textAlign: "center",
          color: Colors.GRAY,
        }}
      >
        DON'T GO BACK!!!
      </Text>
    </View>
  );
};

export default GenerateTrip;

const styles = StyleSheet.create({});
