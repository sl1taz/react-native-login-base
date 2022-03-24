import React from "react";

import { TouchableOpacity, StyleSheet, View, KeyboardAvoidingView, TextInput, Image, Dimensions, Text, Platform, ScrollView, SafeAreaView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import BackButtonLeft from '../components/BackButtonLeft'
import MenuButtonDashboard from '../components/MenuButtonDashboard';



export default function CriptoScreen({ navigation }) {

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
                    <Image style={styles.headerLogo} source={require('../assets/criptomoedas.png')} />
                </View>

            <ScrollView style={{marginTop: 80}}>
                <View style={styles.cards}>

                    <TouchableOpacity onPress={() => navigation.navigate("CriptoViewScreen", { screen: "CriptoViewScreen" })}>
                        <View style={styles.promoCard}>
                            <Text style={styles.assetName}>Bitcoin</Text>
                            <Text style={styles.promoCardTextBottom}>R$ 231.292,05</Text>
                            <Text style={styles.promoCardText}>R$ 1.230,00</Text>
                            <Image style={styles.arrow} source={require('../assets/icons/arrow-right.png')} />

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.promoCard}>
                            <Text style={styles.assetName}>Ethereum</Text>
                            <Text style={styles.promoCardTextBottom}>R$ 16.425,55</Text>
                            <Text style={styles.promoCardText}>R$ 0,00</Text>
                            <Image style={styles.arrow} source={require('../assets/icons/arrow-right.png')} />

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.promoCard}>
                            <Text style={styles.assetName}>USDP</Text>
                            <Text style={styles.promoCardTextBottom}>R$ 5,25</Text>
                            <Text style={styles.promoCardText}>R$ 0,00</Text>
                            <Image style={styles.arrow} source={require('../assets/icons/arrow-right.png')} />

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.promoCard}>
                            <Text style={styles.assetName}>Cardano</Text>
                            <Text style={styles.promoCardTextBottom}>R$ 13,20</Text>
                            <Text style={styles.promoCardText}>R$ 0,00</Text>
                            <Image style={styles.arrow} source={require('../assets/icons/arrow-right.png')} />

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.promoCard}>
                            <Text style={styles.assetName}>Solana</Text>
                            <Text style={styles.promoCardTextBottom}>R$ 312,25</Text>
                            <Text style={styles.promoCardText}>R$ 0,00</Text>
                            <Image style={styles.arrow} source={require('../assets/icons/arrow-right.png')} />

                        </View>
                    </TouchableOpacity>

                    {/* TO REMOVE  - ONLY TEST */}

                    <TouchableOpacity>
                        <View style={styles.promoCard}>
                            <Text style={styles.assetName}>Solana</Text>
                            <Text style={styles.promoCardTextBottom}>R$ 312,25</Text>
                            <Text style={styles.promoCardText}>R$ 0,00</Text>
                            <Image style={styles.arrow} source={require('../assets/icons/arrow-right.png')} />

                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.promoCard}>
                            <Text style={styles.assetName}>Solana</Text>
                            <Text style={styles.promoCardTextBottom}>R$ 312,25</Text>
                            <Text style={styles.promoCardText}>R$ 0,00</Text>
                            <Image style={styles.arrow} source={require('../assets/icons/arrow-right.png')} />

                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.promoCard}>
                            <Text style={styles.assetName}>Solana</Text>
                            <Text style={styles.promoCardTextBottom}>R$ 312,25</Text>
                            <Text style={styles.promoCardText}>R$ 0,00</Text>
                            <Image style={styles.arrow} source={require('../assets/icons/arrow-right.png')} />

                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.promoCard}>
                            <Text style={styles.assetName}>Solana</Text>
                            <Text style={styles.promoCardTextBottom}>R$ 312,25</Text>
                            <Text style={styles.promoCardText}>R$ 0,00</Text>
                            <Image style={styles.arrow} source={require('../assets/icons/arrow-right.png')} />

                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.promoCard}>
                            <Text style={styles.assetName}>Solana</Text>
                            <Text style={styles.promoCardTextBottom}>R$ 312,25</Text>
                            <Text style={styles.promoCardText}>R$ 0,00</Text>
                            <Image style={styles.arrow} source={require('../assets/icons/arrow-right.png')} />

                        </View>
                    </TouchableOpacity>
                                       {/* TO REMOVE  - ONLY TEST */}

                </View>

                </ScrollView>
                <TouchableOpacity style={styles.viewMore}>
                        <Text style={styles.viewMoreText}>Ver Todas</Text>
                    </TouchableOpacity>


            </SafeAreaView>

        </LinearGradient>
    )


}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerLogo: {
        position: 'absolute',
        alignSelf: 'center',
        width: 150,
        height: 20,
        ...Platform.select({
            ios: {
                top: 14

            },
            android: {
                top: 45

            },
        }),
    },

    promoCard: {
        backgroundColor: '#252525',
        width: 350,
        height: 90,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#36343a',
        marginTop: 20,
        alignSelf: 'center'
    },
    promoCardText: {
        color: '#fff',
        position: 'absolute',
        right: 40,
        ...Platform.select({
            ios: {
                top: 32
            },
            android: {
                top: 30
            },
        }),
        fontSize: 21,
        fontWeight: '600',
        alignSelf: 'center'
    },
    promoCardTextBottom: {
        color: '#fff',
        top: 20,
        left: 35,
        fontSize: 10
    },
    cards: {
        // position: 'absolute',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        // top: 110
    },
    assetName: {
        color: '#fff',
        fontSize: 24,
        fontWeight: '600',
        left: 30,
        top: 18
    },
    viewMore: {
        backgroundColor: '#b21e5f',
        width: 140,
        height: 35,
        borderRadius: 30,
        alignItems: 'center',
        alignSelf: 'center',
        top: -50

    },

    viewMoreText: {
        fontWeight: 'bold',
        color: '#fff',
        ...Platform.select({
            ios: {
                top: 8
            },
            android: {
                top: 7
            },
        }),
    },
    arrow: {
        position: 'absolute',
        right: 6,
        ...Platform.select({
            ios: {
                top: 35
            },
            android: {
                top: 35
            },
        }),
        width: 18,
        height: 18
    }

})