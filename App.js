import React from 'react';
import {Text, View, Switch} from 'react-native';
import styles from './styles';
import CustomSwitch from './customSwitch';

const App = () => {
  const [location, setLocation] = React.useState(false);
  const [mic, setMic] = React.useState(false);
  const [storage, setStorage] = React.useState(false);

  const toggleLocation = () => {
    setLocation(prevState => !prevState);
  };

  const toggleMic = () => {
    setMic(prevState => !prevState);
  };

  const toggleStorage = () => {
    setStorage(prevState => !prevState);
  };
  return (
    <View style={styles.container}>
      <Text>Location is {location ? 'On' : 'Off'}</Text>
      <CustomSwitch isEnabled={location} toggleSwitch={setLocation} />
      <Text>Mic is {mic ? 'On' : 'Off'}</Text>
      <CustomSwitch isEnabled={mic} toggleSwitch={setMic} />
      <Text>Storage is {storage ? 'On' : 'Off'}</Text>
      <CustomSwitch isEnabled={storage} toggleSwitch={setStorage} />
    </View>
  );
};

export default App;
