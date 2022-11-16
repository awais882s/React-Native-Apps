import React from 'react'
import { View, Text, StyleSheet, Image, Linking } from 'react-native'
import { Button } from 'react-native-paper'
import Facebook from "../../Assest/Digitial/facebook.png"
import Google from "../../Assest/Digitial/goolge.png"
import Instagram from "../../Assest/Digitial/instagram.png"
import Twitter from "../../Assest/Digitial/twitter.png"
import Youtube from "../../Assest/Digitial/youtube.png"
// import Website from "../../Assest/Digitial/website.png"
import Whatsapp from "../../Assest/Digitial/whatsapp.png"
import Phone from "../../Assest/Digitial/phone.png"



export default function ConnectWithSeeraht() {
    return (
        <View style={Styles.container}>
            <View style={Styles.Icon}>
                <Button icon={() => (
                    <Image
                        source={Facebook}
                        style={{ width:25, height: 40, margin:0, marginTop:5}}
                    />
                )}onPress={() => Linking.openURL("https://www.facebook.com/SEERAHT")}
               
                style={{
                    paddingRight:10,
                    marginRight:-25 ,
                    marginLeft:10
              }}
              >
                </Button>
                <Button icon={() => (
                    <Image
                        source={Instagram}
                        style={{ width:35, height: 40, marginTop:5 , }}
                    />
                )} onPress={() => Linking.openURL('https://www.instagram.com/alSEERAHT/')}
                style={{
                    paddingRight:10,
                      marginRight:-25 
                }}
                >
                </Button>
                <Button icon={() => (
                    <Image
                        source={Twitter}
                        style={{ width: 40, height: 40, marginTop:5 , }}
                    />
                )} onPress={() => Linking.openURL('https://twitter.com/MuftiMustafaA?t=oTL37R10sA_gW1m_lx6hPg&s=09')}
                style={{
                    paddingRight:10,
                    marginRight:-25 
              }}
                >
                </Button>
                <Button icon={() => (
                    <Image
                        source={Youtube}
                        style={{ width:40, height: 50, marginTop:5 ,}}
                    />
                )} onPress={() => Linking.openURL("https://youtube.com/c/MuftiMustafaAziz")}
                style={{
                    padding:0,
                    marginRight:-20,
                    marginLeft:-10 
              }}
                >
                </Button>
                <Button icon={() => (
                    <Image
                        source={Google}
                        style={{ width: 35, height: 40, marginTop:5 , }}
                    />
                )} onPress={() => Linking.openURL("https://seeraht.com/")}
                style={{
                    padding:0,
                    marginRight:-15 
              }}
                >
                </Button>
                <Button icon={() => (
                    <Image
                        source={Whatsapp}
                        style={{ width: 30, height: 40, marginTop:5  }}
                    />
                )} onPress={() => alert('Pressed')}
                style={{
                    padding:0,
                    marginRight:-15 
              }}
                >
                </Button>
                <Button icon={() => (
                    <Image
                        source={Phone}
                        style={{ width: 30, height: 40, marginTop:5 , }}
                    />
                )} onPress={() => alert('Pressed')}
                style={{
                    padding:0,
                    marginRight:-10 
              }}
               >
                </Button>
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1
    },
    Icon: {
    //    display:"flex",
       flexDirection:"row",
       borderBottomColor:"#0000005D",
       marginTop:5,
       borderBottomWidth:1,
       backgroundColor:'White'
    },

})