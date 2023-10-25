import camelize from "camelize";
import { locations } from "./location.mock";

//currently this functions acts as an API call. It takes a search term
//that is being sent from the context and returns a Promise. The Promise
//grabs an item from the locations mock based on the search term. If that
//item exists in the mock, then we return the value to the context (resolve).
//Otherwise, return an error to the context (reject).
export const locationRequest = (searchTerm) => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchTerm];
    if (!locationMock) reject("not found");

    resolve(locationMock);
  });
};

//this function will serve as a callback after the location request has been
//made in the search function and return the lat and lng properties of the
//result from the location request function
export const locationTransform = (result) => {
  const { geometry = {} } = camelize(result.results)[0];
  const { lat, lng } = geometry.location;

  return { lat, lng };
};
