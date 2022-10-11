import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import routes from "./routes";
import { LandingScreen } from "../screens/Auth/LandingScreen";
import { RegisterScreen } from "../screens/Auth/RegisterScreen";
import { LoginScreen } from "../screens/Auth/LoginScreen";

const Stack = createNativeStackNavigator<any>();

function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.LANDING}
        component={LandingScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name={routes.REGISTER}
        component={RegisterScreen}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name={routes.LOGIN}
        component={LoginScreen}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
