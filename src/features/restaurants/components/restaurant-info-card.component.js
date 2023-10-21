import { Text, View, Image } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";

import { Spacer } from "../../../components/spacer/spacer.component";
import star from "../../../../assets/star";
import open from "../../../../assets/open";

const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.ui.quaternary};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

const Closed = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = false,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <>
      <Card elevation={4}>
        <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
        <Info>
          <Title>{name}</Title>
          <Row>
            <Rating>
              {ratingArray.map(() => (
                <SvgXml xml={star} width={20} height={20} />
              ))}
            </Rating>
            {isOpenNow && (
              <View>
                <SvgXml xml={open} width={25} height={25} />
              </View>
            )}
            {isClosedTemporarily && (
              <Closed>
                <Text style={{ color: "red" }}>CLOSED TEMPORARILY</Text>
                <Spacer position="left" size="large" />
                <Image
                  style={{ width: 15, height: 15 }}
                  source={{ uri: icon }}
                />
              </Closed>
            )}
          </Row>
          <Address>{address}</Address>
        </Info>
      </Card>
    </>
  );
};
