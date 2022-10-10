import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, ScrollView } from "react-native";
import { AppFullSizedBox } from "../../components/AppFullSizedBox";
import { AppScreen } from "../../components/AppScreen/AppScreen";
import { AppContainer } from "../../components/AppContainer/AppContainer";
import { Text, List, Avatar } from "react-native-paper";
import { AppHalfSizedBox } from "../../components/AppHalfSizedBox";
import { AntDesign } from "@expo/vector-icons";
import { heightPercentageToDP } from "react-native-responsive-screen";

export function AboutScreen() {
  const navigation = useNavigation();
  return (
    <AppScreen>
      <AppContainer>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          <AppFullSizedBox />
          <Text
            variant="displayLarge"
            style={{ fontWeight: "700", fontSize: 20 }}
          >
            Who is Michael Akindiilete?
          </Text>
          <AppHalfSizedBox />
          <View
            style={{ width: "100%", display: "flex", alignItems: "center" }}
          >
            <Avatar.Image
              size={heightPercentageToDP(20)}
              source={require("../../assets/imgs/me.jpg")}
            />
          </View>
          <AppFullSizedBox />
          <Text variant="bodyMedium" style={{ fontSize: 16 }}>
            A Self-taught software developer with commendable work experience
            across the Information Technology Sector.
          </Text>
          <AppHalfSizedBox />
          <Text variant="bodyMedium" style={{ fontSize: 16 }}>
            Skilled in:
          </Text>
          <AppHalfSizedBox />
          <List.Item
            title="ReactJS - Proficient"
            left={(props) => (
              <AntDesign
                name="checkcircle"
                size={20}
                color="black"
                style={{ marginTop: heightPercentageToDP(0.4) }}
              />
            )}
          />
          <List.Item
            title="ReactJS - Proficient"
            left={(props) => (
              <AntDesign
                name="checkcircle"
                size={20}
                color="black"
                style={{ marginTop: heightPercentageToDP(0.4) }}
              />
            )}
          />
          <List.Item
            title="React Native - Proficient"
            left={(props) => (
              <AntDesign
                name="checkcircle"
                size={20}
                color="black"
                style={{ marginTop: heightPercentageToDP(0.4) }}
              />
            )}
          />
          <List.Item
            title="Ionic - Working Knowledge"
            left={(props) => (
              <AntDesign
                name="checkcircle"
                size={20}
                color="black"
                style={{ marginTop: heightPercentageToDP(0.4) }}
              />
            )}
          />
          <List.Item
            title="Angular - Working Knowledge"
            left={(props) => (
              <AntDesign
                name="checkcircle"
                size={20}
                color="black"
                style={{ marginTop: heightPercentageToDP(0.4) }}
              />
            )}
          />
          <List.Item
            title="HTML/CSS - Proficient"
            left={(props) => (
              <AntDesign
                name="checkcircle"
                size={20}
                color="black"
                style={{ marginTop: heightPercentageToDP(0.4) }}
              />
            )}
          />
          <List.Item
            title="NodeJS/ExpressJS - Working Knowledge"
            left={(props) => (
              <AntDesign
                name="checkcircle"
                size={20}
                color="black"
                style={{ marginTop: heightPercentageToDP(0.4) }}
              />
            )}
          />
          <List.Item
            title="Adobe Photoshop - Working Knowledge"
            left={(props) => (
              <AntDesign
                name="checkcircle"
                size={20}
                color="black"
                style={{ marginTop: heightPercentageToDP(0.4) }}
              />
            )}
          />
          <List.Item
            title="Adobe Illustrator - Working Knowledge"
            left={(props) => (
              <AntDesign
                name="checkcircle"
                size={20}
                color="black"
                style={{ marginTop: heightPercentageToDP(0.4) }}
              />
            )}
          />
          <AppHalfSizedBox />
          <Text variant="bodyMedium" style={{ fontSize: 16 }}>
            Enjoys the thrill of working on new and exciting products. Looking
            to work on more exciting and challenging projects to improve the
            tech space. Strong design professional with a Bachelor of Technology
            in Industrial Design from the Federal University of Technology,
            Akure.
          </Text>
          <AppFullSizedBox />
        </ScrollView>
      </AppContainer>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {},
});
