import { View, Image } from 'react-native';
import { SvgXml } from 'react-native-svg';

import { Spacer } from '../../../components/spacer/spacer.component';
import { Text } from '../../../components/typography/text.component';
import {
  RestaurantCardCover,
  Info,
  Address,
  Row,
  Rating,
  Closed,
  Icon,
  RestaurantCard,
  IconContainer,
} from './restaurant-info-card.styles';
import star from '../../../../assets/star';
import open from '../../../../assets/open';

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = 'Some Restaurant',
    icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos = [
      'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
    ],
    address = '100 some random street',
    isOpenNow = false,
    rating = 4,
    isClosedTemporarily = true,
    placeId,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <>
      <RestaurantCard elevation={4}>
        <RestaurantCardCover
          key={name}
          source={{ uri: photos[0] }}
        />
        <Info>
          <Text variant='label'>{name}</Text>
          <Row>
            <Rating>
              {ratingArray.map((_, index) => (
                <SvgXml
                  key={`star-${placeId}-${index}`}
                  xml={star}
                  width={20}
                  height={20}
                />
              ))}
            </Rating>
            <IconContainer>
              {isOpenNow && (
                <View>
                  <SvgXml
                    xml={open}
                    width={25}
                    height={25}
                  />
                </View>
              )}
              {isClosedTemporarily && (
                <Closed>
                  <Text variant='error'>CLOSED TEMPORARILY</Text>
                </Closed>
              )}
              <Spacer
                position='left'
                size='large'
              />
              <Icon source={{ uri: icon }} />
            </IconContainer>
          </Row>
          <Address>{address}</Address>
        </Info>
      </RestaurantCard>
    </>
  );
};
