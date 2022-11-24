import React from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import Pdf from 'react-native-pdf';
import { useAuthContext } from '../../Context/Context';

export default Lesson1 = () => {
    let { pageInfo } = useAuthContext()
    const source = { uri: "https://firebasestorage.googleapis.com/v0/b/seeraht-book.appspot.com/o/pdfbook.pdf?alt=media&token=f35b6899-e357-474", cache: true };  // ios only
    return (
        <View style={styles.container}>
            <Pdf
                page={pageInfo.pageNo}
                singlePage={true}
                trustAllCerts={false}
                horizontal={true}
                source={source}
                style={styles.pdf} />
        </View>
    )
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