import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, FlatList } from "react-native";
import { TextInput } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";
import { db } from "../../../../firebase-config";
import {
  getDoc,
  doc as docs,
  updateDoc,
  deleteField,
} from "firebase/firestore";
import {
  StyledView,
  StyledTextInput,
  StyledTouchableOpacity,
  ButtonText,
  StyledFlatList,
  ListItemContainer,
  ListItemText,
  DeleteButton,
  DeleteIcon,
} from "../components/study-screen-styles.component";

export const ListDetails = ({ route, navigation }) => {
  const [listOfVocab, setListOfVocab] = useState();
  const [vocabulary, setVocabulary] = useState();
  const [definition, setDefinition] = useState();
  const { itemId } = route.params;

  const addNewVocab = async (vocab, def) => {
    const docRef = docs(db, "lists", itemId);
    await updateDoc(docRef, {
      [vocab]: def,
    });
    setVocabulary("");
    setDefinition("");
  };

  useEffect(() => {
    async function fetchData() {
      const docRef = docs(db, "lists", itemId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        let data = docSnap.data();
        const { userId, title, ...allVocab } = data;
        const dataArray = Object.keys(allVocab)
          .map((key) => ({
            voc: key,
            def: allVocab[key],
          }))
          .sort((a, b) => (a.def.toLowerCase() > b.def.toLowerCase() ? 1 : -1));
        setListOfVocab(dataArray);
      } else {
        console.log("No such document!");
      }
    }
    fetchData();
  }, [itemId, listOfVocab]);

  const deleteVocab = async (vocab) => {
    const docRef = docs(db, "lists", itemId);
    await updateDoc(docRef, {
      [vocab]: deleteField(),
    });
    const updatedDocs = [...listOfVocab].filter(() => !vocab);
    setListOfVocab(updatedDocs);
  };

  const renderLists = ({ item }) => (
    <ListItemContainer>
      <ListItemText>{`${item.voc} : ${item.def}`}</ListItemText>
      <DeleteButton onPress={() => deleteVocab(item.voc)}>
        <DeleteIcon />
      </DeleteButton>
    </ListItemContainer>
  );

  return (
    <StyledView>
      <StyledTextInput
        placeholder="Vocabulary"
        value={vocabulary}
        onChangeText={(v) => setVocabulary(v)}
      />
      <StyledTextInput
        placeholder="Definition"
        value={definition}
        onChangeText={(d) => setDefinition(d)}
      />
      <StyledTouchableOpacity
        onPress={() => addNewVocab(vocabulary, definition)}
      >
        <ButtonText>Add</ButtonText>
      </StyledTouchableOpacity>
      <StyledFlatList
        data={listOfVocab}
        renderItem={renderLists}
        keyExtractor={(item) => item.voc}
      />
    </StyledView>
  );
};
