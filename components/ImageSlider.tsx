import React, { useRef, useEffect, useState } from "react";
import { View, Image, StyleSheet, Dimensions, FlatList } from "react-native";

const { width } = Dimensions.get("window");

interface ImageData {
  id: number;
  uri: string;
}

const ImageSlider: React.FC = () => {
  const images: ImageData[] = [
    {
      id: 1,
      uri: "https://aimg.kwcdn.com/material-put/1f13e180000/d2efb0ea-58bc-471a-8271-cbfc0f19a05b.jpeg?imageView2/q/70/format/webp",
    },
    {
      id: 2,
      uri: "https://temu.gastii.com/media/Bannarimage/banner_Tc6Udmc.png",
    },
  ];

  const flatListRef = useRef<FlatList<ImageData>>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (flatListRef.current) {
        const newIndex = (currentIndex + 1) % images.length;
        setCurrentIndex(newIndex);
        flatListRef.current.scrollToIndex({
          animated: true,
          index: newIndex,
        });
      }
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={images}
        horizontal
        pagingEnabled
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image source={{ uri: item.uri }} style={styles.image} />
          </View>
        )}
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(event) => {
          const newIndex = Math.round(
            event.nativeEvent.contentOffset.x / width
          );
          setCurrentIndex(newIndex);
        }}
      />
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
