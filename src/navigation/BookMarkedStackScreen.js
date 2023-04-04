import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AboutScreen } from "../screens/AboutScreen";
import { THEME } from "../theme";
import { Platform } from "react-native";
import { PostScreen } from "../screens/PostScreen";
import { BookMarkedScreen } from "../screens/BookMarkedScreen";

const Stack = createNativeStackNavigator();

export const BookMarkedStackScreen = () => {
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
