import {StyleSheet, Text, View, Button, TextInput, Alert} from 'react-native';
import React, {useState} from 'react';

const App = () => {
  const [data, setData] = useState(0);

  const info = {
    '0': 'this is zero',
    '1': 'this is one',
    '2': 'this is two',
    '3': 'this is three',
    '4': 'this is four',
    '5': 'this is five',
    '6': 'this is six',
    '7': 'this is seven',
    '8': 'this is eight',
    '9': 'this is nine',
  };

  return (
    <View style={styles.container}>
      <Button
        title="Add Item"
        color="black"
        onPress={() => setData(Math.floor(Math.random() * 10))}

      />
      <Text>{data}</Text>
      <Text>{info[data]}</Text>
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
