import { createContext, useState } from 'react';

export const FavoritesContext = createContext();

export const FavoritesContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const add = (restaurant) => {
    setFavorites([...favorites, restaurant]);
  };

  const remove = (restaurant) => {
    const updatedFavorites = favorites.filter(
      (r) => r.placeId !== restaurant.placeId
    );
    setFavorites(updatedFavorites);
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addToFavorites: add, removeFromFavorites: remove }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
