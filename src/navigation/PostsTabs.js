import { THEME } from "../theme";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { HomeStackScreen } from "./HomeStackScreen";
import { BookMarkedStackScreen } from "./BookMarkedStackScreen";

const Tab = createBottomTabNavigator();

export const PostsTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "ios-albums";
          } else if (route.name === "BookMarkedScreen") {
            iconName = "ios-star";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerShown: false,
        tabBarActiveTintColor: THEME.MAIN_COLOR,
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen
        name="BookMarkedScreen"
        component={BookMarkedStackScreen}
        options={{
          title: "My favourties",
        }}
      />
    </Tab.Navigator>
  );
};
