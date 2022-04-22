import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { Colors } from "./../constants/Colors";

export default function IconButton({}) {
  const [addedToFavorite, setAddedToFavorite] = useState(false);
  return (
    <TouchableOpacity onPress={() => setAddedToFavorite(!addedToFavorite)}>
      <Ionicons
        name="heart-sharp"
        size={30}
        // color={addedToFavorite ? Colors.primary400 : "white"}
        color={addedToFavorite ? "#e00000" : "#ddd"}
      />
    </TouchableOpacity>
  );
}
