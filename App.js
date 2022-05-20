import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';

const App = () => {
  const [name, setname] = React.useState(0);

  React.useEffect(() => {
    if(name>10){

      console.warn('your DOM is updating...');
    }
  });

  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <Button title="update" onPress={() => setname(name + 1)} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  btn: {
    backgroundColor: 'yellow',
    padding: 20,
    marginTop: 30,
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'green',
    borderRadius: 20,
  },
  input: {
    backgroundColor: 'grey',
    padding: 10,
  },
});
