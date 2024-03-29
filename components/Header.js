import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

const Header = ({ home, light }) => {
  return (
    <View style={{ ...styles.headerContainer }}>
      {home ? (
        <TouchableOpacity style={{ ...styles.left }}>
          <Feather name="moon" size={24} color="#151923" />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={{ ...styles.left }}>
          <Feather name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
      )}

      <Text style={{ ...styles.center, color: "#fff" }}>
        {!home ? "All News" : ""}
      </Text>

      {home ? (
        <View style={{ ...styles.right }}>
          <Text style={{ color: "#8A8B91" }}>All News</Text>
        </View>
      ) : (
        <TouchableOpacity style={{ ...styles.right }}>
          <Feather name="rotate-cw" size={24} color="#fff" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10,
    
  },
});
