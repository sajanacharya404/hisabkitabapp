import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const OtpPage = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const otpInputs = Array.from({ length: 6 });
  const hiddenInputRef = useRef(null);
  const navigation = useNavigation();

  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value === "") {
      if (index > 0) {
        // Move focus to the previous input field when backspace is pressed
        otpInputs[index - 1].focus();
      }
    } else if (index < otp.length - 1) {
      // Move focus to the next input field when a digit is entered
      otpInputs[index + 1].focus();
    }
  };

  const handleVerifyOtp = () => {
    const enteredOtp = otp.join("");
    if (enteredOtp.length === 6) {
      navigation.navigate("Home");
    } else {
      Alert.alert("Invalid OTP", "Please enter a 6-digit OTP.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter OTP</Text>
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.input}
            maxLength={1}
            keyboardType="numeric"
            onChangeText={(text) => handleOtpChange(index, text)}
            value={digit}
            ref={(input) => (otpInputs[index] = input)}
            onKeyPress={({ nativeEvent }) => {
              // Check if backspace key is pressed when the input is empty
              if (nativeEvent.key === "Backspace" && digit === "") {
                // Move focus to the previous input field
                handleOtpChange(index, "");
              }
            }}
          />
        ))}
      </View>
      <TouchableOpacity style={styles.button} onPress={handleVerifyOtp}>
        <Text style={styles.buttonText}>Verify OTP</Text>
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
  otpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  input: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginHorizontal: 5,
    textAlign: "center",
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
});

export default OtpPage;
