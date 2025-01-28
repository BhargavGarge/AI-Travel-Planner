import { View, Text, FlatList } from "react-native";
import React, { useDebugValue, useEffect } from "react";
import HotelCard from "./HotelCard";

const HotelList = ({ hotelList = [] }) => {
  return (
    <View
      style={{
        marginTop: 20,
        paddingHorizontal: 10,
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontFamily: "outfit-bold",
        }}
      >
        🏨 Hotel Recommendations
      </Text>
      {hotelList.length > 0 ? (
        <FlatList
          style={{
            marginTop: 10,
          }}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={hotelList}
          keyExtractor={(item, index) => `${item.hotel_name}-${index}`} // Unique keys
          renderItem={({ item }) => <HotelCard item={item} />}
        />
      ) : (
        <Text
          style={{
            fontSize: 16,
            fontFamily: "outfit-medium",
            color: "#555",
            marginTop: 20,
            textAlign: "center",
          }}
        >
          No hotel recommendations available.
        </Text>
      )}
    </View>
  );
};

export default HotelList;
