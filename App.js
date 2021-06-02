import { StatusBar } from "expo-status-bar";
import React, { useReducer, useCallback, useEffect, useState } from "react";
import { View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import Title from "./Components/Title";
import Input from "./Components/Input";
import List from "./Components/List";
import { actionCreators, reducer, initialState } from "./Components/todos";

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View
      onLayout={onLayoutRootView}
    >
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
