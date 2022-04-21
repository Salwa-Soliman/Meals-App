import { FlatList, Text, View } from "native-base";
import React, { useLayoutEffect } from "react";
import MainScreen from "../components/MainScreen";
import MealItem from "../components/MealItem";
import { MEALS } from "../data/dummy_data";
import { CATEGORIES } from "./../data/dummy_data";

export default function MealsOverviewScreen({ route, navigation }) {
  const categoryId = route.params.categoryId;
  const categoryMeals = MEALS.filter(
    (meal) => meal.categoryIds.some((id) => id === categoryId)
    // meal.categoryIds.indexOf(categoryId)>=0
  );
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    ).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId, navigation]);
  return (
    <MainScreen>
      <View flex="1">
        <FlatList
          data={categoryMeals}
          renderItem={(itemData) => <MealItem meal={itemData.item} />}
        />
      </View>
    </MainScreen>
  );
}
