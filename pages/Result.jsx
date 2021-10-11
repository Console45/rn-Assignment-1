import React from "react";
import { View, Button } from "react-native";
import { FormOutput } from "../components";

export const Result = ({ navigation }) => {
  return (
    <View>
      <FormOutput />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};
