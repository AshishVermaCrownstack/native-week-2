import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

export default function TodoList({ item, deleteTodoItem }) {
  return (
    <TouchableOpacity onPress={() => deleteTodoItem(item.key)}>
      <View style={Styles.item}>
        <MaterialIcons name="delete-outline" color="#333" size={18} />
        <Text style={Styles.itemText}>{item.text}</Text>
      </View>
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
    flexDirection: "row",
    alignItems: "center",
  },
  itemText: {
    marginLeft: 10,
  },
});
