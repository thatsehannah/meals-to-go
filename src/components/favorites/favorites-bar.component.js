import { ScrollView, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';
import { CompactRestaurantInfo } from '../restaurant/compact-restaurant-info.component';
import { Spacer } from '../spacer/spacer.component';
import { Text } from '../typography/text.component';
import { Fragment } from 'react';

const FavoritesContainer = styled.View`
  padding: 10px;
`;

export const FavoritesBar = ({ favorites, onNavigate }) => {
  if (!favorites.length) {
    return null;
  }

  return (
    <FavoritesContainer>
      <Text variant='caption'>Favorites</Text>
      <Spacer
        position='left'
        size='large'
      />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {favorites.map((restaurant) => {
          const key = restaurant.name.split(' ').join('');
          return (
            <Fragment key={key}>
              <TouchableOpacity
                onPress={() => onNavigate('RestaurantDetail', restaurant)}
              >
                <CompactRestaurantInfo restaurant={restaurant} />
              </TouchableOpacity>
              <Spacer
                position='left'
                size='large'
              />
            </Fragment>
          );
        })}
      </ScrollView>
    </FavoritesContainer>
  );
};
