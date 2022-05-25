import React, {useState} from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';
import Slider from '@react-native-community/slider';

const App = () => {
  const [range, setRange] = useState(0);

  return (
    <View style={styles.container}>
      <Text
        style={{fontSize: 40, fontWeight: 'bold', margin: 20, opacity: range}}>
        Visible
      </Text>
      <Text
        style={{fontSize: 40, fontWeight: 'bold', margin: 20, opacity: range}}>
        {Math.floor(range * 100)}
      </Text>

      <Slider
        style={{width: 300, height: 50}}
        minimumValue={0}
        onValueChange={value => setRange(value)}
        maximumValue={1}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 44,
    padding: 8,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  paragraph: {
    margin: 24,
    textAlign: 'center',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default App;
