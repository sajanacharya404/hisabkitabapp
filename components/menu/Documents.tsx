import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

const Documents: React.FC = () => {
  // Placeholder URLs for citizen front and back
  const citizenFrontImage = "https://via.placeholder.com/300x300";
  const citizenBackImage = "https://via.placeholder.com/300x300";
  const profilePhoto = "https://via.placeholder.com/150";

  return (
    <View style={styles.container}>
      {/* Profile Photo */}
      <Image source={{ uri: profilePhoto }} style={styles.profilePhoto} />

      {/* Citizen Front Image */}
      <View style={styles.imageWrapper}>
        <Text style={styles.imageTitle}>Citizen Front</Text>
        <Image source={{ uri: citizenFrontImage }} style={styles.image} />
      </View>

      {/* Citizen Back Image */}
      <View style={styles.imageWrapper}>
        <Text style={styles.imageTitle}>Citizen Back</Text>
        <Image source={{ uri: citizenBackImage }} style={styles.image} />
      </View>

      {/* Update Button */}
      <TouchableOpacity style={styles.updateButton}>
        <Text style={styles.updateButtonText}>Update</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: "center",
    gap: 8,
  },
  profilePhoto: {
    width: 100,
    height: 100,
    borderRadius: 75,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  imageWrapper: {
    alignItems: "center",
    marginBottom: 10,
  },
  imageTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  image: {
    width: 300,
    height: 200,
    resizeMode: "cover",
    borderRadius: 10,
  },
  updateButton: {
    backgroundColor: "#2cd380",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 5,
    marginBottom: 10,
  },
  updateButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Documents;
