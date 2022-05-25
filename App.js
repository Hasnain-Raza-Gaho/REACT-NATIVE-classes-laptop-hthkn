import React, {useState} from 'react';
import {Button, Text, View, StyleSheet, TextInput, Alert} from 'react-native';
import { Avatar } from '@rneui/base/dist/Avatar/Avatar';

const App = () => {
  return (
    <View style={styles.container}>
      <Avatar 
      containerStyle={{ height: 400, width: 400 }}
      source={{
        uri: 'https://images.unsplash.com/photo-1537511446984-935f663eb1f4?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870'
      }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 44,
    padding: 8,
  },
});

export default App;
