import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Button as PaperButton } from 'react-native-paper'
import { theme } from '../core/theme'
import { LinearGradient } from 'expo-linear-gradient';
export default function Button({ mode, style, ...props }) {
  return (


    <LinearGradient
      start={{ x: 0, y: 45 }}
      end={{ x: 1, y: 45 }}
      style={styles.button}
      colors={['#fb2145', '#8d12ed']}>
      <TouchableOpacity style={styles.buttonSignup}>
      
        <Text style={styles.text}></Text>
      </TouchableOpacity>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  button: {
    width: 180,
    marginVertical: 10,
    paddingVertical: 2,
    borderRadius: 30
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 26,
  },
})
