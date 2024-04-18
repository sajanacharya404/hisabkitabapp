import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const LoginPage = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigation = useNavigation();

  const handleSendCode = () => {
    // Remove any non-numeric characters from the phone number
    const formattedPhoneNumber = phoneNumber.replace(/\D/g, "");

    // Check if the formatted phone number contains only numeric characters
    if (!/^\d+$/.test(formattedPhoneNumber)) {
      setErrorMessage("Phone number must contain only numeric characters");
      return;
    }

    // Check if the formatted phone number has 10 digits
    if (formattedPhoneNumber.length !== 10) {
      setErrorMessage("Phone number must be 10 digits long");
      return;
    }

    // If no validation errors, proceed to navigate to the OTP page
    setErrorMessage(""); // Clear the error message if no error
    console.log("Sending code to:", formattedPhoneNumber);
    navigation.navigate("Otp");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Your Phone Number</Text>
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        keyboardType="phone-pad"
        onChangeText={setPhoneNumber}
        value={phoneNumber}
      />
      <TouchableOpacity style={styles.button} onPress={handleSendCode}>
        <Text style={styles.buttonText}>Send Code</Text>
      </TouchableOpacity>
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#2cd380",
    width: "100%",
    height: 50,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  error: {
    color: "red",
    marginTop: 10,
  },
});

export default LoginPage;
