import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import routes from "./routes";
import { HomeScreen } from "../screens/Home/HomeScreen";
import { Text, View } from "react-native";
import Colors from "../constants/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { useDispatch } from "react-redux";
import { logoutAction } from "../redux/actions/loginAction";

const Stack = createNativeStackNavigator<any>();

function HomeNavigator() {
  const dispatch = useDispatch<any>();
  const Title = (props: any) => {
    return (
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 16,
            marginLeft: widthPercentageToDP(40),
          }}
        >
          {props.children}
        </Text>
        <MaterialCommunityIcons
          name="logout"
          size={heightPercentageToDP(3)}
          color={Colors.colorDarkOrange}
          onPress={() => dispatch(logoutAction())}
        />
      </View>
    );
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.HOME}
        component={HomeScreen}
        options={{ headerTitle: (props) => <Title {...props} /> }}
      />
    </Stack.Navigator>
  );
}

export default HomeNavigator;
