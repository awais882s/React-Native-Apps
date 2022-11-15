import React from 'react'
import { StatusBar } from 'react-native';
// import { View, Text, StyleSheet } from 'react-native'
import AppNavigation from "./src/navigation/AppNavigation";

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#1d5968" />
      <AppNavigation />
    </>
  )
}
