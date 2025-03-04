import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Recipe } from "../app/index";

type RecipeItemProps = {
  recipe: Recipe;
  onView: () => void;
  onDelete: () => void;
};

export default function RecipeItem({ recipe, onView, onDelete }: RecipeItemProps) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{recipe.title}</Text>
      <TouchableOpacity style={styles.viewButton} onPress={onView}>
        <Text style={styles.buttonText}>View</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  title: {
    flex: 1,
    fontSize: 16,
    fontWeight: "bold",
  },
  viewButton: {
    backgroundColor: "#ffa500",
    padding: 8,
    borderRadius: 5,
    marginRight: 5,
  },
  deleteButton: {
    backgroundColor: "#ff4444",
    padding: 8,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

