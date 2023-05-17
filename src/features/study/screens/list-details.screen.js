import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { TextInput } from "react-native-paper";
import { auth, db } from "../../../../firebase-config";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc as docs,
} from "firebase/firestore";

export const ListDetails = ({ route, navigation }) => {
  const [newVocab, setNewVocab] = useState();
  const [listOfVocab, setListOfVocab] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { itemId } = route.params;

  const addNewVocab = async (vocab, definition) => {
    await addDoc(collection(db, "vocabLists", itemId), {
      vocab,
      definition,
      userId: auth.currentUser.uid,
    });
    setNewVocab("");
  };

  useEffect(() => {
    async function fetchData() {
      const querySnapshot = await getDocs(
        collection(db, "vocabLists").doc(itemId)
      );
      setListOfVocab(querySnapshot);
    }
    fetchData();
    setIsLoading(false);
  }, [itemId]);

  // const deleteVocab = async (itemId) => {
  //   await deleteDoc(docs(db, "lists", listId));
  //   const updatedDocs = [...listOfVocab].filter((item) => item.id !== itemId);
  //   setListOfVocab(updatedDocs);
  // };

  return (
    <View>
      <TextInput placeholder="Vocabulary" />
      <TextInput placeholder="Definition" />
      <TouchableOpacity>
        <Text>Add</Text>
      </TouchableOpacity>
    </View>
  );
};
