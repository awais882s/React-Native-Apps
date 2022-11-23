import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Button } from 'react-native-paper';
export default function BuyNow() {

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20, color: "black", marginLeft: 10 }}>Soory! The Bachon Ki Namaz Course isn't available for Sale right now.</Text>
      <Text style={{ fontSize: 15, color: "black", marginTop: 12, }}>Please try again late.</Text>
      <TouchableOpacity style={{ marginTop: 15, width: "90%" }}>
        <Button mode="contained" buttonColor='#9e1f63' style={{ borderRadius: 5 }}>
          Try Again
        </Button>
      </TouchableOpacity>
    </View>
  )
}