import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AboutScreen } from "../screens/AboutScreen";
import { screenOptions } from "./screenOptions";

const Stack = createNativeStackNavigator();

export const AboutStackScreen = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="About"
        component={AboutScreen}
        options={{
          title: "About blog",
        }}
      />
    </Stack.Navigator>
  );
};
