import React, { useState } from "react";
import { View } from "react-native";
import { Form } from "../components";

export const Home = ({ navigation }) => {
  return (
    <View>
      <Form navigation={navigation} />
    </View>
  );
};
