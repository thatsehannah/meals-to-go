import { useContext, useEffect, useState } from 'react';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';

import { LocationContext } from '../../../services/location/location.context';

const SearchContainer = styled.View`
  padding: ${({ theme }) => theme.space[3]};
`;

export const Search = ({ isFavoritesToggled, onFavoritesToggle }) => {
  const { keyword, search } = useContext(LocationContext); //destructuring the keyword value and search function from the context
  const [searchKeyword, setSearchKeyword] = useState(keyword); //setting the default state to the default value of keyword in the context

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchContainer>
      <Searchbar
        icon={isFavoritesToggled ? 'heart' : 'heart-outline'}
        onIconPress={onFavoritesToggle}
        placeholder='Search for a location'
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword); //when we hit the enter or submit button in the search bar, this will trigger the search (from the context) to do what it does
        }}
        onChangeText={(text) => {
          setSearchKeyword(text); //every time we type in the search bar, we're setting the keyword state to whatever we're typing
        }}
      />
    </SearchContainer>
  );
};
