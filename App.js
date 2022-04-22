import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider } from "native-base";
import CategoriesScreen from "./resources/screens/CategoriesScreen";
import MealsOverviewScreen from "./resources/screens/MealsOverviewScreen";
import MealDetails from "./resources/screens/MealDetails";
import { Colors } from "./resources/constants/Colors";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      {/* backgroundColor="black" */}
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: Colors.headerBg },
            headerTintColor: "#fff",
            contentStyle: { backgroundColor: Colors.bgColor },
          }}
        >
          <Stack.Screen
            name="CategoriesScreen"
            component={CategoriesScreen}
            options={{
              title: "All Categories",
            }}
          />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
          <Stack.Screen name="MealDetails" component={MealDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
