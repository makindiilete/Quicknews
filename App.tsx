import React, { useEffect, useState } from "react";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { Provider as StoreProvider } from "react-redux";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { store } from "./redux";
import AppRootContainer from "./navigation/AppRootContainer";
import Colors from "./constants/Colors";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("db.db");

const customFonts = {
  "font-bold": require("./assets/fonts/Eina03-Bold.ttf"),
  "font-medium": require("./assets/fonts/Eina03-SemiBold.ttf"),
  "font-regular": require("./assets/fonts/Eina03-Regular.ttf"),
  "font-thin": require("./assets/fonts/Eina03-Regular.ttf"),
};

const theme = {
  ...DefaultTheme,
  roundness: 2,
  version: 3,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.colorDarkOrange,
    secondary: Colors.colorLightOrange,
    tertiary: Colors.colorOrange,
  },
};

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  const createDB = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "create table if not exists users (id integer primary key not null, email text, password text);"
      );
    });
  };

  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync(customFonts);
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        await Font.loadAsync(customFonts);
        setAppIsReady(true);
        createDB();
        await SplashScreen.hideAsync();
      }
    }

    prepare();
  }, []);

  if (!appIsReady) {
    return null;
  }

  return (
    <StoreProvider store={store}>
      <PaperProvider theme={theme}>
        <AppRootContainer />
      </PaperProvider>
    </StoreProvider>
  );
}
