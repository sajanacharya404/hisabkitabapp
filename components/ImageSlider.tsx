import React from "react";
import { View, FlatList, Image, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

interface ImageData {
  id: number;
  uri: string;
}

const ImageSlider: React.FC = () => {
  // Dummy image data
  const images: ImageData[] = [
    { id: 1, uri: "https://via.placeholder.com/300" },
    { id: 2, uri: "https://via.placeholder.com/300" },
    { id: 3, uri: "https://via.placeholder.com/300" },
    { id: 4, uri: "https://via.placeholder.com/300" },
    { id: 5, uri: "https://via.placeholder.com/300" },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={images}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image source={{ uri: item.uri }} style={styles.image} />
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    height: 100,
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
