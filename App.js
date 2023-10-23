import { Text, View } from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ThemeProvider } from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { theme } from "./src/infrastructure/theme";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { loadFonts } from "./src/utils/loadFonts";
import { SafeAreaContainer } from "./src/components/utility/safe-area.component";
import { RestaurantsContextProvider } from "./src/services/restaurant/restaurants.context";

const SettingsScreen = () => {
  return (
    <SafeAreaContainer
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text>Settings!</Text>
    </SafeAreaContainer>
  );
};

const MapScreen = () => {
  return (
    <SafeAreaContainer
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text>Map!</Text>
    </SafeAreaContainer>
  );
};

//object that uses the name of the route defined in Tab.Screen as the key
//and the icon name from @expo/vector-icons/Ionicons as the value to easily
//select the icon based on the route in screen options (see below)
const TAB_ICON = {
  Restaurants: "restaurant",
  Map: "map",
  Settings: "settings",
};

//function that simplifies the process of determining the appropriate icon
//based on the route given in screen options in Tab.Navigator
const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: "tomato",
    tabBarInactiveTintColor: "gray",
  };
};

export default App = () => {
  // loadFonts();

  const Tab = createBottomTabNavigator();

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsContextProvider>
          <NavigationContainer>
            <Tab.Navigator screenOptions={createScreenOptions}>
              <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
              <Tab.Screen name="Map" component={MapScreen} />
              <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
          </NavigationContainer>
        </RestaurantsContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
};
