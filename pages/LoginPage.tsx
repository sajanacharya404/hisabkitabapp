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
  const [inputBorderColor, setInputBorderColor] = useState("#ccc"); // State for input border color
  const navigation = useNavigation();

  const handleSendCode = () => {
    const formattedPhoneNumber = phoneNumber.replace(/\D/g, "");

    if (!/^\d+$/.test(formattedPhoneNumber)) {
      setErrorMessage("Phone number must contain only numeric characters");
      setInputBorderColor("red"); // Change input border color to red
      return;
    }

    if (formattedPhoneNumber.length !== 10) {
      setErrorMessage("Phone number must be 10 digits long");
      setInputBorderColor("red"); // Change input border color to red
      return;
    }

    // If the input length is 10, clear the error message and reset the border color
    setErrorMessage("");
    setInputBorderColor("#ccc"); // Reset input border color
    console.log("Sending code to:", formattedPhoneNumber);
    navigation.navigate("Otp");
  };

  const handlePhoneNumberChange = (value) => {
    // Reset error message and border color if the input length becomes 10
    if (value.length === 10) {
      setErrorMessage("");
      setInputBorderColor("#ccc");
    }
    setPhoneNumber(value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Your Phone Number</Text>
      <View style={[styles.inputContainer, { borderColor: inputBorderColor }]}>
        <View style={styles.prefixContainer}>
          <Text style={styles.prefix}>+977</Text>
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="xxxxxxxxxx"
            keyboardType="phone-pad"
            onChangeText={handlePhoneNumberChange}
            value={phoneNumber}
            maxLength={10} // Limit input to 10 characters
          />
        </View>
      </View>
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
      <TouchableOpacity style={styles.button} onPress={handleSendCode}>
        <Text style={styles.buttonText}>Send Code</Text>
      </TouchableOpacity>
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
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    borderWidth: 1,
    borderRadius: 5,
  },
  prefixContainer: {
    marginRight: 10,
  },
  prefix: {
    fontSize: 18,
    paddingHorizontal: 6,
    borderRightWidth: 1,
    borderRightColor: "green",
  },
  inputWrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    height: 50,
    fontSize: 20,
  },
  button: {
    backgroundColor: "#2cd380",
    width: "100%",
    height: 50,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
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
