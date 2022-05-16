import {StyleSheet, Text, View, Button, TextInput} from 'react-native';
import React, {useState} from 'react';

const App = () => {
  const [name, setName] = useState('Hasnain');

  return (
    <View style={styles.container}>
      <Text>Enter Your Name Here</Text>
      <TextInput
        placeholder="Enter Your Name..."
        onChangeText={text => setName(text)}
      />
      <Text>My Name is {name}</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
