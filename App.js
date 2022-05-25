import React, {useState} from 'react';
import {Button, Text, View, StyleSheet, TextInput, Alert} from 'react-native';
import Slider from '@react-native-community/slider';

const App = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter Your Name"
        onChangeText={(text) => setName(text.toString())}
        value={name}
        style={{backgroundColor: 'yellow', padding: 20, width: '90%'}}
      />
      <Text style={{fontSize: 30}}>Age: {Math.floor(age)}</Text>

      <Slider
        style={{width: 300, height: 50}}
        minimumValue={18}
        maximumValue={150}
        onValueChange={value => setAge(Math.floor(value))}
        thumbTintColor="yellow"
      />

      <Button
        title="Submit"
        onPress={() =>
          Alert.alert("Welcome", "Hello"+ name + ",Welcome to our app and your " + age + " years old!" )
        }
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
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  paragraph: {
    margin: 24,
    textAlign: 'center',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default App;
