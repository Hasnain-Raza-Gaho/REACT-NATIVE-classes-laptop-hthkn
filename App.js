import React, {useState} from 'react';
import {View, Text, ToastAndroid, Button} from 'react-native';
import styles from './styles';

const App = () => {

  const showToast = ()=>{
    ToastAndroid.show("Welcome To SMIT", ToastAndroid.SHORT)
  }

  const showToastWithGravity = ()=>{
    ToastAndroid.showWithGravity("Welcome To SMIT", ToastAndroid.SHORT, ToastAndroid.CENTER)
  }

  const showToastWithGravityAndOffset = ()=>{
    ToastAndroid.showWithGravityAndOffset("Welcome To SMIT", ToastAndroid.LONG, ToastAndroid.TOP, 30, 50)
  }
  return (
    <View style={styles.container}>
<Button title='Show Toast' onPress={()=> showToast()} />
<Button title='Show Toast with gravity' onPress={()=> showToastWithGravity()} />
<Button title='Show Toast with gravity And Offset' onPress={()=> showToastWithGravityAndOffset()} />
    </View>
  );
};

export default App;
