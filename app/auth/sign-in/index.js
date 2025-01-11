import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";

import React, { useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "./../../../constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../configs/FirebaseConfig";
import Toast from "react-native-toast-message";
export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false, // Hide the header
    });
  }, []);

  const onLogin = () => {
    if (!email) {
      Toast.show({
        type: "error",
        text1: "Login Failed",
        text2: `Enter Mail`,
      });

      return;
    }
    if (!password) {
      Toast.show({
        type: "error",
        text1: "Login Failed",
        text2: `Enter Password`,
      });
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        router.replace("/myTrip");
        // If the displayName is not set, fallback to email for welcome message
        const displayName = user.displayName || user.email;

        // Show success alert
        // Alert.alert(
        //   `Welcome back, ${displayName}! We're happy to see you again.`
        // );
        Toast.show({
          type: "success",
          text1: "Login Success",
          text2: `Welcome back, ${displayName}! We're happy to see you again.`,
        });

        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        const errorMessage = error.message;
        Toast.show({
          type: "error",
          text1: "Oops !",
          text2: `Something went wrong, ${errorMessage}.`,
        });
      });
  };

  return (
    <View
      style={{
        padding: 25,
        backgroundColor: Colors.WHITE,
        height: "100%",
        paddingTop: 60,
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
        Let's Sign You In
      </Text>
      <Text
        style={{
          fontSize: 30,
          fontFamily: "outfit",
          color: Colors.GRAY,
          marginTop: 20,
        }}
      >
        Welcome Back
      </Text>
      <Text
        style={{
          fontSize: 30,
          fontFamily: "outfit",
          color: Colors.GRAY,
          marginTop: 10,
        }}
      >
        You've been missed
      </Text>

      {/* Email Input */}
      <View
        style={{
          marginTop: 50,
        }}
      >
        <Text
          style={{
            fontFamily: "outfit",
          }}
        >
          Email
        </Text>
        <TextInput
          keyboardType="email-address"
          placeholder="Enter email.."
          placeholderTextColor="black"
          style={styles.input}
          value={email}
          onChangeText={(value) => setEmail(value)}
        />
      </View>

      {/* Password Input */}
      <View
        style={{
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontFamily: "outfit",
          }}
        >
          Password
        </Text>
        <TextInput
          secureTextEntry={true}
          placeholder="Enter password.."
          placeholderTextColor="black"
          style={styles.input}
          value={password}
          onChangeText={(value) => setPassword(value)}
        />
      </View>

      {/* Sign In Button */}
      <TouchableOpacity
        onPress={onLogin}
        style={{
          padding: 20,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 15,
          marginTop: 50,
        }}
      >
        <Text
          style={{
            color: Colors.WHITE,
            textAlign: "center",
          }}
        >
          Sign In
        </Text>
      </TouchableOpacity>

      {/* Create Account Button */}
      <TouchableOpacity
        onPress={() => router.replace("/auth/sign-up")}
        style={{
          padding: 20,
          backgroundColor: Colors.WHITE,
          borderRadius: 15,
          marginTop: 20,
          borderWidth: 1,
        }}
      >
        <Text
          style={{
            color: Colors.PRIMARY,
            textAlign: "center",
          }}
        >
          Don't Have an Account?
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
