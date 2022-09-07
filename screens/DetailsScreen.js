import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Container, Header } from "../components";
import { images } from "../constants";
import { LinearGradient } from "expo-linear-gradient";

const DetailsScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ ...styles.imageContainer }}>
        <ImageBackground
          source={images.image1}
          resizeMode="cover"
          style={styles.image}
        >
          <LinearGradient
            // Background Linear Gradient
            colors={["rgba(0,0,0,0.8)", "transparent", "rgba(0,0,0,0.8)"]}
            style={{ flex: 1 }}
          >
            <View style={{ ...styles.linearContainer }}>
              <Header />
              <View>
                <Text
                  style={{
                    color: "white",
                    lineHeight: 27,
                    fontSize: 20,
                    fontWeight: "bold",
                    paddingBottom:30
                  }}
                >
                  Microsoft is testing Android 12.1 and other improvements
                  for...
                </Text>
              </View>
            </View>
          </LinearGradient>
        </ImageBackground>
      </View>
      <View style={{ ...styles.textContainer }}>
        <View style={{ ...styles.container }}></View>
      </View>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  linearContainer: {
    paddingTop: 44,
    paddingHorizontal: 16,
    display: "flex",
    flex: 1,
    justifyContent: "space-between",
  },
  imageContainer: {
    flex: 2,
    backgroundColor: "red",
  },
  image: {
    flex: 1,
  },
  textContainer: {
    flex: 1,
    paddingVertical: 20,
  },
});
