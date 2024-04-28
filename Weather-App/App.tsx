import HomeScreen from "@app/screens/Home";
import { ConnectionProvider } from "@app/services/contexts/ConnectionContext";
import { WeatherDataProvider } from "@app/services/contexts/WeatherDataContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useRef } from "react";
import { ConnectionStatusBar } from "react-native-ui-lib";

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
          <HomeScreen />
        </ConnectionProvider>
      </WeatherDataProvider>
    </QueryClientProvider>
  );
}
