import React, { useContext, useEffect, useState } from "react";
import { Text, ScrollView } from "react-native";
import { Avatar, List } from "react-native-paper";
import {
  ProfileView,
  ButtonContainer,
  Buttons,
  SafeArea,
  StyledChipJlpt,
  StyledChipJapan,
  ChipContainer,
} from "../components/profile.styles";
import { db, auth } from "../../../../firebase-config";
import { doc as docs, setDoc, getDoc } from "firebase/firestore";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const ProfileTab = ({ navigation }) => {
  const { onLogout } = useContext(AuthenticationContext);
  const [priorProfile, setPriorProfile] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const docRef = docs(db, "userProfiles", auth.currentUser.uid);
        const docSnapshot = await getDoc(docRef);
        if (docSnapshot.exists()) {
          const data = docSnapshot.data();
          setPriorProfile(data);
        }
      } catch (error) {
        console.log("Error fetching data from Firestore:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <SafeArea>
      <ButtonContainer>
        <Buttons
          onPress={() => navigation.navigate("Edit Profile", { priorProfile })}
        >
          <Text>Edit</Text>
        </Buttons>
        <Buttons>
          <Text onPress={onLogout}>Logout</Text>
        </Buttons>
      </ButtonContainer>
      <ProfileView>
        <Avatar.Icon size={80} icon="account" />
        <Text>Tony August</Text>
      </ProfileView>
      <ProfileView>
        <Text>Goals: Pass N1 July 2023</Text>
      </ProfileView>
      <ChipContainer>
        <StyledChipJlpt>JLPT N1</StyledChipJlpt>
        <StyledChipJapan>&#x1F4CD; Japan</StyledChipJapan>
      </ChipContainer>
      <ScrollView>
        <List.Section title="Resources">
          <List.Accordion title="Textbooks">
            <List.Item title="Shin Kanzen Master" />
            <List.Item title="Sou Matome" />
          </List.Accordion>
          <List.Accordion title="Podcast/Youtubers">
            <List.Item title="Kemushi" />
            <List.Item title="Mori no Nihongo" />
            <List.Item title="Yu Yu Podcast" />
          </List.Accordion>
          <List.Accordion title="Books I Read">
            <List.Item title="満月珈琲店 1" />
            <List.Item title="満月珈琲店 2" />
          </List.Accordion>
          <List.Accordion title="Songs/Artists">
            <List.Item title="Aimyon" />
            <List.Item title="Radwimps" />
          </List.Accordion>
          <List.Accordion title="Shows/Movies">
            <List.Item title="One Piece" />
            <List.Item title="Demon Slayer" />
            <List.Item title="Naruto" />
          </List.Accordion>
        </List.Section>
      </ScrollView>
    </SafeArea>
  );
};
