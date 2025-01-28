import { View, StyleSheet } from "react-native";
import React from "react";
import TopBar from "@/components/TopBar";
import { themes } from "@/theme";
import { height, width } from "@/utils/screen";

const HomeScreen = () => {
  return (
    <View style={styles.main}>
      {/* topBar */}
      <TopBar />
      {/* Chat Text Area */}
      {/* Input Box  */}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: themes.background,
    width: width,
    height: height,
  },
});

export default HomeScreen;
