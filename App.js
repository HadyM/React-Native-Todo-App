import { StatusBar } from "expo-status-bar";
import React, { useReducer } from "react";
import { View } from "react-native";
import Title from "./Components/Title";
import Input from "./Components/Input";
import List from "./Components/List";
import { actionCreators, reducer, initialState } from "./Components/todos";

export default function App() {
  const [state, dispatch] = useReducer(reducer, intialState);

  return (
    <View>
      <Title>To-Do List App</Title>
      <Input
        placeholder={"Type a todo, then hit enter!..."}
        onSubmitEditing={(title) => dispatch(actionCreators.add(title))}
      />
      <List
        items={state.items}
        onPressItem={(id) => dispatch(actionCreators.remove(id))}
      />
      <StatusBar style="auto" />
    </View>
  );
}
