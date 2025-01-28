import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import GooglePhotoRef from "../../app/services/GooglePlaceAPi";

const HotelCard = ({ item }) => {
  const [photoRef, setPhotoRef] = useState();
  useEffect(() => {
    getGooglePhotoRef();
  }, []);
  const getGooglePhotoRef = async () => {
    const result = await GooglePhotoRef(item?.hotel_name);
    if (result?.results?.[0]?.photos?.[0]?.photo_reference) {
      setPhotoRef(result.results[0].photos[0].photo_reference);
    }
  };
  if (!item) return null; // Handle missing item gracefully

  return (
    <View
      style={{
        marginRight: 20,
        width: 180,
      }}
    >
      <Image
        style={{
          width: "100%",
          height: 240,
          borderRadius: 15,
          objectFit: "cover",
        }}
        source={{
          uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${photoRef}&key=`,
        }}
      />
      <View
        style={{
          padding: 5,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontFamily: "outfit-medium",
          }}
        >
          {item.hotel_name || "Unnamed Hotel"}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 5,
          }}
        >
          <Text
            style={{
              fontFamily: "outfit-medium",
            }}
          >
            ⭐ {item.rating || "N/A"}
          </Text>
          <Text
            style={{
              fontFamily: "outfit-medium",
            }}
          >
            💰 {item.price_per_night || "Price Unavailable"}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default HotelCard;
