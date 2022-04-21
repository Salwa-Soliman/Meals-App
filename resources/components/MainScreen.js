import React from "react";
import { Box, View } from "native-base";
import { Spacing } from "../constants/Spacing";

export default function MainScreen({ children }) {
  return (
    <Box safeArea flex="1" p={Spacing.screenPadding}>
      <View flex={1} w="100%">
        {children}
      </View>
    </Box>
  );
}
