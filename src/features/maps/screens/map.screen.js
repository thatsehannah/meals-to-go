import { useState, useEffect } from 'react';
import MapView from 'react-native-maps';
import styled from 'styled-components/native';

import { Search } from '../components/search.component';
import { useContext } from 'react';
import { LocationContext } from '../../../services/location/location.context';
import { RestaurantsContext } from '../../../services/restaurant/restaurants.context';

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

export const MapScreen = () => {
  const [latDelta, setLatDelta] = useState(0);

  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantsContext);

  const { lat, lng, viewport } = location;
  console.log(viewport);

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport]);

  return (
    <>
      <Search />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant) => {
          return null;
        })}
      </Map>
    </>
  );
};
