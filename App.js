import {Text, View, Modal, StyleSheet, TextInput, Button} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';

const App = () => {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [modal, setModal] = useState(false);
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={text => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        onChangeText={text => setAge(text)}
      />
      <Button title="Click" onPress={() => setModal(true)} />
      <Modal visible={modal}>
        <View style={styles.container}>
          <Text>Modal Screen</Text>
          <Text>{name}</Text>
          <Text>{age}</Text>
      <Button title="Click" onPress={() => setModal(false)} />

        </View>
      </Modal>
    </View>
  );
};

export default App;
