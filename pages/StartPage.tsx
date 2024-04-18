import { View, Text, StyleSheet } from "react-native";
import React from "react";

const StartPage = () => {
  return (
    <View>
      <Text style={styles.text}>Karobar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "green",
    fontSize: 50,
    fontWeight: "bold",
  },
});

export default StartPage;
