import { mocks } from "./mock";
import camelize from "camelize";

export const restaurantRequest = (location = "37.7749295,-122.4194155") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }

    resolve(mock);
  });
};

const restaurantsTransform = (result) => {
  return camelize(result);
};

restaurantRequest()
  .then(restaurantsTransform)
  .then((transformedRes) => {
    console.log(transformedRes);
    console.log("Transformed Response ^^^");
  })
  .catch((err) => {
    console.log(err);
  });
