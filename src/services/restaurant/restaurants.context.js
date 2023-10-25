import { useState, createContext, useEffect, useMemo, useContext } from "react";

import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurants.service";
import { LocationContext } from "../location/location.context";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { location } = useContext(LocationContext);

  const retrieveRestaurants = (loc) => {
    console.log("Search location: " + loc);
    setIsLoading(true);
    setRestaurants([]);

    setTimeout(() => {
      restaurantsRequest(loc)
        .then(restaurantsTransform)
        .then((restaurantResults) => {
          setIsLoading(false);
          setRestaurants(restaurantResults);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 3000);
  };

  useEffect(() => {
    if (location) {
      const formattedLocation = `${location.lat},${location.lng}`;
      // retrieveRestaurants(formattedLocation);
    }
  }, [location]);

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        isLoading,
        error,
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
