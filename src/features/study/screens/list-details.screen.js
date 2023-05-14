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

export const ListDetails = ({ navigation }) => {
  const [newVocab, setNewVocab] = useState();
  const [listOfVocab, setListOfVocab] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const addNewVocab = async (title) => {
  };

  useEffect(() => {
  }, []);

  const deleteVocab = async (listId) => {
  };

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
