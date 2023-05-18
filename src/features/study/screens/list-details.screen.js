import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { TextInput } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";
import { auth, db } from "../../../../firebase-config";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc as docs,
  updateDoc,
  deleteField,
  setDoc,
} from "firebase/firestore";
import {
  ListContainer,
  ListItems,
} from "../components/study-screen-styles.component";

export const ListDetails = ({ route, navigation }) => {
  const [listOfVocab, setListOfVocab] = useState();
  const [vocabulary, setVocabulary] = useState();
  const [definition, setDefinition] = useState();
  // const [isLoading, setIsLoading] = useState(true);
  const { itemId } = route.params;

  const addNewVocab = async (vocab, def) => {
    const docRef = docs(db, "lists", itemId);
    await updateDoc(docRef, {
      vocab: def,
    });
    setVocabulary("");
    setDefinition("");
  };

  useEffect(() => {
    async function fetchData() {
      const querySnapshot = await getDocs(collection(db, "lists").doc(itemId));
      setListOfVocab(querySnapshot);
    }
    fetchData();
    // setIsLoading(false);
  }, [itemId]);

  // const deleteVocab = async (id, vocab) => {
  //   const docRef = docs(db, "lists", id);
  //   await updateDoc(docRef, {
  //     vocab: deleteField(),
  //   });
  //   const updatedDocs = [...listOfVocab].filter(!vocab);
  //   setListOfVocab(updatedDocs);
  // };

  // const renderLists = ({ item }) => {
  //   return (
  //     <ListContainer>
  //       {/* <TouchableOpacity onPress={navigation.goBack()}> */}
  //       {/* </TouchableOpacity> */}
  //       <ListItems>{item.vocab}</ListItems>
  //       {/* <TouchableOpacity onPress={() => deleteVocab(itemId, item)}>
  //         <Icon name="trash-o" size={20} />
  //       </TouchableOpacity> */}
  //     </ListContainer>
  //   );
  // };

  return (
    <>
      <View>
        <TextInput
          placeholder="Vocabulary"
          value={vocabulary}
          onChangeText={(v) => setVocabulary(v)}
        />
        <TextInput
          placeholder="Definition"
          value={definition}
          onChangeText={(d) => setDefinition(d)}
        />
        <TouchableOpacity onPress={() => addNewVocab(vocabulary, definition)}>
          <Text>Add</Text>
        </TouchableOpacity>
      </View>
      {/* <View>{renderLists}</View> */}
    </>
  );
};
