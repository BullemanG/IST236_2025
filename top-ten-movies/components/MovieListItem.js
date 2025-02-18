import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const MovieListItem = ({ title, poster, rating }) => (
  <View style={styles.container}>
    <Image source={poster} style={styles.poster} />
    <View style={styles.detailsContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.rating}>⭐ {rating}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  poster: {
    width: 100,
    height: 150,
    borderRadius: 8,
    marginRight: 16,
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  rating: {
    fontSize: 16,
    color: '#666',
  },
});

export default MovieListItem;


