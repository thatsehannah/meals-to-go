import { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const FavoritesContext = createContext();

export const FavoritesContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  //Note: since we're randomly generating the images of the restaurants, the images
  //may look different on save than they will when your reload the app
  const saveFavorites = async (allFavorites) => {
    try {
      const jsonValue = JSON.stringify(allFavorites);
      await AsyncStorage.setItem('my-favorites', jsonValue);
    } catch (e) {
      console.log('error saving', e);
    }
  };

  const loadFavorites = async () => {
    try {
      const value = await AsyncStorage.getItem('my-favorites');
      return value !== null ? setFavorites(JSON.parse(value)) : null;
    } catch (e) {
      console.log('error loading:', e);
    }
  };

  const add = (restaurant) => {
    setFavorites([...favorites, restaurant]);
  };

  const remove = (restaurant) => {
    const updatedFavorites = favorites.filter(
      (r) => r.placeId !== restaurant.placeId
    );
    setFavorites(updatedFavorites);
  };

  useEffect(() => {
    loadFavorites();
  }, []);

  useEffect(() => {
    saveFavorites(favorites);
  }, [favorites]);

  return (
    <FavoritesContext.Provider
      value={{ favorites, addToFavorites: add, removeFromFavorites: remove }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
