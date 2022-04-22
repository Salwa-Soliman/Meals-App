import React from "react";
import { Heading, View, HStack, Text, Divider } from "native-base";
import { Colors } from "../constants/Colors";
import { Spacing } from "../constants/Spacing";
export default function MealTitle({
  children,
  duration,
  affordability,
  complexity,
  largerFontSize,
}) {
  return (
    <View>
      <Heading
        textAlign={"center"}
        color={Colors.primary500}
        fontSize={largerFontSize ? 20 : 18}
        p={2}
        pb="0"
      >
        {children}
      </Heading>

      {/* Details  */}
      <HStack
        justifyContent={"center"}
        alignItems={"center"}
        mt={Spacing.elementMargin / 2}
        mb={Spacing.elementMargin}
        divider={
          <Divider w=".5" borderWidth={0.5} borderColor={Colors.secondary400} />
        }
      >
        <Text mx={2} fontSize={12} color={Colors.secondary400}>
          {duration} min
        </Text>
        <Text
          mx={2}
          textTransform={"uppercase"}
          fontSize={12}
          color={Colors.secondary400}
        >
          {complexity}
        </Text>
        <Text
          mx={2}
          textTransform={"uppercase"}
          fontSize={12}
          color={Colors.secondary400}
        >
          {affordability}
        </Text>
      </HStack>
    </View>
  );
}
