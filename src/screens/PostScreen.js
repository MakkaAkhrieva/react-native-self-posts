import React, { useCallback, useEffect, useLayoutEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  ScrollView,
  Alert,
} from "react-native";
import { THEME } from "../theme";
import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch, useSelector } from "react-redux";
import { toggleBooked } from "../store/acions/post";

export const PostScreen = ({ route, navigation }) => {
  const { postId } = route.params;

  const post = useSelector((state) =>
    state.post.allPosts.find((p) => p.id === postId)
  );


  const booked = useSelector((state) =>
    state.post.bookedPosts.some((post) => post.id === postId)
  );

  const iconName = booked ? "ios-star" : "ios-star-outline";

  const dispatch = useDispatch();

  const removeHandler = () => {
    Alert.alert(
      "Delete post",
      "Are you sure you want to delete the post?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        { text: "Delete", style: "destructive", onPress: () => {} },
      ],
      { cancelable: false }
    );
  };

  useEffect(() => {
    navigation.setParams({ booked: booked });
  }, [booked]);

  const onFavouriteToggle = useCallback(() => {
    dispatch(toggleBooked(postId));
  }, [dispatch, postId]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
          <Item
            title="Take photo"
            iconName={iconName}
            onPress={onFavouriteToggle}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation, booked]);

  return (
    <ScrollView>
      <Image source={{ uri: post.img }} style={styles.image} />
      <View style={styles.textWrap}>
        <Text style={styles.title}>{post.text}</Text>
      </View>
      <Button
        title="Delete"
        color={THEME.DANGER_COLOR}
        onPress={removeHandler}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  textWrap: {
    padding: 10,
  },
  title: {
    fontFamily: "open-regular",
  },
});
