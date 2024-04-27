import React, { createContext, useState, ReactNode } from "react";

interface ConnectionStatus {
  isConnected: boolean;
  setIsConnected: (isConnected: boolean) => void;
}

const ConnectionContext = createContext<ConnectionStatus>({
  isConnected: false,
  setIsConnected: () => {}
});

interface ConnectionProviderProps {
  children: ReactNode;
}

const ConnectionProvider = ({ children }: ConnectionProviderProps) => {
  const [isConnected, setIsConnected] = useState<boolean>(false);

  return (
    <ConnectionContext.Provider value={{ isConnected, setIsConnected }}>
      {children}
    </ConnectionContext.Provider>
  );
};
export { ConnectionContext, ConnectionProvider };
