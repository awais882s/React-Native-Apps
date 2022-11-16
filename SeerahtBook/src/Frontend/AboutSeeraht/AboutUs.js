import React from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'

export default function AboutSeeraht() {
  return (
    <ScrollView>
      <View style={Styles.container}>
        <View>
        <Text style={Styles.header}>Mutfi Mustafa Aziz</Text>
        </View>
        <View>
        <Text style={Styles.header}>Seeraht Institute & Research Center</Text>
        </View>
      </View>
    </ScrollView>
  )
}


const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#F0E4E4E9",
    fontSize: 15,
    color: "#000000",
    padding:5,
    paddingLeft:20
  }
})