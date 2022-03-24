import React, { useState, useContext } from 'react'
import {
  View,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
  Dimensions,
  TextInput,
} from 'react-native'
import { Text } from 'react-native-paper'
import Logo from '../components/Logo'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import { nameValidator } from '../helpers/nameValidator'
import { cpfValidator } from '../helpers/cpfValidator'
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons } from '@expo/vector-icons'
import { Services } from '../services/auth'
import * as yup from 'yup'
import { Formik } from 'formik'

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
  const [cpf, setCpf] = useState({ value: '', error: '' })
  const [name, setName] = useState({ value: '', error: '' })
  const [passwordConfirm, setPasswordConfirm] = useState({
    value: '',
    error: '',
  })
  const windowWidth = Dimensions.get('window').width
  const windowHeight = Dimensions.get('window').height
  const { register } = useContext(Services)

  const onLoginPressed = () => {
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    }
    navigation.reset({
      index: 0,
      routes: [{ name: 'Dashboard' }],
    })
  }

  const Validation = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email(),
    cpf: yup.number().required().positive().integer(),
    password: yup.string().required(),
    password_confirmation: yup.string().required(),
  })

  function onRegisterPressed(values) {
  register(values)
  }

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        cpf: '',
        password: '',
        password_confirmation: '',
      }}
      validateOnMount={true}
      validationSchema={Validation}
      onSubmit={(values) => onRegisterPressed(values)}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        touched,
        errors,
        isValid,
      }) => (
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
                label="Nome completo"
                returnKeyType="next"
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
                autoCapitalize="none"
                keyboardType="default"
                placeholderTextColor="#fff"
                placeholder="Nome completo"
              />
              <Ionicons
                name="person-outline"
                size={16}
                color="#fff"
                style={styles.icon}
              />
            </View>

            <View style={styles.in}>
              <TextInput
                style={styles.input}
                label="E-mail"
                returnKeyType="next"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                autoCapitalize="none"
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
                label="CPF"
                returnKeyType="next"
                onChangeText={handleChange('cpf')}
                onBlur={handleBlur('cpf')}
                value={values.cpf}
                keyboardType="numeric"
                placeholderTextColor="#fff"
                placeholder="CPF"
                maxLength={11}
              />
              <Ionicons
                name="card-outline"
                size={16}
                color="#fff"
                style={styles.icon}
              />
            </View>
            <View style={styles.in}>
              <TextInput
                style={styles.input}
                label="Digite sua senha"
                returnKeyType="next"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                autoCapitalize="none"
                keyboardType="default"
                placeholderTextColor="#fff"
                placeholder="Digite sua senha"
                secureTextEntry
              />
              <Ionicons
                name="lock-closed-outline"
                size={16}
                color="#fff"
                style={styles.icon}
              />
            </View>
            <View style={styles.in}>
              <TextInput
                style={styles.input}
                label="Confirme sua senha"
                returnKeyType="next"
                onChangeText={handleChange('password_confirmation')}
                onBlur={handleBlur('password_confirmation')}
                value={values.password_confirmation}
                autoCapitalize="none"
                keyboardType="default"
                placeholderTextColor="#fff"
                placeholder="Confirme sua senha"
                secureTextEntry
              />
              <Ionicons
                name="lock-closed-outline"
                size={16}
                color="#fff"
                style={styles.icon}
              />
            </View>
            <View style={styles.asdas}>
              <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonLoginText}>Entrar</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </LinearGradient>
      )}
    </Formik>
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
    marginTop: 5,
    top: 15,
  },

  row: {
    alignItems: 'center',
    alignSelf: 'center',
  },

  logoTop: {
    top: -77,
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
    top: 60,
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
    paddingLeft: 50,
    fontSize: 15,
    borderBottomWidth: 2,
    borderColor: '#fff',
    marginHorizontal: 50,
  },

  icon: {
    position: 'absolute',
    left: 65,
    top: 16,
  },
})
