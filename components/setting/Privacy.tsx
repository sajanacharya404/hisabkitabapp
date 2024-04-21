import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Privacy: React.FC = () => {
  const [sections, setSections] = useState([
    { title: "Section 1", content: "Lorem ipsum dolor sit amet..." },
    { title: "Accounting", content: "Content for accounting section..." },
    {
      title: "Privacy Policy",
      content: "Content for privacy policy section...",
    },
    { title: "Terms of Use", content: "Content for terms of use section..." },
  ]);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <View style={styles.container}>
      {sections.map((section, index) => (
        <View key={index} style={styles.card}>
          <TouchableOpacity
            style={styles.titleContainer}
            onPress={() => toggleSection(index)}
          >
            <Text style={styles.title}>{section.title}</Text>
            <Ionicons
              name={expandedIndex === index ? "chevron-up" : "chevron-down"}
              size={18}
              color="#555"
            />
          </TouchableOpacity>
          {index === expandedIndex && (
            <Text style={styles.content}>{section.content}</Text>
          )}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 10,
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 20,
    elevation: 2,
    width: "100%",
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    padding: 20,
  },
});

export default Privacy;
