import React from "react";
import { View, StyleSheet, Image, Button, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";

export const PhotoPicker = ({ image, setImage }) => {
  const takePhoto = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      quality: 0.7,
      allowsEditing: false,
      aspect: [16, 9],
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    } else {
      Alert.alert("Error", "Try once more", [
        {
          text: "Cancel",
          onPress: () => console.log("error"),
          style: "cancel",
        },
      ]);
    }
  };

  return (
    <View style={styles.wrapper}>
      <Button title="Take photo" onPress={takePhoto} />
      {image && <Image style={styles.image} source={{ uri: image }} />}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: 200,
    marginTop: 10,
  },
});
