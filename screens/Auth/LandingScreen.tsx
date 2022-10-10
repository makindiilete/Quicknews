import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { AppScreen } from "../../components/AppScreen/AppScreen";
import { AppContainer } from "../../components/AppContainer/AppContainer";
import Carousel from "../../components/Carousel/Carousel.component";
import Layout from "../../constants/Layout";
import Colors from "../../constants/Colors";
import globalStyles from "../../constants/globalStyles";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { blue100 } from "react-native-paper/lib/typescript/styles/colors";
import { Button } from "react-native-paper";
import { DefaultText } from "../../components/DefaultText/DefaultText.component";
import { AppHalfSizedBox } from "../../components/AppHalfSizedBox";
import Routes from "../../navigation/routes";

export function LandingScreen() {
  const navigation = useNavigation<any>();
  return (
    <AppScreen>
      <AppContainer>
        <View style={[globalStyles.alignAuthPagesContent]}>
          <View style={styles.topSection}>
            <Carousel />
          </View>
        </View>
        <View>
          <Button
            mode="contained"
            onPress={() => navigation.navigate(Routes.REGISTER)}
          >
            <Text style={{ color: "#fff", fontWeight: "700" }}>
              Create an account
            </Text>
          </Button>
          <AppHalfSizedBox />
          <Button mode="text" onPress={() => navigation.navigate(Routes.LOGIN)}>
            <Text style={{ color: Colors.colorDarkOrange, fontWeight: "700" }}>
              I already have an account
            </Text>
          </Button>
        </View>
      </AppContainer>
    </AppScreen>
  );
}
const minScreenHeight = Layout.window.height * 0.67;
const styles = StyleSheet.create({
  topSection: {
    paddingTop: 30,
    display: "flex",
    alignItems: "center",
    width: "100%",
    // flex: 1,
    minHeight: heightPercentageToDP(60),
  },
});
