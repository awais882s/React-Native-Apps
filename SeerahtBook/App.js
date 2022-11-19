import React from 'react'
import { StatusBar } from 'react-native';
import AppNavigation from './src/Navigation/AppNavigation';


export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#9e1f63" />
      <AppNavigation />
    </>
  )
}
