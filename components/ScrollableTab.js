import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const ScrollableTab = ({ tabList, selectedTab, onPress }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={{
        marginHorizontal: 24,
        paddingTop: 10,
        position: "relative",
      }}
      onPress={() => onPress(item)}
    >
      {selectedTab.id == item.id && (
        <View style={{ position: "absolute", right:'25%',  }}>
          <View
            style={{
              width: 5,
              height: 5,
              borderRadius: 5,
              backgroundColor: "red",
            }}
          ></View>
        </View>
      )}
      <Text style={{ ...styles.sliderText }}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ paddingTop:20, }}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={tabList}
        renderItem={renderItem}
        keyExtractor={(item) => `${item.id}`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sliderText: {
    color: "#151923",
    fontFamily: "SemiBold",
    fontSize: 14,
  },
});

export default ScrollableTab;
