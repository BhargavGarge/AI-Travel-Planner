import { View, Text, Image } from "react-native";
import React from "react";
import { GooglePhotoRef } from "../../app/services/GooglePlaceAPi";

const HotelCard = ({ item }) => {
  const [photoRef, setPhotoRef] = useState();
  useEffect(() => {
    getGooglePhotoRef();
  }, []);
  const getGooglePhotoRef = async () => {
    const res = await GooglePhotoRef(item.hotelName);
    setPhotoRef(res);
  };
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
            fontFamily: "otfit-medium",
          }}
        >
          {item.hotelName}
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontFamily: "otfit-medium",
            }}
          >
            ⭐ {item.rating}
          </Text>
          <Text
            style={{
              fontFamily: "otfit-medium",
            }}
          >
            💰 {item.example_price}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default HotelCard;
