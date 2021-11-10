import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function page2() {
  const [name, setName] = useState("Ashish");
  const [person, setPerson] = useState({ name: "Nishant", age: 17 });

  const handleBtnPress = () => {
    setName("Versha");
    setPerson({ name: "Shubham", age: 22 });
  };

  return (
    <View style={Styles.container}>
      <Text style={Styles.text}>My name is {name}</Text>
      <Text style={Styles.text}>
        His name is {person.name} and He is {person.age} year's old.
      </Text>
      <View style={Styles.btnContainer}>
        <Button title="Change State" onPress={handleBtnPress} />
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 15,
    textAlign: "center",
    // fontWeight: "bold",
  },
  btnContainer: {
    backgroundColor: "pink",
    padding: 5,
  },
});
