import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
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
                    paddingBottom: 80,
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
        {/* <View style={{ ...styles.container }}></View> */}
        <Text style={{ ...styles.textHeader }}>
          Microsoft is testing Android 12.1 and other improvements for Windows
          11
        </Text>
        <Text style={{ ...styles.paragraph }}>
          It seems like Microsoft isn’t resting on its laurels when it comes to
          the system that lets Windows 11 run Android apps: on Friday, the
          company announced an update that upgrades the version of Android
          running on your computer and helps make the apps feel more at home
          running on a PC. The Windows Subsystem for Android update is currently
          only available to test for Windows Insiders, but that’s probably a
          good thing for reasons we’ll touch on in just a moment.
        </Text>
      </View>
      <View style={{ ...styles.readMore }}>
        <Text>The headlining improvement is an update to ...</Text>
        <Pressable>
          <Text style={{ ...styles.buttonText }}>Read More ...</Text>
        </Pressable>
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
    flex: 5,
    backgroundColor: "red",
  },
  image: {
    flex: 1,
  },
  textContainer: {
    flex: 3,
    backgroundColor: "white",
    paddingVertical: 20,
    marginTop: -60,
    borderTopLeftRadius: 49,
    borderTopRightRadius: 49,
    paddingHorizontal: 16,
  },
  textHeader: {
    color: "#151923",
    lineHeight: 27,
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 10,
  },
  paragraph: {
    color: "#151923",
    lineHeight: 27,
    fontSize: 14,
  },
  readMore: {
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: "rgba(187, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
  },
  buttonText: {
    fontWeight: 'bold'
  },
});
