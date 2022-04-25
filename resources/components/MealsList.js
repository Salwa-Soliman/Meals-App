import React from "react";
import { ScrollView } from "native-base";
import MealItem from "./MealItem";
export default function MealsList({ meals, navigation }) {
  return (
    <ScrollView
      flex="1"
      contentContainerStyle={{
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      {meals.map((meal, index) => {
        return <MealItem key={index} meal={meal} navigation={navigation} />;
      })}
    </ScrollView>
  );
}
