import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../configs/FirebaseConfig";
import React, { useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "../../../constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { updateProfile } from "firebase/auth"; // Import updateProfile from firebase/auth
import Toast from "react-native-toast-message";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

  const router = useRouter();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false, // Hide the header
    });
  }, []);

  const onCreateAccount = async () => {
    if (!fullName) {
      Toast.show({
        type: "error",
        text1: "Oops!",
        text2: `Enter FullName`,
      });
      return;
    }
    if (!email) {
      Toast.show({
        type: "error",
        text1: "Oops!",
        text2: `Enter Mail`,
      });
      return;
    }
    if (!password) {
      Toast.show({
        type: "error",
        text1: "Oops!",
        text2: `Enter Password`,
      });
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      console.log("User created successfully:", user);
      router.replace("/myTrip");

      // Use updateProfile function to set the displayName
      await updateProfile(user, {
        displayName: fullName,
      });

      // Show personalized success message
      Toast.show({
        type: "success",
        text1: "Account Created",
        text2: `Welcome, ${fullName} ! Account created successfully.`,
      });
      // Clear input fields
      setFullName("");
      setEmail("");
      setPassword("");

      // Navigate to sign-in screen
      router.replace("/auth/sign-in");
    } catch (error) {
      console.error("Error creating user:", error.code, error.message);
      Toast.show({
        type: "error",
        text1: "Oops !",
        text2: `Something went wrong, ${errorMessage}.`,
      });
    }
  };

  return (
    <View
      style={{
        padding: 25,
        backgroundColor: Colors.WHITE,
        height: "100%",
        paddingTop: 40,
      }}
    >
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 30,
          fontFamily: "outfit-bold",
          marginTop: 30,
        }}
      >
        Create New Account !!
      </Text>
      <Text
        style={{
          fontSize: 25,
          fontFamily: "outfit",
          color: Colors.GRAY,
          marginTop: 10,
        }}
      >
        Unlock Seamless Travel Planning
      </Text>
      {/* Full name */}
      <View style={{ marginTop: 50 }}>
        <Text style={{ fontFamily: "outfit" }}>Full Name</Text>
        <TextInput
          placeholder="Enter Name.."
          placeholderTextColor="black"
          style={styles.input}
          value={fullName}
          onChangeText={setFullName}
        />
      </View>
      {/* Email Input */}
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontFamily: "outfit" }}>Email</Text>
        <TextInput
          keyboardType="email-address"
          placeholder="Enter email.."
          placeholderTextColor="black"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
      </View>

      {/* Password Input */}
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontFamily: "outfit" }}>Password</Text>
        <TextInput
          secureTextEntry={true}
          placeholder="Enter password.."
          placeholderTextColor="black"
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <TouchableOpacity
        onPress={onCreateAccount}
        style={{
          padding: 20,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 15,
          marginTop: 50,
        }}
      >
        <Text style={{ color: Colors.WHITE, textAlign: "center" }}>
          Sign Up
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => router.replace("/auth/sign-in")}
        style={{
          padding: 20,
          backgroundColor: Colors.WHITE,
          borderRadius: 15,
          marginTop: 20,
          borderWidth: 1,
        }}
      >
        <Text style={{ color: Colors.PRIMARY, textAlign: "center" }}>
          Already have an account? Log In
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 15,
    borderWidth: 1,
    borderColor: Colors.GRAY,
    borderRadius: 15,
    fontFamily: "outfit",
    color: Colors.BLACK,
  },
});
