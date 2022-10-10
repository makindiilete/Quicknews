import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StyleProp,
  ViewStyle,
} from "react-native";
import { useSelector } from "react-redux";
import Colors from "../../constants/Colors";
import { AppStatusBar } from "../AppStatusBar/AppStatusBar";

type AppScreenProps = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};
export function AppScreen({ children, style }: AppScreenProps) {
  return (
    <SafeAreaView style={{ backgroundColor: Colors.colorWhite, flex: 1 }}>
      {Platform.OS === "ios" ? (
        <AppStatusBar barStyle="dark-content" />
      ) : (
        <AppStatusBar
          barStyle="dark-content"
          backgroundColor={Colors.colorWhite}
        />
      )}

      <View
        style={[
          style,
          {
            flex: 1,
            backgroundColor: Colors.colorWhite,
          },
        ]}
      >
        {children}
      </View>
    </SafeAreaView>
  );
}
