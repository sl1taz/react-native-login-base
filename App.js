import React from 'react'
import { Provider } from 'react-native-paper'
import { 
  NavigationContainer,
  DarkTheme,
  TransitionPresets,
} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from './src/core/theme'
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Dashboard,
  CriptoScreen,
  CriptoViewScreen,
  PixScreen,
  PixKeyScreen,
  PixKeyInputScreen,
  ExtratoScreen,
} from './src/screens'
import { StatusBar } from 'react-native'
import Services from './src/services/auth'

const Stack = createStackNavigator()
const navigatorOptions = {
  headerShown: false,
  cardStyle: { backgroundColor: 'transparent' },
  cardStyleInterpolator: ({ current: { progress } }) => ({
    cardStyle: {
      opacity: progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
      }),
    },
    overlayStyle: {
      opacity: progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 0.5],
        extrapolate: 'clamp',
      }),
    },
  }),
}
export default function App() {
  return (
    <Provider theme={theme}>
     
      <NavigationContainer theme={DarkTheme}>
      <Services>
        <Stack.Navigator
          initialRouteName="StartScreen"
          screenOptions={navigatorOptions}
          mode="modal"
        >
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="ExtratoScreen" component={ExtratoScreen} />
          <Stack.Screen name="CriptoScreen" component={CriptoScreen} />
          <Stack.Screen name="CriptoViewScreen" component={CriptoViewScreen} />
          <Stack.Screen name="PixScreen" component={PixScreen} />
          <Stack.Screen name="PixKeyScreen" component={PixKeyScreen} />
          <Stack.Screen name="PixKeyInputScreen" component={PixKeyInputScreen} />
          <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />
        </Stack.Navigator>
        </Services>
        <StatusBar barStyle="light-content" />
      </NavigationContainer>
    </Provider>
  )
}
