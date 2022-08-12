import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  FlatList,
} from "react-native";
import React from "react";
import {
  Container,
  Header,
  HeaderButtonComp,
  Headlines,
  ScrollableTab,
} from "../components";
import { Feather } from "@expo/vector-icons";
import { SourcesData, tabListData } from "../assets/dummyData";
import { ScrollView } from "react-native-web";

const scrollTabData = tabListData;

const HomeScreen = () => {
  const [tabList, setTabList] = React.useState(scrollTabData);
  const [selectedTab, setSelectedTab] = React.useState(scrollTabData[0]);

  const renderItem = ({ item }) => (
    <View style={{...styles.sourcesItem}}>
      <item.image width={97} height={99} />
    </View>
  );
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
      <View style={{}}>
        {selectedTab.NewsList.map((news) => (
          <Headlines news={news} />
        ))}
        <HeaderButtonComp
          text="See More"
          size={10}
          center
          onPress={() => console.warn("see more clicked")}
        />
      </View>
      <View style={{ marginTop: 24 }}>
        <HeaderButtonComp header text="News Sources" size={14} />
      </View>
      <View style={{ ...styles.sourcesContainer }}>
        <FlatList
          horizontal
          data={SourcesData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
        />
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
  sourcesContainer: {
    marginTop: 24,
  },
  sourcesItem: {
    marginRight: 16,
  }
});
