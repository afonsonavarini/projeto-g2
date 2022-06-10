import React, { useState, useLayoutEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, Dimensions, Alert } from "react-native"
import database from "../../config/firebaseConfig";
import styles from "./style"
import MapView, { Marker } from 'react-native-maps'
import * as Location from "expo-location"
import { FontAwesome } from "@expo/vector-icons"
import firebase from 'firebase/app';
import 'firebase/auth';

export default function Detalhes({ navigation, route }) {

    const [descriptionEdit, setDescriptionEdit] = useState(route.params.description)
    const [userEdit, setUserEdit] = useState(route.params.user)
    const [enderecoEdit, setEnderecoEdit] = useState(route.params.endereco)
    const [saborEdit, setSaborEdit] = useState(route.params.sabor)
    const idTask = route.params.id

    function editPedido(description, user, endereco, id) {
        database.collection("Pedidos").doc(id).update({
            description: descriptionEdit,
            user: userEdit,
            endereco: enderecoEdit,
            sabor: saborEdit
        })
        navigation.navigate("Pedidos")
    }

    function deletarPedido(id) {
        database.collection("Pedidos").doc(id).delete()
        navigation.navigate("Pedidos")
    }

    function addPedido() {
        database.collection("Envios").add({
            user: userEdit,
            sabor: saborEdit,
            status: 'Entregue'
        })
        navigation.navigate("Pedidos")
    }


    function showAlert() {
        Alert.alert(
            "Tem certeza que o pedido foi entregue?",
            "Essa ação não pode ser desfeita.",
            [
                {
                    text: "Não",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "Sim", onPress: () => { addPedido(), deletarPedido(idTask) } }
            ]
        );
    }




    const [location, setLocation] = useState({
        coords: {
            latitude: -28.2857919,
            longitude: -52.7888171,
        }
    })

    const myPosition = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
            console.log('erro')
            return
        } else {
            let myLocation = await Location.getCurrentPositionAsync({})
            setLocation(myLocation)
        }

    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Descrição</Text>
            <TextInput
                style={styles.input}
                placeholder="Ex: Pizza Calabresa"
                onChangeText={setDescriptionEdit}
                value={descriptionEdit}
            />
            <Text style={styles.label}>Usuário</Text>
            <TextInput
                style={styles.input}
                placeholder="Ex: Roger Figueiredo"
                onChangeText={setUserEdit}
                value={userEdit}
            />
            <Text style={styles.label}>Endereço</Text>
            <TextInput
                style={styles.input}
                placeholder="Ex: Av. Flores da Cunha"
                onChangeText={setEnderecoEdit}
                value={enderecoEdit}
            />
            <Text style={styles.label}>Sabor:</Text>
            <Text style={styles.sabor}>{saborEdit}</Text>
            <TouchableOpacity style={styles.buttonNovoPedido} onPress={() => { editPedido(descriptionEdit, userEdit, enderecoEdit, idTask) }}>
                <Text style={styles.iconButton}>Salvar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonEntregue} onPress={() => { showAlert() }}>
                <View style={styles.deliveredButton}>
                    <FontAwesome name="motorcycle" size={23} color="#32cd30">

                    </FontAwesome>
                    <Text style={styles.iconText}>ENTREGUE</Text>
                </View>

            </TouchableOpacity>
        </View>

    )
}