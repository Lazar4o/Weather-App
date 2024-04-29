import Toast from "react-native-toast-message";
import { capitalizeFirstLetter } from "./capitalizeFirstLetter";

export const handleResponseError = (error: any) => {
  if (error.response) {
    const { data } = error.response;
    let errorMessage = "Something went wrong?";
    if (data.message) errorMessage = data.message;

    Toast.show({
      type: "error",
      text1: `${capitalizeFirstLetter(errorMessage)}!`,
      text2: `An error occured!`
    });
    console.log("ERROR", errorMessage);
  }
  return Promise.reject(error);
};
