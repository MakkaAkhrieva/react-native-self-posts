import React, { useLayoutEffect, useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useDispatch } from "react-redux";
import { THEME } from "../theme";
import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { addPost } from "../store/acions/post";
import { PhotoPicker } from "../components/PhotoPicker";

export const CreateScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);

  const saveHandler = () => {
    const post = {
      date: new Date().toJSON(),
      text: text,
      img: image,
      booked: false,
    };
    dispatch(addPost(post));
    setImage(null);
    setText("");
    navigation.navigate("Main");
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
          <Item
            title="Create"
            iconName="ios-menu"
            onPress={() => navigation.openDrawer()}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>Create new post</Text>
          <TextInput
            style={styles.textarea}
            placeholder="Enter post text"
            value={text}
            onChangeText={setText}
            multiline
          />
          <PhotoPicker image={image} setImage={setImage} />
          <Button
            title="Create post"
            color={THEME.MAIN_COLOR}
            onPress={saveHandler}
            disabled={!text}
          />
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    fontFamily: "open-regular",
    marginVertical: 10,
  },
  textarea: {
    padding: 10,
    marginBottom: 10,
  },
});
