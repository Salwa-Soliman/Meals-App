import React from "react";
import CategoryGridItem from "../components/CategoryGridItem";
import { Center, ScrollView, View } from "native-base";

import { CATEGORIES } from "./../data/dummy_data";
import MainScreen from "../components/MainScreen";

export default function CategoriesScreen({ navigation }) {
  return (
    <MainScreen>
      <ScrollView
        flex={1}
        contentContainerStyle={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {CATEGORIES.map((category) => (
          <CategoryGridItem
            key={category.title}
            _category={category}
            navigation={navigation}
          />
        ))}
      </ScrollView>
    </MainScreen>
  );
}
