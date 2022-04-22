import { Text, Heading, View, FlatList, HStack } from "native-base";
import React, { useEffect } from "react";
import { LogBox } from "react-native";
// import Unorderedlist from "react-native-unordered-list";
import Unorderedlist from "react-native-unordered-list";
import { Colors } from "../constants/Colors";
export default function MealData({ data, title }) {
  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);

  return (
    <View flex="1">
      <Text
        fontSize={18}
        fontWeight="700"
        underline
        color={Colors.primary500 + "e9"}
      >
        {title}:
      </Text>
      <View my={1} ml={3}>
        <FlatList
          data={data}
          keyExtractor={(item, index) => index}
          renderItem={(itemData) => (
            <View mt="2">
              <Unorderedlist style={{ fontSize: 20 }}>
                <Text fontSize={15}>{itemData.item}</Text>
              </Unorderedlist>
            </View>
          )}
          scrollEnabled={false}
        />
      </View>
    </View>
  );
}
