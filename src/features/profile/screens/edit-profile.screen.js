import React, { useState, useContext } from "react";
import {
  ProfileView,
  StyledChipJapan,
  StyledChipJlpt,
  ChipContainer,
  NameBioTextInput,
} from "../components/profile.styles";
import { ScrollView, View } from "react-native";
import { List, Avatar, TextInput } from "react-native-paper";
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
    <>
      <Icon name="arrow-left" size={20} onPress={() => navigation.goBack()} />
      <ProfileView>
        <Avatar.Icon size={80} icon="account" />
      </ProfileView>
      <ProfileView>
        <NameBioTextInput
          defaultValue={name}
          placeholder="name"
          onChangeText={(n) => setName(n)}
        />
        <TextInput
          defaultValue={bio}
          placeholder="bio"
          multiline={true}
          onChangeText={(b) => setBio(b)}
        />
      </ProfileView>
      <View>
        <ChipContainer>
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
        </ChipContainer>
        <ChipContainer>
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
        </ChipContainer>
        <ChipContainer>
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
        </ChipContainer>
      </View>
      <ScrollView>
        <List.Section title="Resources">
          <List.Accordion title="Textbooks">
            <TextInput
              defaultValue={textbooks[0]}
              onChangeText={(text) => {
                let updatedTextbooks = [...textbooks];
                updatedTextbooks[0] = text;
                setTextbooks(updatedTextbooks);
              }}
            />
            <TextInput
              defaultValue={textbooks[1]}
              onChangeText={(text) => {
                let updatedTextbooks = [...textbooks];
                updatedTextbooks[1] = text;
                setTextbooks(updatedTextbooks);
              }}
            />
            <TextInput
              defaultValue={textbooks[2]}
              onChangeText={(text) => {
                let updatedTextbooks = [...textbooks];
                updatedTextbooks[2] = text;
                setTextbooks(updatedTextbooks);
              }}
            />
            <TextInput
              defaultValue={textbooks[3]}
              onChangeText={(text) => {
                let updatedTextbooks = [...textbooks];
                updatedTextbooks[3] = text;
                setTextbooks(updatedTextbooks);
              }}
            />
            <TextInput
              defaultValue={textbooks[4]}
              onChangeText={(text) => {
                let updatedTextbooks = [...textbooks];
                updatedTextbooks[4] = text;
                setTextbooks(updatedTextbooks);
              }}
            />
          </List.Accordion>
          <List.Accordion title="Podcast/Youtubers">
            <TextInput
              defaultValue={influencers[0]}
              onChangeText={(text) => {
                let updatedInfluencers = [...influencers];
                updatedInfluencers[0] = text;
                setInfluencers(updatedInfluencers);
              }}
            />
            <TextInput
              defaultValue={influencers[1]}
              onChangeText={(text) => {
                let updatedInfluencers = [...influencers];
                updatedInfluencers[1] = text;
                setInfluencers(updatedInfluencers);
              }}
            />
            <TextInput
              defaultValue={influencers[2]}
              onChangeText={(text) => {
                let updatedInfluencers = [...influencers];
                updatedInfluencers[2] = text;
                setInfluencers(updatedInfluencers);
              }}
            />
            <TextInput
              defaultValue={influencers[3]}
              onChangeText={(text) => {
                let updatedInfluencers = [...influencers];
                updatedInfluencers[3] = text;
                setInfluencers(updatedInfluencers);
              }}
            />
            <TextInput
              defaultValue={influencers[4]}
              onChangeText={(text) => {
                let updatedInfluencers = [...influencers];
                updatedInfluencers[4] = text;
                setInfluencers(updatedInfluencers);
              }}
            />
          </List.Accordion>
          <List.Accordion title="Books I Read">
            <TextInput
              defaultValue={books[0]}
              onChangeText={(text) => {
                let updatedBooks = [...books];
                updatedBooks[0] = text;
                setBooks(updatedBooks);
              }}
            />
            <TextInput
              defaultValue={books[1]}
              onChangeText={(text) => {
                let updatedBooks = [...books];
                updatedBooks[1] = text;
                setBooks(updatedBooks);
              }}
            />
            <TextInput
              defaultValue={books[2]}
              onChangeText={(text) => {
                let updatedBooks = [...books];
                updatedBooks[2] = text;
                setBooks(updatedBooks);
              }}
            />
            <TextInput
              defaultValue={books[3]}
              onChangeText={(text) => {
                let updatedBooks = [...books];
                updatedBooks[3] = text;
                setBooks(updatedBooks);
              }}
            />
            <TextInput
              defaultValue={books[4]}
              onChangeText={(text) => {
                let updatedBooks = [...books];
                updatedBooks[4] = text;
                setBooks(updatedBooks);
              }}
            />
          </List.Accordion>
          <List.Accordion title="Songs/Artists">
            <TextInput
              defaultValue={music[0]}
              onChangeText={(text) => {
                let updatedMusic = [...music];
                updatedMusic[0] = text;
                setMusic(updatedMusic);
              }}
            />
            <TextInput
              defaultValue={music[1]}
              onChangeText={(text) => {
                let updatedMusic = [...music];
                updatedMusic[1] = text;
                setMusic(updatedMusic);
              }}
            />
            <TextInput
              defaultValue={music[2]}
              onChangeText={(text) => {
                let updatedMusic = [...music];
                updatedMusic[2] = text;
                setMusic(updatedMusic);
              }}
            />
            <TextInput
              defaultValue={music[3]}
              onChangeText={(text) => {
                let updatedMusic = [...music];
                updatedMusic[3] = text;
                setMusic(updatedMusic);
              }}
            />
            <TextInput
              defaultValue={music[4]}
              onChangeText={(text) => {
                let updatedMusic = [...music];
                updatedMusic[4] = text;
                setMusic(updatedMusic);
              }}
            />
          </List.Accordion>
          <List.Accordion title="Shows/Movies">
            <TextInput
              defaultValue={shows[0]}
              onChangeText={(text) => {
                let updatedShows = [...shows];
                updatedShows[0] = text;
                setShows(updatedShows);
              }}
            />
            <TextInput
              defaultValue={shows[1]}
              onChangeText={(text) => {
                let updatedShows = [...shows];
                updatedShows[1] = text;
                setShows(updatedShows);
              }}
            />
            <TextInput
              defaultValue={shows[2]}
              onChangeText={(text) => {
                let updatedShows = [...shows];
                updatedShows[2] = text;
                setShows(updatedShows);
              }}
            />
            <TextInput
              defaultValue={shows[3]}
              onChangeText={(text) => {
                let updatedShows = [...shows];
                updatedShows[3] = text;
                setShows(updatedShows);
              }}
            />
            <TextInput
              defaultValue={shows[4]}
              onChangeText={(text) => {
                let updatedShows = [...shows];
                updatedShows[4] = text;
                setShows(updatedShows);
              }}
            />
          </List.Accordion>
        </List.Section>
        <Button mode="contained" onPress={updateProfile}>
          Save
        </Button>
      </ScrollView>
    </>
  );
};
