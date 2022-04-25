import React, { useContext, useState } from "react";
import {
  Button,
  Text,
  Box,
  Select,
  CheckIcon,
  Image,
  ScrollView,
} from "native-base";

import MainScreen from "../components/MainScreen";
import { FavoritesContext } from "../store/FavoritesContext";
import { CATEGORIES, MEALS } from "../data/dummy_data";
import MealsList from "../components/MealsList";
import { Colors } from "../constants/Colors";
import { Alert } from "react-native";

export default function FavoritesScreen({ navigation }) {
  const FavoritesCtx = useContext(FavoritesContext);
  const ids = FavoritesCtx.ids;
  const favoriteMeals = MEALS.filter((meal) => ids.includes(meal.id));
  const [category, setCategory] = useState("");

  function navigateToSelectedCategory() {
    !category
      ? Alert.alert(
          "Select a Category!",
          "Please Select a Category to Browse Meals"
        )
      : category === "all"
      ? navigation.navigate("CategoriesScreen")
      : navigation.navigate("MealsOverview", { categoryId: category });
  }
  return (
    <MainScreen>
      {favoriteMeals.length ? (
        <MealsList meals={favoriteMeals} navigation={navigation} />
      ) : (
        <ScrollView
          flex={"1"}
          contentContainerStyle={{
            alignItems: "center",
          }}
        >
          <Image
            source={require("../images/emoji.png")}
            alt="emoji"
            w="50%"
            height={200}
            resizeMode="contain"
          />
          <Text
            textAlign={"center"}
            px={6}
            fontSize="16"
            color={Colors.primary700}
          >
            You haven't added any meals yet. {"\n"} Browse and add meals to
            favorites.
          </Text>
          <Box w="3/4" maxW="300">
            <Select
              color={Colors.primary500}
              selectedValue={category}
              // minWidth="200"
              accessibilityLabel="Choose Category"
              placeholder="Choose Category"
              _selectedItem={{
                bg: Colors.primary500 + "40",
                endIcon: <CheckIcon size="5" color={Colors.primary500} />,
              }}
              my={2}
              onValueChange={(itemValue) => setCategory(itemValue)}
            >
              <Select.Item label="All Categories" value="all" />

              {CATEGORIES.map((category, index) => (
                <Select.Item
                  key={index}
                  label={category.title}
                  value={category.id}
                />
              ))}
            </Select>
          </Box>
          <Button onPress={navigateToSelectedCategory} colorScheme="orange">
            Browse Now!
          </Button>
        </ScrollView>
      )}
    </MainScreen>
  );
}
