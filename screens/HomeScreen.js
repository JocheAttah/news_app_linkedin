import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { Container, Header, ScrollableTab } from "../components";
import { Feather } from "@expo/vector-icons";


const HomeScreen = () => {
  const [tabList, setTabList] = React.useState([
    {
      id: 0,
      name: "All",
    },
    {
      id: 1,
      name: "Business",
    },
    {
      id: 2,
      name: "Entertainment",
    },
    {
      id: 3,
      name: "Health",
    },
    {
      id: 4,
      name: "Sports",
    },
  ]);

  const [selectedTab, setSelectedTab] = React.useState({
    id: 0,
    name: "Chair",
    title: "chairs",
  });

  return (
    <Container>
      <Header home />
      <View style={{ ...styles.headerTextContainer }}>
        <Text style={{ ...styles.headerText }}>Discover</Text>
        <Text style={{ ...styles.headerparagragh }}>
          News from all over the world
        </Text>
      </View>
      <View style={{ ...styles.inputContainer }}>
        <TextInput style={{ ...styles.input }} placeholder="Search" />
        <Feather
          name="search"
          size={24}
          color="grey"
          style={{ ...styles.inputIcon }}
        />
      </View>
      <ScrollableTab
        tabList={tabList}
        selectedTab={selectedTab}
        onPress={(item) => setSelectedTab(item)}
      />
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
  headerparagragh: {
    fontSize: 16,
    fontFamily: "Regular",
  },
  inputContainer: {
    marginTop: 22,
    position: "relative",
  },
  input: {
    height: 49,
    width: "100%",
    color: "#151923",
    padding: 10,
    paddingLeft: 50,
    fontSize: 16,
    backgroundColor: "#e5e5e5",
    borderRadius: 11,
  },
  inputIcon: {
    position: "absolute",
    top: 12,
    left: 16,
  },
});
