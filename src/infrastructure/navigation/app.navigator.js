import { Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { SafeAreaContainer } from '../../components/utility/safe-area.component';
import { RestaurantsNavigator } from './restaurants.navigator';

const SettingsScreen = () => {
  return (
    <SafeAreaContainer
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <Text>Settings!</Text>
    </SafeAreaContainer>
  );
};

const MapScreen = () => {
  return (
    <SafeAreaContainer
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <Text>Map!</Text>
    </SafeAreaContainer>
  );
};

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
    <NavigationContainer>
      <Tab.Navigator screenOptions={createScreenOptions}>
        <Tab.Screen
          name='Restaurants'
          component={RestaurantsNavigator}
        />
        <Tab.Screen
          name='Map'
          component={MapScreen}
        />
        <Tab.Screen
          name='Settings'
          component={SettingsScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
