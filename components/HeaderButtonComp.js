import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const HeaderButtonComp = ({ text, header, onPress, textstyle }) => {
  return (
    <>
      {header ? (
        <View style={{ ...styles.textContainer }}>
          <Text style={{ ...styles.text }}>{text}</Text>
        </View>
      ) : (
        <Pressable style={{ ...styles.textContainer }} onPress={onPress}>
          <Text style={{ ...styles.text, textstyle }}>{text}</Text>
        </Pressable>
      )}
    </>
  );
};

export default HeaderButtonComp;

const styles = StyleSheet.create({
  textContainer: {
    // borderBottomColor: "#CB2226",
    // borderBottomWidth: 3,
    // borderRadius: 1,
    // display: "flex",
    // flexDirection: "row",
    // justifyContent: "center",
    // alignItems: "",
  },
  text: {
    fontFamily: "SemiBold",
    borderBottomColor:'red',
    borderBottomWidth:3,
    fontSize: 10,
  },
});
