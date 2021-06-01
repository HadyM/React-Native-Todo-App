import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Title({ children }) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "rgb(242, 22, 22)",
    padding: 15,
  },
  title: {
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
    paddingTop: 25,
  },
});
