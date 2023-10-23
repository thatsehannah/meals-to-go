import { Oswald_400Regular } from "@expo-google-fonts/oswald";
import { useFonts, Lato_400Regular } from "@expo-google-fonts/lato";

export const loadFonts = () => {
  let [fontsLoaded] = useFonts([Lato_400Regular, Oswald_400Regular]);

  if (!fontsLoaded) {
    return null;
  }
};
