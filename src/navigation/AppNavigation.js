import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AboutScreen } from "../screens/AboutScreen";
import { BookMarkedScreen } from "../screens/BookMarkedScreen";
import { MainScreen } from "../screens/MainScreen";
import { PostScreen } from "../screens/PostScreen";
import { CreateScreen } from "../screens/CreateScreen";

const Stack = createNativeStackNavigator();

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{ title: "Awesome app" }}
        />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen
          name="Post"
          component={PostScreen}
          options={{ title: "Post 1" }}
        />
        <Stack.Screen name="Create" component={CreateScreen} />
        <Stack.Screen name="BookMarkedScreen" component={BookMarkedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
