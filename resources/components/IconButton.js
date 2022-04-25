import React, { useState, useContext } from "react";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { Colors } from "./../constants/Colors";
import { FavoritesContext } from "./../store/FavoritesContext";

export default function IconButton({ mealId }) {
  const FavoritesCtx = useContext(FavoritesContext);
  let isFavoriteMeal = FavoritesCtx.ids.includes(mealId);

  function toggleFavoriteStatus() {
    isFavoriteMeal
      ? FavoritesCtx.removeFavorite(mealId)
      : FavoritesCtx.addFavorite(mealId);
  }

  return (
    <TouchableOpacity onPress={toggleFavoriteStatus}>
      <Ionicons
        name={isFavoriteMeal ? "heart" : "heart-outline"}
        color={isFavoriteMeal ? Colors.primary500 : "#fff"}
        size={30}
      />
    </TouchableOpacity>
  );
}
