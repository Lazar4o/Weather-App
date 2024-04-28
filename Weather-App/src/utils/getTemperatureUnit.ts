import { TemperatureUnit } from "./enums/TemperatureUnit";

export const getTemperatureUnitSymbol = (unit: TemperatureUnit): string => {
  switch (unit) {
    case TemperatureUnit.Kelvin:
      return "K";
    case TemperatureUnit.Celsius:
      return "C";
    case TemperatureUnit.Fahrenheit:
      return "F";
    default:
      return "";
  }
};
