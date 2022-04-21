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

export default function MealItem({ meal }) {
  return (
    <View
      bg={"white"}
      borderRadius="xl"
      shadow={5}
      mx="7"
      my={Spacing.elementMargin}
    >
      <TouchableOpacity>
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
            <Heading textAlign={"center"} fontSize="18" p={2} pb="0">
              {meal.title}
            </Heading>
          </View>
          {/* Details  */}
          <HStack
            justifyContent={"center"}
            alignItems={"center"}
            my={Spacing.elementMargin}
            divider={<Divider w=".5" borderWidth={0.5} bg={"#000000"} />}
          >
            <Text mx={2} fontSize={12}>
              {meal.duration} min
            </Text>
            <Text mx={2} textTransform={"uppercase"} fontSize={12}>
              {meal.complexity}
            </Text>
            <Text mx={2} textTransform={"uppercase"} fontSize={12}>
              {meal.affordability}
            </Text>
          </HStack>
        </VStack>
      </TouchableOpacity>
    </View>
  );
}
