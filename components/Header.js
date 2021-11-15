import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={Styles.header}>
      <Text style={Styles.title}>My Todos</Text>
    </View>
  );
}

const Styles = StyleSheet.create({
  header: {
    backgroundColor: "coral",
    height: 60,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
});
