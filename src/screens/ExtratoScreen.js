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
import { Ionicons } from '@expo/vector-icons'
import { RecentTransactions } from '../components/RecentTransactions'
export default function ExtratoScreen({ navigation }) {
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
            source={require('../assets/extrato.png')}
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
          <View style={styles.selectDays}>
            <TouchableOpacity>
              <View style={styles.daysBox}>
                <Text style={styles.days}>7 dias</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.daysBox}>
                <Text style={styles.days}>15 dias</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.daysBoxSelected}>
                <Text style={styles.days}>30 dias</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.daysBox}>
                <Text style={styles.days}>Outro</Text>
              </View>
            </TouchableOpacity>
          </View>
          <Text style={styles.titleT}>Fevereiro 2022</Text>

          <ScrollView style={{ marginTop: 60 }}>
            <Text style={styles.title}>21/03</Text>

            <View style={styles.listTransactions}>
              <View style={styles.list}>
                <TouchableOpacity>
                  <View style={styles.items}>
                    <View style={styles.icon}>
                      {/* <Ionicons
                    name="chevron-forward"
                    size={20}
                    color="#fff"
                    style={styles.arrow}
                  /> */}
                    </View>
                    <View style={styles.itemBody}>
                      <Text style={styles.type}>Transferência Recebida</Text>
                      <Text style={styles.date}>21/03/2022</Text>
                    </View>
                    <View>
                      <Text style={styles.payment}>+ R$ 2.500,00</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
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
    width: 370,
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
    marginTop: 35,
    height: 50,
    borderTopColor: '#464646',
    borderBottomColor: '#464646',
    borderBottomWidth: 0.5,
  },
  selectDays: {
    // backgroundColor: '#fff',
    top: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  daysBoxSelected: {
    backgroundColor: '#d03262',
    width: 75,
    height: 35,
    alignSelf: 'center',
    borderRadius: 5,
  },
  daysBox: {
    backgroundColor: '#202020',
    width: 75,
    height: 35,
    borderRadius: 5,
  },

  days: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center',
    top: 6,
  },

  extratoText: {
    flexDirection: 'row',
  },

  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff',
    left: 20,
    top: 10
  },
  titleT: {
    top: 50,
    fontWeight: 'bold',
    fontSize: 18,
    color: '#bfbfbf',
    left: 20
  },
  listTransactions: {
    marginTop: 12,
  },
  items: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 22,
  },
  icon: {
    padding: 10,
    backgroundColor: '#202020',
    width: 50,
    height: 50,
    shadowColor: '#202020',
    shadowOffset: { height: 10, width: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 80,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    left: 18
  },
  itemBody: {
    flex: 1,
    paddingLeft: 30,
  },

  type: {
    fontWeight: '800',
    fontSize: 13,
    color: '#fff',
  },

  date: {
    marginTop: 5,
    color: '#808080',
    fontSize: 12,
  },

  payment: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#35d387',
    right: 18,
  },
})
