import React, { useState } from "react";
import { View } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";

const SearchBar = styled(Searchbar)`
  border-radius: 0;
  background-color: ${(props) => props.theme.colors.ui.quaternary};
`;

export const SearchTab = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);
  console.log(searchQuery);

  return (
    <View>
      <SearchBar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        elevation={3}
      />
    </View>
  );
};
