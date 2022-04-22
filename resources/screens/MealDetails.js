import React, { useLayoutEffect } from "react";
import MainScreen from "./../components/MainScreen";
import { Image, Text } from "native-base";
import { MEALS } from "../data/dummy_data";
import Meal from "../components/Meal";
import IconButton from "../components/IconButton";

export default function MealDetails({ navigation, route }) {
  const mealId = route.params.id;
  const mealData = MEALS.find((meal) => meal.id === mealId);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <IconButton color={"#fff"} />,
    });
  }, [navigation]);

  return (
    <>
      <Image
        source={{ uri: mealData.imageUrl }}
        alt="meal-image"
        w="100%"
        height="45%"
      />
      <Meal meal={mealData} />
    </>
  );
}
