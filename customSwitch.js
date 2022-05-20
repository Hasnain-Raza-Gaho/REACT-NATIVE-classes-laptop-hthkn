import React from 'react';
import {View, Text, Switch} from 'react-native';

const customSwitch = props => {
  return (
    <View>
      <Switch
        trackColor={{false: 'red', true: 'yellow'}}
        thumbColor="black"
        onValueChange={props.toggleSwitch}
        value={props.isEnabled}
      />
    </View>
  );
};

export default customSwitch;
