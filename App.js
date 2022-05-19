import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React, {useState} from 'react';

const App = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState();
  const [gender, setGender] = useState('');
  function dismiss() {
    console.log('clicked..');
    Keyboard.dismiss();
  }

  return (
    <TouchableWithoutFeedback onPress={() => dismiss()}>
      <View style={styles.container}>
        <TextInput />

        <Button
          title="Add Item"
          color="black"
          onPress={() =>
            Alert.alert('Error', "Sorry Can't Add Item", [
              {text: 'Yes', onPress: () => console.log('click on yess')},
              {
                text: 'No',
                onPress: () => console.log('click on No..... Never!'),
              },
            ])
          }
        />
        <TextInput placeholder="hello type here" style={styles.input} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: 'grey',
    width: '100%',
  },
});
