import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NativeBaseProvider } from "native-base";
import CategoriesScreen from "./resources/screens/CategoriesScreen";
import MealsOverviewScreen from "./resources/screens/MealsOverviewScreen";
import MealDetails from "./resources/screens/MealDetails";
import { Colors } from "./resources/constants/Colors";
import FavoritesScreen from "./resources/screens/FavoritesScreen";
import { Ionicons } from "@expo/vector-icons";
import FavoritesContextProvider from "./resources/store/FavoritesContext";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.headerBg },
        headerTintColor: "#fff",
        sceneContainerStyle: { backgroundColor: Colors.bgColor },
        drawerContentStyle: { backgroundColor: Colors.headerBg + "20" },
        drawerActiveTintColor: Colors.primary500,
        drawerInactiveTintColor: Colors.secondary400,
      }}
    >
      <Drawer.Screen
        component={CategoriesScreen}
        name="CategoriesScreen"
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        component={FavoritesScreen}
        name="Favorites"
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="heart" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
export default function App() {
  return (
    <NativeBaseProvider>
      {/* backgroundColor="black" */}
      <StatusBar style="light" />
      <FavoritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: Colors.headerBg },
              headerTintColor: "#fff",
              contentStyle: { backgroundColor: Colors.bgColor },
            }}
          >
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
            />
            <Stack.Screen name="MealDetails" component={MealDetails} />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>
    </NativeBaseProvider>
  );
}
