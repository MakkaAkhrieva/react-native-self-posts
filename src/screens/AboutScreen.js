import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export const AboutScreen = ({ navigation }) => {
  return (
    <View style={styles.center}>
      <Text>AboutScreen</Text>
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
});
