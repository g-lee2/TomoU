import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { Searchbar, Chip } from "react-native-paper";
import styled from "styled-components";
import { InstituteInfoCard } from "../components/institute-info-card.component";

const SearchBar = styled(Searchbar)`
  border-radius: 0;
  background-color: ${(props) => props.theme.colors.ui.quaternary};
`;

const ChipContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 4px;
`;

const ChipSpaced = styled(Chip)`
  margin: 5px;
`;

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

export const SearchTab = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);
  console.log(searchQuery);

  return (
    <SafeArea>
      <SearchBar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        elevation={3}
      />
      <ChipContainer>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity>
            <ChipSpaced>Kanto</ChipSpaced>
          </TouchableOpacity>
          <TouchableOpacity>
            <ChipSpaced>Kansai</ChipSpaced>
          </TouchableOpacity>
          <TouchableOpacity>
            <ChipSpaced>Kyushu</ChipSpaced>
          </TouchableOpacity>
          <TouchableOpacity>
            <ChipSpaced>Hokkaido</ChipSpaced>
          </TouchableOpacity>
          <TouchableOpacity>
            <ChipSpaced>Okinawa</ChipSpaced>
          </TouchableOpacity>
        </ScrollView>
      </ChipContainer>
      <ScrollView>
        <InstituteInfoCard />
        <InstituteInfoCard />
        <InstituteInfoCard />
      </ScrollView>
    </SafeArea>
  );
};
