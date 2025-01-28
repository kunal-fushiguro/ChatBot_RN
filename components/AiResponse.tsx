import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { width } from "@/utils/screen";
import { themes } from "@/theme";

const AiResponse = () => {
  return (
    <View style={styles.container}>
      <View style={styles.insideBox}>
        <Text style={styles.text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
          neque quaerat doloremque, repellat illo ducimus architecto sed, dicta,
          eaque sequi quam suscipit aperiam nesciunt provident incidunt nihil
          distinctio unde fugit!
        </Text>
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
