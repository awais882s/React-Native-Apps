import React from 'react'
import { StatusBar, View } from 'react-native';
import AppNavigation from './src/navigation/AppNavigation';


export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#9e1f63" />
      <AppNavigation />
    </>
  )
}
