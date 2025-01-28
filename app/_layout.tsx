import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import React from "react";
import HomeScreen from "./HomeScreen";
import HistoryScreen from "./HistoryScreen";

const Stack = createNativeStackNavigator();

const Rootlayout = () => {
  return (
    <SafeAreaProvider>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="History"
          options={{ headerShown: false }}
          component={HistoryScreen}
        />
      </Stack.Navigator>
    </SafeAreaProvider>
  );
};

export default Rootlayout;
