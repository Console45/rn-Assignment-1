import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Form } from "../components";

export const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Form navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: "white", flex: 1 },
});
