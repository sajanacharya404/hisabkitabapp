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
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons from react-native-vector-icons
import HomeButton from "../components/HomeButton";
import HorizontalCarousel from "../components/HorizontalCarousel";
import TabNavigator from "../components/TabNavigator";
import PlusButton from "../components/PlusButton";
import ImageSlider from "../components/ImageSlider";

const { width, height } = Dimensions.get("window");

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuAnimation = useRef(
    new Animated.ValueXY({ x: -width, y: 0 })
  ).current;

  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event(
        [
          null,
          {
            dx: pan.x,
            dy: pan.y,
          },
        ],
        { useNativeDriver: false } // Add options here
      ),
      onPanResponderRelease: (e, gestureState) => {
        if (gestureState.dx > width / 3) {
          closeMenu();
        } else {
          Animated.spring(pan, {
            toValue: { x: 0, y: 0 },
            useNativeDriver: false,
          }).start();
        }
      },
    })
  ).current;

  const toggleMenu = () => {
    if (isMenuOpen) {
      closeMenu();
    } else {
      setIsMenuOpen(true);
      Animated.timing(menuAnimation, {
        toValue: { x: 0, y: 0 },
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };

  const closeMenu = () => {
    Animated.timing(menuAnimation, {
      toValue: { x: -width, y: 0 },
      duration: 300,
      useNativeDriver: true,
    }).start(() => setIsMenuOpen(false));
  };

  const handleRefresh = () => {
    // Add your refresh logic here
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

      <Animated.View
        {...panResponder.panHandlers}
        style={[
          styles.menu,
          {
            transform: [{ translateX: menuAnimation.x }, { translateX: pan.x }],
          },
        ]}
      >
        <View>
          <Text style={styles.menu_top}>Hello</Text>
        </View>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Menu Item 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Menu Item 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Menu Item 3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Menu Item 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Menu Item 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Menu Item 3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Menu Item 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Menu Item 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Menu Item 3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Menu Item 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Menu Item 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Menu Item 3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Menu Item 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Menu Item 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Menu Item 3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Menu Item 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Menu Item 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Menu Item 3</Text>
        </TouchableOpacity>
      </Animated.View>
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
  heading: {
    fontSize: width * 0.05,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  menu_top: {
    height: 90,
    backgroundColor: "#2cd380",
    color: "white",
    textAlign: "center",
    justifyContent: "center",
  },
  menu: {
    position: "absolute",
    top: 0,
    left: 0,
    height: height, // Take up full height of screen
    width: width * 0.5, // Adjust width as needed
    backgroundColor: "#f8f9fa", // Adjust background color here
    borderColor: "#ccc",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  menuItem: {
    marginBottom: 10,
    padding: 10,
    borderRadius: 4,
    backgroundColor: "#f8f9fa",
  },
  menuItemText: {
    fontSize: width * 0.04,
    color: "black",
  },
  scrollViewContent: {
    paddingTop: height * 0.08, // Adjust the paddingTop to accommodate the icons
    flexGrow: 1,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: width,
    height: height,
    zIndex: 0,
  },
  iconTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  iconText: {
    marginLeft: 10,
    fontSize: 18,
  },
  likeButton: {
    marginLeft: "auto",
  },
});

export default HomePage;
