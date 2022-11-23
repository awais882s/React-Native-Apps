import React from 'react'
import { View, Text, TextInput, StyleSheet, Linking } from 'react-native'
import FontAwesome5Brands from 'react-native-vector-icons/FontAwesome5Pro'
import { Button } from 'react-native-paper'

export default function Subscribes() {
  const whatsapp = () => {
    Linking.openURL("https://api.whatsapp.com/send?phone=923111772111&text=Please%20add%20my%20number%20to%20your%20Whatsapp%20Broadcast%20List.")

  }
  return (
    <View>
      <View>
        <Text style={Styles.Header}>
          Subscribe For WhatsApp List <FontAwesome5Brands name='whatsapp' size={22} />
        </Text>
        <Text style={{ color: "#000000", marginHorizontal: 10, marginBottom: 15 }}>Enter your Full Name and your complete Whatsapp Number with country code for WhatsApp Broadcast List. </Text>
        <TextInput style={Styles.textinput1}
          placeholder='Full Name'
        />
        <TextInput style={Styles.textinput1}
          placeholder='WhatsApp Number i.e. +923001234567'
        />
        <Text style={{ color: "#000000", marginHorizontal: 5 }}>Note: Kindly add (+923 111 772 111) to your mobile contact list.</Text>

        <Button
          style={{
            backgroundColor: "#ce629f",
            padding: 3,
            marginHorizontal: 20,
            marginTop: 10,
            marginBottom: 10
          }}
        // onPress={() => alert("Working")}
        ><Text style={{ color: "#ffffff", fontSize: 18 }}>Subscribe</Text></Button>

        <Text style={{ textAlign: "center", color: "#06460F", fontSize: 20, fontWeight: "bold", marginVertical: 10 }}>OR</Text>

        <Text style={{ color: "#000000", textAlign: "center" }}>
          You can simply press the blow button for adding your WhatsApp Number to our WhatsApp Broadcast list.
        </Text>
        <Button
          style={{
            backgroundColor: "#25d366",
            padding: 3,
            marginHorizontal: 20,
            marginTop: 10,
            marginBottom: 10
          }}
          onPress={whatsapp}
        ><Text style={{ color: "#ffffff", fontSize: 20 }}> Send Message <FontAwesome5Brands
          name='whatsapp'
          size={18}
        /></Text></Button>
      </View>
    </View>
  )
}

const Styles = StyleSheet.create({
  textinput1: {
    borderRadius: 12,
    borderColor: "#86939e",
    borderWidth: 1,
    marginHorizontal: 10,
    marginBottom: 10,
    paddingLeft: 15,
    color: "black"
  },
  Header: {
    fontSize: 22,
    textAlign: "center",
    color: "#0D2211C9",
    fontWeight: "bold",
    marginVertical: 10,
    borderBottomColor: "#41C40D",
    borderBottomWidth: 2,
    marginHorizontal: 30,
    paddingBottom: 7
  },
})