import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type ProfileScreenNavigationProp = StackNavigationProp<any, "Profile">;

const Setting = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();

  const handleNavigation = (routeName: string) => {
    navigation.navigate(routeName);
  };

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        style={styles.option}
        onPress={() => handleNavigation("Account")}
      >
        <Text style={styles.optionText}>Account</Text>
        <Text style={styles.optionSubtext}>Manage your account settings</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.option}
        onPress={() => handleNavigation("Notification")}
      >
        <Text style={styles.optionText}>Notifications</Text>
        <Text style={styles.optionSubtext}>
          Manage notification preferences
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.option}
        onPress={() => handleNavigation("Privacy")}
      >
        <Text style={styles.optionText}>Privacy</Text>
        <Text style={styles.optionSubtext}>Control your privacy settings</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.option}
        onPress={() => handleNavigation("TermsCondition")}
      >
        <Text style={styles.optionText}>Terms and Conditions</Text>
        <Text style={styles.optionSubtext}>Read our terms and conditions</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.option}
        onPress={() => handleNavigation("PrivacyPolicy")}
      >
        <Text style={styles.optionText}>Privacy Policy</Text>
        <Text style={styles.optionSubtext}>Read our privacy policy</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.option}
        onPress={() => handleNavigation("TermsOfUse")}
      >
        <Text style={styles.optionText}>Terms of Use</Text>
        <Text style={styles.optionSubtext}>Read our terms of use</Text>
      </TouchableOpacity>
      {/* Add more TouchableOpacity components for other options */}
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => handleNavigation("Login")}
      >
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Setting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    marginTop: 3,
    paddingHorizontal: 20,
  },
  logoutButton: {
    backgroundColor: "red",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    elevation: 3,
    marginBottom: 10,
  },
  logoutText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  option: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    elevation: 2,
  },
  optionText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  optionSubtext: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
  },
});
