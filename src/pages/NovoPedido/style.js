import { StyleSheet } from 'react-native'

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
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",

    },
    modalView: {
        width: 300,
        height: 300,
        flexDirection: 'column',
        justifyContent: 'space-around',
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        marginTop: 20,
        width: 200,
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        backgroundColor: "#fff",
        borderColor: "#32cd30",
        borderWidth: 2,
    },
    buttonOpen: {
        backgroundColor: "#fff",
    },
    buttonClose: {
        backgroundColor: "#fff",
    },
    textStyle: {
        color: "#32cd30",
        fontWeight: "bold",
        textAlign: "center",
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    sabor: {
        marginLeft: 20,
        marginTop: 5,
    },
    imageBg: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    cardMain: {
        flexDirection: 'row',
        marginTop: 20,
    },

    card: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginRight: 10,
        borderRadius: 50,
        padding: 10,
        width: 100,
        height: 100,
    },
    saborText: {
        fontWeight: 'bold'
    }
});

export default styles