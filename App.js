import React from 'react';
import {Text, View, Switch} from 'react-native';
import styles from './styles';

const App = () => {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => {
    console.log('clicked');
    setIsEnabled(prevState => !prevState);
  };
  return (
    <View style={styles.container}>
      <Text>Switch Tutorial</Text>
      <Switch
        trackColor={{false: 'grey', true: 'Green'}}
        thumbColor={isEnabled ? 'red' : 'pink'}
        onValueChange={() => toggleSwitch()}
        value={isEnabled}
      />
    </View>
  );
};

export default App;
