import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    label: {
        width: "90%",
        marginTop: 20,
        fontSize: 16,
        marginLeft: 20,
        color: "#32cd30",
        fontWeight: 'bold'
    },
    input: {
        width: "90%",
        marginTop: 10,
        padding: 10,
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: "#32cd30",
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    buttonNovoPedido: {
        width: 60,
        height: 60,
        position: "absolute",
        bottom: 30,
        right: 30,
        backgroundColor: "#32cd30",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: 'center'
    },
    iconButton: {
        color: "#fff",
        fontSize: 16,
        fontWeight: 'bold'
    },
    map: {
        width: 300,
        height: 300,

    },
    buttonEntregue: {
        width: 200,
        height: 60,
        position: "absolute",
        bottom: 30,
        left: 30,
        backgroundColor: "#fff",
        borderColor: "#32cd30",
        borderWidth: 2,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: 'center'
    },
    iconText: {
        color: "#32cd30",
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 15,
    },
    deliveredButton: {
        flexDirection: 'row',
    },
    sabor: {
        marginLeft: 20,
        marginTop: 5,
    },

});

export default styles