import React, { useState } from 'react'
import {
  TouchableOpacity,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  TextInput,
  Image,
  Dimensions,
} from 'react-native'
import { Text } from 'react-native-paper'
import Logo from '../components/Logo'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons } from '@expo/vector-icons'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'


export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
  const windowWidth = Dimensions.get('window').width
  const windowHeight = Dimensions.get('window').height
  const instance = axios.create({
    baseURL: 'http://192.168.15.7:1001/api',
  })

  async function onLoginPressed(){
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    }
    const login = await instance.post(
      `login?email=${email.value}&password=${password.value}`
    )
    const data = await login.data

    if (data.message == "true") {
      await AsyncStorage.setItem('@token', data.token)
      navigation.navigate('Dashboard')
    }
  }

  return (
    <LinearGradient
      colors={['#991887', '#9d1947', '#991887']}
      start={{ x: -1, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.background}
    >
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <BackButton goBack={navigation.goBack} />

        <View style={styles.logoTop}>
          <Logo style={styles.logo} />
        </View>

        <View style={styles.in}>
          <TextInput
            style={styles.input}
            label="Email"
            returnKeyType="next"
            value={email.value}
            onChangeText={(text) => setEmail({ value: text, error: '' })}
            error={!!email.error}
            errorText={email.error}
            autoCapitalize="none"
            autoCompleteType="email"
            textContentType="emailAddress"
            keyboardType="email-address"
            placeholderTextColor="#fff"
            placeholder="E-mail"
          />
          <Ionicons
            name="mail-outline"
            size={16}
            color="#fff"
            style={styles.icon}
          />
        </View>

        <View style={styles.in}>
          <TextInput
            style={styles.input}
            label="Password"
            returnKeyType="done"
            value={password.value}
            onChangeText={(text) => setPassword({ value: text, error: '' })}
            error={!!password.error}
            errorText={password.error}
            secureTextEntry
            placeholderTextColor="#fff"
            placeholder="Senha"
          />

          <Ionicons
            name="lock-closed-outline"
            size={16}
            color="#fff"
            style={styles.icon}
          />
        </View>

        {/* <View style={styles.mailIconView}>
          <Image resizeMode='contain' style={{
            position: 'absolute',
            width: 20,
            height: 20,
            top: 110,
            left: '60%'
          }} source={require('../assets/icons/senha.png')} />

        </View> */}

        <View style={styles.loginButton}>
          <TouchableOpacity style={styles.button} onPress={onLoginPressed}>
            <Text style={styles.buttonLoginText}>Entrar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.forgotPassword}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ResetPasswordScreen')}
          >
            <Text style={styles.forgot}>Esqueceu sua senha?</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.loginButton}>
          <TouchableOpacity
            style={styles.buttonRegister}
            onPress={() =>
              navigation.navigate('RegisterScreen', {
                screen: 'RegisterScreen',
              })
            }
          >
            <Text style={styles.buttonRegisterText}>Cadastre-se</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },

  in: {
    flexDirection: 'row',
    marginTop: 30,
    top: 10,
  },

  row: {
    alignItems: 'center',
    alignSelf: 'center',
  },

  logoTop: {
    top: -95,
    left: -100,
  },
  logo: {
    // position: 'absolute',
  },
  button: {
    width: 200,
    height: 45,
    backgroundColor: '#fff',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  loginButton: {
    top: 40,
  },

  buttonRegisterText: {
    color: '#fff',
  },
  buttonRegisterText: {
    color: '#fff',
  },

  buttonRegister: {
    width: 150,
    height: 35,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    top: 140,
  },
  forgotPassword: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 24,
    top: 60,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 16,
    color: '#fff',
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  background: {
    flex: 1,
  },
  input: {
    color: '#fff',
    height: 50,
    flex: 1,
    paddingLeft: 60,
    fontSize: 15,
    borderBottomWidth: 2,
    borderColor: '#fff',
    marginHorizontal: 50,
  },

  icon: {
    position: 'absolute',
    left: 80,
    top: 16,
  },
})
