import { Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'

const customButton = (props) => {
  return (
    <View>
      <TouchableOpacity>
          <View style={styles.button} >

          <Text style={styles.text} >{props.name}</Text>
          </View>
      </TouchableOpacity>
    </View>
  )
}

export default customButton