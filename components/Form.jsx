import React, { useState } from "react";
import { View, StyleSheet, TextInput, Dimensions, Button } from "react-native";

export const Input = ({ setFormData }) => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const registerHandler = () => {
    setFormData({
      firstName,
      lastName,
      email,
    });
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
        style={styles.input}
      />
      <TextInput
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <View style={styles.buttonContainer}>
        <Button title="Register" onPress={registerHandler} color="white" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height - 390,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "60%",
    height: 40,
    borderBottomWidth: 1.5,
    margin: 10,
    borderBottomColor: "#ccc",
  },
  buttonContainer: {
    backgroundColor: "#590DE4",
    width: "40%",
    borderRadius: 5,
    marginTop: 25,
  },
});