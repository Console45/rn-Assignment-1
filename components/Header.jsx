import React from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";

export const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <SafeAreaView>
        <Text style={styles.headerTitle}>{title}</Text>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    flexDirection: "row",
    height: 90,
    backgroundColor: "#590DE4",
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: 18,
    color: "white",
    fontWeight: "500",
  },
});
