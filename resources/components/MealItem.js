import React from "react";
import {
  Text,
  View,
  Box,
  VStack,
  Divider,
  Pressable,
  Button,
  Image,
  Heading,
  HStack,
} from "native-base";
import { TouchableOpacity, useWindowDimensions } from "react-native";
import { Spacing } from "./../constants/Spacing";
import IconButton from "./IconButton";
import MealTitle from "./MealTitle";

export default function MealItem({ meal, navigation, numOfMeals }) {
  const { width, height } = useWindowDimensions();
  const landscape = width > height;
  let cardWidth, cardMargin;

  return (
    <View
      bg={"white"}
      borderRadius="xl"
      shadow={5}
      w={landscape ? "45%" : "90%"}
      mx={landscape ? "2.5%" : "5%"}
      my={Spacing.elementMargin}
      overflow="hidden"
    >
      <TouchableOpacity
        onPress={() => navigation.navigate("MealDetails", { id: meal.id })}
      >
        <View borderTopRadius={"xl"}>
          {/* image & title  */}
          <View flex={1}>
            <Image
              borderTopRadius={"xl"}
              source={{ uri: meal.imageUrl }}
              alt={meal.title}
              w="100%"
              minW="100%"
              h="200"
            />
            {/* title  */}
            <MealTitle
              affordability={meal.affordability}
              duration={meal.duration}
              complexity={meal.complexity}
            >
              {meal.title}
            </MealTitle>
            {/* Icon  */}
            <View
              position={"absolute"}
              p="3"
              alignItems={"flex-end"}
              w="100%"
              bg="red"
              height="100%"
            >
              <IconButton mealId={meal.id} />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
