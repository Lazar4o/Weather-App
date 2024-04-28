import { TemperatureUnit } from "@app/utils/enums/TemperatureUnit";
import React, { createContext, useEffect, useState } from "react";
import { useWeatherData } from "../api/useWeatherData";
import { WeatherData } from "@app/utils/interfaces/WeatherData";

interface WeatherDataContextValue {
  city: string;
  unit: TemperatureUnit;
  setCity: (city: string) => void;
  setUnit: (unit: TemperatureUnit) => void;
  weatherData: WeatherData | null;
  isWeatherDataLoading: boolean;
  isWeatherError: Error | null;
}

export const WeatherDataContext = createContext<WeatherDataContextValue>({
  city: "Sofia",
  unit: TemperatureUnit.Celsius,
  setCity: () => {},
  setUnit: () => {},
  weatherData: null,
  isWeatherDataLoading: false,
  isWeatherError: null,
});

interface WeatherDataProviderProps {
  children: React.ReactNode;
}

export const WeatherDataProvider = ({ children }: WeatherDataProviderProps) => {
  const [city, setCity] = useState('Sofia');
  const [unit, setUnit] = useState<TemperatureUnit>(TemperatureUnit.Celsius);

  const { useGetWeatherData } = useWeatherData();
  const { data, isLoading, error } = useGetWeatherData(city, unit);

  useEffect(() => {
    setCity('Sofia');
  }, [])
  

  const contextValue: WeatherDataContextValue = {
    city,
    unit,
    setCity,
    setUnit,
    weatherData: data,
    isWeatherDataLoading: isLoading,
    isWeatherError: error,
  };

  return (
    <WeatherDataContext.Provider value={contextValue}>
      {children}
    </WeatherDataContext.Provider>
  );
};
