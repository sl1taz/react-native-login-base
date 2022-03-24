import React, { useState, useEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
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
  ActivityIndicator,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import MenuButton from '../components/MenuButton'
import { Ionicons } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import Toast from 'react-native-toast-message'
import Spinner from 'react-native-loading-spinner-overlay'
export default function Dashboard({ navigation }) {
  const instance = axios.create({
    baseURL: 'http://192.168.15.7:1001/api',
  })
  const [bearer, setBearer] = useState({})
  const [user, setUser] = useState({})
  const [email, setEmail] = useState({})
  let [spinner, setSpinner] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      getUserData()
      }, 3000);

  }, [])

  // async function getUserData() {
  //   setSpinner(true)
  //   await AsyncStorage.getItem('@token').then((response) => {
  //     setBearer(response)
  //     const data = instance
  //       .get('user/get-info', {
  //         headers: { Authorization: `Bearer ${bearer}` },
  //       })
  //       .then(function (response) {
  //         console.log(response.data.email)
  //         setUser(response.data.name)
  //         setEmail(response.data.email)
  //         setSpinner(false)
  //       })
  //       .catch(function (error) {
  //         console.log(error.response)
  //       })
  //   })
  // }

  async function getUserData() {
    // const emailError = emailValidator(email.value)
    // const passwordError = passwordValidator(password.value)
    // if (emailError || passwordError) {
    //   setEmail({ ...email, error: emailError })
    //   setPassword({ ...password, error: passwordError })
    //   return
    // }
    setSpinner(true)

    instance
      .get('user/get-info', { headers: { Authorization: `Bearer ${bearer}` } })
      .then(function (response) {
        console.log(response.data)
        AsyncStorage.getItem('@token').then((response) => {
          console.log(response.error.data)
        })
      })
      .catch(function (error) {
        console.log(error)
        Toast.show({
          type: 'error',
          text1: 'Ops, Alguma coisa deu errado!',
        })
      })
  }

  return (
    <LinearGradient
      colors={['#161616', '#101010']}
      start={{ x: -1, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <Spinner
        overlayColor="#9d1947"
        visible={spinner}
        textContent={'Loading...'}
        textStyle={styles.spinnerTextStyle}
      />
      {/* HEADER WITH MENU */}
      <SafeAreaView>
        {/* HEADER*/}
        <View style={styles.header}>
          <MenuButton />
          <Text style={styles.textName}>
            {' '}
            Ola, <Text style={styles.textNameBold}>Gabo</Text>
          </Text>
        </View>
        {/* HEADER*/}
        <Toast position="top" bottomOffset={10} />

        <ScrollView>
          <View style={{ marginTop: 100 }}>
            {/* BALANCE CARD */}

            <View style={styles.box}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('ExtratoScreen', {
                    screen: 'ExtratoScreen',
                  })
                }
              >
                <View style={styles.balanceCard}>
                  <Text style={styles.textConta}>Conta</Text>
                  <Ionicons
                    name="eye-outline"
                    size={20}
                    color="#ab1c59"
                    style={styles.eye}
                  />
                  <Ionicons
                    name="chevron-forward"
                    size={20}
                    color="#fff"
                    style={styles.arrow}
                  />
                </View>
                <View style={styles.value}>
                  <Text style={styles.textValue}>R$ 12.000,00</Text>
                </View>
              </TouchableOpacity>
            </View>
            {/* BALANCE CARD */}

            {/* SCROLL VIEW MENU CARDS */}

            <ScrollView horizontal={true} style={styles.scrolMenu}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('CriptoScreen', {
                    screen: 'CriptoScreen',
                  })
                }
              >
                <View style={styles.menuCard}>
                  <Image
                    style={styles.menuCardImage}
                    source={require('../assets/icons/cripto.png')}
                  />
                  <Text style={styles.menuCardText}>Cripto</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('PixScreen', { screen: 'PixScreen' })
                }
              >
                <View style={styles.menuCard}>
                  <Image
                    style={styles.menuCardImage}
                    source={require('../assets/icons/pix.png')}
                  />
                  <Text style={styles.menuCardText}>Pix</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.menuCard}>
                  <Image
                    style={styles.menuCardImage}
                    source={require('../assets/icons/pay.png')}
                  />
                  <Text style={styles.menuCardText}>Pagar</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.menuCard}>
                  <Image
                    style={styles.menuCardImageCredit}
                    source={require('../assets/icons/creditCard.png')}
                  />
                  <Text style={styles.menuCardTextCard}>Cartão de </Text>
                  <Text style={styles.menuCardTextCard}>crédito</Text>
                </View>
              </TouchableOpacity>
            </ScrollView>
            {/* SCROLL VIEW MENU CARDS */}

            {/* PROMO CARDS */}

            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={styles.scrolMenuPromo}
             
            >
              <TouchableOpacity onPress={ () => {setSpinner(true)}}>
                <View style={styles.promoCard}>
                  <Image
                    style={styles.PromoMenuImage}
                    source={require('../assets/icons/userPlus.png')}
                  />
                  <Text style={styles.promoCardText}>
                    Indique seus amigos e ganhe
                  </Text>
                  <Text style={styles.promoCardTextBottom}>
                    vantagens na sua conta
                  </Text>
                </View>
              </TouchableOpacity>
              {/* <TouchableOpacity>
            <View style={styles.promoCard}>
            <Image style={styles.PromoMenuImage} source={require('../assets/icons/userPlus.png')} />
              <Text style={styles.promoCardText}>Indique seus amigos e ganhe</Text>
              <Text style={styles.promoCardTextBottom}>vantagens na sua conta</Text>
            </View>
        </TouchableOpacity> */}
            </ScrollView>

            <View style={styles.divider} />

            <View style={styles.market}>
              <Image
                style={styles.marketImage}
                source={require('../assets/icons/trending.png')}
              />

              <Text style={styles.marketText}>Mercado</Text>

              <Image
                style={styles.arrowRight}
                source={require('../assets/icons/arrow-left.png')}
              />

              <Image
                style={styles.arrowLeft}
                source={require('../assets/icons/arrow-right.png')}
              />

              <ScrollView horizontal={true} style={styles.marketPrice}>
                <View style={styles.marketBox}>
                  <Text style={styles.marketAssetName}>USDT</Text>
                  <Text style={styles.marketAssetValue}>R$5,55</Text>
                </View>

                <View style={styles.marketBox}>
                  <Text style={styles.marketAssetName}>USDP</Text>
                  <Text style={styles.marketAssetValue}>R$5,30</Text>
                </View>

                <View style={styles.marketBox}>
                  <Text style={styles.marketAssetName}>Bitcoin</Text>
                  <Text style={styles.marketAssetValue}>R$229.000</Text>
                </View>

                <View style={styles.marketBox}>
                  <Text style={styles.marketAssetName}>Ethereum</Text>
                  <Text style={styles.marketAssetValue}>R$16.541</Text>
                </View>
              </ScrollView>
            </View>

            <View style={styles.divider2} />

            <View style={styles.newsCard}>
              <Text style={styles.newsCardText}>Notícias</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: '#fff',
  },
  container: {
    // flex: 1,
    // flexDirection: 'column',
  },

  header: {
    marginTop: -120,
    top: 1,
    backgroundColor: '#a81c56',
    height: 180,
    // overflow: 'hidden',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  textName: {
    color: '#fff',
    alignSelf: 'center',
    position: 'absolute',
    fontSize: 20,
    top: 140,
  },
  textNameBold: {
    fontWeight: 'bold',
  },
  box: {
    // width: 100,
    height: 100,
    top: -90,
    margin: 30,
    overflow: 'hidden',
    borderRadius: 10,
  },
  balanceCard: {
    backgroundColor: '#252525',
    opacity: 0.8,
    height: 100,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#36343a',
  },
  textConta: {
    color: '#fff',
    fontSize: 18,
    left: 20,
    top: 20,
  },
  textValue: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
  },
  eye: {
    left: 35,
    ...Platform.select({
      ios: {
        top: 20,
      },
      android: {
        top: 25,
      },
    }),
  },
  arrow: {
    left: 230,
    ...Platform.select({
      ios: {
        top: 20,
      },
      android: {
        top: 25,
      },
    }),
  },
  value: {
    paddingLeft: 20,
    top: -50,
  },

  scrolMenu: {
    top: -110,
    paddingStart: 20,
  },
  menuCard: {
    justifyContent: 'center',
    backgroundColor: '#252525',
    marginLeft: 10,
    width: 80,
    height: 85,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#36343a',
  },
  menuCardText: {
    color: '#fff',
    alignSelf: 'center',
    fontSize: 10,
    top: 10,
  },
  menuCardTextCard: {
    color: '#fff',
    alignSelf: 'center',
    fontSize: 10,
    top: 13,
  },
  menuCardImage: {
    width: 20,
    height: 20,
    alignSelf: 'center',
  },
  menuCardImageCredit: {
    width: 23,
    height: 18,
    top: 4,
    alignSelf: 'center',
  },
  PromoMenuImage: {
    width: 25,
    height: 25,
    alignSelf: 'flex-start',
    left: 30,
    top: 30,
  },

  scrolMenuPromo: {
    top: -98,
    paddingStart: 20,
  },

  promoCard: {
    backgroundColor: '#252525',
    marginLeft: 10,
    width: 350,
    height: 85,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#36343a',
    flexDirection: 'row',
  },
  promoCardText: {
    color: '#fff',
    left: 70,
    top: -10,
    fontSize: 12,
    alignSelf: 'center',
  },
  promoCardTextBottom: {
    color: '#b61f9b',
    alignSelf: 'center',
    top: 8,
    left: -85,
    fontSize: 12,
  },

  divider: {
    borderBottomColor: '#464646',
    borderWidth: 1,
    top: -70,
  },
  divider2: {
    borderBottomColor: '#464646',
    borderWidth: 1,
    marginTop: 60,
  },
  marketText: {
    color: '#fff',
    fontSize: 20,
    left: 20,
    fontWeight: 'bold',
  },
  market: {
    top: -60,
    flexDirection: 'row',
  },
  marketImage: {
    width: 30,
    height: 15,
    top: 10,
    marginLeft: 20,
  },
  newsCard: {
    top: 40,
    width: '100%',
    height: 350,
    backgroundColor: '#a81c56',
    overflow: 'hidden',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  newsCardText: {
    color: '#fff',
    fontSize: 30,
    left: 65,
    top: 20,
    fontWeight: 'bold',
  },

  marketBox: {
    // backgroundColor: '#1c1c1c',
    width: 70,
    height: 50,
    margin: 10,
  },

  marketPrice: {
    position: 'absolute',
    width: 320,
    marginTop: 30,
    top: 25,
    left: 40,
  },
  arrowRight: {
    position: 'absolute',
    left: 18,
    width: 20,
    height: 20,
    top: 80,
  },

  arrowLeft: {
    position: 'absolute',
    right: 18,
    width: 20,
    height: 20,
    top: 80,
  },

  marketAssetName: {
    alignSelf: 'flex-start',
    top: 5,
    color: '#fff',
  },
  marketAssetValue: {
    alignSelf: 'flex-start',
    top: 5,
    fontWeight: 'bold',
    fontSize: 12,
    color: '#fff',
  },
  marketAssetValue2: {
    alignSelf: 'flex-start',
    top: 5,
    fontWeight: 'bold',
    fontSize: 12,
    color: '#fff',
  },
})
