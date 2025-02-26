import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Title from '../../components/Title';
import MenuItem from '../../components/MenuItem';

type RootStackParamList = {
  Home: undefined;
  Menu: undefined;
};

type MenuScreenProps = NativeStackScreenProps<RootStackParamList, 'Menu'>;

const menuItems = [
  { id: '1', name: 'Cheese Pizza', image: require('../../assets/images/cheesepizza.jpg'), price: 9.99 },
  { id: '2', name: 'Meat Pizza', image: require('../../assets/images/meatpizza.jpg'), price: 12.99 },
  { id: '3', name: 'Pepporoni Pizza', image: require('../../assets/images/cheesepizza.jpg'), price: 9.99 },
  { id: '4', name: 'Pinapple Pizza', image: require('../../assets/images/meatpizza.jpg'), price: 12.99 },
  { id: '5', name: 'Cheese Bread', image: require('../../assets/images/cheesepizza.jpg'), price: 9.99 },

];

const MenuScreen: React.FC<MenuScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Title>Menu</Title>
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MenuItem name={item.name} image={item.image} price={item.price} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
});

export default MenuScreen;