import { StyleSheet } from "react-native";
import { View } from "react-native-ui-lib";
import SearchInput from "@app/components/SearchInput";
import TempUnitControl from "@app/components/TempUnitControl";
import WeatherDisplay from "@app/components/WeatherDisplay";
import WeatherDetails from "@app/components/WeatherDetails";
import NetworkStatusIndicator from "@app/components/NetworkStatusIndicator";

const HomeScreen = () => {
  return (
    <>
      <NetworkStatusIndicator />
      <View marginT-20 padding-20>
        <SearchInput />
        <TempUnitControl />
        <WeatherDisplay />
        <WeatherDetails />
      </View>
    </>
  );
};

export default HomeScreen;
