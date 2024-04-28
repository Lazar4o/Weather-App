import HomeScreen from "@app/screens/Home";
import { ConnectionProvider } from "@app/services/contexts/ConnectionContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useRef } from "react";
import { ConnectionStatusBar } from "react-native-ui-lib";

export default function App() {
  const queryClientRef = useRef(null);

  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }

  useEffect(() => {
    ConnectionStatusBar.registerGlobalOnConnectionLost(() => {});

    return () => {
      ConnectionStatusBar.unregisterGlobalOnConnectionLost();
    };
  }, []);

  return (
    <QueryClientProvider client={queryClientRef.current}>
      <ConnectionProvider>
        <HomeScreen />
      </ConnectionProvider>
    </QueryClientProvider>
  );
}
