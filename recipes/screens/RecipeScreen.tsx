import React, { useState } from "react";
import { View, FlatList, Button, StyleSheet, Modal, Text, TouchableOpacity } from "react-native";
import RecipeItem from "../components/RecipeItem";
import AddRecipeScreen from "./AddRecipeScreen";
import { Recipe } from "../app/index";

type RecipeScreenProps = {
  onNext: () => void;
  recipes: Recipe[];
  addRecipe: (title: string, text: string) => void;
  deleteRecipe: (id: string) => void;
};

export default function RecipeScreen({ onNext, recipes, addRecipe, deleteRecipe }: RecipeScreenProps) {
  const [isAdding, setIsAdding] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Recipes</Text>

      {/* Buttons Section */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.addButton} onPress={() => setIsAdding(true)}>
          <Text style={styles.buttonText}>Add Recipe</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.homeButton} onPress={onNext}>
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
      </View>

      {/* Recipe List */}
      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <RecipeItem
            recipe={item}
            onView={() => setSelectedRecipe(item)}
            onDelete={() => deleteRecipe(item.id)}
          />
        )}
      />

      {/* Add Recipe Modal */}
      <Modal visible={isAdding} animationType="slide">
        <AddRecipeScreen onAdd={addRecipe} onCancel={() => setIsAdding(false)} />
      </Modal>

      {/* View Recipe Modal */}
      <Modal visible={!!selectedRecipe} animationType="fade" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{selectedRecipe?.title}</Text>
            <Text style={styles.modalText}>{selectedRecipe?.text}</Text>
            <TouchableOpacity style={styles.closeButton} onPress={() => setSelectedRecipe(null)}>
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8f8f8",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-around",  
    marginBottom: 20,  
  },
  addButton: {
    backgroundColor: "#4CAF50",
    padding: 12,
    borderRadius: 8,
    width: "40%",  
    alignItems: "center",
  },
  homeButton: {
    backgroundColor: "#2196F3",
    padding: 12,
    borderRadius: 8,
    width: "40%",  
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: "#ff5c5c",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
});
