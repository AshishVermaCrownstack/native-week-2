import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Alert,
  FlatList,
  Keyboard,
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "Make Oats shake", key: 1 },
    { text: "Eat Breakfast", key: 2 },
    { text: "Go to work", key: 3 },
    { text: "Check mails", key: 4 },
  ]);

  const deleteTodoItem = (key) => {
    setTodos((prevTodo) => {
      return prevTodo.filter((item) => item.key != key);
    });
  };

  const addTodoItem = (text) => {
    if (text.length > 3) {
      setTodos((prevTodo) => {
        return [{ text: text, key: Math.random() }, ...prevTodo];
      });
    } else {
      Alert.alert("OOPS!", "Atleast 4 character required", [
        { title: "OK", onPress: () => console.log("alert closed") },
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo addTodoItem={addTodoItem} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoList item={item} deleteTodoItem={deleteTodoItem} />
              )}
            />
          </View>
        </View>
        <StatusBar
          style="auto"
          translucent={false}
          backgroundColor="transparent"
        />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    padding: 30,
  },
  list: {
    flex: 1,
    paddingTop: 20,
  },
});
