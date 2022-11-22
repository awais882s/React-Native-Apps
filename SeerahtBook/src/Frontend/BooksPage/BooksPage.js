export default BooksPage = () => {
    const source = require('../../Assest/pdfbook.pdf');
    return (
        <View style={styles.container}>
            <Pdf
                horizontal={true}
                source={source}
                trustAllCerts={false}
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