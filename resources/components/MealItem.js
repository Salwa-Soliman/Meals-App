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
import React from "react";
import { TouchableOpacity } from "react-native";
import { Spacing } from "./../constants/Spacing";
import IconButton from "./IconButton";
import MealTitle from "./MealTitle";

export default function MealItem({ meal, navigation }) {
  return (
    <View
      bg={"white"}
      borderRadius="xl"
      shadow={5}
      mx="7"
      my={Spacing.elementMargin}
    >
      <TouchableOpacity
        onPress={() => navigation.navigate("MealDetails", { id: meal.id })}
      >
        <VStack>
          {/* image & title  */}
          <View>
            <Image
              borderTopRadius={"xl"}
              source={{ uri: meal.imageUrl }}
              alt={meal.title}
              w="100%"
              h="200"
            />
            <MealTitle
              affordability={meal.affordability}
              duration={meal.duration}
              complexity={meal.complexity}
            >
              {meal.title}
            </MealTitle>
            <View
              position={"absolute"}
              // top="5"
              p="3"
              alignItems={"flex-end"}
              w="100%"
              bg="red"
              height="100%"
            >
              <IconButton />
            </View>
          </View>
        </VStack>
      </TouchableOpacity>
    </View>
  );
}
