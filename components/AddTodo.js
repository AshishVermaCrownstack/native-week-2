import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

export default function AddTodo({ addTodoItem }) {
  const [text, setText] = useState();

  const changeHandle = (val) => {
    setText(val);
  };
  return (
    <View>
      <TextInput
        style={Styles.input}
        placeholder="new todo ..."
        onChangeText={(val) => changeHandle(val)}
      />
      <Button
        title="Add Todo"
        color="coral"
        onPress={() => addTodoItem(text)}
      />
    </View>
  );
}

const Styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderColor: "#ddd",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
  },
});
