import { TemperatureUnit } from "@app/utils/enums/TemperatureUnit";
import React, { createContext, useEffect, useState } from "react";
import { useWeatherData } from "../api/useWeatherData";

interface WeatherDataContextValue {
  city: string;
  unit: TemperatureUnit;
  setCity: (city: string) => void;
  setUnit: (unit: TemperatureUnit) => void;
}

export const WeatherDataContext = createContext<WeatherDataContextValue>({
  city: "",
  unit: TemperatureUnit.Celsius,
  setCity: () => {},
  setUnit: () => {}
});

interface WeatherDataProviderProps {
  children: React.ReactNode;
}

export const WeatherDataProvider = ({ children }: WeatherDataProviderProps) => {
  const [city, setCity] = useState('Sofia');
  const [unit, setUnit] = useState<TemperatureUnit>(TemperatureUnit.Celsius);

  const { useGetWeatherData } = useWeatherData();
  const { data, isLoading, error } = useGetWeatherData(city, unit);

  // useEffect(() => {
  //   if(data) {
  //     console.log('DATA WAS FETCHED SUCCESFULLY');
  //   }
  // }
  // , [data, city]);

  const contextValue: WeatherDataContextValue = {
    city,
    unit,
    setCity,
    setUnit
  };

  return (
    <WeatherDataContext.Provider value={contextValue}>
      {children}
    </WeatherDataContext.Provider>
  );
};
