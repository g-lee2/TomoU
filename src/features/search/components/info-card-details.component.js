import React, { useState, useContext, useEffect } from "react";
import { Text, TouchableOpacity, FlatList, View } from "react-native";
import { Avatar } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { ProfileContext } from "../../../services/profile/profile-info.context";
import { db } from "../../../../firebase-config";
import {
  getDoc,
  doc as docs,
  updateDoc,
  deleteField,
} from "firebase/firestore";

export const InfoCardDetails = ({ route, navigation }) => {
  const { schoolUrl, schoolName, schoolImage, schoolAddress, schoolId } =
    route.params;
  const [isStudent, setIsStuent] = useState(false);
  const [attendees, setAttendees] = useState();
  const { user } = useContext(AuthenticationContext);
  const { priorProfile } = useContext(ProfileContext);

  const iconShown = isStudent ? "school" : "school-outline";

  const setIcon = () => {
    return setIsStuent((prevState) => !prevState);
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
        const updatedDocs = [...attendees].filter((uid) => uid !== user.uid);
        setAttendees(updatedDocs);
      }
    } catch (error) {
      console.log("Error updating document: ", error);
    }
  };

  useEffect(() => {
    async function fetchData() {
      const docRef = docs(db, "schools", schoolId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        let data = docSnap.data();
        const { Address, Name, Image, Url, Region, ...allStudents } = data;
        const dataArray = Object.keys(allStudents)
          .map((key) => ({
            student: key,
          }))
          .sort();
        setAttendees(dataArray);
      } else {
        console.log("No such document!");
      }
    }
    fetchData();
  }, [attendees, schoolId]);

  const renderLists = ({ item }) => {
    return (
      <>
        <Avatar.Icon size={80} icon="account" />
        <Text>{item.uid}</Text>
      </>
    );
  };

  return (
    <>
      <Text>{schoolName}</Text>
      <Icon name="angle-left" size={30} onPress={() => navigation.goBack()} />
      <Text>{schoolUrl}</Text>
      <TouchableOpacity
        onPress={() => {
          setIcon();
          addRemoveStudent();
        }}
      >
        <Ionicons name={iconShown} />
      </TouchableOpacity>
      <View>
        <FlatList
          data={attendees}
          renderItem={renderLists}
          keyExtractor={(item) => item.student}
        />
      </View>
    </>
  );
};
