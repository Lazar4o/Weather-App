import React, { useContext, useEffect, useRef, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import MagnifyingGlass from "@app/assets/svgs/MagnifyingGlass";
import { StyleSheet } from "react-native";
import {
  Colors,
  Text,
  TextField,
  TouchableOpacity,
  View
} from "react-native-ui-lib";
import PlusIcon from "@app/assets/svgs/PlusIcon";
import { cityValidationSchema } from "@app/utils/validationSchema/cityInput";
import CloseIcon from "@app/assets/svgs/CloseIcon";
import { WeatherDataContext } from "@app/services/contexts/WeatherDataContext";
import Animated from "react-native-reanimated";
import useHandleAnimations from "@app/hooks/useHandleAnimations";

const SearchInput = () => {
  const { city, setCity } = useContext(WeatherDataContext);

  const inputRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
    clearErrors
  } = useForm({
    resolver: yupResolver(cityValidationSchema)
  });

  const onSubmit = (data: { city: string }) => {
    if (!data) {
      return;
    }
    setCity(data.city);
  };

  const handleToggle = () => {
    clearErrors("city");
    setIsVisible(!isVisible);
  };

  const {
    textFieldAnimatedStyles,
    iconAnimatedStyles,
    welcomeAnimatedStyles,
    toggleIcon
  } = useHandleAnimations({ isVisible, handleToggle });

  useEffect(() => {
    if (isVisible) {
      inputRef.current?.focus();
    }
  }, [isVisible]);

  return (
    <View spread row paddingB-40={!isVisible}>
      <View flex>
        <Animated.View style={textFieldAnimatedStyles}>
          {isVisible && (
            <Controller
              control={control}
              name="city"
              render={({ field: { onChange, onBlur, value } }) => (
                <>
                  <TextField
                    hint="e.g London"
                    ref={inputRef}
                    onBlur={() => {
                      onBlur();
                    }}
                    onChangeText={onChange}
                    value={value}
                    placeholder="Search for a city"
                    placeholderTextColor={Colors.grey40}
                    containerStyle={styles.inputContainer}
                    floatOnFocus
                    floatingPlaceholderStyle={{ left: 15 }}
                    floatingPlaceholderColor={Colors.green60}
                    text70
                    white
                    style={styles.textBox}
                    floatingPlaceholder
                    enableErrors
                    validationMessage={errors.city && errors.city.message}
                    validationMessageStyle={{
                      marginVertical: 5,
                      marginLeft: 15
                    }}
                    trailingAccessory={
                      <TouchableOpacity center onPress={handleSubmit(onSubmit)}>
                        <MagnifyingGlass />
                      </TouchableOpacity>
                    }
                  />
                </>
              )}
            />
          )}
        </Animated.View>
        {!isVisible && (
          <View marginT-2>
            <Animated.View style={welcomeAnimatedStyles} marginT-2>
              <Text text60 white>
                {"Welcome!\nLooking for a different city?"}
              </Text>
            </Animated.View>
          </View>
        )}
      </View>
      <View marginT-25 right>
        <TouchableOpacity onPress={toggleIcon}>
          <Animated.View style={iconAnimatedStyles}>
            {isVisible ? (
              <CloseIcon size={26} color={Colors.green60} />
            ) : (
              <PlusIcon size={26} color={Colors.green60} />
            )}
          </Animated.View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginRight: 10,
    padding: 10,
    paddingBottom: 0,
    borderWidth: 1,
    borderColor: Colors.green60,
    borderRadius: 20
  },
  textBox: {
    borderBottomWidth: 1,
    borderColor: Colors.green60,
    borderRadius: 10,
    paddingHorizontal: 10
  }
});

export default SearchInput;
