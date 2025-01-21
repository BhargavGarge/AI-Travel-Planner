import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "../../constants/Colors";
import { GooglePhotoRef } from "../../app/services/GooglePlaceAPi";

const PlacedCard = ({ place }) => {
  const [photoRef, setPhotoRef] = useState();
  useEffect(() => {
    getGooglePhotoRef();
  }, []);
  const getGooglePhotoRef = async () => {
    const res = await GooglePhotoRef(place.placeName);
    setPhotoRef(res);
  };
  return (
    <View
      style={{
        borderWidth: 1,
        padding: 10,
        borderRadius: 15,
        borderColor: Colors.LB,
        marginTop: 20,
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
          marginTop: 5,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontFamily: "outfit-bold",
          }}
        >
          {place?.placeName}
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontFamily: "outfit-bold",
            color: Colors.GRAY,
          }}
        >
          {place.placeDetails}
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 17,
                fontFamily: "outfit",
                marginTop: 5,
              }}
            >
              🎟️ {TicketPrice}
              <Text
                style={{
                  fontSize: 17,
                  fontFamily: "outfit-bold",
                  marginTop: 5,
                }}
              >
                {0}
              </Text>
            </Text>
            <Text
              style={{
                fontSize: 17,
                fontFamily: "outfit",
                marginTop: 5,
              }}
            >
              ⌛ {timetoTravel}
              <Text
                style={{
                  fontSize: 17,
                  fontFamily: "outfit-bold",
                  marginTop: 5,
                }}
              >
                {0}
              </Text>
            </Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: Colors.PRIMARY,
              padding: 5,
              borderRadius: 7,
            }}
          >
            <Ionicons name="navigate" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PlacedCard;
