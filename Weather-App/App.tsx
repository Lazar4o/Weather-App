import HomeScreen from "@app/screens/Home";
import { ConnectionProvider } from "@app/services/contexts/ConnectionContext";
import { WeatherDataProvider } from "@app/services/contexts/WeatherDataContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { ConnectionStatusBar } from "react-native-ui-lib";
import {
  Keyboard,
  Image as RNImage,
  TouchableWithoutFeedback
} from "react-native";
import Toast from "react-native-toast-message";

export default function App() {
  const queryClient = new QueryClient();

  useEffect(() => {
    ConnectionStatusBar.registerGlobalOnConnectionLost(() => {});

    return () => {
      ConnectionStatusBar.unregisterGlobalOnConnectionLost();
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <WeatherDataProvider>
        <ConnectionProvider>
          <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
            accessible={false}
          >
            <RNImage
              blurRadius={120}
              source={require("../Weather-App/assets/dark_navy_blue_background.png")}
              style={{ position: "absolute", width: "100%", height: "100%" }}
            />
          </TouchableWithoutFeedback>
          <HomeScreen />
          <Toast />
        </ConnectionProvider>
      </WeatherDataProvider>
    </QueryClientProvider>
  );
}
