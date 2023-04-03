import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export const MainScreen = ({ navigation }) => {
  return (
    <View style={styles.center}>
      <Text>MainScreen</Text>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate("About")}
      />
      <Button title="Go to Post" onPress={() => navigation.navigate("Post")} />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
