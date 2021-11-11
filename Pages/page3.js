import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

function page3() {
  const [name, setName] = useState("Ashish");
  const [age, setAge] = useState(21);
  return (
    <View style={Styles.container}>
      <Text>Enter Your Name</Text>
      <TextInput
        style={Styles.input}
        placeholder="e.g. Ashish Verma"
        onChangeText={(val) => {
          setName(val);
        }}
      />
      <Text>Enter Your Age</Text>
      <TextInput
        style={Styles.input}
        placeholder="e.g. 21"
        onChangeText={(val) => {
          setAge(val);
        }}
        keyboardType="numeric"
      />
      <Text>
        Name: {name}, Age: {age}
      </Text>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderWidth: 2,
    borderColor: "#777",
    width: 200,
    padding: 8,
    margin: 10,
  },
});

export default page3;
