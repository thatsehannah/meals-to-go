import { FlatList } from "react-native";
import { Searchbar } from "react-native-paper";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import {
  SafeAreaContainer,
  SearchContainer,
} from "./restaurants.screen.styles";

export const RestaurantsScreen = () => {
  return (
    <>
      <SafeAreaContainer>
        <SearchContainer>
          <Searchbar placeholder="Search" />
        </SearchContainer>
        <FlatList
          data={[
            { name: 1 },
            { name: 2 },
            { name: 3 },
            { name: 4 },
            { name: 5 },
            { name: 6 },
          ]}
          renderItem={() => (
            <>
              <RestaurantInfoCard />
              <Spacer position={"bottom"} size={"large"} />
            </>
          )}
          keyExtractor={(item) => item.name}
          contentContainerStyle={{ padding: 16 }}
        />
      </SafeAreaContainer>
    </>
  );
};
