import HomeScreen from "@app/screens/Home";
import { ConnectionProvider } from "@app/services/contexts/ConnectionContext";
import { WeatherDataProvider } from "@app/services/contexts/WeatherDataContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useRef } from "react";
import { ConnectionStatusBar } from "react-native-ui-lib";
import { Image as RNImage } from "react-native";

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
          <RNImage
            blurRadius={120}
            source={require("../Weather-App/assets/dark_navy_blue_background.png")}
            style={{ position: "absolute", width: "100%", height: "100%" }}
          />
          <HomeScreen />
        </ConnectionProvider>
      </WeatherDataProvider>
    </QueryClientProvider>
  );
}
