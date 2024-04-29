import React, { useContext } from "react";
import { Text, View } from "react-native-ui-lib";
import { WeatherDataContext } from "@app/services/contexts/WeatherDataContext";
import { useWeatherMappedData } from "@app/hooks/useWeatherDetailsMap";

const WeatherDetails = () => {
  const { weatherData, unit, isWeatherDataLoading, isWeatherError } =
    useContext(WeatherDataContext);

  const { weatherAttributes } = useWeatherMappedData(weatherData?.main, unit);

  return (
    <View>
      <View center>
        <Text text40 grey40>
          -Weather Details-
        </Text>
      </View>

      <View marginT-20>
        {weatherAttributes.map(({ label, value, Icon }, index) => (
          <View key={index} row>
            <Icon width={20} height={20} />
            <Text yellow80 text60 marginH-10>
              {label}: {!isWeatherDataLoading && !isWeatherError ? value : "..."}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default WeatherDetails;
