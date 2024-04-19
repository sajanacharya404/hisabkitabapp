import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack"; // Import navigation prop type

type ProfileScreenNavigationProp = StackNavigationProp<any, "Profile">; // Define navigation prop type

const Setting = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>(); // Get navigation object

  const handleLogout = () => {
    navigation.navigate("Login"); // Navigate to the login screen
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.option}>
        <Text style={styles.optionText}>Account</Text>
        <Text style={styles.optionSubtext}>Manage your account settings</Text>
      </View>
      <View style={styles.option}>
        <Text style={styles.optionText}>Notifications</Text>
        <Text style={styles.optionSubtext}>
          Manage notification preferences
        </Text>
      </View>
      <View style={styles.option}>
        <Text style={styles.optionText}>Privacy</Text>
        <Text style={styles.optionSubtext}>Control your privacy settings</Text>
      </View>
      <View style={styles.option}>
        <Text style={styles.optionText}>Terms and Conditions</Text>
        <Text style={styles.optionSubtext}>Read our terms and conditions</Text>
      </View>
      <View style={styles.option}>
        <Text style={styles.optionText}>Privacy Policy</Text>
        <Text style={styles.optionSubtext}>Read our privacy policy</Text>
      </View>
      <View style={styles.option}>
        <Text style={styles.optionText}>Terms of Use</Text>
        <Text style={styles.optionSubtext}>Read our terms of use</Text>
      </View>
      <View style={styles.option}>
        <Text style={styles.optionText}>Terms of Use</Text>
        <Text style={styles.optionSubtext}>Read our terms of use</Text>
      </View>
      <View style={styles.option}>
        <Text style={styles.optionText}>Terms of Use</Text>
        <Text style={styles.optionSubtext}>Read our terms of use</Text>
      </View>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
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
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
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
