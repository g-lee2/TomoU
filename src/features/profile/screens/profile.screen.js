import React, { useContext, useState } from "react";
import { Text, ScrollView } from "react-native";
import { Avatar, List, ActivityIndicator } from "react-native-paper";
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
  const { priorProfile, isLoading } = useContext(ProfileContext);

  return (
    <>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <SafeArea>
          <ButtonContainer>
            <Buttons onPress={() => navigation.navigate("Edit Profile")}>
              <Text>Edit</Text>
            </Buttons>
            <Buttons>
              <Text onPress={onLogout}>Logout</Text>
            </Buttons>
          </ButtonContainer>
          <ProfileView>
            <Avatar.Icon size={80} icon="account" />
            <Text>{priorProfile?.name || ""}</Text>
          </ProfileView>
          <ProfileView>
            <Text>{priorProfile?.bio || ""}</Text>
          </ProfileView>
          <ChipContainer>
            <StyledChipJlpt>{priorProfile?.jlptLevel || ""}</StyledChipJlpt>
            <StyledChipJapan>
              &#x1F4CD;{" "}
              {priorProfile?.livesInJapan ? "Japan" : "Outside Japan" || ""}
            </StyledChipJapan>
          </ChipContainer>
          <ScrollView>
            <List.Section title="Resources">
              <List.Accordion title="Textbooks">
                {priorProfile.textbooks
                  ?.filter((value) => value)
                  .map((value, index) => (
                    <List.Item key={index} title={value} />
                  ))}
              </List.Accordion>
              <List.Accordion title="Podcast/Youtubers">
                {priorProfile.influencers
                  ?.filter((value) => value)
                  .map((value, index) => (
                    <List.Item key={index} title={value} />
                  ))}
              </List.Accordion>
              <List.Accordion title="Books I Read">
                {priorProfile.books
                  ?.filter((value) => value)
                  .map((value, index) => (
                    <List.Item key={index} title={value} />
                  ))}
              </List.Accordion>
              <List.Accordion title="Songs/Artists">
                {priorProfile.music
                  ?.filter((value) => value)
                  .map((value, index) => (
                    <List.Item key={index} title={value} />
                  ))}
              </List.Accordion>
              <List.Accordion title="Shows/Movies">
                {priorProfile.shows
                  ?.filter((value) => value)
                  .map((value, index) => (
                    <List.Item key={index} title={value} />
                  ))}
              </List.Accordion>
            </List.Section>
          </ScrollView>
        </SafeArea>
      )}
    </>
  );
};
