import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: 20
    },

    label: {
        fontSize: 40,
        padding: 10,
        fontWeight: 'bold',
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 5,
        color: "#32cd30",
        marginBottom: 20,
    },

    deletePedidos: {
        justifyContent: 'center',
        paddingLeft: 35,

    },

    description: {
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

    description2: {
        position: 'absolute',
        width: "75%",
        alignContent: "flex-start",
        padding: 12,
        paddingHorizontal: 20,
        borderRadius: 50,
        top: 118,
        left: 58,
        color: "#fd788b",
    },

    maintext: {
        width: "75%",
        alignContent: "flex-start",
        padding: 12,
        fontSize: 20,
        paddingHorizontal: 20,
        borderRadius: 50,
        marginBottom: 5,
        marginRight: 15,
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
    }

})

export default styles   