import { Heading, Text, View, VStack, Divider, ScrollView } from "native-base";
import React from "react";
import MainScreen from "./MainScreen";
import { Spacing } from "../constants/Spacing";
import MealTitle from "./MealTitle";
import MealData from "./MealData";
import { Colors } from "../constants/Colors";

export default function Meal({ meal, top, landscape }) {
  return (
    <View
      borderRadius={"3xl"}
      p={Spacing.screenPadding}
      position="relative"
      top={landscape ? "0" : "-5%"}
      h={landscape ? "100%" : "60%"}
      w={landscape ? "60%" : "100%"}
      bg={Colors.bgColor}
    >
      <ScrollView flex="1">
        <MealTitle
          duration={meal.duration}
          affordability={meal.affordability}
          complexity={meal.complexity}
          largerFontSize
        >
          {meal.title}
        </MealTitle>

        <VStack
          space={3}
          divider={<Divider bg={"#ffffff"} />}
          // borderWidth={0.5} borderColor={Colors.primary600}
        >
          <MealData title={"Ingredients"} data={meal.ingredients} />
          <MealData title={"Recipe"} data={meal.steps} />
        </VStack>
      </ScrollView>
    </View>
  );
}
