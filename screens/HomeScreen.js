import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Container, Header } from "../components";

const HomeScreen = () => {
  return (
    <Container>
      <Header home />
      <View style={{ ...styles.headerTextContainer }}>
        <Text style={{ ...styles.headerText }}>Discover</Text>
        <Text style={{ ...styles.headerparagragh }}>
          News from all over the world
        </Text>
      </View>
    </Container>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  headerTextContainer: {
    marginTop: 54,
  },
  headerText: {
    fontSize: 36,
    fontFamily: "Black",
  },
  headerparagragh:{
    fontSize: 16,
    fontFamily: "Regular",
  }
});
