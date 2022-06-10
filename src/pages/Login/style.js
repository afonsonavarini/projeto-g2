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
        width: 150,
        height: 50,
        position: "absolute",
        bottom: 20,
        right: 30,
        backgroundColor: "#32cd30",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: 'center'
    },
    buttonNovoPedido2: {
        width: 150,
        height: 50,
        position: "absolute",
        bottom: 20,
        right: 230,
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
    modo: {
        width: 150,
        height: 50,
        position: "absolute",
        bottom: 100,
        right: 230,
        backgroundColor: "#fff",
        borderRadius: 50,
        borderColor: "#32cd30",
        borderWidth: 1,
        justifyContent: "center",
        alignItems: 'center'
    },
    arquitetura: {
        width: 150,
        height: 50,
        position: "absolute",
        bottom: 100,
        right: 30,
        backgroundColor: "#fff",
        borderRadius: 50,
        borderColor: "#32cd30",
        borderWidth: 1,
        justifyContent: "center",
        alignItems: 'center'
    },
    checktext: {
        flexDirection: 'row',
        marginLeft: 0,
        marginBottom: 10,
        marginTop: 10,
    },
    faq: {
        flexDirection: 'row',
        marginLeft: 250
    },
    faq_text: {
        color: '#0077b6',
        fontSize: 15,
        marginLeft: 5
    },
    invalido: {
        marginLeft: 20,
        color: 'red'
    }
});

export default styles