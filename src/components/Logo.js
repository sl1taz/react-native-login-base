import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default function Logo() {
  return <Image source={require('../assets/logo-white.png')} style={styles.image} />
}

const styles = StyleSheet.create({
  image: {
    width: 380,
    height: 50,
    
    left: -20
  },
})
