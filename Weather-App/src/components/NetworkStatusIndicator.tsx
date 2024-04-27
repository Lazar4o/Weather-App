import { ConnectionContext } from "@app/services/contexts/connectionContext";
import React, { useContext, useState } from "react";
import { StatusBar } from "react-native";
import { View, Text, ConnectionStatusBar } from "react-native-ui-lib";

const NetworkStatusIndicator = () => {
  const { isConnected, setIsConnected } = useContext(ConnectionContext);

  return (
    <>
      <StatusBar hidden={false} backgroundColor={"white"} />
      <View flex center paddingH-15>
        <Text text60 marginB-10 grey40 center>
          {"Turn your wifi on to see the \n Weather App in action"}
        </Text>
        <Text text40>{isConnected ? "Connected! :)" : "No connection :("}</Text>
      </View>
      <ConnectionStatusBar
        onConnectionChange={(isConnected) => setIsConnected(isConnected)}
      />
    </>
  );
};

export default NetworkStatusIndicator;
