import React from 'react'
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import Faecebook from '../../Assest/Digitial/facebook.png'
import Instagram from '../../Assest/Digitial/instagram.png'
import Twitter from '../../Assest/Digitial/twitter.png'
import Google from '../../Assest/Digitial/goolge.png'
import Youtube from '../../Assest/Digitial/youtube.png'
import Whatsapp from '../../Assest/Digitial/whatsapp.png'
import Phone from '../../Assest/Digitial/phone.png'
import { Button } from 'react-native-paper'

export default function ConnectWithSeeraht() {
    return (
        <ScrollView>
            <View style={Styles.facebook}>
                <Button icon={() => (
                    <Image
                        source={Faecebook}
                        style={{ width: 40, height: 40, }}
                    />
                )}
                    textColor='#000000' onPress={() => alert('Pressed')}
                    style={{
                        backgroundColor: "#4267B2",
                        marginTop: 15,
                        marginHorizontal: 45,
                    }}
                >
                    <Text style={{ color: "white", fontSize: 15, }}>Contact with FaceBook</Text>
                </Button>

            </View>
            <View style={Styles.facebook}>
                <Button icon={() => (
                    <Image
                        source={Instagram}
                        style={{ width: 40, height: 40 }}
                    />
                )}
                    textColor='#000000' onPress={() => alert('Pressed')}
                    style={{
                        backgroundColor: "#F4002593",
                        marginTop: 15,
                        marginHorizontal: 45,
                    }}
                >
                    <Text style={{ color: "white", fontSize: 15, }}> Contact With Instagram</Text>
                </Button>
            </View>
            <View style={Styles.facebook}>
                <Button icon={() => (
                    <Image
                        source={Twitter}
                        style={{ width: 35, height: 35, }}
                    />
                )}
                    textColor='#F9F9F9' onPress={() => alert('Pressed')}
                    style={{
                        backgroundColor:"#1DA1F2",
                        marginTop: 15,
                        marginHorizontal: 45,
                    }}
                >
                    <Text style={{ color: "#120101", fontSize: 15, }}> Contact With Twitter</Text>
                </Button>
            </View>
            <View style={Styles.facebook}>
                <Button icon={() => (
                    <Image
                        source={Google}
                        style={{ width: 35, height: 35, }}
                    />
                )}
                    textColor='#F9F9F9' onPress={() => alert('Pressed')}
                    style={{
                        backgroundColor:"#0F9D58",
                        marginTop: 15,
                        marginHorizontal: 45,
                    }}
                >
                    <Text style={{ color: "#120101", fontSize: 15, }}> Contact With Chrome</Text>
                </Button>
            </View>
            <View style={Styles.facebook}>
                <Button icon={() => (
                    <Image
                        source={Youtube}
                        style={{ width: 35, height:40, }}
                    />
                )}
                    textColor='#F9F9F9' onPress={() => alert('Pressed')}
                    style={{
                          backgroundColor:"#FF000098",
                        marginTop: 15,
                        marginHorizontal: 45,
                    }}
                >
                    <Text style={{ color: "#F3F3F3", fontSize: 15, }}> Contact With YouTube</Text>
                </Button>
            </View>
            <View style={Styles.facebook}>
                <Button icon={() => (
                    <Image
                        source={Whatsapp}
                        style={{ width: 30, height:30, }}
                    />
                )}
                    textColor='#F9F9F9' onPress={() => alert('Pressed')}
                    style={{
                        backgroundColor:"#25D366",
                        marginTop: 15,
                        marginHorizontal: 45,
                    }}
                >
                    <Text style={{ color: "#330505", fontSize: 15, }}> Contact With Whatsapp</Text>
                </Button>
            </View>
            <View style={Styles.facebook}>
                <Button icon={() => (
                    <Image
                        source={Phone}
                        style={{ width: 30, height:30,  }}
                    />
                )}
                    textColor='#F9F9F9' onPress={() => alert('Pressed')}
                    style={{
                        backgroundColor: "#10CCED",
                        marginTop: 15,
                        marginHorizontal: 45,
                    }}
                >
                    <Text style={{ color: "#000000", fontSize: 15, }}> Contact With Phone</Text>
                </Button>
            </View>
        </ScrollView >
    )
}

const Styles = StyleSheet.create({
    facebook: {
        textAlign: "center",
    },
    fb: {
        fontSize: 20,
        color: "Black",
        marginTop: 10,
        backgroundColor: "#CFCACA87",
        padding: 5,
        textAlign: "center"

    },
})