import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AboutScreen } from "../screens/AboutScreen";
import { MainScreen } from "../screens/MainScreen";
import { PostScreen } from "../screens/PostScreen";
import { screenOptions } from "./screenOptions";

const Stack = createNativeStackNavigator();

export const HomeStackScreen = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="Main"
        component={MainScreen}
        options={{
          title: "My blog",
        }}
      />
      <Stack.Screen name="About" component={AboutScreen} />
      <Stack.Screen
        name="Post"
        component={PostScreen}
        options={({ route }) => ({
          title: `Post from ${new Date(
            route.params.date
          ).toLocaleDateString()}`,
        })}
      />
    </Stack.Navigator>
  );
};
