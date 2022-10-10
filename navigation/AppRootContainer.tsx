import React from "react";
import AppNavigator from "./AppNavigator";
import AuthNavigator from "./AuthNavigator";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import Colors from "../constants/Colors";
import { useSelector } from "react-redux";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.colorDarkOrange,
  },
};
const AppRootContainer = () => {
  // const isLoggedIn = true;
  const isLoggedIn = useSelector(
    (state: any) => state?.loginReducer?.isLoggedIn
  );

  return (
    <NavigationContainer theme={MyTheme}>
      {isLoggedIn ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppRootContainer;
