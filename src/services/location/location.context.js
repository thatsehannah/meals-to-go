import { useState, createContext, useEffect } from "react";

import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [location, setLocation] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [keyword, setKeyword] = useState("San Francisco");

  //function that will be called when you press search in the search bar
  //when this function is called, it will be provided with a search keyword argument
  //that will used in the locationRequest function
  const onSearch = (searchKeyword) => {
    setIsLoading(true); //setting loading to true
    setKeyword(searchKeyword); //setting the keyword state to be equal to the argument prov
    if (!searchKeyword.length) {
      return;
    }
    locationRequest(searchKeyword.toLowerCase()) //the searchkeyword will have to be lowercase in order to get the expected result back
      .then((found) => locationTransform(found)) //location request returns a promise, so we need to transform the data that we'll get back to get exactly what we need
      .then((result) => {
        setIsLoading(false);
        setLocation(result); //now that we have what we're looking for, set the location state to the result of the transformation (which returns an object)
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  };

  return (
    <LocationContext.Provider
      value={{ isLoading, error, location, search: onSearch, keyword }} //when we use this context, this is the object that will be exposed to whatever component we want to use the context in
    >
      {children}
    </LocationContext.Provider>
  );
};
