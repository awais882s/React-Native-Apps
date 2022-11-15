import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

export default function ConnectWithSeeraht() {
    return (
        <ScrollView>
            <View style={Styles.facebook}>
                <Text style={Styles.fb}>FaceBook</Text>
            </View>
        </ScrollView>
    )
}

const Styles = StyleSheet.create({
    facebook: {
        textAlign:"center"
    },
    fb:{
        fontSize: 30

    }
})