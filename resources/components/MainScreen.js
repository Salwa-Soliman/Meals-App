import React from "react";
import { View } from "native-base";
import { Spacing } from "../constants/Spacing";

export default function MainScreen({ children }) {
  return (
    <View flex="1" p={Spacing.screenPadding}>
      {children}
    </View>
  );
}
