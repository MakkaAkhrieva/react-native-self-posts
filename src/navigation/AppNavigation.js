import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AboutScreen } from "../screens/AboutScreen";
import { BookMarkedScreen } from "../screens/BookMarkedScreen";
import { MainScreen } from "../screens/MainScreen";
import { PostScreen } from "../screens/PostScreen";
import { CreateScreen } from "../screens/CreateScreen";
import { THEME } from "../theme";
import { Platform } from "react-native";

const Stack = createNativeStackNavigator();

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor:
              Platform.OS === "android" ? THEME.MAIN_COLOR : "#fff",
          },
          headerTintColor:
            Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR,
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
        <Stack.Screen name="Create" component={CreateScreen} />
        <Stack.Screen name="BookMarkedScreen" component={BookMarkedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
