import React, { useCallback, useEffect, useState } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Text, View, Alert } from "react-native";
import { AppContainer } from "../../components/AppContainer/AppContainer";
import { AppScreen } from "../../components/AppScreen/AppScreen";
import { Avatar, Button, HelperText, TextInput } from "react-native-paper";
import { AppFullSizedBox } from "../../components/AppFullSizedBox";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { useDispatch, useSelector } from "react-redux";
import { registerAction } from "../../redux/actions/registerAction";

export function RegisterScreen() {
  const dispatch = useDispatch<any>();
  const registerState = useSelector((state: any) => state.registerReducer);
  const [register, setRegister] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = () => {
    if (
      register.email === "" ||
      register.password === "" ||
      register.confirmPassword === ""
    ) {
      return Alert.alert("Sorry", "Please complete the form to proceed!");
    }
    dispatch(
      registerAction(
        register.email.toLowerCase().trim(),
        register.password.trim()
      )
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
            value={register.email}
            onChangeText={(text) => setRegister({ ...register, email: text })}
          />
          <AppFullSizedBox />
          <TextInput
            label="Password"
            value={register.password}
            onChangeText={(text) =>
              setRegister({ ...register, password: text })
            }
          />
          <AppFullSizedBox />
          <TextInput
            label="Confirm Password"
            value={register.confirmPassword}
            onChangeText={(text) =>
              setRegister({ ...register, confirmPassword: text })
            }
            error={register.password !== register.confirmPassword}
          />
          {register.password !== register.confirmPassword && (
            <HelperText
              type="error"
              visible={register.password !== register.confirmPassword}
            >
              Password does not match
            </HelperText>
          )}
          <AppFullSizedBox />
          <Button
            mode="contained"
            onPress={handleSubmit}
            loading={registerState?.loading}
            disabled={registerState?.loading}
          >
            <Text style={{ color: "#fff", fontWeight: "700" }}>Submit</Text>
          </Button>
        </View>
      </AppContainer>
    </AppScreen>
  );
}
