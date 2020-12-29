import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "./src/Screens/SearchScreen";
import ResultsShow from "./src/Screens/ResultsShowScreen";

const Stack = createStackNavigator();
export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SearchScreen">
          <Stack.Screen name="Business Search" component={SearchScreen} />
          <Stack.Screen
            name="ResultsShow"
            component={ResultsShow}
            options={{
              title: "Results",
              headerShown: true,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
