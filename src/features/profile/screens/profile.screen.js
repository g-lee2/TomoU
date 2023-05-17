import React, { useContext } from "react";
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
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { ProfileContext } from "../../../services/profile/profile-info.context";

export const ProfileTab = ({ navigation }) => {
  const { onLogout } = useContext(AuthenticationContext);
  const { priorProfile } = useContext(ProfileContext);

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
        <Text>{priorProfile.name}</Text>
      </ProfileView>
      <ProfileView>
        <Text>{priorProfile.bio}</Text>
      </ProfileView>
      <ChipContainer>
        <StyledChipJlpt>{priorProfile.jlptLevel}</StyledChipJlpt>
        <StyledChipJapan>
          &#x1F4CD; {priorProfile.livesInJapan ? "Japan" : "Outside Japan"}
        </StyledChipJapan>
      </ChipContainer>
      <ScrollView>
        <List.Section title="Resources">
          <List.Accordion title="Textbooks">
            {Object.keys(priorProfile.textbooks).map((key) => (
              <List.Item key={key} title={priorProfile.textbooks[key]} />
            ))}
          </List.Accordion>
          <List.Accordion title="Podcast/Youtubers">
            {Object.keys(priorProfile.influencers).map((key) => (
              <List.Item key={key} title={priorProfile.influencers[key]} />
            ))}
          </List.Accordion>
          <List.Accordion title="Books I Read">
            {Object.keys(priorProfile.books).map((key) => (
              <List.Item key={key} title={priorProfile.books[key]} />
            ))}
          </List.Accordion>
          <List.Accordion title="Songs/Artists">
            {Object.keys(priorProfile.music).map((key) => (
              <List.Item key={key} title={priorProfile.music[key]} />
            ))}
          </List.Accordion>
          <List.Accordion title="Shows/Movies">
            {Object.keys(priorProfile.shows).map((key) => (
              <List.Item key={key} title={priorProfile.shows[key]} />
            ))}
          </List.Accordion>
        </List.Section>
      </ScrollView>
    </SafeArea>
  );
};
