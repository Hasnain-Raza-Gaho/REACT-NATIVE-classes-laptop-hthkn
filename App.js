import React, {useState} from 'react';
import {View, Text, TextInput, Appearance} from 'react-native';

const App = () => {
  const colorScheme = Appearance.getColorScheme('dark');
  const [name, setName] = useState('');
  const [age, setAge] = useState();

  return (
    <View
      style={{
        backgroundColor: colorScheme === 'light' ? 'white' : 'grey',
      }}>
      <TextInput
      onChangeText={(text) => setName(text)}
      placeholder='Enter Your Name'
        style={{
          marginTop: 20,
          backgroundColor: colorScheme === 'light' ? 'grey' : 'white',
          color: colorScheme === 'light' ? 'white' : 'grey',
        }}
      />
      <TextInput
      placeholder='Enter Your Age'

      onChangeText={(text) => setAge(text)}
      keyboardType='numeric'

        style={{
          marginTop: 20,
          backgroundColor: colorScheme === 'light' ? 'grey' : 'white',
          color: colorScheme === 'light' ? 'white' : 'grey',
        }}
      />

      <Text>
        {name} {age}
      </Text>
    </View>
  );
};

export default App;
