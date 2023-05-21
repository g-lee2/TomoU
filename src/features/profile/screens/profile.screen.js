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
  ButtonText,
  AvatarIcon,
  BioText,
  ScreenContainer,
  UsernameText,
} from "../components/profile.styles";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { ProfileContext } from "../../../services/profile/profile-info.context";

export const ProfileTab = ({ navigation }) => {
  const { onLogout } = useContext(AuthenticationContext);
  const { priorProfile } = useContext(ProfileContext);

  return (
    <>
      <SafeArea>
        <ScreenContainer>
          <ButtonContainer>
            <Buttons onPress={() => navigation.navigate("Edit Profile")}>
              <ButtonText>Edit</ButtonText>
            </Buttons>
            <Buttons>
              <ButtonText onPress={onLogout}>Logout</ButtonText>
            </Buttons>
          </ButtonContainer>
          <ProfileView>
            <AvatarIcon size={80} icon="account" />
            <UsernameText>{priorProfile?.name || ""}</UsernameText>
            <BioText>{priorProfile?.bio || ""}</BioText>
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
                {priorProfile?.textbooks
                  ?.filter((value) => value)
                  .map((value, index) => (
                    <List.Item key={index} title={value} />
                  ))}
              </List.Accordion>
              <List.Accordion title="Podcast/Youtubers">
                {priorProfile?.influencers
                  ?.filter((value) => value)
                  .map((value, index) => (
                    <List.Item key={index} title={value} />
                  ))}
              </List.Accordion>
              <List.Accordion title="Books I Read">
                {priorProfile?.books
                  ?.filter((value) => value)
                  .map((value, index) => (
                    <List.Item key={index} title={value} />
                  ))}
              </List.Accordion>
              <List.Accordion title="Songs/Artists">
                {priorProfile?.music
                  ?.filter((value) => value)
                  .map((value, index) => (
                    <List.Item key={index} title={value} />
                  ))}
              </List.Accordion>
              <List.Accordion title="Shows/Movies">
                {priorProfile?.shows
                  ?.filter((value) => value)
                  .map((value, index) => (
                    <List.Item key={index} title={value} />
                  ))}
              </List.Accordion>
            </List.Section>
          </ScrollView>
        </ScreenContainer>
      </SafeArea>
    </>
  );
};
