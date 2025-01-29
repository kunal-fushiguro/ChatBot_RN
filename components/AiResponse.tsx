import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { width } from "@/utils/screen";
import { themes } from "@/theme";

const AiResponse = ({ text }: { text: string }) => {
  return (
    <View style={styles.container}>
      <View style={styles.insideBox}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    height: "auto",
    paddingRight: 30,
    marginVertical: 10,
  },
  insideBox: {
    maxWidth: "90%",
    height: "auto",
    textAlign: "left",
    borderColor: themes.text,
    borderWidth: 3,
    borderRadius: 5,
    padding: 10,
    marginRight: "auto",
  },
  text: {
    color: themes.text,
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "left",
  },
});

export default AiResponse;
