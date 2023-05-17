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
import { doc as docs, setDoc } from "firebase/firestore";
import { ProfileContext } from "../../../services/profile/profile-info.context";

export const EditProfile = ({ navigation }) => {
  const { priorProfile } = useContext(ProfileContext);
  const [jlptLevel, setJlptLevel] = useState();
  const [livesInJapan, setLivesInJapan] = useState();
  const [name, setName] = useState(priorProfile?.name);
  const [bio, setBio] = useState(priorProfile?.bio);
  const [textbooks, setTextbooks] = useState({
    firstInput: priorProfile?.textbooks?.firstInput,
    secondInput: priorProfile?.textbooks?.secondInput,
    thirdInput: priorProfile?.textbooks?.thirdInput,
    fourthInput: priorProfile?.textbooks?.fourthInput,
    fifthInput: priorProfile?.textbooks?.fifthInput,
  });
  const [influencers, setInfluencers] = useState({
    firstInput: priorProfile?.influencers?.firstInput,
    secondInput: priorProfile?.influencers?.secondInput,
    thirdInput: priorProfile?.influencers?.thirdInput,
    fourthInput: priorProfile?.influencers?.fourthInput,
    fifthInput: priorProfile?.influencers?.fifthInput,
  });
  const [books, setBooks] = useState({
    firstInput: priorProfile?.books?.firstInput,
    secondInput: priorProfile?.books?.secondInput,
    thirdInput: priorProfile?.books?.thirdInput,
    fourthInput: priorProfile?.books?.fourthInput,
    fifthInput: priorProfile?.books?.fifthInput,
  });
  const [music, setMusic] = useState({
    firstInput: priorProfile?.music?.firstInput,
    secondInput: priorProfile?.music?.secondInput,
    thirdInput: priorProfile?.music?.thirdInput,
    fourthInput: priorProfile?.music?.fourthInput,
    fifthInput: priorProfile?.music?.fifthInput,
  });
  const [shows, setShows] = useState({
    firstInput: priorProfile?.shows?.firstInput,
    secondInput: priorProfile?.shows?.secondInput,
    thirdInput: priorProfile?.shows?.thirdInput,
    fourthInput: priorProfile?.shows?.fourthInput,
    fifthInput: priorProfile?.shows?.fifthInput,
  });

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
      console.log("Profile updated successfully");
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
          defaultValue={priorProfile.name}
          placeholder="name"
          onChangeText={(n) => setName(n)}
        />
        <TextInput
          defaultValue={priorProfile.bio}
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
              defaultValue={priorProfile.textbooks.firstInput}
              onChangeText={(text) =>
                setTextbooks({ ...textbooks, firstInput: text })
              }
            />
            <TextInput
              defaultValue={priorProfile.textbooks.secondInput}
              onChangeText={(text) =>
                setTextbooks({ ...textbooks, secondInput: text })
              }
            />
            <TextInput
              defaultValue={priorProfile.textbooks.thirdInput}
              onChangeText={(text) =>
                setTextbooks({ ...textbooks, thirdInput: text })
              }
            />
            <TextInput
              defaultValue={priorProfile.textbooks.fourthInput}
              onChangeText={(text) =>
                setTextbooks({ ...textbooks, fourthInput: text })
              }
            />
            <TextInput
              defaultValue={priorProfile.textbooks.fifthInput}
              onChangeText={(text) =>
                setTextbooks({ ...textbooks, fifthInput: text })
              }
            />
          </List.Accordion>
          <List.Accordion title="Podcast/Youtubers">
            <TextInput
              defaultValue={priorProfile.influencers.firstInput}
              onChangeText={(text) =>
                setInfluencers({ ...influencers, firstInput: text })
              }
            />
            <TextInput
              defaultValue={priorProfile.influencers.secondInput}
              onChangeText={(text) =>
                setInfluencers({ ...influencers, secondInput: text })
              }
            />
            <TextInput
              defaultValue={priorProfile.influencers.thirdInput}
              onChangeText={(text) =>
                setInfluencers({ ...influencers, thirdInput: text })
              }
            />
            <TextInput
              defaultValue={priorProfile.influencers.fourthInput}
              onChangeText={(text) =>
                setInfluencers({ ...influencers, fourthInput: text })
              }
            />
            <TextInput
              defaultValue={priorProfile.influencers.fifthInput}
              onChangeText={(text) =>
                setInfluencers({ ...influencers, fifthInput: text })
              }
            />
          </List.Accordion>
          <List.Accordion title="Books I Read">
            <TextInput
              defaultValue={priorProfile.books.firstInput}
              onChangeText={(text) => setBooks({ ...books, firstInput: text })}
            />
            <TextInput
              defaultValue={priorProfile.books.secondInput}
              onChangeText={(text) => setBooks({ ...books, secondInput: text })}
            />
            <TextInput
              defaultValue={priorProfile.books.thirdInput}
              onChangeText={(text) => setBooks({ ...books, thirdInput: text })}
            />
            <TextInput
              defaultValue={priorProfile.books.fourthInput}
              onChangeText={(text) => setBooks({ ...books, fourthInput: text })}
            />
            <TextInput
              defaultValue={priorProfile.books.fifthInput}
              onChangeText={(text) => setBooks({ ...books, fifthInput: text })}
            />
          </List.Accordion>
          <List.Accordion title="Songs/Artists">
            <TextInput
              defaultValue={priorProfile.music.firstInput}
              onChangeText={(text) => setMusic({ ...music, firstInput: text })}
            />
            <TextInput
              defaultValue={priorProfile.music.secondInput}
              onChangeText={(text) => setMusic({ ...music, secondInput: text })}
            />
            <TextInput
              defaultValue={priorProfile.music.thirdInput}
              onChangeText={(text) => setMusic({ ...music, thirdInput: text })}
            />
            <TextInput
              defaultValue={priorProfile.music.fourthInput}
              onChangeText={(text) => setMusic({ ...music, fourthInput: text })}
            />
            <TextInput
              defaultValue={priorProfile.music.fifthInput}
              onChangeText={(text) => setMusic({ ...music, fifthInput: text })}
            />
          </List.Accordion>
          <List.Accordion title="Shows/Movies">
            <TextInput
              defaultValue={priorProfile.shows.firstInput}
              onChangeText={(text) => setShows({ ...shows, firstInput: text })}
            />
            <TextInput
              defaultValue={priorProfile.shows.secondInput}
              onChangeText={(text) => setShows({ ...shows, secondInput: text })}
            />
            <TextInput
              defaultValue={priorProfile.shows.thirdInput}
              onChangeText={(text) => setShows({ ...shows, thirdInput: text })}
            />
            <TextInput
              defaultValue={priorProfile.shows.fourthInput}
              onChangeText={(text) => setShows({ ...shows, fourthInput: text })}
            />
            <TextInput
              defaultValue={priorProfile.shows.fifthInput}
              onChangeText={(text) => setShows({ ...shows, fifthInput: text })}
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
