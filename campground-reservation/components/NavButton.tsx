import { Text, View, Pressable, StyleSheet, Dimensions, useWindowDimensions } from "react-native";
import React from "react";

interface NavButtonProps {
  onNext: () => void;
  children: React.ReactNode;
}

const NavButton: React.FC<NavButtonProps> = (props) => {
  const { width, height } = useWindowDimensions();
  return (
    <Pressable 
      onPress={props.onNext} 
      style={({ pressed }) => pressed && styles.pressedItem}
    >
        <View style={styles.buttonContainer}>
            <View style={styles.textContainer}>
                <Text style={[styles.buttonText, { fontSize: width * 0.08 }]}>
                  {props.children}
                </Text>
            </View>
        </View>
    </Pressable>
  );
};

export default NavButton;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#F7C555",
    borderWidth: 5,
    borderColor: "#412722",
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: 1000,
    maxWidth: "70%",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    marginHorizontal: 10,
    marginBottom: Dimensions.get("window").height * 0.05,
    zIndex: 1,
    pointerEvents: "auto",
  },
    buttonText: {
      color: "white",
      fontSize: 25,
      letterSpacing: 2,
      fontWeight: "600",
      textAlign: "center",
      marginVertical: 5,
      textShadowColor: "black",
      textShadowOffset: { width: 2, height: 2 },
      textShadowRadius: 3,
      fontFamily: "Mountain",
    },
    pressedItem: {
      opacity: 0.8,
    }, 
    textContainer: {
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      color: "white",
      fontSize: 24,
      letterSpacing: 2,
      fontWeight: "600",
      textAlign: "center",
      marginVertical: 5,
      textShadowColor: "black",
      textShadowOffset: { width: 2, height: 2 },
      textShadowRadius: 3,
      lineHeight: 55,
    },
});