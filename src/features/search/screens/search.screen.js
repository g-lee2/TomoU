import React, { useState, useEffect } from "react";
import { TouchableOpacity, ScrollView } from "react-native";
import { InstituteInfoCard } from "../components/institute-info-card.component";
import {
  SearchBar,
  ChipContainer,
  ChipSpaced,
  SafeArea,
  ResetChip,
} from "../components/search.styles";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../../firebase-config";

export const SearchTab = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [instituteInfoCards, setInstituteInfoCards] = useState([]);
  const [selectedChip, setSelectedChip] = useState(null);

  const onChangeSearch = (query) => setSearchQuery(query);
  console.log(searchQuery);

  useEffect(() => {
    async function fetchData() {
      const querySnapshot = await getDocs(collection(db, "schools"));
      const filteredDocs = querySnapshot.docs.filter((doc) => {
        const data = doc.data();
        if (selectedChip === "Kanto") {
          return data.Region === "Kanto";
        } else if (selectedChip === "Kansai") {
          return data.Region === "Kansai";
        } else if (selectedChip === "Kyushu") {
          return data.Region === "Kyushu";
        } else if (selectedChip === "Hokkaido") {
          return data.Region === "Hokkaido";
        } else if (selectedChip === "Okinawa") {
          return data.Region === "Okinawa";
        }
        return true;
      });
      const cards = filteredDocs.map((doc) => {
        const data = doc.data();
        return (
          <InstituteInfoCard
            key={doc.id}
            name={data.Name}
            address={data.Address}
            image={data.Image}
            region={data.Region}
          />
        );
      });
      setInstituteInfoCards(cards);
    }
    fetchData();
  }, [selectedChip]);

  const handleChipPress = (value) => {
    setSelectedChip(value);
  };

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
            <ResetChip onPress={() => handleChipPress(null)}>Reset</ResetChip>
          </TouchableOpacity>
          <TouchableOpacity>
            <ChipSpaced onPress={() => handleChipPress("Kanto")}>
              Kanto
            </ChipSpaced>
          </TouchableOpacity>
          <TouchableOpacity>
            <ChipSpaced onPress={() => handleChipPress("Kansai")}>
              Kansai
            </ChipSpaced>
          </TouchableOpacity>
          <TouchableOpacity>
            <ChipSpaced onPress={() => handleChipPress("Kyushu")}>
              Kyushu
            </ChipSpaced>
          </TouchableOpacity>
          <TouchableOpacity>
            <ChipSpaced onPress={() => handleChipPress("Hokkaido")}>
              Hokkaido
            </ChipSpaced>
          </TouchableOpacity>
          <TouchableOpacity>
            <ChipSpaced onPress={() => handleChipPress("Okinawa")}>
              Okinawa
            </ChipSpaced>
          </TouchableOpacity>
        </ScrollView>
      </ChipContainer>
      <ScrollView>{instituteInfoCards}</ScrollView>
    </SafeArea>
  );
};
