import { useContext, useState } from 'react';
import { ActivityIndicator } from 'react-native-paper';

import { SafeAreaContainer } from '../../../components/utility/safe-area.component';

import { RestaurantsContext } from '../../../services/restaurant/restaurants.context';
import { FavoritesContext } from '../../../services/favorites/favorites.context';
import { CenteredView } from '../../../components/utility/centered-view.component';
import { Search } from '../components/search.component';
import { FavoritesBar } from '../../../components/favorites/favorites-bar.component';
import { RestaurantList } from '../components/restaurant-list.component';
import { FadeInView } from '../../../components/animations/fade.animation';

export const RestaurantsScreen = ({ navigation }) => {
  const { isRestaurantsLoading, error, restaurants } =
    useContext(RestaurantsContext);
  const { favorites } = useContext(FavoritesContext);
  const [isToggled, setIsToggled] = useState(false);

  if (isRestaurantsLoading) {
    return (
      <CenteredView>
        <ActivityIndicator
          size={50}
          animating={true}
          color='#0000ff'
        />
      </CenteredView>
    );
  }

  return (
    <SafeAreaContainer>
      <Search
        isFavoritesToggled={isToggled}
        onFavoritesToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavoritesBar
          favorites={favorites}
          onNavigate={navigation.navigate}
        />
      )}
      <FadeInView>
        <RestaurantList
          restaurants={restaurants}
          navigation={navigation}
        />
      </FadeInView>
    </SafeAreaContainer>
  );
};
