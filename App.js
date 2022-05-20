import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import React from 'react';

const App = () => {

  const [name, setname] = React.useState()

  return (
    <View style={styles.container}>
      {/* <Button title="Alert" color="#000" /> */}
      <TextInput style={styles.input} onChangeText={(text) => setname(text)}  />
      <TouchableOpacity onPress={()=> Alert.alert("Information", "Your Name is " + name)} >
        <View style={styles.btn}>
          <Text>Press Here</Text>
        </View>
      </TouchableOpacity>
      <Text>{name}</Text>
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
  input:{
    backgroundColor: 'grey',
    padding: 10
  }
});
