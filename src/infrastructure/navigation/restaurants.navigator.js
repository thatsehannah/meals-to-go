import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

import { RestaurantsScreen } from '../../features/restaurants/screens/restaurants.screen';
import { RestaurantsDetailScreen } from '../../features/restaurants/screens/restaurants-details.screen';
import { modalOptions } from './utilites/screenOptions';

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator screenOptions={modalOptions}>
      <RestaurantStack.Screen
        name='RestaurantMain'
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name='RestaurantDetail'
        component={RestaurantsDetailScreen}
      />
    </RestaurantStack.Navigator>
  );
};
