import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

const App = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./src/assets/image1.jpg')}
        style={{height: 200, width: 200, tintColor: 'yellow'}}
      />
    </View>
  );
};

export default App;
