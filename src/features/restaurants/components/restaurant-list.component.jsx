import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { RestaurantInfoCard } from './restaurant-info-card.component';
import { Spacer } from '../../../components/spacer/spacer.component';

const List = styled.FlatList.attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantList = ({ navigation, restaurants }) => {
  return (
    <List
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
  );
};
