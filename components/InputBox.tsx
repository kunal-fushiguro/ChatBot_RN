import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { height, width } from "@/utils/screen";
import { themes } from "@/theme";
import Ionicons from "@expo/vector-icons/Ionicons";

const InputBox = () => {
  const [text, setText] = useState<string>(""); //temp

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Type here ........."
        style={styles.inputBox}
        value={text}
        onChangeText={setText}
      />
      <TouchableOpacity style={styles.sendButton}>
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
    height: height / 12,
    position: "relative",
  },
  textStyle: {
    fontWeight: "bold",
    fontSize: 30,
    color: themes.text,
  },
  inputBox: {
    height: "80%",
    borderWidth: 2,
    borderColor: themes.text,
    width: "100%",
    borderRadius: 40,
    paddingLeft: 20,
    fontSize: 20,
    fontWeight: "bold",
    paddingRight: 60,
    marginBottom: 10,
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
