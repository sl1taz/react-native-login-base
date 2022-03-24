import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'
import {StyleSheet, View, TouchableOpacity, Text, Image} from 'react-native'
import {LinearGradient} from 'expo-linear-gradient';

export default function StartScreen({navigation}) {
    return (
        <Background>

            <View style={styles.top}>

                <View style={styles.logo}>
                    <Image style={styles.logoImage}
                           source={require('../assets/logo.png')}/>
                </View>

                <View style={styles.slogan}>
                    <Text style={styles.sloganText}>
                        Mais que um banco:
                        <Text style={styles.sloganTextBold}> UM
                            CRIPTOBANK!</Text>
                    </Text>
                </View>

            </View>

            <View style={styles.buttons}>


                <View>
                    <LinearGradient
                        start={{x: 0, y: 45}}
                        end={{x: 1, y: 45}}
                        style={styles.signup}
                        colors={['#fb2145', '#8d12ed']}>
                        <TouchableOpacity style={styles.signupClick}
                                          onPress={() => navigation.navigate("RegisterScreen", {screen: "RegisterScreen"})}>
                            <Text style={styles.signupText}>Cadastre-se</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>

                <View>
                    <TouchableOpacity style={styles.buttonLogin}
                                      onPress={() => navigation.navigate("LoginScreen", {screen: "LoginScreen"})}>

                        <LinearGradient
                            start={{x: 0, y: 45}}
                            end={{x: 1, y: 45}}
                            style={styles.login}
                            colors={['#111111', '#111111']}>
                            <Text style={styles.loginText}>Entrar</Text>
                        </LinearGradient>
                    </TouchableOpacity>

                </View>

                <View style={styles.forgot}>

                    <TouchableOpacity style={styles.forgotButton}
                                      onPress={() => navigation.navigate("ResetPasswordScreen", {screen: "ResetPasswordScreen"})}>
                        <Text style={styles.forgotText}>Esqueceu sua
                            senha?</Text>
                    </TouchableOpacity>

                </View>


            </View>

        </Background>
    )
}

const styles = StyleSheet.create({

    top: {
        top: '5%'
    },

    logoImage: {
        top: '70%',
        width: 150,
        height: 50,
        alignSelf: 'center'
    },

    buttons: {
        marginTop: '70%'
    },

    signup: {
        width: 250,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },

    login: {
        width: 250,
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        marginTop: 30,
        borderWidth: 1,
        borderColor: '#b5b5b5',
        justifyContent: 'center',
        alignItems: 'center'

    },

    signupClick: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    forgotButton: {
        position: 'absolute',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10%'
    },


    ///// TEXT /////

    sloganText: {
        color: '#fff',
        fontWeight: '600'
    },

    sloganTextBold: {
        fontWeight: '800'

    },

    signupText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',

    },

    loginText: {
        color: '#df1458',
        fontSize: 20,
        fontWeight: 'bold',

    },

    slogan: {
        top: '80%',

    },

    forgotText: {
        color: '#b5b5b5',
        fontSize: 14,
    },

})