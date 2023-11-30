import 'react-native-gesture-handler';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebaseConfig';

import { theme } from './src/infrastructure/theme';
import {
  useFonts as oswaldUseFonts,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import {
  useFonts as latoUseFonts,
  Lato_400Regular,
} from '@expo-google-fonts/lato';
import { Navigation } from './src/infrastructure/navigation';
import { AuthenticationContextProvider } from './src/services/auth/auth.context';

initializeApp(firebaseConfig);

export default App = () => {
  let [osWaldLoaded] = oswaldUseFonts({ Oswald_400Regular });
  let [latoLoaded] = latoUseFonts({ Lato_400Regular });

  if (!osWaldLoaded || !latoLoaded) {
    return null;
  }

  // it makes senses to make the location context provider the top level provider
  // because the restaurants context provider will need the data provided from it
  // to get the restaurants from the particular location
  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style='auto' />
    </>
  );
};
