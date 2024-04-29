import { ConnectionContext } from "@app/services/contexts/ConnectionContext";
import React, { useContext, useState } from "react";
import { StatusBar } from "react-native";
import { View, Text, ConnectionStatusBar } from "react-native-ui-lib";

const NetworkStatusIndicator = () => {
  const { isConnected, setIsConnected } = useContext(ConnectionContext);

  return (
    <View marginT-30>
      {/* <StatusBar hidden={false} barStyle={'dark-content'} backgroundColor={'white'} /> */}
      <ConnectionStatusBar
        onConnectionChange={(isConnected) => setIsConnected(isConnected)}
      />
    </View>
  );
};

export default NetworkStatusIndicator;
