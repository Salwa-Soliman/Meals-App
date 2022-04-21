import { View, Text, Center, Pressable, Button } from "native-base";
import React from "react";
import { useWindowDimensions } from "react-native";
import { Platform } from "react-native";
import { TouchableHighlight } from "react-native";
import { TouchableOpacity } from "react-native";
export default function CategoryGridItem({ _category, navigation }) {
  const { width, height } = useWindowDimensions();

  return (
    <View
      w={width > height ? "30%" : "45%"}
      mb={8}
      shadow="9"
      bg={"amber.400"}
      borderRadius={"xl"}
      overflow={Platform.OS === "android" ? "hidden" : "visible"}
    >
      <Button
        android_ripple={{ color: "#ccc" }}
        py={16}
        borderRadius={"xl"}
        bg={_category.color}
        w="100%"
        _text={{
          fontWeight: "700",
          fontSize: 16,
          color: "#000",
        }}
        onPress={() =>
          navigation.navigate("MealsOverview", { categoryId: _category.id })
        }
      >
        {_category.title}
      </Button>
    </View>
  );
}
