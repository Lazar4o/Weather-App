import HomeScreen from "@app/screens/Home";
import { ConnectionProvider } from "@app/services/contexts/connectionContext";
import { StatusBar } from "expo-status-bar";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Text,
  Colors,
  ConnectionStatusBar,
  Typography
} from "react-native-ui-lib";

export default function App() {
  useEffect(() => {
    ConnectionStatusBar.registerGlobalOnConnectionLost(() => {});

    return () => {
      ConnectionStatusBar.unregisterGlobalOnConnectionLost();
    };
  }, []);

  return (
    <ConnectionProvider>
      <HomeScreen />
    </ConnectionProvider>
  );
}
