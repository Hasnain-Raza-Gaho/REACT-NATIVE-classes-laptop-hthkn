import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';

const App = () => {
  const [Count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text>{Count}</Text>
      <Pressable
        style={({pressed}) => [{backgroundColor: pressed ? 'red' : 'yellow'}]}
        onPress={() => setCount(Count + 1)}>
        {({pressed})=> <Text>{pressed ? 'Pressed' : 'Press Me'}</Text>}
      </Pressable>
    </View>
  );
};

export default App;
