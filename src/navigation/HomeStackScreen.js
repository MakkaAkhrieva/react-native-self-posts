import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AboutScreen } from "../screens/AboutScreen";
import { MainScreen } from "../screens/MainScreen";
import { THEME } from "../theme";
import { Platform } from "react-native";
import { PostScreen } from "../screens/PostScreen";

const Stack = createNativeStackNavigator();

export const HomeStackScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor:
            Platform.OS === "android" ? THEME.MAIN_COLOR : "#fff",
        },
        headerTintColor: Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Main"
        component={MainScreen}
        options={{
          title: "Awesome app",
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
