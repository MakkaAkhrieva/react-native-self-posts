import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CreateScreen } from "../screens/CreateScreen";
import { screenOptions } from "./screenOptions";

const Stack = createNativeStackNavigator();

export const CreateStackScreen = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="Create"
        component={CreateScreen}
        options={{
          title: "Create",
        }}
      />
    </Stack.Navigator>
  );
};
