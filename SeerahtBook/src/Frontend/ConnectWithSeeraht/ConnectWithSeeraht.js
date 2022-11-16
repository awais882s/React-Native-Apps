import React from 'react'
import { View, StyleSheet, Linking } from 'react-native'
import { Button } from 'react-native-paper'
import FontAwesome5Brands from 'react-native-vector-icons/FontAwesome5Pro'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


export default function ConnectWithSeeraht() {
    return (
        <View style={Styles.container}>
            <View style={Styles.Icon}>
                <Button icon={() => (
                    <FontAwesome5Brands
                        name='facebook'
                        size={35}
                        color="#0008FF"
                    />
                )} onPress={() => Linking.openURL("https://www.facebook.com/SEERAHT")}

                    style={{
                        paddingRight: 6,
                        marginRight: -25,
                    }}
                >
                </Button>
                <Button icon={() => (
                    <FontAwesome5Brands
                        name='instagram'
                        size={35}
                        color="#FF000D"
                    />
                )} onPress={() => Linking.openURL('https://www.instagram.com/alSEERAHT/')}
                    style={{
                        paddingRight: 6,
                        marginRight: -25,
                    }}

                >
                </Button>
                <Button icon={() => (
                    <FontAwesome5Brands
                        name='twitter'
                        size={35}
                        color="#00acee"
                    />
                )} onPress={() => Linking.openURL('https://twitter.com/MuftiMustafaA?t=oTL37R10sA_gW1m_lx6hPg&s=09')}
                    style={{
                        paddingRight: 6,
                        marginRight: -25,
                    }}

                >
                </Button>
                <Button icon={() => (
                    <FontAwesome5Brands
                        name='youtube'
                        size={35}
                        color="#FF0202"
                    />
                )} onPress={() => Linking.openURL("https://youtube.com/c/MuftiMustafaAziz")}
                    style={{
                        paddingRight: 6,
                        marginRight: -25,
                    }}

                >
                </Button>
                <Button icon={() => (
                    <MaterialCommunityIcons
                        name='web'
                        size={35}
                    //    color="#FF0202"
                    />
                )} onPress={() => Linking.openURL("https://seeraht.com/")}
                    style={{
                        paddingRight: 6,
                        marginRight: -25,
                    }}

                >
                </Button>
                <Button icon={() => (
                    <FontAwesome5Brands
                        name='whatsapp'
                        size={35}
                        color="#128c7e"
                    />
                )} onPress={() => alert('Pressed')}
                    style={{
                        paddingRight: 6,
                        marginRight: -25,
                    }}

                >
                </Button>
                <Button icon={() => (
                    <MaterialCommunityIcons
                        name='phone-dial'
                        size={35}
                        color="#5602FF"
                    />
                )} onPress={() => alert('Pressed')}
                    style={{
                        paddingRight: 6,
                        marginRight: -25,
                    }}
                >
                </Button>
            </View>
        </View >
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1
    },
    Icon: {
        //    display:"flex",
        flexDirection: "row",
        borderBottomColor: "#0000005D",
        marginTop: 5,
        borderBottomWidth: 1,
        backgroundColor: 'White'
    },

})