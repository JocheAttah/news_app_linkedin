import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const Headlines = ({ news }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        marginBottom: 24,
        alignItems: "center",
      }}
    >
      <Image
        style={{ ...styles.image }}
        source={{
          uri: news.image
        }}
      />
      <View style={{ marginLeft: 10, flex: 1 }}>
        <Text
          style={{ fontSize: 14, fontFamily: "Bold" }}
          ellipsizeMode="tail"
          numberOfLines={2}
        >
          {news.title}
        </Text>
        <Text
          style={{ fontSize: 10, fontFamily: "Light" }}
          ellipsizeMode="tail"
          numberOfLines={1}
        >
          {news.brief}
        </Text>
      </View>
    </View>
  );
};

export default Headlines;

const styles = StyleSheet.create({
    image: {
        width: 91,
        height: 77,
        borderRadius: 10,
      },
});
