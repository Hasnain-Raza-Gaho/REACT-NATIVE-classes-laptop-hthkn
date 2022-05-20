import React, {useState} from 'react';
import {
  TextInput,
  Text,
  View,
  ActivityIndicator,
  Button,
  Alert,
} from 'react-native';

import styles from './styles';

const App = () => {
  const [name, setName] = useState('');
  const [show, setShow] = useState(false);

  const clickMe = () => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
      Alert.alert('info', 'Thanks of Coming ' + name);
    }, 2000);
  };
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="add text here"
        onChangeText={text => setName(text)}
        style={styles.input}
      />
      <ActivityIndicator size={'large'} color="red" animating={show} />
      <Button title="Show" onPress={() => clickMe()} />
    </View>
  );
};

export default App;
