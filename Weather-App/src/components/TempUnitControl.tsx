import React, { useContext } from "react";
import { View } from "react-native-ui-lib";
import { WeatherDataContext } from "@app/services/contexts/WeatherDataContext";
import { Chip } from "@app/components/Chip";
import { TemperatureUnit } from "@app/utils/enums/TemperatureUnit";
import { Keyboard } from "react-native";

const temperatureOptions = [
  { label: "Celsius", unit: TemperatureUnit.Celsius },
  { label: "Fahrenheit", unit: TemperatureUnit.Fahrenheit },
  { label: "Kelvin", unit: TemperatureUnit.Kelvin }
];

const TempUnitControl = () => {
  const { unit, setUnit } = useContext(WeatherDataContext);

  const handleChipPress = (unit: TemperatureUnit) => {
    Keyboard.dismiss();
    setUnit(unit);
  };

  return (
    <View row marginV-20>
      {temperatureOptions.map((option, index) => (
        <Chip
          key={index}
          marginH-10={index === 1}
          label={option.label}
          isActive={unit === option.unit}
          onPress={() => handleChipPress(option.unit)}
        />
      ))}
    </View>
  );
};

export default TempUnitControl;
