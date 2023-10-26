import { useContext } from "react";
import { ActivityIndicator } from "react-native-paper";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { SafeAreaContainer } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantList } from "./restaurants.screen.styles";

import { RestaurantsContext } from "../../../services/restaurant/restaurants.context";
import { CenteredView } from "../../../components/utility/centered-view.component";
import { Search } from "../components/search.component";

export const RestaurantsScreen = () => {
  const { isRestaurantsLoading, error, restaurants } =
    useContext(RestaurantsContext);

  if (isRestaurantsLoading) {
    return (
      <CenteredView>
        <ActivityIndicator size={50} animating={true} color="#0000ff" />
      </CenteredView>
    );
  }

  return (
    <>
      <SafeAreaContainer>
        <Search />
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
