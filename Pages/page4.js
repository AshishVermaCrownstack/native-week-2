import React, { useState } from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function page4() {
  const [persons, setPersons] = useState([
    { name: "Ashish", id: 1 },
    { name: "Shubham", id: 2 },
    { name: "Versha", id: 3 },
    { name: "Nishant", id: 4 },
    { name: "Abhishek", id: 5 },
    { name: "Shailesh", id: 6 },
    { name: "Sanjeev", id: 7 },
    { name: "Deepak", id: 8 },
  ]);

  const handlePress = (id) => {
    console.log(id);

    const matchPerson = (person) => {
      return person.id != id;
    };

    setPersons((prevPersons) => {
      return prevPersons.filter(matchPerson);
    });
  };

  return (
    <View style={Styles.container}>
      <FlatList
        numColumns={2}
        data={persons}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => handlePress(item.id)}
          >
            <Text style={Styles.text}>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
      {/* <ScrollView>
        {persons.map((person) => {
          return (
            <View key={person.id}>
              <Text style={Styles.text}>{person.name}</Text>
            </View>
          );
        })}
      </ScrollView> */}
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  text: {
    backgroundColor: "pink",
    paddingHorizontal: 20,
    paddingVertical: 30,
    fontSize: 24,
    marginTop: 30,
    marginHorizontal: 10,
    textAlign: "center",
  },
});
