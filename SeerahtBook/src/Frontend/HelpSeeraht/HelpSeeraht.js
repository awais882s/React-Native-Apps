import React from 'react'
import { View, Text, ScrollView, StyleSheet, Linking, TouchableOpacity, ToastAndroid } from 'react-native'
import { Button } from 'react-native-paper'
import FontAwesome5Brands from 'react-native-vector-icons/FontAwesome5Pro'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import * as Animatable from "react-native-animatable"
import Clipboard from '@react-native-clipboard/clipboard';



export default function HelpSeeraht() {

  const copyToClipboard = () => {
    Clipboard.setString('0300 716 5151');
    ToastAndroid.show("Number Copy to ClipBoard", ToastAndroid.SHORT);
  };

  return (
    <ScrollView ScrollView >
      <View style={Styles.container}>
        <View>
          <Text style={Styles.button}>As Services</Text>

          <View style={Styles.Content}>
            <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 18, color: "#000000", marginTop: 15 }}>السلام علیکم ورحمة الله وبركاته</Text>

            <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 15, paddingHorizontal: 15, marginTop: 5, color: "#000000", }}>If you want to help Seeraht Institute and want to
              provide your services to Seeraht Institute. Please get in touch with Seeraht Institute, You are most welcome to Seeraht Institute & Research Centre.</Text>
            <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 18, marginTop: 5, color: "#000000", }}>جزاك الله خيرا</Text>
          </View>
        </View>
        <View style={{ paddingVertical: 15 }}>
          <Text style={Styles.button}>Financially</Text>
          <View>
            <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 18, marginTop: 15, color: "#000000", }}>السلام علیکم ورحمة الله وبركاته</Text>
            <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 15, marginTop: 10, color: "#000000", }}>YOUR SEERAHT INSTITUTE NEEDS YOU</Text>
            <Text style={{
              textAlign: "center", color: "#000000",
              paddingVertical: 10
            }}>Click to the number for copy</Text>
            <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 7 }}>

              <Text style={Styles.Contact}>Easypaisa & JazzCash</Text>
              <TouchableOpacity onPress={copyToClipboard}>
                <Text style={Styles.Number}>0300 716 5151</Text>
              </TouchableOpacity>
            </View>

            <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 22, marginTop: 10, color: "#000000", }}>QUICK CONTACT FOR DONATION</Text>

            <Text style={{ color: "#000000", textAlign: 'center', paddingHorizontal: 10, marginTop: 5 }}>"Donate your money for the noble cause of propagating
              Islam via any of the following services"</Text>

            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <Animatable.View animation="fadeInRight" duration={2000} >
                <Button icon={() => (
                  <FontAwesome5Brands
                    name='whatsapp'
                    size={22}
                    color="#FFFFFF"
                  />
                )} mode="contained" onPress={() => Linking.openURL("https://api.whatsapp.com/send?phone=923111772111&text=")}
                  style={{
                    backgroundColor: "#128c7e",
                    marginTop: 30,
                    marginHorizontal: 20,
                    paddingHorizontal: 10,
                  }}
                >
                  <Text style={{ color: "White", fontSize: 15 }}>WHATSAPP</Text>
                </Button>
              </Animatable.View>
              <Animatable.View animation={"fadeInLeft"} duration={2000} >
                <Button icon={() => (
                  <MaterialCommunityIcons
                    name='phone'
                    size={22}
                    color="#FFFFFF"
                  />
                )} mode="contained" onPress={() => Linking.openURL("tel:+92-311-1772111")}
                  style={{
                    backgroundColor: "#5602FF",
                    marginTop: 30,
                    paddingHorizontal: 20,
                    marginEnd: 15,
                  }}
                >
                  <Text style={{ color: "White", fontSize: 15 }}>CALL</Text>
                </Button>
              </Animatable.View>
            </View>
            <Text style={{ textAlign: "left", marginTop: 20, color: "#000000D4", marginStart: 10 }}><Text style={{ fontWeight: "bold", color: "#000000", }}>Note:</Text>
              Your donation can be used for any permissible / religious / reformatory / welfare well-wishing and good purpose
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
    fontSize: 17,
    color: "#000000",
    fontWeight: "bold",
    padding: 5,
    paddingLeft: 20,
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