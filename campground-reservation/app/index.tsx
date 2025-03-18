import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import HomeScreen from "../app/homeScreen";
import { myStyles as styles } from "../styles/styles";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const Index = () => {
  
  const [fontsLoaded, fontError] = useFonts({
    Mountain: require("../assets/fonts/Mountain.ttf"),
  });

  useEffect(() => {
    async function prepareApp() {
      if (fontsLoaded || fontError) {
        await SplashScreen.hideAsync();
      }
    }
    prepareApp();
  }, [fontsLoaded, fontError]);

  const [currentScreen, setCurrentScreen] = useState("home");

  function homeScreenHandler() {
    setCurrentScreen("home");
  }

  let screen = <HomeScreen onNext={homeScreenHandler} />;

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaProvider style={styles.rootContainer}>{screen}</SafeAreaProvider>
    </>
  );
};

export default Index;