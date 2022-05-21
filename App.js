import React from 'react';
import {Text, View, SectionList} from 'react-native';
import styles from './styles';

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

  const Item = ({title}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )

  return (
    <View style={styles.container}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => <Item title={item} />}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </View>
  );
};

export default App;
