import React from 'react';
import { Text, StyleSheet, useWindowDimensions } from 'react-native';

interface TitleProps {
  children: React.ReactNode;
}

function Title({ children }: TitleProps) {
  const { width, height } = useWindowDimensions();
  return <Text style={[styles.title, {fontSize: width * 0.13 } ]}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontSize: 48,
    textAlign: "center",
    textShadowColor: "black",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
    paddingHorizontal: 10,
    fontFamily: "Mountain",
  },
});

export default Title;