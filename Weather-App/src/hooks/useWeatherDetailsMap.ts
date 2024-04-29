import FeelsLike from "@app/assets/svgs/FeelsLike";
import Humidity from "@app/assets/svgs/Humidity";
import Pressure from "@app/assets/svgs/Pressure";
import MinTemperature from "@app/assets/svgs/MinTemperature";
import MaxTemperature from "@app/assets/svgs/MaxTemperature";
import { getTemperatureUnitSymbol } from "@app/utils/getTemperatureUnit";
import { WeatherData } from "@app/utils/interfaces/WeatherData";
import { TemperatureUnit } from "@app/utils/enums/TemperatureUnit";

export const useWeatherMappedData = (mainWeatherData, unit: TemperatureUnit) => {
  const weatherAttributes = [
    {
      label: "Feels like",
      value: `${mainWeatherData?.feels_like?.toFixed(1)}°${getTemperatureUnitSymbol(unit)}`,
      Icon: FeelsLike
    },
    {
      label: "Humidity",
      value: `${mainWeatherData?.humidity}%`,
      Icon: Humidity
    },
    {
      label: "Pressure",
      value: `${mainWeatherData?.pressure}psi`,
      Icon: Pressure
    },
    {
      label: "Max. Temperature",
      value: `${mainWeatherData?.temp_max?.toFixed(1)}°${getTemperatureUnitSymbol(unit)}`,
      Icon: MaxTemperature
    },
    {
      label: "Min. Temperature",
      value: `${mainWeatherData?.temp_min?.toFixed(1)}°${getTemperatureUnitSymbol(unit)}`,
      Icon: MinTemperature
    }
  ];
  return { weatherAttributes };
};
