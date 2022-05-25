import React, {useEffect, useState} from 'react';
import {Text, View, Alert, Button, StyleSheet} from 'react-native';

const App = () => {
  const [name, setName] = useState('');

  const ClickMe = () => {
    Alert.prompt('Welcome', 'Welcome to toyAlert!', [{text: 'OK'}]);
  };
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <Button title="Click" onPress={() => ClickMe()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
