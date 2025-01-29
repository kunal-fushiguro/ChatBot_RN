import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { themes } from "@/theme";
import { width } from "@/utils/screen";
import { UserPromptProps } from "@/types";

const UserPrompt = ({ text }: UserPromptProps) => {
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
    textAlign: "right",
    borderColor: themes.text,
    borderWidth: 3,
    borderRadius: 5,
    padding: 10,
    marginLeft: "auto",
  },
  text: {
    color: themes.text,
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "right",
  },
});

export default UserPrompt;
