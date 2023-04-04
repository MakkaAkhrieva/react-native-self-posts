import React, { useLayoutEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { DATA } from "../data";
import { Post } from "../components/Post";
import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

export const BookMarkedScreen = ({ navigation }) => {
  const openPostHandler = (post) => {
    navigation.navigate("Post", {
      postId: post.id,
      date: post.date,
      booked: post.booked,
    });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
          <Item
            title="Total Drawer"
            iconName="ios-menu"
            onPress={() => console.log("Press Drawer")}
          />
        </HeaderButtons>
      ),
/*       title: "My Favourites", */
    });
  }, [navigation]);

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={DATA.filter((post) => post.booked)}
        keyExtractor={(post) => post.id.toString()}
        renderItem={({ item }) => <Post post={item} onOpen={openPostHandler} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
});
