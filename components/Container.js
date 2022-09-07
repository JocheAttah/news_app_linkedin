import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";

const Container = ({ children, extraStyles }) => {
  return <View style={{ ...styles.container, ...extraStyles }}>{children}</View>;
};

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 44,
    // 
  },
});
