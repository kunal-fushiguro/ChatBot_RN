import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { height, width } from "@/utils/screen";
import UserPrompt from "./UserPrompt";
import AiResponse from "./AiResponse";

const TextArea = () => {
  return (
    <ScrollView style={styles.scrollContent}>
      <View style={styles.container}>
        <View>
          <UserPrompt />
          <AiResponse />
          <UserPrompt />
          <AiResponse />
          <UserPrompt />
          <AiResponse />
          <UserPrompt />
          <AiResponse />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 10,
  },
  container: {
    width: width,
    minHeight: (height / 12) * 8.9,
  },
});

export default TextArea;
