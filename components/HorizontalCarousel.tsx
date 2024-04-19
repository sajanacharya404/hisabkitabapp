import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const HorizontalCarousel: React.FC = () => {
  // Define data for the carousel
  const data = [
    { label: "Records", iconName: "book" },
    { label: "Greetings", iconName: "emoticon-happy" },
    { label: "Offers", iconName: "gift" },
    { label: "Reminder", iconName: "alarm" },
    { label: "Income", iconName: "currency-usd" }, // New icon for income
    { label: "Expenses", iconName: "currency-eur" }, // New icon for expenses
  ];

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={data}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <MaterialCommunityIcons
              name={item.iconName}
              size={20} // Adjusted size for smaller icons
              color="black"
            />
            <Text style={styles.itemText}>{item.label}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.flatListContent}
        showsHorizontalScrollIndicator={false} // Hide horizontal scroll bar
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
  },
  flatListContent: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  item: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    paddingVertical: 10, // Adjusted padding for smaller items
    paddingHorizontal: 15, // Adjusted padding for smaller items
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
  },
  itemText: {
    marginTop: 5, // Adjusted margin for smaller items
    fontSize: 12, // Adjusted font size for smaller items
    textAlign: "center",
  },
});

export default HorizontalCarousel;
