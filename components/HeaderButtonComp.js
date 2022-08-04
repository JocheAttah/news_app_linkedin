import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const HeaderButtonComp = ({ text, header, onPress, size, center }) => {
  return (
    <>
      {header ? (
        <View
          style={[styles.textContainer, center ? styles.center : styles.left]}
        >
          <Text style={{ ...styles.text }}>{text}</Text>
        </View>
      ) : (
        <Pressable
          style={[styles.textContainer, center ? styles.center : styles.left]}
          onPress={onPress}
        >
          <Text style={{ ...styles.text, fontSize: size }}>{text}</Text>
        </Pressable>
      )}
    </>
  );
};

export default HeaderButtonComp;

const styles = StyleSheet.create({
  textContainer: {
    borderBottomColor: "#CB2226",
    borderBottomWidth: 3,
    borderRadius: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  text: {
    fontFamily: "SemiBold",
    borderBottomColor: "red",
    borderBottomWidth: 3,
  },
  center: {
    alignSelf: "center",
  },
  left: {
    alignSelf: "flex-start",
  },
});
