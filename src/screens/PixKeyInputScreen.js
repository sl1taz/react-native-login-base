import React, { useState, useEffect } from 'react'

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
  Button,
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import BackButtonLeft from '../components/BackButtonLeft'
import MenuButtonDashboard from '../components/MenuButtonDashboard'

export default function PixKeyInputScreen({ navigation }) {
  return (
    <LinearGradient
      colors={['#161616', '#101010']}
      start={{ x: -1, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <SafeAreaView>
        <BackButtonLeft goBack={navigation.goBack} />
        <MenuButtonDashboard />

        <View style={styles.logo}>
          <Image
            style={styles.headerLogo}
            source={require('../assets/pix.png')}
          />
        </View>

        <View style={{ marginTop: 80 }}>
          <View style={styles.cards}>
            <TouchableOpacity>
              <View style={styles.promoCard}>
                <Text style={styles.assetName}>Saldo em conta</Text>
                <Text style={styles.promoCardTextBottom}>R$ 32.234,02</Text>
                {/* <Text style={styles.promoCardText}>R$ 1.230,00</Text> */}
                <Image
                  style={styles.arrow}
                  source={require('../assets/icons/eye.png')}
                />
                <Image
                  style={styles.balance}
                  source={require('../assets/icons/balance.png')}
                />
              </View>
            </TouchableOpacity>
          </View>

     
      

    <View style={styles.input}>
    <View style={{ top: 25, alignSelf: 'center' }}>
            <Text style={styles.pixText}>Valor a Pagar</Text>
          </View>
        </View>
    </View>

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
  cards: {
    // position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    // top: 110
  },
  promoCard: {
    backgroundColor: '#252525',
    width: 325,
    height: 90,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#36343a',
    marginTop: 20,
    alignSelf: 'center',
  },
  promoCardText: {
    color: '#fff',
    position: 'absolute',
    right: 40,
    ...Platform.select({
      ios: {
        top: 32,
      },
      android: {
        top: 30,
      },
    }),
    fontSize: 21,
    fontWeight: '600',
    alignSelf: 'center',
  },
  promoCardTextBottom: {
    color: '#fff',
    top: 25,
    left: 80,
    fontSize: 22,
    fontWeight: 'bold',
  },

  assetName: {
    color: '#b2b2b2',
    fontSize: 12,
    fontWeight: '600',
    left: 80,
    top: 18,
  },

  arrow: {
    position: 'absolute',
    right: 15,
    ...Platform.select({
      ios: {
        top: 35,
      },
      android: {
        top: 35,
      },
    }),
    width: 20,
    height: 18,
  },

  balance: {
    position: 'absolute',
    left: 15,
    ...Platform.select({
      ios: {
        top: 28,
      },
      android: {
        top: 32,
      },
    }),
    width: 30,
    height: 30,
  },
  pixText: {
    color: '#b2b2b2',
    fontSize: 16,
  },
  divider: {
    borderBottomColor: '#464646',
    borderWidth: 1,
    marginTop: 20,
  },

  dividerBottom: {
    borderBottomColor: '#464646',
    borderWidth: 1,
    top: -1,
  },

  keyText: {
    color: '#fff',
    fontSize: 18,
    paddingLeft: 20,
    top: '5%',
    fontWeight: 'bold',
  },
  pixList: {
    flexDirection: 'row',
    marginTop: 5,
    // backgroundColor: '#000',
    height: 70,
    paddingLeft: 45,
  },
  pixImage: {
    width: 35,
    height: 35,
    top: 15,
  },

  arrowPix: {
    position: 'absolute',
    right: 35,
    ...Platform.select({
      ios: {
        top: 20,
      },
      android: {
        top: 20,
      },
    }),
    width: 20,
    height: 18,
  },

  keys: {
    marginLeft: 8,
    top: 20,
  },

  key1Bg: {
    width: 100,
    height: 100,
  },

  key1: {
    marginTop: 50,
    height: 100,
    width: 100,
    borderRadius: 50,
    left: 60,
  },
  key2: {
    marginTop: 50,
    height: 100,
    width: 100,
    borderRadius: 50,
    left: 230,
    top: -150,
  },
  key3: {
    marginTop: 50,
    height: 100,
    width: 100,
    borderRadius: 50,
    left: 60,
    top: -100,
  },
  key4: {
    marginTop: 50,
    height: 100,
    width: 100,
    borderRadius: 50,
    left: 230,
    top: -250,
  },
  key1Icon: {
    position: 'absolute',
    width: 100,
    height: 100,
  },

  key1Text: {
    color: '#fff',
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    top: 8,
  },

  input: {
      marginTop: 40,
      backgroundColor: '#1c1c1c',
      height: 200,
      borderWidth: .5,
      borderTopColor: '#464646',
      borderBottomColor: '#464646'
  }
})
