import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import MainScreen from "../screens/MainScreen";
import RecipeScreen from "../screens/RecipeScreen";

export interface Recipe {
  id: string;
  title: string;
  text: string;
}

export default function Index() {
  const [currentScreen, setCurrentScreen] = useState<"main" | "recipe">("main");
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const recipeScreenHandler = () => setCurrentScreen("recipe");
  const mainScreenHandler = () => setCurrentScreen("main");

  const addRecipe = (title: string, text: string) => {
    setRecipes([...recipes, { id: Date.now().toString(), title, text }]);
  };

  const deleteRecipe = (id: string) => {
    setRecipes(recipes.filter(recipe => recipe.id !== id));
  };

  let screen = <MainScreen onNext={recipeScreenHandler} />;

  if (currentScreen === "recipe") {
    screen = (
      <RecipeScreen
        onNext={mainScreenHandler}
        recipes={recipes}
        addRecipe={addRecipe}
        deleteRecipe={deleteRecipe}
      />
    );
  }

  return (
    <>
      <StatusBar style="light" />
      <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
