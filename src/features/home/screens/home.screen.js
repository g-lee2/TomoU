import React, { useEffect, useState, useContext } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { TextInput } from "react-native-paper";
import { Post } from "../components/post.component";
import { auth, db } from "../../../../firebase-config";
import {
  collection,
  addDoc,
  getDocs,
  orderBy,
  startAfter,
  limit,
  query,
} from "firebase/firestore";
import { ProfileContext } from "../../../services/profile/profile-info.context";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const HomeTab = () => {
  const [postList, setPostList] = useState();
  const [postContent, setPostContent] = useState();
  const { priorProfile } = useContext(ProfileContext);
  const { user } = useContext(AuthenticationContext);

  const createNewPost = async () => {
    await addDoc(collection(db, "posts"), {
      name: priorProfile.name,
      dateAndTime: new Date().toString(),
      content: postContent,
      userId: user.uid,
    });
    setPostContent("");
  };

  useEffect(() => {
    async function fetchData() {
      let q = query(
        collection(db, "posts"),
        orderBy("dateAndTime", "desc"),
        limit(5)
      );
      const querySnapshot = await getDocs(q);
      const querySnapshotTwo = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        return (
          <Post
            key={doc.id}
            name={data.name}
            date={data.dateAndTime}
            post={data.content}
          />
        );
      });
      setPostList(querySnapshotTwo);
    }
    fetchData();
  }, [postList]);

  return (
    <View>
      <TextInput
        value={postContent}
        label="Write something..."
        onChangeText={(p) => setPostContent(p)}
      />
      <TouchableOpacity onPress={createNewPost}>
        <Text>Post</Text>
      </TouchableOpacity>
      {postList}
    </View>
  );
};
