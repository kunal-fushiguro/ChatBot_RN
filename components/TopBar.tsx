import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import React from "react";
import { height, width } from "@/utils/screen";
import { themes } from "@/theme";

const TopBar = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textStyle}>ChatBot</Text>
      </View>
      <View>
        <TouchableOpacity onPress={() => {}}>
          <FontAwesome5 name="history" size={30} color={themes.textColor} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: width,
    paddingHorizontal: 20,
    height: height / 12,
    backgroundColor: themes.borderColor,
  },
  textStyle: {
    fontWeight: "bold",
    fontSize: 30,
    color: themes.textColor,
  },
});

export default TopBar;
