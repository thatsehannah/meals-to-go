import 'react-native-gesture-handler';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';

import { theme } from './src/infrastructure/theme';
import { loadFonts } from './src/utils/loadFonts';
import { RestaurantsContextProvider } from './src/services/restaurant/restaurants.context';
import { LocationContextProvider } from './src/services/location/location.context';
import { FavoritesContextProvider } from './src/services/favorites/favorites.context';
import { Navigation } from './src/infrastructure/navigation';

export default App = () => {
  // loadFonts();

  // it makes senses to make the location context provider the top level provider
  // because the restaurants context provider will need the data provided from it
  // to get the restaurants from the particular location
  return (
    <>
      <ThemeProvider theme={theme}>
        <FavoritesContextProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <Navigation />
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </FavoritesContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style='auto' />
    </>
  );
};
