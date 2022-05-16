import {StyleSheet, Text, View, Button, TextInput, Alert} from 'react-native';
import React, {useState} from 'react';

const App = () => {
  const [name, setName] = useState('Hasnain');

  return (
    <View style={styles.container}>
      <Button title="Add Item" color="black" onPress={()=> Alert.alert('Error', "Sorry Can't Add Item")} />
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
