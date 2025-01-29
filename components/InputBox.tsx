import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { height, width } from "@/utils/screen";
import { themes } from "@/theme";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useStore } from "@/store";
import { getPromptResponse } from "@/ai";

const InputBox = () => {
  const { changeText, text, emptyText, setHistory, setAiResponse } = useStore();
  const [disableBtn, setDisableBtn] = useState<boolean>(true);
  const onClickFn = async () => {
    setDisableBtn(false);
    const prompt = text;
    emptyText();
    setHistory({ time: new Date(Date.now()), prompt: text });
    const promptResponse = await getPromptResponse(prompt);
    setAiResponse(promptResponse);
    setDisableBtn(true);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Type here ........."
        style={styles.inputBox}
        value={text}
        onChangeText={(e) => changeText(e)}
      />
      <TouchableOpacity
        style={styles.sendButton}
        onPress={onClickFn}
        disabled={!disableBtn}
      >
        <Ionicons name="send" size={30} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: width,
    paddingHorizontal: 10,
    height: height / 10,
    position: "relative",
    paddingVertical: 5,
  },
  textStyle: {
    fontWeight: "bold",
    fontSize: 30,
    color: themes.text,
  },
  inputBox: {
    height: "80%",
    borderWidth: 3,
    borderColor: themes.text,
    width: "100%",
    borderRadius: 40,
    paddingLeft: 20,
    fontSize: 20,
    fontWeight: "bold",
    paddingRight: 60,
    marginVertical: 10,
  },
  sendButton: {
    position: "absolute",
    right: 20,
    borderColor: themes.text,
    height: "70%",
    width: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    bottom: 15,
  },
});

export default InputBox;
