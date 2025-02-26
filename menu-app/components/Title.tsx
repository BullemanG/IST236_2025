import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../constants/theme';

interface TitleProps {
  children: string;
}

const Title: React.FC<TitleProps> = ({ children }) => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.titleText}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: FONTS.primary,
    color: COLORS.primary,
  },
});

export default Title;