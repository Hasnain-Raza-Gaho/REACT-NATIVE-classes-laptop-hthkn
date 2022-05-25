import React, {useState} from 'react';
import {View, Text, TouchableNativeFeedback} from 'react-native';
import styles from './styles';

const App = () => {
  const [rippleOverFlow, setRippleOverFlow] = useState(false)
  return (
    <View style={styles.container}>
      <TouchableNativeFeedback 
      onPress={()=> setRippleOverFlow(!rippleOverFlow)}
      background={TouchableNativeFeedback.Ripple('red', rippleOverFlow)}

      >
        <View style={styles.touchable}>

        <Text style={styles.text}>Touchable Native Feedback</Text>
        </View>

      </TouchableNativeFeedback>
    </View>
  );
};

export default App;
