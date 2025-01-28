import { Image, StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Colors } from "../../constants/Colors";
import { CreateTripContext } from "../../context/CreateTripContext";
import { Prompt } from "../../constants/Options";
import { chatSession } from "../../configs/GeminiConfig";
import { router } from "expo-router";
import { collection, addDoc } from "firebase/firestore";
import { auth, db } from "../../configs/FirebaseConfig";

const GenerateTrip = () => {
  const { tripData, setTripData } = useContext(CreateTripContext);
  const [loading, setLoading] = useState(false);
  const user = auth.currentUser;

  useEffect(() => {
    generateTrip();
  }, []);

  const generateTrip = async () => {
    if (!tripData) return;
    setLoading(true);

    const finalPrompt = Prompt.replace(
      "{location}",
      tripData?.locationInfo?.name || "Not selected"
    )
      .replace("{totalDays}", tripData?.totalDays || "0")
      .replace("{totalNight}", tripData?.totalDays - 1 || "0")
      .replace("{traveler}", tripData?.travelerCount?.title || "Not specified")
      .replace("{budget}", tripData?.budget || "Not specified")
      .replace("{totalDays}", tripData?.totalDays || "0")
      .replace("{totalNight}", tripData?.totalDays - 1 || "0");

    try {
      const result = await chatSession.sendMessage(finalPrompt);
      const responseText = await result.response.text();
      console.log("Response Text: ", responseText);

      let tripRes;
      try {
        tripRes = JSON.parse(responseText);
      } catch (error) {
        console.error("Error parsing trip response: ", error);
        setLoading(false);
        return;
      }

      const docId = Date.now().toString(); // Fix: Properly generate a string document ID

      // Save trip to Firestore
      await addDoc(collection(db, "UserTrips"), {
        userEmail: user.email,
        tripPlan: tripRes,
        tripData: JSON.stringify(tripData),
        createdAt: new Date(),
        docId: docId,
      });

      setLoading(false);
      router.push("/(tabs)/myTrip");
    } catch (error) {
      console.error("Error generating trip: ", error);
      setLoading(false);
    }
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
