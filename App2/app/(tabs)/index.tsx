import React from 'react';
import { Image, StyleSheet, Platform, Text, Linking } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const githubUrl = 'https://github.com/BullemanG/IST236_2025';

  const handleGithubPress = () => {
    Linking.openURL(githubUrl);
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/siblingpicture.jpg')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Garrett Bulleman</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Email:</ThemedText>
        <ThemedText type="defaultSemiBold">gbullema@hgtc.edu</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Phone Number:</ThemedText>
        <ThemedText>854-854-0804</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">GitHub page:</ThemedText>
        <Text style={styles.link} onPress={handleGithubPress}>
          {githubUrl}
        </Text>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 250,
    width: 450,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});
