export const capitalizeFirstLetter = (str?: string): string => {
  if (str === undefined) {
    return "Loading...";
  }

  return str.charAt(0).toUpperCase() + str.slice(1);
};
