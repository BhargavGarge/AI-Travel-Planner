import { View, Text, ActivityIndicator, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "../../constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import StartNewTripCard from "../../components/MyTrips/StartNewTripCard";
import { db, auth } from "../../configs/FirebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";
import UserTripList from "../../components/MyTrips/UserTripList";
export default function myTrip() {
  const [userTrip, setUserTrip] = useState([]);
  const [loading, setLoading] = useState(false);

  const user = auth.currentUser;
  useEffect(() => {
    user && GetMyTrip();
  }, [user]);
  const GetMyTrip = async () => {
    try {
      setLoading(true);
      setUserTrip([]); // Clear existing trips
      const q = query(
        collection(db, "UserTrips"),
        where("userEmail", "==", user?.email) // Ensure field name matches Firestore
      );
      const querySnapshot = await getDocs(q);

      const trips = [];
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data()); // Debugging log
        trips.push(doc.data());
      });
      setUserTrip(trips); // Update state with fetched trips
    } catch (error) {
      console.error("Error fetching trips: ", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <ScrollView
      style={{
        padding: 25,
        paddingTop: 55,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          alignContent: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontFamily: "outfit-bold", fontSize: 30 }}>
          My Trips
        </Text>
        <Ionicons name="add-circle" size={25} color="black" />
      </View>
      {loading && <ActivityIndicator size={"large"} color={Colors.PRIMARY} />}

      {userTrip.length == 0 ? (
        <StartNewTripCard />
      ) : (
        <UserTripList userTrips={userTrip} />
      )}
    </ScrollView>
  );
}
