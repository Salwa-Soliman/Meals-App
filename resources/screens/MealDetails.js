import React, { useLayoutEffect } from "react";
import { useWindowDimensions } from "react-native";
import { Image, View } from "native-base";
import { MEALS } from "../data/dummy_data";
import MainScreen from "./../components/MainScreen";
import Meal from "../components/Meal";
import IconButton from "../components/IconButton";

export default function MealDetails({ navigation, route }) {
  const { width, height } = useWindowDimensions();
  const landscape = width > height;

  const mealId = route.params.id;
  const mealData = MEALS.find((meal) => meal.id === mealId);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <IconButton mealId={mealId} />,
    });
  }, [navigation]);

  return (
    <View flexDirection={landscape ? "row-reverse" : "column"} flex={1}>
      <Image
        source={{ uri: mealData.imageUrl }}
        alt="meal-image"
        w={landscape ? "40%" : "100%"}
        height={landscape ? "100%" : "45%"}
      />
      <Meal meal={mealData} top={landscape ? 0 : "-5%"} landscape={landscape} />
    </View>
  );
}
