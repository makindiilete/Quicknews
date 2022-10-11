import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import routes from "./routes";
import { AboutScreen } from "../screens/About/AboutScreen";

const Stack = createNativeStackNavigator<any>();

const AboutNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name={routes.ABOUT} component={AboutScreen} />
  </Stack.Navigator>
);

export default AboutNavigator;
