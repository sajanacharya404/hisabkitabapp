import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faEnvelope,
  faInfoCircle,
  faBell,
  faComments,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

const Notification: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.notificationContainer}>
        <FontAwesomeIcon icon={faEnvelope} size={24} style={styles.icon} />
        <View style={styles.notificationContent}>
          <Text style={styles.notificationText}>
            You have a new message from John Doe
          </Text>
          <Text style={styles.notificationTime}>2 hours ago</Text>
        </View>
      </View>
      <View style={styles.notificationContainer}>
        <FontAwesomeIcon icon={faInfoCircle} size={24} style={styles.icon} />
        <View style={styles.notificationContent}>
          <Text style={styles.notificationText}>
            Your order #123456 has been shipped
          </Text>
          <Text style={styles.notificationTime}>Yesterday</Text>
        </View>
      </View>
      <View style={styles.notificationContainer}>
        <FontAwesomeIcon icon={faBell} size={24} style={styles.icon} />
        <View style={styles.notificationContent}>
          <Text style={styles.notificationText}>
            You have received a new notification
          </Text>
          <Text style={styles.notificationTime}>3 days ago</Text>
        </View>
      </View>
      <View style={styles.notificationContainer}>
        <FontAwesomeIcon icon={faComments} size={24} style={styles.icon} />
        <View style={styles.notificationContent}>
          <Text style={styles.notificationText}>New message from Alice</Text>
          <Text style={styles.notificationTime}>1 week ago</Text>
        </View>
      </View>
      <View style={styles.notificationContainer}>
        <FontAwesomeIcon icon={faHeart} size={24} style={styles.icon} />
        <View style={styles.notificationContent}>
          <Text style={styles.notificationText}>Someone liked your post</Text>
          <Text style={styles.notificationTime}>2 weeks ago</Text>
        </View>
      </View>
      {/* Add more notifications as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  notificationContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    width: "90%",
  },
  icon: {
    marginRight: 10,
  },
  notificationContent: {
    flex: 1,
  },
  notificationText: {
    fontSize: 16,
    marginBottom: 5,
  },
  notificationTime: {
    fontSize: 14,
    color: "#666",
  },
});

export default Notification;
