import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Animated,
  PanResponder,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import HomeButton from "../components/HomeButton";
import HorizontalCarousel from "../components/HorizontalCarousel";
import TabNavigator from "../components/TabNavigator";
import PlusButton from "../components/PlusButton";
import ImageSlider from "../components/ImageSlider";
import Menu from "../components/Menu";

const { width, height } = Dimensions.get("window");

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuAnimation = useRef(
    new Animated.ValueXY({ x: -width, y: 0 })
  ).current;

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev); // Toggle menu state
  };

  const closeMenu = () => {
    Animated.timing(menuAnimation, {
      toValue: { x: -width, y: 0 },
      duration: 300,
      useNativeDriver: true,
    }).start(() => setIsMenuOpen(false));
  };

  const handleRefresh = () => {
    console.log("Refresh button pressed");
  };

  return (
    <View style={styles.container}>
      <View style={styles.top_bar}>
        <TouchableOpacity style={styles.menuToggle} onPress={toggleMenu}>
          <Ionicons
            name={isMenuOpen ? "close-circle-outline" : "menu"}
            size={width * 0.06}
            color="white"
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.refreshIcon} onPress={handleRefresh}>
          <Ionicons name="refresh" size={width * 0.06} color="white" />
        </TouchableOpacity>
        <View style={styles.hometextview}>
          <Text style={styles.hometext}>Welcome To HisabKitab</Text>
        </View>
      </View>
      <ImageSlider />
      <HorizontalCarousel />
      <TabNavigator />

      <Menu isMenuOpen={isMenuOpen} menuAnimation={menuAnimation} />
      {isMenuOpen && (
        <TouchableOpacity style={styles.overlay} onPress={closeMenu} />
      )}
      <PlusButton />
      <HomeButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  menuToggle: {
    position: "absolute",
    top: 30,
    left: 20,
    zIndex: 1,
  },
  hometext: {
    fontSize: 30,
    textAlign: "center",
    justifyContent: "center",
    color: "white",
  },
  hometextview: {
    position: "absolute",
    top: 25,
    left: 70,
    zIndex: 1,
  },

  top_bar: {
    backgroundColor: "#2cd380",
    height: 90,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  refreshIcon: {
    position: "absolute",
    top: 30,
    right: 20,
    zIndex: 1,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: width,
    height: height,
    zIndex: 0,
  },
});

export default HomePage;
