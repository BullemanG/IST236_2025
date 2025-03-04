import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

type AddRecipeScreenProps = {
  onAdd: (title: string, text: string) => void;
  onCancel: () => void;
};

export default function AddRecipeScreen({ onAdd, onCancel }: AddRecipeScreenProps) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <TextInput placeholder="Recipe Title" value={title} onChangeText={setTitle} style={styles.input} />
      <TextInput placeholder="Recipe Text" value={text} onChangeText={setText} style={styles.input} multiline />
      <Button title="Save" onPress={() => { onAdd(title, text); onCancel(); }} />
      <Button title="Cancel" onPress={onCancel} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: { borderBottomWidth: 1, marginBottom: 10, padding: 5 },
});
