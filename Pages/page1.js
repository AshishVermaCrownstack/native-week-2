import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function page1() {
  return (
    <View style={Styles.container}>
      <View style={Styles.header}>
        <Text style={Styles.boldText}>Hello World</Text>
      </View>
      <View style={Styles.body}>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing.</Text>
        <Text style={Styles.boldText}>
          Lorem ipsum dolor sit amet, <Text>Testing</Text> consectetur
          adipiscing.
        </Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing.</Text>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    backgroundColor: "pink",
    padding: 20,
  },
  boldText: {
    fontWeight: "bold",
  },
  body: {
    backgroundColor: "yellow",
    padding: 20,
  },
});
