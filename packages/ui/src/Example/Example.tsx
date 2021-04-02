import React from "react";
import { Text, View } from "react-native";

export interface Props {
  text: string;
}

export const Example: React.FC<Props> = ({ text }) => (
  <View>
    <Text>#{text}#</Text>
  </View>
);
