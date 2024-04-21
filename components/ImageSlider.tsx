import React, { useRef, useEffect } from "react";
import {
  View,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  Animated,
} from "react-native";

const { width } = Dimensions.get("window");

interface ImageData {
  id: number;
  uri: string;
}

const ImageSlider: React.FC = () => {
  const images: ImageData[] = [
    { id: 1, uri: "https://via.placeholder.com/300" },
    { id: 2, uri: "https://via.placeholder.com/300" },
    { id: 3, uri: "https://via.placeholder.com/300" },
    { id: 4, uri: "https://via.placeholder.com/300" },
    { id: 5, uri: "https://via.placeholder.com/300" },
  ];

  // Animated value for controlling translation
  const translateX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Start the animation loop
    const animateImages = (index: number) => {
      Animated.timing(translateX, {
        toValue: -width * index,
        duration: 1000, // Adjust duration as needed
        useNativeDriver: true,
      }).start(() => {
        // Pause before transitioning to the next image
        setTimeout(() => {
          const nextIndex = (index + 1) % images.length;
          animateImages(nextIndex);
        }, 5000); // Adjust pause duration as needed
      });
    };

    animateImages(0);

    // Clear the animation when component unmounts
    return () => {
      translateX.stopAnimation();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={{ flexDirection: "row", transform: [{ translateX }] }}
      >
        {images.map((item) => (
          <View key={item.id} style={styles.imageContainer}>
            <Image source={{ uri: item.uri }} style={styles.image} />
          </View>
        ))}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    height: 100,
    overflow: "hidden",
  },
  imageContainer: {
    width: width,
    paddingHorizontal: 10,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 10,
  },
});

export default ImageSlider;
