import { useContext } from "react";
import { Searchbar, ActivityIndicator, Colors } from "react-native-paper";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { SafeAreaContainer } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SearchContainer, RestaurantList } from "./restaurants.screen.styles";

import { RestaurantsContext } from "../../../services/restaurant/restaurants.context";
import { CenteredView } from "../../../components/utility/centered-view.component";

export const RestaurantsScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);

  if (isLoading) {
    return (
      <CenteredView>
        <ActivityIndicator size={50} animating={true} color="#0000ff" />
      </CenteredView>
    );
  }

  return (
    <>
      <SafeAreaContainer>
        <SearchContainer>
          <Searchbar placeholder="Search" />
        </SearchContainer>
        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => {
            return (
              <>
                <RestaurantInfoCard restaurant={item} />
                <Spacer position={"bottom"} size={"large"} />
              </>
            );
          }}
          keyExtractor={(item) => item.name}
        />
      </SafeAreaContainer>
    </>
  );
};
