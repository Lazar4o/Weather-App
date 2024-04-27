import HomeScreen from "@app/screens/Home";
import { ConnectionProvider } from "@app/services/contexts/ConnectionContext";
import { useEffect } from "react";
import { ConnectionStatusBar } from "react-native-ui-lib";

export default function App() {
  useEffect(() => {
    ConnectionStatusBar.registerGlobalOnConnectionLost(() => {});

    return () => {
      ConnectionStatusBar.unregisterGlobalOnConnectionLost();
    };
  }, []);

  return (
    <ConnectionProvider>
      <HomeScreen />
    </ConnectionProvider>
  );
}
