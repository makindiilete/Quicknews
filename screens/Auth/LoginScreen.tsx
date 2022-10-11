import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View, StyleSheet, ScrollView, Alert } from "react-native";
import { AppScreen } from "../../components/AppScreen/AppScreen";
import { AppContainer } from "../../components/AppContainer/AppContainer";
import { AppFullSizedBox } from "../../components/AppFullSizedBox";
import { Button, HelperText, TextInput, Avatar } from "react-native-paper";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../redux/actions/loginAction";

export function LoginScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch<any>();
  const loginState = useSelector((state: any) => state.loginReducer);
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = () => {
    if (login.email === "" || login.password === "") {
      return Alert.alert("Sorry", "Please complete the form to proceed!");
    }
    dispatch(
      loginAction(login.email.toLowerCase().trim(), login.password.trim())
    );
  };
  return (
    <AppScreen>
      <AppContainer>
        <View>
          <AppFullSizedBox />
          <View
            style={{ width: "100%", display: "flex", alignItems: "center" }}
          >
            <Avatar.Image
              size={heightPercentageToDP(20)}
              source={require("../../assets/icon.png")}
            />
          </View>
          <AppFullSizedBox />
          <AppFullSizedBox />
          <TextInput
            label="Email"
            value={login.email}
            onChangeText={(text) => setLogin({ ...login, email: text })}
          />
          <AppFullSizedBox />
          <TextInput
            label="Password"
            value={login.password}
            onChangeText={(text) => setLogin({ ...login, password: text })}
          />
          <AppFullSizedBox />
          <Button
            mode="contained"
            onPress={handleSubmit}
            loading={loginState?.loading}
            disabled={loginState?.loading}
          >
            <Text style={{ color: "#fff", fontWeight: "700" }}>Submit</Text>
          </Button>
        </View>
      </AppContainer>
    </AppScreen>
  );
}
