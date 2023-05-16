import React, { useState } from "react";
import {
  ProfileView,
  StyledChipEditLong,
  StyledChipEditShort,
  StyledChipEditMedium,
  ChipContainer,
  NameBioTextInput,
} from "../components/profile.styles";
import { ScrollView, View } from "react-native";
import { List, Avatar, TextInput } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";
import { Button } from "react-native-paper";
import { db, auth } from "../../../../firebase-config";
import { doc, setDoc } from "firebase/firestore";

export const EditProfile = ({ navigation }) => {
  const [jlptLevel, setJlptLevel] = useState();
  const [livesInJapan, setLivesInJapan] = useState();
  const [name, setName] = useState();
  const [bio, setBio] = useState();
  const [textbooks, setTextbooks] = useState({
    firstInput: "",
    secondInput: "",
    thirdInput: "",
    fourthInput: "",
    fifthInput: "",
  });
  const [influencers, setInfluencers] = useState({
    firstInput: "",
    secondInput: "",
    thirdInput: "",
    fourthInput: "",
    fifthInput: "",
  });
  const [books, setBooks] = useState({
    firstInput: "",
    secondInput: "",
    thirdInput: "",
    fourthInput: "",
    fifthInput: "",
  });
  const [music, setMusic] = useState({
    firstInput: "",
    secondInput: "",
    thirdInput: "",
    fourthInput: "",
    fifthInput: "",
  });
  const [shows, setShows] = useState({
    firstInput: "",
    secondInput: "",
    thirdInput: "",
    fourthInput: "",
    fifthInput: "",
  });

  const updateProfile = async () => {
    try {
      const userRef = doc(db, "userProfiles", auth.currentUser.uid);
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
          userId: auth.currentUser.uid,
        },
        { merge: true }
      );
      console.log("Profile updated successfully");
      navigation.navigate("My Profile");
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
        <NameBioTextInput placeholder="name" onChangeText={(n) => setName(n)} />
        <TextInput
          placeholder="bio"
          multiline={true}
          onChangeText={(b) => setBio(b)}
        />
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
            <TextInput
              onChangeText={(text) =>
                setTextbooks({ ...textbooks, firstInput: text })
              }
            />
            <TextInput
              onChangeText={(text) =>
                setTextbooks({ ...textbooks, secondInput: text })
              }
            />
            <TextInput
              onChangeText={(text) =>
                setTextbooks({ ...textbooks, thirdInput: text })
              }
            />
            <TextInput
              onChangeText={(text) =>
                setTextbooks({ ...textbooks, fourthInput: text })
              }
            />
            <TextInput
              onChangeText={(text) =>
                setTextbooks({ ...textbooks, fifthInput: text })
              }
            />
          </List.Accordion>
          <List.Accordion title="Podcast/Youtubers">
            <TextInput
              onChangeText={(text) =>
                setInfluencers({ ...influencers, firstInput: text })
              }
            />
            <TextInput
              onChangeText={(text) =>
                setInfluencers({ ...influencers, secondInput: text })
              }
            />
            <TextInput
              onChangeText={(text) =>
                setInfluencers({ ...influencers, thirdInput: text })
              }
            />
            <TextInput
              onChangeText={(text) =>
                setInfluencers({ ...influencers, fourthInput: text })
              }
            />
            <TextInput
              onChangeText={(text) =>
                setInfluencers({ ...influencers, fifthInput: text })
              }
            />
          </List.Accordion>
          <List.Accordion title="Books I Read">
            <TextInput
              onChangeText={(text) => setBooks({ ...books, firstInput: text })}
            />
            <TextInput
              onChangeText={(text) => setBooks({ ...books, secondInput: text })}
            />
            <TextInput
              onChangeText={(text) => setBooks({ ...books, thirdInput: text })}
            />
            <TextInput
              onChangeText={(text) => setBooks({ ...books, fourthInput: text })}
            />
            <TextInput
              onChangeText={(text) => setBooks({ ...books, fifthInput: text })}
            />
          </List.Accordion>
          <List.Accordion title="Songs/Artists">
            <TextInput
              onChangeText={(text) => setMusic({ ...music, firstInput: text })}
            />
            <TextInput
              onChangeText={(text) => setMusic({ ...music, secondInput: text })}
            />
            <TextInput
              onChangeText={(text) => setMusic({ ...music, thirdInput: text })}
            />
            <TextInput
              onChangeText={(text) => setMusic({ ...music, fourthInput: text })}
            />
            <TextInput
              onChangeText={(text) => setMusic({ ...music, fifthInput: text })}
            />
          </List.Accordion>
          <List.Accordion title="Shows/Movies">
            <TextInput
              onChangeText={(text) => setShows({ ...shows, firstInput: text })}
            />
            <TextInput
              onChangeText={(text) => setShows({ ...shows, secondInput: text })}
            />
            <TextInput
              onChangeText={(text) => setShows({ ...shows, thirdInput: text })}
            />
            <TextInput
              onChangeText={(text) => setShows({ ...shows, fourthInput: text })}
            />
            <TextInput
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
