import React, { useState, useContext } from "react";
import {
  ProfileView,
  StyledChipJapan,
  StyledChipJlpt,
  EditProfileInput,
  ChipScrollContainer,
  SaveButton,
  ScreenContainer,
} from "../components/profile.styles";
import { ScrollView, View } from "react-native";
import { List, Avatar } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";
import { Button } from "react-native-paper";
import { db, auth } from "../../../../firebase-config";
import { doc as docs, setDoc, addDoc } from "firebase/firestore";
import { ProfileContext } from "../../../services/profile/profile-info.context";

export const EditProfile = ({ navigation }) => {
  const { priorProfile } = useContext(ProfileContext);
  const [jlptLevel, setJlptLevel] = useState(priorProfile?.jlptLevel);
  const [livesInJapan, setLivesInJapan] = useState(priorProfile?.livesInJapan);
  const [name, setName] = useState(priorProfile?.name);
  const [bio, setBio] = useState(priorProfile?.bio);
  const [textbooks, setTextbooks] = useState(new Array(5).fill(""));
  const [influencers, setInfluencers] = useState(new Array(5).fill(""));
  const [books, setBooks] = useState(new Array(5).fill(""));
  const [music, setMusic] = useState(new Array(5).fill(""));
  const [shows, setShows] = useState(new Array(5).fill(""));

  const updateProfile = async () => {
    try {
      if (!name) {
        console.log("Name is required");
        return;
      }
      const userRef = docs(db, "userProfiles", auth.currentUser.uid);
      await setDoc(
        userRef,
        {
          name,
          bio,
          textbooks,
          influencers,
          books,
          music,
          shows,
          jlptLevel,
          livesInJapan,
          userId: auth.currentUser.uid,
        },
        { merge: true }
      );
      navigation.goBack();
    } catch (error) {
      console.error("Error writing document: ", error);
    }
  };

  return (
    <ScreenContainer>
      <Icon name="arrow-left" size={20} onPress={() => navigation.goBack()} />
      <ProfileView>
        <Avatar.Icon size={80} icon="account" />
      </ProfileView>
      <ProfileView>
        <EditProfileInput
          defaultValue={name}
          placeholder="name"
          onChangeText={(n) => setName(n)}
        />
        <EditProfileInput
          defaultValue={bio}
          placeholder="bio"
          multiline={true}
          onChangeText={(b) => setBio(b)}
        />
      </ProfileView>
      <View>
        <ChipScrollContainer>
          <StyledChipJlpt
            onPress={() => setJlptLevel("JLPT N1")}
            selected={jlptLevel === "JLPT N1"}
          >
            JLPT N1
          </StyledChipJlpt>
          <StyledChipJlpt
            onPress={() => setJlptLevel("JLPT N2")}
            selected={jlptLevel === "JLPT N2"}
          >
            JLPT N2
          </StyledChipJlpt>
          <StyledChipJlpt
            onPress={() => setJlptLevel("JLPT N3")}
            selected={jlptLevel === "JLPT N3"}
          >
            JLPT N3
          </StyledChipJlpt>
          <StyledChipJlpt
            onPress={() => setJlptLevel("JLPT N4")}
            selected={jlptLevel === "JLPT N4"}
          >
            JLPT N4
          </StyledChipJlpt>
          <StyledChipJlpt
            onPress={() => setJlptLevel("JLPT N5")}
            selected={jlptLevel === "JLPT N5"}
          >
            JLPT N5
          </StyledChipJlpt>
          <StyledChipJapan
            onPress={() => setLivesInJapan(true)}
            selected={livesInJapan === true}
          >
            &#x1F4CD; Japan
          </StyledChipJapan>
          <StyledChipJapan
            onPress={() => setLivesInJapan(false)}
            selected={livesInJapan === false}
          >
            &#x1F4CD; Outside Japan
          </StyledChipJapan>
        </ChipScrollContainer>
      </View>
      <ScrollView>
        <List.Section title="Resources">
          <List.Accordion title="Textbooks">
            <EditProfileInput
              defaultValue={textbooks[0]}
              onChangeText={(text) => {
                let updatedTextbooks = [...textbooks];
                updatedTextbooks[0] = text;
                setTextbooks(updatedTextbooks);
              }}
            />
            <EditProfileInput
              defaultValue={textbooks[1]}
              onChangeText={(text) => {
                let updatedTextbooks = [...textbooks];
                updatedTextbooks[1] = text;
                setTextbooks(updatedTextbooks);
              }}
            />
            <EditProfileInput
              defaultValue={textbooks[2]}
              onChangeText={(text) => {
                let updatedTextbooks = [...textbooks];
                updatedTextbooks[2] = text;
                setTextbooks(updatedTextbooks);
              }}
            />
            <EditProfileInput
              defaultValue={textbooks[3]}
              onChangeText={(text) => {
                let updatedTextbooks = [...textbooks];
                updatedTextbooks[3] = text;
                setTextbooks(updatedTextbooks);
              }}
            />
            <EditProfileInput
              defaultValue={textbooks[4]}
              onChangeText={(text) => {
                let updatedTextbooks = [...textbooks];
                updatedTextbooks[4] = text;
                setTextbooks(updatedTextbooks);
              }}
            />
          </List.Accordion>
          <List.Accordion title="Podcast/Youtubers">
            <EditProfileInput
              defaultValue={influencers[0]}
              onChangeText={(text) => {
                let updatedInfluencers = [...influencers];
                updatedInfluencers[0] = text;
                setInfluencers(updatedInfluencers);
              }}
            />
            <EditProfileInput
              defaultValue={influencers[1]}
              onChangeText={(text) => {
                let updatedInfluencers = [...influencers];
                updatedInfluencers[1] = text;
                setInfluencers(updatedInfluencers);
              }}
            />
            <EditProfileInput
              defaultValue={influencers[2]}
              onChangeText={(text) => {
                let updatedInfluencers = [...influencers];
                updatedInfluencers[2] = text;
                setInfluencers(updatedInfluencers);
              }}
            />
            <EditProfileInput
              defaultValue={influencers[3]}
              onChangeText={(text) => {
                let updatedInfluencers = [...influencers];
                updatedInfluencers[3] = text;
                setInfluencers(updatedInfluencers);
              }}
            />
            <EditProfileInput
              defaultValue={influencers[4]}
              onChangeText={(text) => {
                let updatedInfluencers = [...influencers];
                updatedInfluencers[4] = text;
                setInfluencers(updatedInfluencers);
              }}
            />
          </List.Accordion>
          <List.Accordion title="Books I Read">
            <EditProfileInput
              defaultValue={books[0]}
              onChangeText={(text) => {
                let updatedBooks = [...books];
                updatedBooks[0] = text;
                setBooks(updatedBooks);
              }}
            />
            <EditProfileInput
              defaultValue={books[1]}
              onChangeText={(text) => {
                let updatedBooks = [...books];
                updatedBooks[1] = text;
                setBooks(updatedBooks);
              }}
            />
            <EditProfileInput
              defaultValue={books[2]}
              onChangeText={(text) => {
                let updatedBooks = [...books];
                updatedBooks[2] = text;
                setBooks(updatedBooks);
              }}
            />
            <EditProfileInput
              defaultValue={books[3]}
              onChangeText={(text) => {
                let updatedBooks = [...books];
                updatedBooks[3] = text;
                setBooks(updatedBooks);
              }}
            />
            <EditProfileInput
              defaultValue={books[4]}
              onChangeText={(text) => {
                let updatedBooks = [...books];
                updatedBooks[4] = text;
                setBooks(updatedBooks);
              }}
            />
          </List.Accordion>
          <List.Accordion title="Songs/Artists">
            <EditProfileInput
              defaultValue={music[0]}
              onChangeText={(text) => {
                let updatedMusic = [...music];
                updatedMusic[0] = text;
                setMusic(updatedMusic);
              }}
            />
            <EditProfileInput
              defaultValue={music[1]}
              onChangeText={(text) => {
                let updatedMusic = [...music];
                updatedMusic[1] = text;
                setMusic(updatedMusic);
              }}
            />
            <EditProfileInput
              defaultValue={music[2]}
              onChangeText={(text) => {
                let updatedMusic = [...music];
                updatedMusic[2] = text;
                setMusic(updatedMusic);
              }}
            />
            <EditProfileInput
              defaultValue={music[3]}
              onChangeText={(text) => {
                let updatedMusic = [...music];
                updatedMusic[3] = text;
                setMusic(updatedMusic);
              }}
            />
            <EditProfileInput
              defaultValue={music[4]}
              onChangeText={(text) => {
                let updatedMusic = [...music];
                updatedMusic[4] = text;
                setMusic(updatedMusic);
              }}
            />
          </List.Accordion>
          <List.Accordion title="Shows/Movies">
            <EditProfileInput
              defaultValue={shows[0]}
              onChangeText={(text) => {
                let updatedShows = [...shows];
                updatedShows[0] = text;
                setShows(updatedShows);
              }}
            />
            <EditProfileInput
              defaultValue={shows[1]}
              onChangeText={(text) => {
                let updatedShows = [...shows];
                updatedShows[1] = text;
                setShows(updatedShows);
              }}
            />
            <EditProfileInput
              defaultValue={shows[2]}
              onChangeText={(text) => {
                let updatedShows = [...shows];
                updatedShows[2] = text;
                setShows(updatedShows);
              }}
            />
            <EditProfileInput
              defaultValue={shows[3]}
              onChangeText={(text) => {
                let updatedShows = [...shows];
                updatedShows[3] = text;
                setShows(updatedShows);
              }}
            />
            <EditProfileInput
              defaultValue={shows[4]}
              onChangeText={(text) => {
                let updatedShows = [...shows];
                updatedShows[4] = text;
                setShows(updatedShows);
              }}
            />
          </List.Accordion>
        </List.Section>
        <SaveButton mode="contained" onPress={updateProfile}>
          Save
        </SaveButton>
      </ScrollView>
    </ScreenContainer>
  );
};
