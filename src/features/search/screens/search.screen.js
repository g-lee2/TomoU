import React, { useState } from "react";
import { TouchableOpacity, ScrollView } from "react-native";
import { InstituteInfoCard } from "../components/institute-info-card.component";
import {
  SearchBar,
  ChipContainer,
  ChipSpaced,
  SafeArea,
} from "../components/search.styles";

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
