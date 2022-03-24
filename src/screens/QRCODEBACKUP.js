import React, { useState, useEffect } from 'react'

import { TouchableOpacity, StyleSheet, View, KeyboardAvoidingView, TextInput, Image, Dimensions, Text, Platform, ScrollView, SafeAreaView, Button } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import BackButtonLeft from '../components/BackButtonLeft'
import MenuButtonDashboard from '../components/MenuButtonDashboard';
import { Camera } from 'expo-camera';

import { BarCodeScanner } from 'expo-barcode-scanner';

export default function PixScreen({ navigation }) {
    const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
    useEffect(() => {
        (async () => {
          const { status } = await BarCodeScanner.requestPermissionsAsync();
          setHasPermission(status === 'granted');
        })();
      }, []);
    
      const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
        console.log(data);
      };
    
      if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
      }
      if (hasPermission === false) {
        return <Text>No access to camera</Text>;
      }
  

    return (
        // <LinearGradient
        //     colors={['#161616', '#101010']}
        //     start={{ x: -1, y: 0 }}
        //     end={{ x: 0, y: 1 }}
        //     style={styles.container}
        // >
        //     <SafeAreaView>
        //         <BackButtonLeft goBack={navigation.goBack} />
        //         <MenuButtonDashboard />

        //         <View style={styles.logo}>
        //             <Image style={styles.headerLogo} source={require('../assets/pix.png')} />
        //         </View>



        <View style={styles.container}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
        {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
      </View>



        //     </SafeAreaView>

        // </LinearGradient>
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

    camera1: {
        flex: 1,
    
    }
})