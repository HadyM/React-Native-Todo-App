import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Title({ children }) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
}
