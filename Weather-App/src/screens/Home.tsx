import NetworkStatusIndicator from "@app/components/NetworkStatusIndicator";
import { StyleSheet } from "react-native";
import { Text, View } from "react-native-ui-lib";

const HomeScreen = () => {
  return (
    <>
      {/*TODO: add the other files here */}
      <NetworkStatusIndicator />
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 25
  }
});
