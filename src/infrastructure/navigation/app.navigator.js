import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { RestaurantsNavigator } from './restaurants.navigator';

import { FavoritesContextProvider } from '../../services/favorites/favorites.context';
import { LocationContextProvider } from '../../services/location/location.context';
import { RestaurantsContextProvider } from '../../services/restaurant/restaurants.context';
import { SettingsNavigator } from './settings.navigator';
import { MapNavigator } from './map.navigator';

//object that uses the name of the route defined in Tab.Screen as the key
//and the icon name from @expo/vector-icons/Ionicons as the value to easily
//select the icon based on the route in screen options (see below)
const TAB_ICON = {
  Restaurants: 'restaurant',
  Map: 'map',
  Settings: 'settings',
};

//function that simplifies the process of determining the appropriate icon
//based on the route given in screen options in Tab.Navigator
const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons
        name={iconName}
        size={size}
        color={color}
      />
    ),
    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'gray',
    headerShown: false,
  };
};

export const AppNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <FavoritesContextProvider>
      <LocationContextProvider>
        <RestaurantsContextProvider>
          <Tab.Navigator screenOptions={createScreenOptions}>
            <Tab.Screen
              name='Restaurants'
              component={RestaurantsNavigator}
            />
            <Tab.Screen
              name='Map'
              component={MapNavigator}
            />
            <Tab.Screen
              name='Settings'
              component={SettingsNavigator}
            />
          </Tab.Navigator>
        </RestaurantsContextProvider>
      </LocationContextProvider>
    </FavoritesContextProvider>
  );
};
