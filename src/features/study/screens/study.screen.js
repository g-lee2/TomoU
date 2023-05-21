import React, { useState, useEffect } from "react";
import { TouchableOpacity, FlatList } from "react-native";
import { TextInput, Chip } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  StyledListView,
  TextView,
  ButtonView,
  ListItems,
  ListContainer,
  PostInput,
  PostButton,
  ActivityIndicator,
} from "../components/study-screen-styles.component";
import { auth, db } from "../../../../firebase-config";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc as docs,
} from "firebase/firestore";

export const StudyTab = ({ navigation }) => {
  const [newList, setNewList] = useState();
  const [listOfLists, setListOfLists] = useState();
  const [isLoading, setIsLoading] = useState(true);

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
    setIsLoading(false);
  }, [newList]);

  const deleteListItem = async (listId) => {
    await deleteDoc(docs(db, "lists", listId));
    const updatedDocs = [...listOfLists].filter((item) => item.id !== listId);
    setListOfLists(updatedDocs);
  };

  const renderLists = ({ item }) => {
    return (
      <ListContainer>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("List Details", {
              list: listOfLists,
              itemId: item.id,
            });
          }}
        >
          <ListItems>{item.title}</ListItems>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => deleteListItem(item.id)}>
          <Icon name="trash-o" size={20} />
        </TouchableOpacity>
      </ListContainer>
    );
  };

  return (
    <>
      <StyledListView>
        <PostInput value={newList} onChangeText={setNewList} />
        <ButtonView>
          <PostButton onPress={() => addNewList(newList)} title="Add">
            Add
          </PostButton>
        </ButtonView>
      </StyledListView>
      <FlatList
        data={listOfLists}
        renderItem={renderLists}
        keyExtractor={(item) => item.id}
      />
      <ActivityIndicator animating={isLoading} />
    </>
  );
};
