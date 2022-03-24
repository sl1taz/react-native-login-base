import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Image, Dimensions, TextInput, Text } from 'react-native'

import BackButton from '../components/BackButton'
import Logo from '../components/Logo'
import { emailValidator } from '../helpers/emailValidator'
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function ResetPasswordScreen({ navigation }) {
  const [email, setEmail] = useState({ value: '', error: '' })

  const sendResetPasswordEmail = () => {
    const emailError = emailValidator(email.value)
    if (emailError) {
      setEmail({ ...email, error: emailError })
      return
    }
    navigation.navigate('LoginScreen')
  }

  return (
    <LinearGradient
      colors={['#991887', '#9d1947', '#991887']}
      start={{ x: -1, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.background}
    >
      <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>

        <BackButton goBack={navigation.goBack} />


        <View style={styles.forgot}>
        <Text style={styles.forgotTitle}>Esqueceu sua senha?</Text>
          <Text style={styles.forgotText}>Não se preocupe. Vamos te mandar um e-mail</Text>
          <Text style={styles.forgotText}>com os próximos passos, ok?</Text>
        </View>



        <View style={styles.in}>
          <TextInput
            style={styles.input}
            label="E-mail"
            returnKeyType="next"
            onChangeText={(text) => setEmail({ value: text, error: '' })}
            error={!!email.error}
            errorText={email.error}
            autoCapitalize="none"
            autoCompleteType="email"
            textContentType="emailAddress"
            keyboardType="email-address"
            placeholderTextColor="#fff"
            placeholder='E-mail'
          />
          <Ionicons name="mail-outline" size={16} color="#fff" style={styles.icon} />
        </View>


        <View style={styles.asdas}>

          <TouchableOpacity style={styles.button} onPress={sendResetPasswordEmail}>
            <Text style={styles.buttonLoginText}>Enviar</Text>
          </TouchableOpacity>

        </View>

        <View style={styles.logo}>
          <Image style={styles.logoImage} source={require('../assets/logo.png')} />
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
    top: 2
  },

  forgotText: {
    color: '#fff',
    alignSelf: 'center',
    fontSize: 14,
    top: -50
  },

  forgotTitle: {
    color: '#fff',
    alignSelf: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    top: -70
  },

  row: {
    alignItems: 'center',
    alignSelf: 'center',
  },

  logoImage: {
    alignSelf: 'center',
    top: 300,
    width: 60,
    height: 20,
    position: 'absolute',
    
  },
  logo: {
    top: -70
  },
  button: {
    width: 200,
    height: 45,
    backgroundColor: '#fff',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    top: 40
  },
  loginButton: {
    top: 40
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
    top: 140
  },
  forgotPassword: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 24,
    top: 60
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 16,
    color: '#fff'
  },

  background: {
    flex: 1,
  },
  input: {
    color: '#fff',
    height: 50,
    flex: 1,
    paddingLeft: 50,
    fontSize: 15,
    borderBottomWidth: 2,
    borderColor: '#fff',
    marginHorizontal: 50
  },

  icon: {
    position: 'absolute',
    left: 65,
    top: 16
  }

})
