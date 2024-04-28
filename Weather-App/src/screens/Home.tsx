import React, { useContext, useRef, useState } from "react";
import { StyleSheet } from "react-native";
import {
  Colors,
  Icon,
  Image,
  Text,
  TextField,
  TouchableOpacity,
  View
} from "react-native-ui-lib";
import SearchInput from "@app/components/SearchInput";
import { WeatherDataContext } from "@app/services/contexts/WeatherDataContext";
import { Chip } from "@app/components/Chip";
import { TemperatureUnit } from "@app/utils/enums/TemperatureUnit";

const HomeScreen = () => {
  const { weatherData, unit, setUnit, isWeatherDataLoading, isWeatherError } =
    useContext(WeatherDataContext);

  // console.log(weatherData?.main, "temperature");
  // console.log(weatherData?.name, "city");

  // console.log(isWeatherError?.message, "isWeatherError");

  return (
    <View marginT-50 padding-20>
      <SearchInput />
      <View row marginV-20>
        <Chip
          label={"Celsius"}
          isActive={unit === TemperatureUnit.Celsius}
          onPress={() => setUnit(TemperatureUnit.Celsius)}
        />
        <Chip
          marginH-10
          label={"Fahrenheit"}
          isActive={unit === TemperatureUnit.Fahrenheit}
          onPress={() => setUnit(TemperatureUnit.Fahrenheit)}
        />
        <Chip
          label={"Kelvin"}
          isActive={unit === TemperatureUnit.Kelvin}
          onPress={() => setUnit(TemperatureUnit.Kelvin)}
        />
      </View>
      <View>
        <View center bg-red50 marginV-20>
          <Image
            overlayColor={Colors.dark20}
            tintColors={Colors.dark10}
            width={120}
            height={120}
            //Comment potentially this cover prop
            cover
            src={`https://openweathermap.org/img/wn/${weatherData?.weather[0]?.icon}@2x.png`}
            // src={'https://loremflickr.com/300/200'}
          />
        </View>
        <View>
          <Text text60>City: {weatherData?.name}</Text>
          <Text text60>Country: {weatherData?.sys?.country}</Text>
          <Text text60>Main Temp: {weatherData?.main?.temp?.toFixed(0)}</Text>
          <Text text60>
            Feels like: {weatherData?.main?.feels_like?.toFixed(0)}
          </Text>
        </View>
      </View>
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
