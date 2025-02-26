import React from 'react';
import { View, Button, Image, StyleSheet, Linking } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Title from '../../components/Title';

type RootStackParamList = {
  Home: undefined;
  Menu: undefined;
};

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/foxsden.jpg')} style={styles.image} />
      <Title>Fox's Pizza Den</Title>
      <Button title="Call Us" onPress={() => Linking.openURL('tel:8438310800')} />
      <Button title="Visit Website" onPress={() => Linking.openURL('https://www.foxspizza.com/')} />
      <Button title="Address: 4620 Dick Pond Rd, Myrtle Beach, SC 29588" onPress={() => Linking.openURL('https://www.foxspizza.com/')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 16,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 16,
    borderRadius: 8,
  },
});

export default HomeScreen;