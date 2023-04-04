import React, { useState } from "react";
import { Text, View } from "react-native";
import AppLoading from "expo-app-loading";
import { bootstrap } from "./src/bootstrap";
import { AppNavigation, BottomNavigator } from "./src/navigation/AppNavigation";

export default function App() {
  const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={bootstrap}
        onError={(err) => console.log(err)}
        onFinish={() => setIsReady(true)}
      />
    );
  }
  return <AppNavigation />;
}
