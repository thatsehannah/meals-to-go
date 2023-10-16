import { StatusBar, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const SafeAreaContainer = styled.SafeAreaView`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`
  padding: 16px;
`;

const ListContainer = styled.View`
  background-color: blue;
  flex: 1;
  padding: 16px;
`;

export const RestaurantsScreen = () => {
  return (
    <>
      <SafeAreaContainer>
        <SearchContainer>
          <Searchbar placeholder="Search" />
        </SearchContainer>
        <ListContainer>
          <RestaurantInfoCard />
        </ListContainer>
      </SafeAreaContainer>
    </>
  );
};
