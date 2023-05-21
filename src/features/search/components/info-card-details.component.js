import React, { useState, useContext, useEffect } from "react";
import { Text, TouchableOpacity, FlatList, View } from "react-native";
import { Avatar } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import styled from "styled-components/native";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { ProfileContext } from "../../../services/profile/profile-info.context";
import {
  SearchContext,
  SearchContextProvider,
} from "../../../services/search/search.context";
import { db } from "../../../../firebase-config";
import {
  getDoc,
  doc as docs,
  updateDoc,
  deleteField,
} from "firebase/firestore";
const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

const SchoolName = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const BackIcon = styled(Icon)`
  font-size: 30px;
  margin-bottom: 10px;
`;

const SchoolUrl = styled.Text`
  font-size: 16px;
  margin-bottom: 20px;
`;

const SchoolIcon = styled(Ionicons)`
  font-size: 24px;
  margin-bottom: 10px;
`;

const AttendeesContainer = styled.View`
  margin-top: 20px;
`;

const AttendeeItem = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

const AttendeeAvatar = styled(Avatar.Icon).attrs({
  size: 80,
  icon: "account",
})`
  margin-right: 10px;
`;

const AttendeeName = styled.Text`
  font-size: 18px;
`;

export const InfoCardDetails = ({ route, navigation }) => {
  const { schoolUrl, schoolName, schoolImage, schoolAddress, schoolId } =
    route.params;
  const { user } = useContext(AuthenticationContext);
  const { priorProfile } = useContext(ProfileContext);
  const { attendees, setAttendees, isStudent, setIsStudent } =
    useContext(SearchContext);

  const iconShown = isStudent ? "school" : "school-outline";

  const setIcon = () => {
    return setIsStudent((prevState) => !prevState);
  };

  const addRemoveStudent = async () => {
    try {
      const docRef = docs(db, "schools", schoolId);
      if (!isStudent) {
        await updateDoc(docRef, {
          [user.uid]: priorProfile.name,
        });
      } else {
        await updateDoc(docRef, {
          [user.uid]: deleteField(),
        });
        const updatedDocs = Object.keys(attendees).filter(
          (uid) => uid !== user.uid
        );
        setAttendees(updatedDocs);
      }
    } catch (error) {
      console.log("Error updating document: ", error);
    }
  };

  return (
    <SearchContextProvider>
      <Container>
        <SchoolName>{schoolName}</SchoolName>
        <BackIcon name="angle-left" onPress={() => navigation.goBack()} />
        <SchoolUrl>{schoolUrl}</SchoolUrl>
        <SchoolIcon
          name={iconShown}
          onPress={() => {
            setIcon();
            addRemoveStudent();
          }}
        />
        <AttendeesContainer>
          <FlatList
            data={Object.keys(attendees)}
            renderItem={({ item }) => (
              <AttendeeItem>
                <AttendeeAvatar />
                <AttendeeName>{item}</AttendeeName>
              </AttendeeItem>
            )}
            keyExtractor={(item) => item}
          />
        </AttendeesContainer>
      </Container>
    </SearchContextProvider>
  );
};
