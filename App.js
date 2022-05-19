import {StyleSheet, Text, View, Button, TextInput, Alert} from 'react-native';
import React, {useState} from 'react';

const App = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState();
  const [gender, setGender] = useState('');

  return (
    <View style={styles.container}>
      <TextInput />

      <Button
        title="Add Item"
        color="black"
        onPress={() =>
          Alert.alert('Error', "Sorry Can't Add Item", [
            {text: 'Yes', onPress: () => console.log('click on yess')},
            {text: 'No', onPress: () => console.log('click on No..... Never!')},
          ])
        }
      />
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
