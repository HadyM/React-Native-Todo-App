import { StatusBar } from "expo-status-bar";
import React, { useReducer } from "react";
import { View } from "react-native";
import Input from "./Components/Input";

export default function App() {
  const [state, dispatch] = useReducer(reducer, intialState);

  return (
    <View>
      <Title>To-Do List App</Title>
      <Input
        placeholder={"Type a todo, then hit enter!..."}
        onSubmitEditing={(title) => dispatch(actionCreators.add(title))}
      />
      <StatusBar style="auto" />
    </View>
  );
}

