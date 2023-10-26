import { useState, createContext, useEffect, useMemo, useContext } from 'react';

import {
  restaurantsRequest,
  restaurantsTransform,
} from './restaurants.service';
import { LocationContext } from '../location/location.context';

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isRestaurantsLoading, setIsRestaurantsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { location } = useContext(LocationContext);

  const retrieveRestaurants = (loc) => {
    setIsRestaurantsLoading(true);
    setRestaurants([]);

    setTimeout(() => {
      restaurantsRequest(loc)
        .then(restaurantsTransform)
        .then((restaurantResults) => {
          setIsRestaurantsLoading(false);
          setRestaurants(restaurantResults);
        })
        .catch((err) => {
          setIsRestaurantsLoading(false);
          setError(err);
        });
    }, 2000);
  };

  useEffect(() => {
    if (location) {
      const formattedLocation = `${location.lat},${location.lng}`;
      retrieveRestaurants(formattedLocation);
    }
  }, [location]);

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        isRestaurantsLoading,
        error,
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
