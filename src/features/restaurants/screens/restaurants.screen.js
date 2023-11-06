import { useContext, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import { SafeAreaContainer } from '../../../components/utility/safe-area.component';
import { Spacer } from '../../../components/spacer/spacer.component';
import { RestaurantList } from './restaurants.screen.styles';

import { RestaurantsContext } from '../../../services/restaurant/restaurants.context';
import { FavoritesContext } from '../../../services/favorites/favorites.context';
import { CenteredView } from '../../../components/utility/centered-view.component';
import { Search } from '../components/search.component';
import { FavoritesBar } from '../../../components/favorites/favorites-bar.component';

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
    <>
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
        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => {
            return (
              <>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('RestaurantDetail', {
                      restaurant: item,
                    })
                  }
                >
                  <RestaurantInfoCard restaurant={item} />
                </TouchableOpacity>
                <Spacer
                  position={'bottom'}
                  size={'large'}
                />
              </>
            );
          }}
          keyExtractor={(item) => item.name}
        />
      </SafeAreaContainer>
    </>
  );
};
