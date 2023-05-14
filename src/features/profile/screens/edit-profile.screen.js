import React, { useState } from "react";
import {
  ProfileView,
  StyledChipEditLong,
  StyledChipEditShort,
  StyledChipEditMedium,
  ChipContainer,
} from "../components/profile.styles";
import { ScrollView, TextInput, Text, View } from "react-native";
import { List, Avatar } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";

export const EditProfile = ({ navigation }) => {
  const [jlptLevel, setJlptLevel] = useState();
  const [livesInJapan, setLivesInJapan] = useState();
  return (
    <>
      <Icon name="arrow-left" size={20} onPress={() => navigation.goBack()} />
      <ProfileView>
        <Avatar.Icon size={80} icon="account" />
      </ProfileView>
      <ProfileView>
        <TextInput placeholder="name" />
        <TextInput placeholder="bio" />
      </ProfileView>
      <View>
        <ChipContainer>
          <StyledChipEditShort
            onPress={() => setJlptLevel("JLPT N1")}
            selected={jlptLevel === "JLPT N1"}
          >
            JLPT N1
          </StyledChipEditShort>
          <StyledChipEditShort
            onPress={() => setJlptLevel("JLPT N2")}
            selected={jlptLevel === "JLPT N2"}
          >
            JLPT N2
          </StyledChipEditShort>
        </ChipContainer>
        <ChipContainer>
          <StyledChipEditShort
            onPress={() => setJlptLevel("JLPT N3")}
            selected={jlptLevel === "JLPT N3"}
          >
            JLPT N3
          </StyledChipEditShort>
          <StyledChipEditShort
            onPress={() => setJlptLevel("JLPT N4")}
            selected={jlptLevel === "JLPT N4"}
          >
            JLPT N4
          </StyledChipEditShort>
          <StyledChipEditShort
            onPress={() => setJlptLevel("JLPT N5")}
            selected={jlptLevel === "JLPT N5"}
          >
            JLPT N5
          </StyledChipEditShort>
        </ChipContainer>
        <ChipContainer>
          <StyledChipEditMedium
            onPress={() => setLivesInJapan(true)}
            selected={livesInJapan === true}
          >
            &#x1F4CD; Japan
          </StyledChipEditMedium>
          <StyledChipEditLong
            onPress={() => setLivesInJapan(false)}
            selected={livesInJapan === false}
          >
            &#x1F4CD; Outside Japan
          </StyledChipEditLong>
        </ChipContainer>
      </View>
      <ScrollView>
        <List.Section title="Resources">
          <List.Accordion title="Textbooks">
            <TextInput />
            <TextInput />
            <TextInput />
            <TextInput />
            <TextInput />
          </List.Accordion>
          <List.Accordion title="Podcast/Youtubers">
            <TextInput />
            <TextInput />
            <TextInput />
            <TextInput />
            <TextInput />
          </List.Accordion>
          <List.Accordion title="Books I Read">
            <TextInput />
            <TextInput />
            <TextInput />
            <TextInput />
            <TextInput />
          </List.Accordion>
          <List.Accordion title="Songs/Artists">
            <TextInput />
            <TextInput />
            <TextInput />
            <TextInput />
            <TextInput />
          </List.Accordion>
          <List.Accordion title="Shows/Movies">
            <TextInput />
            <TextInput />
            <TextInput />
            <TextInput />
            <TextInput />
          </List.Accordion>
        </List.Section>
      </ScrollView>
    </>
  );
};
