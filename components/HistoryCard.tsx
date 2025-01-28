import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { HistoryProps } from "@/types";
import { width } from "@/utils/screen";
import { themes } from "@/theme";
import Entypo from "@expo/vector-icons/Entypo";

const HistoryCard = ({ prompt, time }: HistoryProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.timeContainer}>
        <Entypo name="time-slot" size={30} color="black" />
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          {time.toDateString()}
        </Text>
      </View>
      <View>
        <Text style={styles.text}>{prompt}</Text>
      </View>
      <TouchableOpacity style={styles.butonContainer}>
        <View>
          <Text style={styles.buttontext}>Show</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    height: "auto",
    width: width - 25,
    borderRadius: 20,
    borderWidth: 3,
    marginHorizontal: "auto",
    marginVertical: 10,
  },
  text: {
    color: themes.text,
    fontWeight: "bold",
    fontSize: 30,
  },
  timeContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    flexDirection: "row",
    paddingHorizontal: 5,
  },
  butonContainer: {
    width: 100,
    height: 40,
    backgroundColor: "black",
    marginRight: "auto",
    marginVertical: 10,
    borderRadius: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttontext: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default HistoryCard;
