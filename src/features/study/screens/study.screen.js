import React, { useState } from "react";
import { View, TouchableOpacity, FlatList } from "react-native";
import { List, TextInput, Chip } from "react-native-paper";
import {
  StyledAddListView,
  TextView,
  ChipView,
} from "../components/study-screen-styles.component";
import { auth, db } from "../../../../firebase-config";
import { collection, addDoc } from "firebase/firestore";

export const StudyTab = ({ navigation }) => {
  const [newList, setNewList] = useState();

  const addNewList = async (title) => {
    const docRef = await addDoc(collection(db, "lists"), {
      title,
      userId: auth.currentUser.uid,
    });
    setNewList("");
    console.log(docRef);
  };

  return (
    <>
      <StyledAddListView>
        <TextView>
          <TextInput value={newList} onChangeText={setNewList} />
        </TextView>
        <ChipView>
          <TouchableOpacity onPress={() => addNewList(newList)}>
            <Chip>Add</Chip>
          </TouchableOpacity>
        </ChipView>
      </StyledAddListView>
      <View>
        <FlatList />
      </View>
    </>
  );
};
