import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const TabNavigator: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("Party"); // State to track active tab

  // Define content for each tab
  const tabContents: { [key: string]: string } = {
    Party: "Content for Tab 1",
    Karobar: "Content for Tab 2",
  };

  // Function to handle tab press
  const handleTabPress = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <View style={styles.container}>
      {/* Render tab buttons */}
      <View style={styles.tabButtons}>
        {Object.keys(tabContents).map((tabName, index) => (
          <TouchableOpacity
            key={tabName}
            style={[
              styles.tabButton,
              (index < 2 || activeTab === tabName) && styles.fullWidthTab,
              activeTab === tabName && styles.activeTabButton,
            ]}
            onPress={() => handleTabPress(tabName)}
          >
            <Text style={styles.tabButtonText}>{tabName}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {/* Render content based on active tab */}
      <View style={styles.content}>
        <Text>{tabContents[activeTab]}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  tabButtons: {
    flexDirection: "row",
    marginBottom: 10,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 10,

    marginRight: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  fullWidthTab: {
    flex: 2,
  },
  activeTabButton: {
    borderBottomWidth: 2,
    borderBottomColor: "#2cd380",
  },
  tabButtonText: {
    fontSize: 16,
    color: "#000",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TabNavigator;
