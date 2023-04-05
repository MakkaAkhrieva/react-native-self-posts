import React, { useLayoutEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

export const AboutScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
          <Item
            title="About"
            iconName="ios-menu"
            onPress={() => navigation.openDrawer()}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);
  return (
    <View style={styles.center}>
      <Text>Это лучшее приложение для личных заметок.</Text>
      <Text>
        Версия приложения <Text style={styles.version}>1.0.0</Text>
      </Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  version: {
    fontFamily: "open-bold",
  },
});
