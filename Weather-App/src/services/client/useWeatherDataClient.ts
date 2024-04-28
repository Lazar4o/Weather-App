import { TemperatureUnit } from "@app/utils/enums/TemperatureUnit";
import { useApi } from "../api/useApi"

export const useWeatherDataClient = () => {
    const { get } = useApi();
    const weatherApiKey = process.env.EXPO_API_KEY;

    const getWeatherData = ({city, unit = TemperatureUnit.Celsius}: {city: string, unit: string}) => {    
        return get(`?q=${city}&units=${unit}&appid=${weatherApiKey}`);
    };

    return { getWeatherData };
}