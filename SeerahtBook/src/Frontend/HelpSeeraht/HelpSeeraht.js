import React, { useState } from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { Button } from 'react-native-paper'
import FontAwesome5Brands from 'react-native-vector-icons/FontAwesome5Pro'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function HelpSeeraht() {

  const [show, setShow] = useState(true)

  return (
    <ScrollView ScrollView >
      <View style={Styles.container}>
        <View>
          <Text style={Styles.button} onPress={()=>setShow(!show)}>As Services</Text>
          {
            show ? (
              <View style={Styles.Content}>
                <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 18, color: "#000000", }}>السلام علیکم ورحمة الله وبركاته</Text>

                <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 15, paddingHorizontal: 15, marginTop: 5, color: "#000000", }}>If you want to help Seeraht Institute and want to
                  provide your services to Seeraht Institute. Please get in touch with Seeraht Institute, You are most welcome to Seeraht Institute & Research Centre.</Text>
                <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 18, marginTop: 5, color: "#000000", }}>جزاك الله خيرا</Text>
              </View>
            ) : null
          }
        </View>
        <View style={{ paddingVertical: 15 }}>
          <Text style={Styles.button}>Financially</Text>
          <View>
            <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 18, marginTop: 5, color: "#000000", }}>السلام علیکم ورحمة الله وبركاته</Text>
            <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 15, marginTop: 10, color: "#000000", }}>YOUR SEERAHT INSTITUTE NEEDS YOU</Text>
            <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 7 }}>
              <Text style={Styles.Contact}>Easypaisa & JazzCash</Text>
              <Text style={Styles.Number}>0300 716 51 51</Text>
            </View>
            {/* <View style={{ flexDirection: "row",justifyContent:"center",marginTop:7 }}>
              <Text style={Styles.Number}>JazzCash</Text>
              <Text style={Styles.Number}>0300 716 51 51</Text>
            </View> */}
            <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 20, marginTop: 10, color: "#000000", }}>QUICK CONTACT FOR DONATION</Text>

            <Text style={{ color: "#000000", textAlign: 'center', paddingHorizontal: 10, marginTop: 5 }}>"Donate your money for the noble cause of propagating
              Islam via any of the following services"</Text>

            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <Button icon={() => (
                <FontAwesome5Brands
                  name='whatsapp'
                  size={25}
                  color="#FFFFFF"
                />
              )} mode="contained" onPress={() => alert('Pressed')}
                style={{
                  backgroundColor: "#128c7e",
                  marginTop: 30,
                  marginHorizontal: 20,
                  paddingHorizontal: 10,
                }}
              >
                <Text style={{ color: "White", fontSize: 17 }}>Whatsapp</Text>
              </Button>
              <Button icon={() => (
                <MaterialCommunityIcons
                  name='phone'
                  size={28}
                  color="#FFFFFF"
                />
              )} mode="contained" onPress={() => alert('Pressed')}
                style={{
                  backgroundColor: "#5602FF",
                  marginTop: 30,
                  paddingHorizontal: 20,
                }}
              >
                <Text style={{ color: "White", fontSize: 17 }}>Phone</Text>
              </Button>
            </View>
            <Text style={{ textAlign: "left", marginTop: 20, color: "#000000D4", marginHorizontal: 5 }}><Text style={{ fontWeight: "bold", color: "#000000" }}>Note:</Text>
              Your donation can be used for any permissible,religious,
              reformatory,welfare,well-wishing,and good purpose
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}
const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    backgroundColor: "#F0E4E4E9",
    fontSize: 15,
    color: "#000000",
    padding: 5,
    paddingLeft: 20
  },
  Number: {
    textAlign: "center",
    color: "#000000",
    borderColor: "#000000",
    borderWidth: 1,
    padding: 10,
  },
  Contact: {
    textAlign: "center",
    color: "#000000",
    borderColor: "#000000",
    borderWidth: 1,
    padding: 10,
    borderRightWidth: 0
  },
  Content: {
    paddingHorizontal: 15
  }
})
