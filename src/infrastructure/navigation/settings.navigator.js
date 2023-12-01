import {
  createStackNavigator,
  CardStyleInterpolators,
  TransitionPresets,
} from '@react-navigation/stack';
import { SettingsScreen } from '../../features/settings/screens/settings.screen';
import { FavoritesScreen } from '../../features/settings/screens/favorites.screen';
import { RestaurantsDetailScreen } from '../../features/restaurants/screens/restaurants-details.screen';
import { modalOptions } from './utilites/screenOptions';

const SettingsStack = createStackNavigator();

export const SettingsNavigator = () => {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        headerMode: 'screen',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <SettingsStack.Screen
        name='SettingsMain'
        options={{
          title: 'Settings',
        }}
        component={SettingsScreen}
      />
      <SettingsStack.Screen
        name='Favorites'
        component={FavoritesScreen}
      />
      <SettingsStack.Screen
        name='Settings_RestaurantDetails'
        options={modalOptions}
        component={RestaurantsDetailScreen}
      />
    </SettingsStack.Navigator>
  );
};
