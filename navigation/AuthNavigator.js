import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import routes from "./routes";
import { View } from "react-native";
import { LandingScreen } from "../screens/Auth/LandingScreen";
import { RegisterScreen } from "../screens/Auth/RegisterScreen";
import { LoginScreen } from "../screens/Auth/LoginScreen";

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          gestureEnabled: true,
          animationEnabled: false,
        }}
      >
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
    </View>
  );
};

export default AuthNavigator;
