import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AboutScreen } from "../screens/AboutScreen";
import { PostScreen } from "../screens/PostScreen";
import { BookMarkedScreen } from "../screens/BookMarkedScreen";
import { screenOptions } from "./screenOptions";

const Stack = createNativeStackNavigator();

export const BookMarkedStackScreen = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="Main"
        component={BookMarkedScreen}
        options={{
          title: "My favourites",
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
