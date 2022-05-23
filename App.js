import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import CustomSectionList from './CustomSectionList';

const App = () => {
  const DATA = [
    {
      title: 'Main Items',
      data: ['pizza', 'Burger'],
    },
    {
      title: 'Sides',
      data: ['french Fries', 'Onion Rings'],
    },
    {
      title: 'Drinks',
      data: ['coca cola', 'sprite', 'water'],
    },
    {
      title: 'Desserts',
      data: ['Ice Creams', 'Cake'],
    },
  ];

  return (
    <View style={styles.container}>
      <CustomSectionList data={DATA} />

    </View>
  );
};

export default App;
