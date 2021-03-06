import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";

const Container = ({ children }) => {
  return <View style={{ ...styles.container }}>{children}</View>;
};

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 44,
    paddingHorizontal: 16,
  },
});
