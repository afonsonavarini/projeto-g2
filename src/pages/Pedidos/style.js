import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: 20
    },

    Pedidos: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 5
    },

    deletePedidos: {
        justifyContent: 'center',
        paddingLeft: 35,

    },

    DescriptionPedido: {
        width: "75%",
        alignContent: "flex-start",
        backgroundColor: "#f5f5f5cf",
        padding: 12,
        paddingHorizontal: 20,
        borderRadius: 50,
        marginBottom: 5,
        marginRight: 15,
        color: "#282b2db5",
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
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    buttonLogoff: {
        width: 60,
        height: 60,
        position: "absolute",
        bottom: 30,
        left: 30,
        backgroundColor: "#32cd30",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: 'center'
    },
    buttonSobre: {
        width: 60,
        height: 60,
        position: "absolute",
        bottom: 30,
        left: 180,
        backgroundColor: "#32cd30",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: 'center'
    },
    buttonEnvios: {
        width: 200,
        height: 50,
        position: "absolute",
        bottom: 100,
        left: 110,
        backgroundColor: "#fff",
        borderRadius: 50,
        borderWidth: 2,
        borderColor: "#32cd30",
        justifyContent: "center",
        alignItems: 'center'
    },
    enviosFlex: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center'
    },
    enviosText: {
        color: "#32cd30",
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10,
    },


})

export default styles