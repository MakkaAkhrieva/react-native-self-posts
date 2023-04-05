import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { PostsTabs } from "./PostsTabs";
import { AboutStackScreen } from "./AboutStackScreen";
import { CreateStackScreen } from "./CreateStackScreen";
import { screenOptions } from "./screenOptions";

const Drawer = createDrawerNavigator();

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          ...screenOptions,
          headerShown: false,
          drawerStyle: {
            backgroundColor: "#c6cbef",
            width: 240,
          },
        }}
      >
        <Drawer.Screen name="PostsTabs" component={PostsTabs} />
        <Drawer.Screen name="About" component={AboutStackScreen} />
        <Drawer.Screen name="Create" component={CreateStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
