import { useContext } from 'react';
import { Text } from '../../../components/typography/text.component';

import { FavoritesContext } from '../../../services/favorites/favorites.context';
import { RestaurantList } from '../../restaurants/components/restaurant-list.component';
import { CenteredView } from '../../../components/utility/centered-view.component';
import { SafeAreaContainer } from '../../../components/utility/safe-area.component';

export const FavoritesScreen = () => {
  const { favorites } = useContext(FavoritesContext);

  if (favorites.length === 0) {
    return (
      <CenteredView>
        <Text variant='label'>No Favorites Yet!</Text>
      </CenteredView>
    );
  }

  return (
    <SafeAreaContainer>
      <RestaurantList restaurants={favorites} />
    </SafeAreaContainer>
  );
};
