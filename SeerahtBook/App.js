import React, { useEffect } from 'react'
import { StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import AuthContextProvider from './src/Context/Context';
import AppNavigation from './src/Navigation/AppNavigation';
export default App = () => {
  useEffect(() => {
    SplashScreen.hide();
  })
  return (
    <AuthContextProvider>
      <StatusBar backgroundColor="#9e1f63" />
      <AppNavigation />
    </AuthContextProvider>
  )
}
