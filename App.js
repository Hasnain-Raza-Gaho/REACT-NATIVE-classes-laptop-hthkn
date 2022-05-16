import {StyleSheet, Text, View, Button} from 'react-native';
import React, {useState} from 'react';

const App = () => {
  const [name, setName] = useState({name: 'Hasnain', edu: 'BS Hons'});
  const updateInfo = () => {
    setName({
      name: 'Asad',
      edu: 'M.Phil',
    });
  };
  return (
    <View style={styles.container}>
      <Text>
        My Name Is {name.name} and my education is {name.edu}
      </Text>
      <Button title="Change" color="red" onPress={() => updateInfo()} />
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
