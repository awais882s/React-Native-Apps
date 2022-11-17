import React, { useState } from 'react'
import { View, StyleSheet, Linking, TouchableOpacity, Text } from 'react-native'
import FontAwesome5Brands from 'react-native-vector-icons/FontAwesome5Pro'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { WebView } from 'react-native-webview';
import { ActivityIndicator } from 'react-native-paper';

export default function ConnectWithSeeraht() {
    const [websiteUrl, setWebsiteUrl] = useState("https://www.facebook.com/seeraht");
    const [loading, setLoading] = useState(false);

    // Global Function For Open Websites
    const openUrl = (link) => {
        setWebsiteUrl(link);
        setLoading(true);

    }


    return (
        <View style={Styles.container}>
            <View style={[Styles.Icon, { justifyContent: "space-around" }]}>
                <TouchableOpacity
                    onPress={() => openUrl("https://www.facebook.com/seeraht")}
                >
                    <FontAwesome5Brands
                        name='facebook'
                        size={30}
                        color="#0008FF"
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => openUrl("https://www.instagram.com/alSEERAHT/")}

                >
                    <FontAwesome5Brands
                        name='instagram'
                        size={30}
                        color="#FF000D"
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => openUrl("https://twitter.com/alSEERAHT/")}

                >
                    <FontAwesome5Brands
                        name='twitter'
                        size={30}
                        color="#00acee"
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL("https://www.youtube.com/@SEERAHT")}

                >
                    <FontAwesome5Brands
                        name='youtube'
                        size={30}
                        color="#FF0202"
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => openUrl("https://seeraht.com/")}

                >
                    <MaterialCommunityIcons
                        name='web'
                        size={30}
                        color="#9e1f63"
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL("https://api.whatsapp.com/send?phone=923111772111&text=")}

                >
                    <FontAwesome5Brands
                        name='whatsapp'
                        size={30}
                        color="#128c7e"
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL("tel:+92-311-1772111")}
                    style={{
                    }}
                >
                    <MaterialCommunityIcons
                        name='phone-dial'
                        size={30}
                        color="#5602FF"
                    />
                </TouchableOpacity>
            </View>

            {/* Open website in current page  */}
            <View style={{ height: 650 }}>
                {
                    !loading ? ""
                        :
                        <View style={{ height: 700, display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <ActivityIndicator animating={true} color={"#9e1f63"} size={'large'} />
                        </View>
                }
                <WebView source={{ uri: `${websiteUrl}` }} onLoad={() => { setLoading(true) }} onLoadEnd={() => { setLoading(false) }} />
            </View>
        </View >
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1
    },
    Icon: {
        flexDirection: "row",
        borderBottomColor: "#e2e2e2",
        marginTop: 5,
        borderBottomWidth: 0.5,
        backgroundColor: 'White'
    },

})