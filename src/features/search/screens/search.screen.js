import React, { useState, useEffect } from "react";
import { TouchableOpacity, ScrollView } from "react-native";
import { InstituteInfoCard } from "../components/institute-info-card.component";
import {
  SearchBar,
  ChipContainer,
  ChipSpaced,
  SafeArea,
} from "../components/search.styles";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../../firebase-config";

export const SearchTab = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [instituteInfoCards, setInstituteInfoCards] = useState([]);

  const onChangeSearch = (query) => setSearchQuery(query);
  console.log(searchQuery);

  useEffect(() => {
    async function fetchData() {
      const querySnapshot = await getDocs(collection(db, "schools"));
      const cards = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        return (
          <InstituteInfoCard
            key={doc.id}
            name={data.Name}
            address={data.Address}
            image={data.Image}
          />
        );
      });
      setInstituteInfoCards(cards);
    }
    fetchData();
  }, []);

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
      <ScrollView>{instituteInfoCards}</ScrollView>
    </SafeArea>
  );
};
