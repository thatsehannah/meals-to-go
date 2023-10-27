import { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { List } from 'react-native-paper';

import { SafeAreaContainer } from '../../../components/utility/safe-area.component';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';

export const RestaurantsDetailScreen = ({ route, navigation }) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  const { restaurant } = route.params;

  return (
    <SafeAreaContainer>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
          title='Breakfast'
          left={(props) => (
            <List.Icon
              {...props}
              icon='egg'
            />
          )}
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
        >
          <List.Item title="Mama's Pancake Breakfast" />
          <List.Item title='All Star Special' />
          <List.Item title='Chicken Sausage, Egg, and Cheese Breakfast Sandwich' />
          <List.Item title='French toast' />
          <List.Item title='Waffle' />
        </List.Accordion>

        <List.Accordion
          title='Lunch'
          left={(props) => (
            <List.Icon
              {...props}
              icon='hamburger'
            />
          )}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title='Burger w/ Fries' />
          <List.Item title='Mushroom Soup' />
          <List.Item title='Ceaser Salad' />
        </List.Accordion>

        <List.Accordion
          title='Dinner'
          left={(props) => (
            <List.Icon
              {...props}
              icon='food-variant'
            />
          )}
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
        >
          <List.Item title='Steak Frites' />
          <List.Item title='Spagheetti Bolognese' />
          <List.Item title='Salmon and Shrimp' />
          <List.Item title='Ribeye with Garlic Mashed Potatoes' />
        </List.Accordion>

        <List.Accordion
          title='Drinks'
          left={(props) => (
            <List.Icon
              {...props}
              icon='glass-cocktail'
            />
          )}
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
        >
          <List.Item title='Mexican Mule' />
          <List.Item title='Coffee' />
          <List.Item title='Tea' />
          <List.Item title='Sprite' />
          <List.Item title='Lemonade' />
        </List.Accordion>
      </ScrollView>
    </SafeAreaContainer>
  );
};
