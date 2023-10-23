import { useContext } from "react";
import { Searchbar } from "react-native-paper";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { SafeAreaContainer } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SearchContainer, RestaurantList } from "./restaurants.screen.styles";

import { RestaurantsContext } from "../../../services/restaurant/restaurants.context";

export const RestaurantsScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
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
