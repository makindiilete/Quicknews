import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import routes from "./routes";
import { AboutScreen } from "../screens/About/AboutScreen";

const Stack = createStackNavigator();

const AboutNavigator = () => (
  //  With modal mode, our screens we pop up from bottom like a modal and we can pull it down to remove it from the stack instead of the default mode which slides from the right
  <Stack.Navigator>
    <Stack.Screen name={routes.ABOUT} component={AboutScreen} />
  </Stack.Navigator>
);

export default AboutNavigator;
