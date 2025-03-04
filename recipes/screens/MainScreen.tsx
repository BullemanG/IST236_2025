import React from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";

type MainScreenProps = {
  onNext: () => void;
};

export default function MainScreen({ onNext }: MainScreenProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recipes App</Text>
      <Image source={require("../assets/images/cookbook.jpg")} style={styles.image} />
      <Button title="View Recipes" onPress={onNext} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  image: { width: 300, height: 200, marginBottom: 20 },
});
