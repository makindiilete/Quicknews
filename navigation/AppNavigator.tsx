import React from "react";
import { Image, Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import routes from "./routes";
import HomeNavigator from "./HomeNavigator";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import Colors from "../constants/Colors";
import AboutNavigator from "./AboutNavigator";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const tabs = () => {
    return (
      <>
        <Tab.Screen
          name={routes.HOME}
          component={HomeNavigator}
          options={{
            tabBarIcon: ({ color, focused }) =>
              focused ? (
                <Image
                  source={require("../assets/imgs/tabs/home.png")}
                  style={{ width: 25, height: 25, resizeMode: "contain" }}
                />
              ) : (
                <Image
                  source={require("../assets/imgs/tabs/home_inactive.png")}
                  style={{ width: 25, height: 25, resizeMode: "contain" }}
                />
              ),
          }}
        />

        <Tab.Screen
          name={routes.ABOUT}
          component={AboutNavigator}
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Image
                  source={require("../assets/imgs/tabs/about.png")}
                  style={{ width: 25, height: 25, resizeMode: "contain" }}
                />
              ) : (
                <Image
                  source={require("../assets/imgs/tabs/about_inactive.png")}
                  style={{ width: 25, height: 25, resizeMode: "contain" }}
                />
              ),
          }}
        />
      </>
    );
  };

  if (Platform.OS === "android") {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarLabelStyle: { fontFamily: "font-bold" },
          tabBarActiveTintColor: Colors.colorDarkOrange,
        }}
      >
        {tabs()}
      </Tab.Navigator>
    );
  } else {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarLabelStyle: { fontFamily: "font-bold" },
          tabBarActiveTintColor: Colors.colorDarkOrange,
        }}
      >
        {tabs()}
      </Tab.Navigator>
    );
  }
};

export default AppNavigator;
