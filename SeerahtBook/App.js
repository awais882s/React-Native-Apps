import React from 'react'
import { StatusBar, View } from 'react-native';
import AppNavigation from './src/Navigation/AppNavigation';


export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#1d5968" />
      <AppNavigation />
    </>
  )
}
