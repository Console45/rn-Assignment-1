import React from "react";
import { View, Button, StyleSheet } from "react-native";
import { FormOutput } from "../components";
import { useStore } from "../hooks";

export const Result = ({ navigation }) => {
  const setFormData = useStore((state) => state.setFormData);
  function goBack() {
    setFormData(undefined);
    navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <FormOutput />
      <Button title="Go back" onPress={goBack} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: { backgroundColor: "white", flex: 1 },
});
