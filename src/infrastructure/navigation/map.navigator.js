import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import { MapScreen } from '../../features/maps/screens/map.screen';
import { RestaurantsDetailScreen } from '../../features/restaurants/screens/restaurants-details.screen';
import { modalOptions } from './utilites/screenOptions';

const MapStack = createStackNavigator();

export const MapNavigator = () => {
  return (
    <MapStack.Navigator screenOptions={modalOptions}>
      <MapStack.Screen
        name='MapMain'
        component={MapScreen}
      />
      <MapStack.Screen
        name='Map_RestaurantDetails'
        component={RestaurantsDetailScreen}
      />
    </MapStack.Navigator>
  );
};
