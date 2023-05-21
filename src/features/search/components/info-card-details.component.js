import React, { useState, useContext, useEffect } from "react";
import { Text, TouchableOpacity, FlatList, View } from "react-native";
import { Avatar } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import styled from "styled-components/native";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { ProfileContext } from "../../../services/profile/profile-info.context";
import { db } from "../../../../firebase-config";
import {
  getDoc,
  doc as docs,
  updateDoc,
  deleteField,
} from "firebase/firestore";
import MapView, { Marker } from "react-native-maps";

const SchoolAddress = styled.Text`
  font-size: 16px;
  margin-bottom: 10px;
  color: #555;
`;

const SchoolImage = styled.Image`
  width: 200px;
  height: 200px;
  margin-bottom: 20px;
`;

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
  const {
    schoolUrl,
    schoolName,
    schoolLong,
    schoolLat,
    schoolAddress,
    schoolId,
  } = route.params;
  const { user } = useContext(AuthenticationContext);
  const { priorProfile } = useContext(ProfileContext);
  const [attendees, setAttendees] = useState();
  const [isStudent, setIsStudent] = useState(false);

  const iconShown = isStudent ? (
    <SchoolIcon
      name="school"
      onPress={() => {
        setIcon();
        removeStudent();
      }}
    />
  ) : (
    <SchoolIcon
      name="school-outline"
      onPress={() => {
        setIcon();
        addStudent();
      }}
    />
  );

  const setIcon = () => {
    return setIsStudent((prevState) => !prevState);
  };

  // useEffect(() => {
  //   async function fetchData() {
  //     const docRef = docs(db, "schools", schoolId);
  //     const docSnap = await getDoc(docRef);
  //     if (docSnap.exists()) {
  //       let data = docSnap.data();
  //       const { Address, Name, Image, Url, Region, ...allStudents } = data;
  //       setAttendees(allStudents);
  //     } else {
  //       console.log("No such document!");
  //     }
  //   }
  //   fetchData();
  // }, [schoolId, attendees]);

  const addStudent = async () => {
    try {
      const docRef = docs(db, "schools", schoolId);
      await updateDoc(docRef, {
        [user.uid]: priorProfile.name,
      });
    } catch (error) {
      console.log("Error updating document: ", error);
    }
  };

  const removeStudent = async () => {
    const docRef = docs(db, "schools", schoolId);
    await updateDoc(docRef, {
      [user.uid]: deleteField(),
    });
    const updatedDocs = [...attendees].filter(() => !user.uid);
    setAttendees(updatedDocs);
  };

  return (
    <Container>
      {iconShown}
      <BackIcon name="angle-left" onPress={() => navigation.goBack()} />
      <SchoolName>{schoolName}</SchoolName>
      <SchoolUrl>Website: {schoolUrl}</SchoolUrl>
      <SchoolAddress>Address: {schoolAddress}</SchoolAddress>
      <MapView
        style={{ width: 350, height: 200 }}
        initialRegion={{
          latitude: schoolLong,
          longitude: schoolLat,
          latitudeDelta: 0.4,
          longitudeDelta: 0.4,
        }}
      >
        <Marker
          title={schoolName}
          pinColor="red"
          coordinate={{
            latitude: schoolLat,
            longitude: schoolLong,
          }}
        />
      </MapView>
      {/* <AttendeesContainer>
        <FlatList
          data={attendees}
          renderItem={({ item }) => (
            <AttendeeItem>
              <AttendeeAvatar />
              <AttendeeName>{item.student}</AttendeeName>
            </AttendeeItem>
          )}
          keyExtractor={(item) => item}
        />
      </AttendeesContainer> */}
    </Container>
  );
};
