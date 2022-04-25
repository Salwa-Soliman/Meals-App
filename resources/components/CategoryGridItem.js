import { View, Text, Center, Pressable, Button } from "native-base";
import React from "react";
import { ImageBackground, useWindowDimensions } from "react-native";
import { Platform } from "react-native";
import { TouchableHighlight } from "react-native";
import { TouchableOpacity } from "react-native";
import { Colors } from "../constants/Colors";
export default function CategoryGridItem({ _category, navigation }) {
  const { width, height } = useWindowDimensions();
  const src = { uri: _category.bgImage };
  return (
    <View
      w={width > height ? "30%" : "45%"}
      mb={8}
      shadow="9"
      h={40}
      borderRadius={"xl"}
      overflow={Platform.OS === "android" ? "hidden" : "visible"}
    >
      <ImageBackground
        source={src}
        style={{ width: "100%", height: "100%" }}
        mb={8}
        resizeMode="cover"
      >
        <Button
          android_ripple={{ color: "#ccc" }}
          borderRadius={"xl"}
          variant="outline"
          w="100%"
          h="100%"
          bg={Colors.headerBg + "c0"}
          _text={{
            fontWeight: "700",
            fontSize: 16,
            color: "#fff",
          }}
          onPress={() =>
            navigation.navigate("MealsOverview", { categoryId: _category.id })
          }
        >
          {_category.title}
        </Button>
      </ImageBackground>
    </View>
  );
}
