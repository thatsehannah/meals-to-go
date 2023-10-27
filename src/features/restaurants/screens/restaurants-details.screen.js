import { SafeAreaContainer } from '../../../components/utility/safe-area.component';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';

export const RestaurantsDetailScreen = ({ route, navigation }) => {
  const { restaurant } = route.params;

  return (
    <SafeAreaContainer>
      <RestaurantInfoCard restaurant={restaurant} />
    </SafeAreaContainer>
  );
};
