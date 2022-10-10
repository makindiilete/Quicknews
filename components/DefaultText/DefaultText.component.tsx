import React, { FC } from "react";
import { StyleSheet, Text, TextStyle } from "react-native";
import Colors from "../../constants/Colors";

interface DefaultTextProps {
  style?: TextStyle;
  onPress?: () => void;
  numberOfLines?: number;
}

export const DefaultText: FC<DefaultTextProps> = ({
  children,
  style,
  onPress,
  numberOfLines,
}) => {
  return (
    <Text
      style={[styles.text, style]}
      onPress={onPress}
      numberOfLines={numberOfLines}
    >
      {children}
    </Text>
  );
};
const styles = StyleSheet.create({
  text: {
    fontFamily: "font-regular",
    fontSize: 16,
    color: Colors.colorPageBlack,
    maxWidth: "100%",
  },
});
