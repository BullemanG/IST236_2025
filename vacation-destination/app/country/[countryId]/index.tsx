import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Modal, Image } from 'react-native';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { destinations } from '../../../data/destinations'; 

type Destination = {
  id: string;
  countryId: string;
  name: string;
  averageCost: string | null;
  yearFounded: string | null;
  averageRating: number | null;
  description: string;
  imageUrl: any; 
};

const DestinationOverview = () => {
  const { countryId } = useLocalSearchParams();
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const countryDestinations = destinations.filter(
    (dest: Destination) => dest.countryId === countryId
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Text style={styles.backText}>← Back</Text>
      </TouchableOpacity>

      <FlatList
        data={countryDestinations}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.flatListContainer}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => setSelectedDestination(item)}
          >
            <Image source={item.imageUrl} style={styles.image} />
            <View style={styles.details}>
              <Text style={styles.name}>{item.name || 'Unknown Name'}</Text>
              {item.averageCost && <Text>{`Cost: ${item.averageCost}`}</Text>}
              {item.yearFounded && <Text>{`Founded: ${item.yearFounded}`}</Text>}
              {typeof item.averageRating === 'number' && (
                <Text>{`Rating: ${item.averageRating.toFixed(1)} ⭐`}</Text>
              )}
            </View>
          </TouchableOpacity>
        )}
      />

      <Modal
        visible={!!selectedDestination}
        animationType="slide"
        transparent={false}
        onRequestClose={() => setSelectedDestination(null)}
      >
        {selectedDestination && (
          <View style={styles.modalContainer}>
            <Image
              source={selectedDestination.imageUrl}
              style={styles.modalImage}
            />
            <Text style={styles.modalName}>
              {selectedDestination.name || 'Unknown Name'}
            </Text>
            <Text style={styles.modalDescription}>
              {selectedDestination.description || 'No description available.'}
            </Text>
            <TouchableOpacity
              onPress={() => setSelectedDestination(null)}
              style={styles.closeButton}
            >
              <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>
          </View>
        )}
      </Modal>
    </View>
  );
};

export default DestinationOverview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 10,
    padding: 10,
    backgroundColor: '#222',
    borderRadius: 5,
    zIndex: 1,
  },
  backText: {
    color: 'white',
    fontWeight: 'bold',
  },
  flatListContainer: {
    paddingTop: 120,
    paddingBottom: 20,
  },
  item: {
    flexDirection: 'row',
    marginBottom: 12,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    overflow: 'hidden',
    padding: 10,
  },
  image: {
    width: 120,
    height: 100,
    borderRadius: 8,
    marginRight: 10,
  },
  details: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  modalImage: {
    width: 300,
    height: 200,
    marginBottom: 10,
    borderRadius: 10,
  },
  modalName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalDescription: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: '#222',
    padding: 10,
    borderRadius: 8,
  },
  closeText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
