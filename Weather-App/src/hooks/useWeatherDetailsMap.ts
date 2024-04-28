import FeelsLike from "@app/assets/svgs/FeelsLike";
import Humidity from "@app/assets/svgs/Humidity";
import Pressure from "@app/assets/svgs/Pressure";
import MinTemperature from "@app/assets/svgs/MinTemperature";
import MaxTemperature from "@app/assets/svgs/MaxTemperature";

export const useWeatherMappedData = (mainWeatherData) => {
  const weatherAttributes = [
    {
      label: "Feels like",
      value: mainWeatherData?.feels_like?.toFixed(1),
      Icon: FeelsLike
    },
    {
      label: "Humidity",
      value: mainWeatherData?.humidity,
      Icon: Humidity
    },
    {
      label: "Pressure",
      value: mainWeatherData?.pressure,
      Icon: Pressure
    },
    {
      label: "Max. Temperature",
      value: mainWeatherData?.temp_max?.toFixed(1),
      Icon: MaxTemperature
    },
    {
      label: "Min. Temperature",
      value: mainWeatherData?.temp_min?.toFixed(1),
      Icon: MinTemperature
    }
  ];
  return { weatherAttributes };
};
