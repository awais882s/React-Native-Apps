import React from 'react'
import { StatusBar } from 'react-native';
import AuthContextProvider from './src/Context/Context';
import AppNavigation from './src/Navigation/AppNavigation';
export default function App() {
  return (
    <AuthContextProvider>
      <StatusBar backgroundColor="#9e1f63" />
      <AppNavigation />
    </AuthContextProvider>
  )
}
