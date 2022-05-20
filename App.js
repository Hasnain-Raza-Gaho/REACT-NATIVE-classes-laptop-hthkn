import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'lemon'}}>
      <View style={{flex: 1, backgroundColor: 'red'}}></View>
      <View style={{flex: 1, backgroundColor: 'blue'}}></View>
      <View style={{flex: 1, backgroundColor: 'grey'}}></View>
      <View style={{flex: 1, backgroundColor: '#e43'}}></View>
      <View style={{flex: 1, backgroundColor: '#fab'}}></View>
      <View style={{flex: 4, backgroundColor: 'yellow'}}></View>
    </View>
  );
};

export default App;
