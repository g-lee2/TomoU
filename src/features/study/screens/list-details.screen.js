import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, FlatList } from "react-native";
import { TextInput } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";
import { auth, db } from "../../../../firebase-config";
import {
  collection,
  addDoc,
  getDoc,
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

  // const deleteVocab = async (id, vocab) => {
  //   const docRef = docs(db, "lists", id);
  //   await updateDoc(docRef, {
  //     vocab: deleteField(),
  //   });
  //   const updatedDocs = [...listOfVocab].filter(!vocab);
  //   setListOfVocab(updatedDocs);
  // };
  // console.log(listOfVocab);

  const renderLists = ({ item }) => (
    <View>
      <Text>
        {item.voc} : {item.def}
      </Text>
    </View>
  );

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
      <View>
        <FlatList
          data={listOfVocab}
          renderItem={renderLists}
          keyExtractor={(item) => item.voc}
        />
      </View>
    </>
  );
};
