/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Calendar } from "./src/screens/Calendar";
import FortyTwoFortyThree from "./src/screens/FortyTwoFortyThree";
import AdamOgEva from "./src/screens/AdamOgEva";
import CafeCam from "./src/screens/CafeCam";
import MainMenu from "./src/screens/MainMenu";
import IsItTuesday from "./src/screens/IsItTuesday";
import BrandBanner from "./src/components/BrandBanner";

const Stack = createStackNavigator();

export type RootStackParamList = {
  "4243": undefined;
  AdamEva: undefined;
  Calendar: undefined;
  Home: undefined;
  CafeCam: undefined;
  IsItTuesday: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={MainMenu} />
      <Stack.Screen name="4243" component={FortyTwoFortyThree} />
      <Stack.Screen name="AdamEva" component={AdamOgEva} />
      <Stack.Screen name="Calendar" component={Calendar} />
      <Stack.Screen name="CafeCam" component={CafeCam} />
      <Stack.Screen name="IsItTuesday" component={IsItTuesday} />
    </Stack.Navigator>
  );
}

function App() {
  const [currentScreenName, setCurrentScreenName] = useState("Home");

  function getActiveRouteName(state: any) {
    const route = state.routes[state.index];
    if (route.state) {
      return getActiveRouteName(route.state);
    }
    return route.name;
  }
  return (
    <NavigationContainer
      onStateChange={(state) => {
        const currentRouteName = state ? getActiveRouteName(state) : "";
        setCurrentScreenName(currentRouteName);
      }}
    >
      <MainStack />
      <BrandBanner currentRouteName={currentScreenName} />
    </NavigationContainer>
  );
}

export default App;
