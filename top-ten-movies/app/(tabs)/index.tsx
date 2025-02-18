import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import MovieListItem from '@/components/MovieListItem';
import { movies } from '@/components/moviesData';

const HomeScreen = () => (
  <ThemedView style={styles.container}>
    <ThemedText type="title">Top 10 Movies</ThemedText>
    <FlatList
      data={movies}
      renderItem={({ item }) => (
        <MovieListItem title={item.title} poster={item.poster} rating={item.rating} />
      )}
      keyExtractor={item => item.id}
    />
  </ThemedView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f9fa',
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 16,
    paddingVertical: 12,
    backgroundColor: '#007AFF',
    borderRadius: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  listContainer: {
    paddingBottom: 20,
  },
});

export default HomeScreen;
