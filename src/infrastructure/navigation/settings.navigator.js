import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import { SettingsScreen } from '../../features/settings/screens/settings.screen';
import { FavoritesScreen } from '../../features/settings/screens/favorites.screen';

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
    </SettingsStack.Navigator>
  );
};
