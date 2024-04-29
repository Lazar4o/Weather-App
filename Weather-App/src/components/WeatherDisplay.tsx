import React, { useContext, useEffect, useState } from "react";
import { Image, Text, View } from "react-native-ui-lib";
import { WeatherDataContext } from "@app/services/contexts/WeatherDataContext";
import { getTemperatureUnitSymbol } from "@app/utils/getTemperatureUnit";
import { capitalizeFirstLetter } from "@app/utils/capitalizeFirstLetter";
import { ActivityIndicator } from "react-native";

const WeatherDisplay = () => {
  const { weatherData, unit, isWeatherDataLoading, isWeatherError } =
    useContext(WeatherDataContext);

  const iconCode = weatherData?.weather[0]?.icon 

  return (
    <View>
      {!isWeatherDataLoading ? (
        <View center marginV-20>
          <Text white text60>{`${weatherData?.name || "An error"}, ${
            weatherData?.sys?.country || "occured. Please try again"
          }`}</Text>
          {iconCode ? (
            <Image
              width={220}
              height={220}
              resizeMode="contain"
              source={{
                uri: `https://openweathermap.org/img/wn/${iconCode}@2x.png`
              }}
            />
          ) : (
            <Image
              width={220}
              height={220}
              resizeMode="contain"
              source={{
                uri: `https://openweathermap.org/img/wn/10d@2x.png`
              }}
            />
          )}
          <Text white text20>{`${
            weatherData?.main?.temp?.toFixed(1) || "Na"
          }°${getTemperatureUnitSymbol(unit)}`}</Text>
          <Text grey40 text70>{`${capitalizeFirstLetter(
            weatherData?.weather[0]?.description
          )}`}</Text>
        </View>
      ) : (
        <View style={{ marginVertical: "12%", paddingVertical: "40%" }}>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <ActivityIndicator size={100} color="white" />
          </View>
          <View absB absH center>
            <Text grey30 text70>
              Loading...
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default WeatherDisplay;
