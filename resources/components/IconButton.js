import React, { useState, useContext } from "react";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { Colors } from "./../constants/Colors";
import { FavoritesContext } from "./../store/FavoritesContext";

import { useSelector, useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favorites";

export default function IconButton({ mealId }) {
  let favoriteIds = useSelector((state) => state.favoriteMeals.ids);
  let isFavoriteMeal = favoriteIds.includes(mealId);
  let dispatch = useDispatch();

  function toggleFavoriteStatus() {
    isFavoriteMeal
      ? dispatch(removeFavorite({ id: mealId }))
      : dispatch(addFavorite({ id: mealId }));
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
