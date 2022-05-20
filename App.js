import React from 'react';
import {Text, View} from 'react-native';
import CustomButton from './customButton';
import styles from './styles';

const App = () => {
  const [name, setName] = React.useState(false);

  return (
    <View style={styles.container}>
      <CustomButton name="Click Me" />
      <CustomButton name="Dont Click Me" />
    </View>
  );
};

export default App;
