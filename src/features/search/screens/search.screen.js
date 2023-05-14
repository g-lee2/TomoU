import React, { useState, useEffect } from "react";
import { TouchableOpacity, ScrollView } from "react-native";
import { ActivityIndicator } from "react-native-paper";
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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const querySnapshot = await getDocs(collection(db, "schools"));
      const filteredDocs = querySnapshot.docs.filter((doc) => {
        const data = doc.data();
        if (selectedChip) {
          return data.Region === selectedChip;
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
          />
        );
      });
      setInstituteInfoCards(cards);
    }
    fetchData();
    setIsLoading(false);
  }, [selectedChip]);

  const handleChipPress = (value) => {
    setSelectedChip(value);
  };

  return (
    <SafeArea>
      <SearchBar
        placeholder="Search"
        onChangeText={(query) => setSearchQuery(query)}
        value={searchQuery}
        elevation={3}
      />
      <ChipContainer>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity>
            <ResetChip
              onPress={() => handleChipPress(null)}
              selected={selectedChip === null}
            >
              Reset
            </ResetChip>
          </TouchableOpacity>
          <TouchableOpacity>
            <ChipSpaced
              onPress={() => handleChipPress("Kanto")}
              selected={selectedChip === "Kanto"}
            >
              Kanto
            </ChipSpaced>
          </TouchableOpacity>
          <TouchableOpacity>
            <ChipSpaced
              onPress={() => handleChipPress("Kansai")}
              selected={selectedChip === "Kansai"}
            >
              Kansai
            </ChipSpaced>
          </TouchableOpacity>
          <TouchableOpacity>
            <ChipSpaced
              onPress={() => handleChipPress("Kyushu")}
              selected={selectedChip === "Kyushu"}
            >
              Kyushu
            </ChipSpaced>
          </TouchableOpacity>
          <TouchableOpacity>
            <ChipSpaced
              onPress={() => handleChipPress("Hokkaido")}
              selected={selectedChip === "Hokkaido"}
            >
              Hokkaido
            </ChipSpaced>
          </TouchableOpacity>
          <TouchableOpacity>
            <ChipSpaced
              onPress={() => handleChipPress("Okinawa")}
              selected={selectedChip === "Okinawa"}
            >
              Okinawa
            </ChipSpaced>
          </TouchableOpacity>
        </ScrollView>
      </ChipContainer>
      <ScrollView>
        {instituteInfoCards.filter((card) =>
          card.props.name.toLowerCase().includes(searchQuery.toLowerCase())
        )}
        <ActivityIndicator size="large" color="#0000ff" animating={isLoading} />
      </ScrollView>
    </SafeArea>
  );
};
