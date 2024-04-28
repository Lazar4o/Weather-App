import { useQuery } from "@tanstack/react-query";
import { useWeatherDataClient } from "../client/useWeatherDataClient";
import { useCallback } from "react";

export const useWeatherData = () => {
  const { getWeatherData } = useWeatherDataClient();

  const useGetWeatherData = useCallback((city: string, unit: string) => {
    return useQuery({
      queryKey: ["weather", city, unit],
      queryFn: () => getWeatherData({ city, unit }),
    //   enabled: !!city && !!unit, // TODO: - double check that - it only has to fetch data if city and unit are provided
      select(data) {
        return data?.data;
      }
    });
  }, []);

  return { useGetWeatherData };
};
