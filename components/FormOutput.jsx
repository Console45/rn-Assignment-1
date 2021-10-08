import React from "react";
import { View, StyleSheet, Text } from "react-native";

export const FormOutput = ({ formData }) => {
  return (
    <View style={styles.container}>
      {formData && (
        <View style={styles.outputContainer}>
          <Text style={styles.text}>First name: {formData.firstName} </Text>
          <Text style={styles.text}>Last name: {formData.lastName} </Text>
          <Text style={styles.text}>Email: {formData.email} </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 300,
    alignItems: "center",
  },
  text: {
    margin: 20,
  },
  outputContainer: {
    width: "100%",
    alignItems: "center",
  },
});
