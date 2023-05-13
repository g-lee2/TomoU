import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, FlatList, Text } from "react-native";
import { TextInput, Chip } from "react-native-paper";
import {
  StyledListView,
  TextView,
  ChipView,
  ListItems,
  ListContainer,
} from "../components/study-screen-styles.component";
import { auth, db } from "../../../../firebase-config";
import { collection, addDoc, getDocs } from "firebase/firestore";
import Icon from "react-native-vector-icons/FontAwesome";

export const StudyTab = ({ navigation }) => {
  const [newList, setNewList] = useState();
  const [listOfLists, setListOfLists] = useState();

  const addNewList = async (title) => {
    await addDoc(collection(db, "lists"), {
      title,
      userId: auth.currentUser.uid,
    });
    setNewList("");
  };

  useEffect(() => {
    async function fetchData() {
      const querySnapshot = await getDocs(collection(db, "lists"));
      const filteredDocs = querySnapshot.docs
        .filter((doc) => doc.data().userId === auth.currentUser.uid)
        .map((doc) => ({ id: doc.id, ...doc.data() }));
      setListOfLists(filteredDocs);
    }
    fetchData();
  }, [newList]);

  const renderLists = ({ item }) => {
    return (
      <ListContainer>
        <ListItems>{item.title}</ListItems>
        <Icon name="trash-o" size={20} />
      </ListContainer>
    );
  };

  return (
    <>
      <StyledListView>
        <TextView>
          <TextInput value={newList} onChangeText={setNewList} />
        </TextView>
        <ChipView>
          <TouchableOpacity onPress={() => addNewList(newList)}>
            <Chip>Add</Chip>
          </TouchableOpacity>
        </ChipView>
      </StyledListView>
      <FlatList
        data={listOfLists}
        renderItem={renderLists}
        keyExtractor={(item) => item.id}
      />
    </>
  );
};
