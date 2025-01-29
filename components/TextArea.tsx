import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { height, width } from "@/utils/screen";
import UserPrompt from "./UserPrompt";
import AiResponse from "./AiResponse";
import { useStore } from "@/store";

const TextArea = () => {
  const { history, aiResponse } = useStore();
  const conversation = history
    .flatMap((value, index) => [
      { type: "user", text: value.prompt },
      { type: "ai", text: aiResponse[index] },
    ])
    .filter((item) => item.text);
  return (
    <ScrollView style={styles.scrollContent}>
      <View style={styles.container}>
        <View>
          {/* {history.map((value, index) => (
            <UserPrompt text={value.prompt} key={index} />
          ))}
          {aiResponse.map((value, index) => (
            <AiResponse key={index} text={value} />
          ))} */}

          {conversation.map((item, index) =>
            item.type === "user" ? (
              <UserPrompt text={item.text} key={`user-${index}`} />
            ) : (
              <AiResponse text={item.text} key={`ai-${index}`} />
            )
          )}
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
