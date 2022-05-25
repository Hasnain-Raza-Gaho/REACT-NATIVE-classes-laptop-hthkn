import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex:1,
    backgroundColor: 'yellow',
    marginTop: 20,
    justifyContent: 'center',
    alignItems:'center'
  },
  text:{
    fontFamily: 'notoserif',
    fontStyle: 'italic',
    fontWeight: 'bold',
    letterSpacing: 3,
    textAlign: 'right',
    textDecorationLine: 'line-through',
    textDecorationColor: 'red',
    textTransform: 'lowercase',
    fontSize: 30
  }
 
});

export default styles;
