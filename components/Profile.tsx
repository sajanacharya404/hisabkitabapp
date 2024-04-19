import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons from react-native-vector-icons

interface ProfileDetails {
  name: string;
  organization: string;
  email: string;
  phoneNumber: string;
  address: string;
  city: string;
  country: string;
}

const Profile: React.FC = () => {
  const profileDetails: ProfileDetails = {
    name: "John Doe",
    organization: "Acme Inc.",
    email: "john.doe@example.com",
    phoneNumber: "+1234567890",
    address: "123 Main St",
    city: "Anytown",
    country: "Country",
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileDetails}>
        <DetailItem
          label="Name"
          value={profileDetails.name}
          iconName="person"
        />
        <DetailItem
          label="Organization"
          value={profileDetails.organization}
          iconName="briefcase"
        />
        <DetailItem
          label="Email"
          value={profileDetails.email}
          iconName="mail"
        />
        <DetailItem
          label="Phone Number"
          value={profileDetails.phoneNumber}
          iconName="call"
        />
        <DetailItem
          label="Address"
          value={profileDetails.address}
          iconName="location"
        />
        <DetailItem label="City" value={profileDetails.city} iconName="home" />
        <DetailItem
          label="Country"
          value={profileDetails.country}
          iconName="earth"
        />
      </View>
    </ScrollView>
  );
};

const DetailItem: React.FC<{
  label: string;
  value: string;
  iconName: string;
}> = ({ label, value, iconName }) => {
  return (
    <View style={styles.detailContainer}>
      <Ionicons name={iconName} size={20} color="#2cd380" style={styles.icon} />
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 20,
  },
  profileDetails: {
    marginTop: 20,
  },
  detailContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  icon: {
    marginRight: 10,
  },
  label: {
    fontWeight: "bold",
    color: "#555",
    marginRight: 5,
  },
  value: {
    color: "#333",
  },
});
