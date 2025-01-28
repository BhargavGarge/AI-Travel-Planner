import { Text, View, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "../../constants/Colors";
import GooglePhotoRef from "../../app/services/GooglePlaceAPi";

const PlacedCard = ({ place }) => {
  const [photoRef, setPhotoRef] = useState();
  useEffect(() => {
    getGooglePhotoRef();
  }, []);
  const getGooglePhotoRef = async () => {
    const result = await GooglePhotoRef(place?.place_name);
    if (result?.results?.[0]?.photos?.[0]?.photo_reference) {
      setPhotoRef(result.results[0].photos[0].photo_reference);
    }
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
      <View style={{ marginTop: 5 }}>
        <Text style={{ fontSize: 20, fontFamily: "outfit-bold" }}>
          {place?.place_name || "Unknown Place"} {/* Accessing place_name */}
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontFamily: "outfit-bold",
            color: Colors.GRAY,
            marginTop: 5,
          }}
        >
          {place?.place_details || "No details available"}
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <View>
            <Text style={{ fontSize: 17, fontFamily: "outfit", marginTop: 5 }}>
              🎟️ Ticket Price:
              <Text style={{ fontFamily: "outfit-bold" }}>
                {place?.ticket_pricing || "N/A"}
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PlacedCard;
