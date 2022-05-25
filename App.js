import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from './styles';

const App = () => {

  return (
    <View style={styles.container}>
<Text style={styles.text}>Hello Everyone... How Are You ? I Hope You Are Fine and Doing Well, I am just writing a Paragraph.</Text>

<ScrollView style={styles.scroller}>

        <Text style={{fontFamily: 'normal'}}>  normal </Text>

        <Text style={{fontFamily: 'notoserif'}}>  notoserif </Text>

        <Text style={{fontFamily: 'sans-serif'}}>  sans-serif </Text>

        <Text style={{fontFamily: 'sans-serif-light'}}>  sans-serif-light </Text>

        <Text style={{fontFamily: 'sans-serif-thin'}}>  sans-serif-thin </Text>

        <Text style={{fontFamily: 'sans-serif-condensed'}}>  sans-serif-condensed </Text>

        <Text style={{fontFamily: 'sans-serif-medium'}}>  sans-serif-medium </Text>

        <Text style={{fontFamily: 'serif'}}>  serif </Text>

        <Text style={{fontFamily: 'Roboto'}}>  Roboto </Text>

        <Text style={{fontFamily: 'monospace'}}>  monospace </Text>        

      </ScrollView>
    </View>
  );
};

export default App;
