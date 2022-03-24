import React, { createContext, useState } from 'react'
// import {useNavigation, CommonActions} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Alert } from 'react-native'
import axios from 'axios'
import fieldFix from '../helpers/fieldFix'
export const Services = createContext({})

function AuthProvider({ children }) {
  const instance = axios.create({
    baseURL: 'http://192.168.15.7:1001/api',
  })

  const [storage, setStorage] = useState({})
  const [user, setUser] = useState({})
//   const navigation = useNavigation();

  async function login(email, password, navigation) {

    // console.log(email.value, password.value)
    const login = await instance.post(
      `login?email=${email.value}&password=${password.value}`
    )
    const data = await login.data
    console.log(data.message)
    if (data.message == "true") {
      await AsyncStorage.setItem('@token', data.token)
      navigation.navigate('Home')
    }
  }

  async function register(values) {
    
    console.log(values.name)
       await instance.post('register', {
           name: values.name,
           email: values.email,
           cpf: values.cpf,
           password: values.password,
           password_confirmation: values.password_confirmation
       }).then((response) => {
          console.log(response)
      })
  }

  async function logout() {
    await AsyncStorage.removeItem('@token')
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{ name: 'Login' }],
      })
    )
  }

  async function voltar() {
    alert('voltou')
  }

  async function getUserData(address) {
    const bearer = await AsyncStorage.getItem('@token')
    await instance
      .get('/user', { headers: { Authorization: `Bearer ${bearer}` } })
      .then((response) => {
        setUser(response.data)
      })
      .catch((error) => {
        alert(
          'Não foi possível recuperar suas informações! Tente novamente mais tarde'
        )
      })
  }

  async function forgot(forgotEmail) {
    Alert.alert(
      'Atenção!',
      `Se: ${forgotEmail}, corresponder a um e-mail cadastrado, você recebará um e-mail com as instruções! Confira sua caixa de entrada!`,
      [{ text: 'OK', onPress: () => navigation.navigate('Login') }]
    )
  }

  return (
    <Services.Provider
      value={{ login, user, logout, storage, forgot, getUserData, register }}
    >
      {children}
    </Services.Provider>
  )
}

export default AuthProvider
