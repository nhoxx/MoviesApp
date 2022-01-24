import { Dimensions, StyleSheet } from "react-native";
const width = (Dimensions.get('window').width - 60) / 2;
export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    horizontal: {
        paddingHorizontal: 20,
    },
    rowAlign: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    icBack: {
        width: 24,
        height: 24,
        tintColor: 'black'
    },
    txtBack: {
        fontSize: 18,
        color: 'black',
        marginLeft: 7
    },
    txtTitle: {
        fontSize: 20,
        color: 'gray',
        marginVertical: 10,
        fontWeight: 'bold'
    },
    columnWrapperStyle: {
        justifyContent: 'space-between'
    },
    txtNoData: {
        marginTop: 10,
        textAlign: 'center',
        flex: 1,
    },
    item: {
        width: width,
        height: 230,
        marginBottom: 20,
        borderRadius: 10,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 10
    },
    vote: {
        borderRadius: 16,
        width: 32,
        height: 32,
        alignItems: 'center',
        justifyContent :'center',
        overflow: 'hidden',
        backgroundColor: 'orange',
        alignContent: 'flex-start',
        position: 'absolute',
        right: 10,
        top: 7,
    },
    txtVote: {
        fontSize: 16,
        fontWeight: '600',
        color: 'white',
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        paddingLeft: 10,
        paddingVertical: 5,
        width: '100%',
        backgroundColor: 'rgba(52,52,52,0.2)',
        borderBottomRightRadius: 16,
        borderBottomLeftRadius: 16,
    },
    year: {
        color: 'white',
        fontSize: 14,
    },
    txtName: {
        flex: 1,
        textTransform: 'uppercase',
        fontSize: 16,
        fontWeight: '600',
        color: 'white',
    }
})