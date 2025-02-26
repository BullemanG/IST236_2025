import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface MenuItemProps {
  name: string;
  image: any;
  price: number;
}

const MenuItem: React.FC<MenuItemProps> = ({ name, image, price }) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>${price.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 8,
    borderRadius: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    color: '#888',
  },
});

export default MenuItem;
