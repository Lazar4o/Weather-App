import React, { useContext, useEffect, useRef, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import MagnifyingGlass from "@app/assets/svgs/MagnifyingGlass";
import { StyleSheet } from "react-native";
import { TextField, TouchableOpacity, View } from "react-native-ui-lib";
import PlusIcon from "@app/assets/svgs/PlusIcon";
import { cityValidationSchema } from "@app/utils/validationSchema/cityInput";
import CloseIcon from "@app/assets/svgs/CloseIcon";
import { WeatherDataContext } from "@app/services/contexts/WeatherDataContext";

const SearchInput = () => {
  const { city, setCity } = useContext(WeatherDataContext);

  const inputRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
    clearErrors,
    reset
  } = useForm({
    resolver: yupResolver(cityValidationSchema)
  });

  const onSubmit = (data) => {
    if (!data) {
      return;
    }
    setCity(data.city);
    //TODO decide wether to clear the input field after submission
    // setValue("city", null);
    // setIsVisible(false); // Optionally hide the TextField after submission
  };

  const handleClose = () => {
    clearErrors("city");
    setIsVisible(false);
  };

  const handleSearch = () => {
    setIsVisible(true);
  };

  useEffect(() => {
    if (isVisible) {
      inputRef.current?.focus();
    }
  }, [isVisible]);

  return (
    <View spread row>
      <View flex>
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
                  containerStyle={styles.inputContainer}
                  floatOnFocus
                  floatingPlaceholderStyle={{ left: 15 }}
                  text70
                  style={styles.textBox}
                  floatingPlaceholder
                  enableErrors
                  validationMessage={errors.city && errors.city.message}
                  validationMessageStyle={{ marginTop: 5, marginLeft: 15 }}
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
      </View>
      <View marginT-25 right>
        {!isVisible ? (
          <TouchableOpacity onPress={() => handleSearch()}>
            <PlusIcon size={26} color="gray" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => handleClose()}>
            <CloseIcon size={26} color="gray" />
          </TouchableOpacity>
        )}
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
    borderColor: "grey",
    borderRadius: 10
  },
  textBox: {
    borderBottomWidth: 1,
    borderColor: "grey",
    borderRadius: 10,
    paddingHorizontal: 10
  }
});

export default SearchInput;
