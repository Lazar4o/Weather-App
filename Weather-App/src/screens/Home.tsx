import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native-ui-lib";
import SearchInput from "@app/components/SearchInput";
import TempUnitControl from "@app/components/TempUnitControl";
import WeatherDisplay from "@app/components/WeatherDisplay";
import WeatherDetails from "@app/components/WeatherDetails";

const HomeScreen = () => {
  return (
    <View marginT-50 padding-20>
      <SearchInput />
      <TempUnitControl />
      <WeatherDisplay />
      <WeatherDetails />
      {/* <NetworkStatusIndicator /> */}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {}
});
