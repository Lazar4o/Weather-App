import React, { useContext, useEffect, useState } from "react";
import { Image, Text, View } from "react-native-ui-lib";
import { WeatherDataContext } from "@app/services/contexts/WeatherDataContext";
import { getTemperatureUnitSymbol } from "@app/utils/getTemperatureUnit";
import { capitalizeFirstLetter } from "@app/utils/capitalizeFirstLetter";

const WeatherDisplay = () => {
  const { weatherData, unit } =
    useContext(WeatherDataContext);

    const [imageCode, setImageCode] = useState<string | null>(null);

    useEffect(() => {
      setImageCode(weatherData?.weather[0]?.icon)
    }, [weatherData?.weather[0]?.icon])
    

  return (
    <View>
      <View center marginV-20>
        <Text
          white
          text60
        >{`${weatherData?.name}, ${weatherData?.sys?.country}`}</Text>
        <Image
          width={220}
          height={220}
          resizeMode="contain"
          source={{
            uri: `https://openweathermap.org/img/wn/${imageCode}@2x.png`
          }}
        />
        <Text white text20>{`${weatherData?.main?.temp?.toFixed(
          1
        )}°${getTemperatureUnitSymbol(unit)}`}</Text>
        <Text grey40 text70>{`${capitalizeFirstLetter(
          weatherData?.weather[0]?.description
        )}`}</Text>
      </View>
    </View>
  );
};

export default WeatherDisplay;
