import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import React from "react";
import { height, width } from "@/utils/screen";
import { themes } from "@/theme";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";

const TopBar = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <View>
          <Text style={styles.textStyle}>Chat Bot</Text>
        </View>
      </TouchableOpacity>
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("History");
          }}
        >
          <FontAwesome5 name="history" size={30} color={themes.text} />
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
    backgroundColor: themes.background,
  },
  textStyle: {
    fontWeight: "bold",
    fontSize: 30,
    color: themes.text,
  },
});

export default TopBar;
