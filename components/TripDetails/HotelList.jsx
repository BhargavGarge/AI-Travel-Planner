import { View, Text, FlatList, Image } from "react-native";
import React from "react";
import { GooglePhotoRef } from "../../app/services/GooglePlaceAPi";
import HotelCard from "./HotelCard";

const HotelList = ({ hotelList }) => {
  return (
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
        🏨 Hotel Recommendation
      </Text>
      <FlatList
        style={{
          marginTop: 7,
        }}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={hotelList}
        renderItem={({ item, index }) => {
          <HotelCard item={item} />;
        }}
      />
    </View>
  );
};

export default HotelList;
