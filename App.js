import React, {useState} from 'react';
import { Platform, StyleSheet, Text, ScrollView } from 'react-native';
import styles from './styles'

const App = () => {

  return (
    <ScrollView contentContainerStyle={styles.container}>
    <Text>OS</Text>
    <Text style={styles.value}>{Platform.OS}</Text>
    <Text>OS Version</Text>
    <Text style={styles.value}>{Platform.Version}</Text>
    <Text>isTV</Text>
    <Text style={styles.value}>{Platform.isTV.toString()}</Text>
    {Platform.OS === 'ios' && <>
      <Text>isPad</Text>
      <Text style={styles.value}>{Platform.isPad.toString()}</Text>
    </>}
    <Text>Constants</Text>
    <Text style={styles.value}>
      {JSON.stringify(Platform.constants, null, 2)}
    </Text>
  </ScrollView>
  );
};

export default App;
