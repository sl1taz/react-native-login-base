import React from 'react'

import {
  TouchableOpacity,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  TextInput,
  Image,
  Dimensions,
  Text,
  Platform,
  ScrollView,
  SafeAreaView,
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import BackButtonLeft from '../components/BackButtonLeft'
import MenuButtonDashboard from '../components/MenuButtonDashboard'

import { getStatusBarHeight } from 'react-native-status-bar-height'

export default function CriptoViewScreen({ navigation }) {
  return (
    <LinearGradient
      colors={['#161616', '#101010']}
      start={{ x: -1, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <SafeAreaView>
        {/* <BackButtonLeft goBack={navigation.goBack} /> */}
        <View style={styles.logo}>
          <Image
            style={styles.headerLogo}
            source={require('../assets/bitcoin.png')}
          />
        </View>

        <View style={styles.balanceCard}>
          <View style={styles.balance}>
            <Text style={styles.balanceText}>Você tem</Text>
          </View>
        </View>
        {/* <TouchableOpacity style={styles.touchable}>
                    <Image
                        style={styles.image}
                        source={require('../assets/arrow_back.png')}
                    />
                </TouchableOpacity> */}
        <BackButtonLeft goBack={navigation.goBack} />
        <MenuButtonDashboard />
      </SafeAreaView>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerLogo: {
    position: 'absolute',
    alignSelf: 'center',
    width: 150,
    height: 20,
    ...Platform.select({
      ios: {
        top: 14,
      },
      android: {
        top: 45,
      },
    }),
  },

  balanceCard: {
    flexDirection: 'column',
  },
  balance: {
    ...Platform.select({
      ios: {
        marginTop: 80,
      },
      android: {
        top: 100,
      },
    }),
  },

  balanceText: {
    color: '#b2b2b2',
    fontSize: 16,
    fontWeight: 'bold',
    paddingStart: 30,
  },

  // touchable: {
  //     position: 'absolute',
  //     top: 10 + getStatusBarHeight(),
  //     left: 20
  //   },
  //   image: {
  //     width: 25,
  //     height: 25,
  //   },
})
