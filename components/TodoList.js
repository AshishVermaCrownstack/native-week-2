import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function TodoList(props) {
  const { item, pressHandle } = props;

  return (
    <TouchableOpacity onPress={() => pressHandle(item.key)}>
      <Text style={Styles.item}>{item.text}</Text>
    </TouchableOpacity>
  );
}

const Styles = StyleSheet.create({
  item: {
    padding: 15,
    borderWidth: 1,
    borderColor: "#bbb",
    borderStyle: "dashed",
    borderRadius: 10,
    marginTop: 15,
  },
});
