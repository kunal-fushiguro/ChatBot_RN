import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import TopBar from "@/components/TopBar";
import HistoryCard from "@/components/HistoryCard";
import { width } from "@/utils/screen";
import { useStore } from "@/store";
import { themes } from "@/theme";

const HistoryScreen = () => {
  const { history } = useStore();
  const isEmpty = history.length > 0;
  return (
    <View style={styles.scrollContainer}>
      {/* top bar */}
      <TopBar />
      {/* history List*/}
      {!isEmpty && (
        <View style={styles.noHistory}>
          <Text style={styles.text}>No history</Text>
        </View>
      )}
      {isEmpty && (
        <View style={styles.container}>
          <FlatList
            data={history.reverse()}
            renderItem={({ item, index }) => (
              <HistoryCard prompt={item.prompt} time={item.time} key={index} />
            )}
          />
        </View>
      )}
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
  noHistory: {
    margin: "auto",
  },
  text: {
    color: themes.text,
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default HistoryScreen;
