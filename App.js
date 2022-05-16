import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={styles.container}>
    <Button title='Alert' color="#eee" />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center'
    ,
    justifyContent: 'center'
  }
})