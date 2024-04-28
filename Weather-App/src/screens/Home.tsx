import React, { useRef, useState } from "react";
import { StyleSheet } from "react-native";
import { Text, TextField, TouchableOpacity, View } from "react-native-ui-lib";
import SearchInput from "@app/components/SearchInput";

const HomeScreen = () => {


  return (
    <View marginT-50 padding-20>

      <SearchInput/>
      {/* <NetworkStatusIndicator /> */}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 25
  }
});
