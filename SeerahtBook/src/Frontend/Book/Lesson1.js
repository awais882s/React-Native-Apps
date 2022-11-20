import React, { useContext } from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import Pdf from 'react-native-pdf';
import { useAuthContext } from '../../Context/Context';

export default function Lesson1() {
    // render() {
    let { pageInfo } = useAuthContext()
    const source = require('../../Assest/pdfbook.pdf');  // ios only
    return (
        <View style={styles.container} >
            <Pdf
                page={pageInfo.pageNo}
                singlePage={true}
                trustAllCerts={false}
                horizontal={true}
                source={source}
                maxScale={3.0}
                style={styles.pdf} />
        </View>
    )
    // }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 25,
    },
    pdf: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    }
});