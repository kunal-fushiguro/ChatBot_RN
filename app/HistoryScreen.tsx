import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import TopBar from "@/components/TopBar";
import HistoryCard from "@/components/HistoryCard";
import { height, width } from "@/utils/screen";

const HistoryScreen = () => {
  const tempData = [
    { prompt: "give me an roadmap to learn c++ ?", time: new Date(Date.now()) },
    { prompt: "give me an roadmap to learn c++ ?", time: new Date(Date.now()) },
    { prompt: "give me an roadmap to learn c++ ?", time: new Date(Date.now()) },
    { prompt: "give me an roadmap to learn c++ ?", time: new Date(Date.now()) },
    { prompt: "give me an roadmap to learn c++ ?", time: new Date(Date.now()) },
  ];

  return (
    <View style={styles.scrollContainer}>
      {/* top bar */}
      <TopBar />
      {/* history List*/}
      <View style={styles.container}>
        <FlatList
          data={tempData}
          renderItem={({ item, index }) => (
            <HistoryCard prompt={item.prompt} time={item.time} key={index} />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    width: width,
  },
});

export default HistoryScreen;
