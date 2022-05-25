import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorScheme === 'light' ? 'white' : 'grey',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchable: {
    flex: 0.5,
    borderColor: 'black',
    borderWidth: 1,
  },
  text:{
    alignSelf: 'center'
  }
});

export default styles;
