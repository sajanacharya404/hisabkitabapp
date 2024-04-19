import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons from react-native-vector-icons
import { useNavigation } from "@react-navigation/native"; // Import navigation hook

const HomeButton = () => {
  const navigation = useNavigation(); // Get navigation object

  const navigateToHome = () => {
    // You can navigate to home screen if needed
    // navigation.navigate('Home');
  };

  const navigateToProfile = () => {
    navigation.navigate("Profile"); // Navigate to the profile screen
  };

  const navigateToSettings = () => {
    navigation.navigate("Settings"); // Navigate to the settings screen
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={navigateToHome}>
        <Ionicons name="home" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={navigateToProfile}>
        <Ionicons name="person" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={navigateToSettings}>
        <Ionicons name="settings" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#2cd380",
    paddingVertical: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
});

export default HomeButton;
