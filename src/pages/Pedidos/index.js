import React, { useState, useEffect, useLayoutEffect } from "react";
import { SafeAreaView, View, Text, TouchableOpacity, Button, FlatList, ImageBackground, Alert } from "react-native"
import database from "../../config/firebaseConfig";
import { FontAwesome } from "@expo/vector-icons"
import styles from "./style"
import firebase from 'firebase/app';
import 'firebase/auth';
import * as authentication from '../../config/authentication'
import Envios from "../Envios";

export default function Pedidos({ navigation }) {


    const logoff = async () => {

        firebase.auth().signOut().then(() => {
            navigation.navigate('Login')
        }).catch((error) => {
            console.log(error)
        })
    }



    const image = { uri: "https://static.wixstatic.com/media/44b0fc_4dd472759c7b40b2b16d718ca610f40a~mv2.jpg/v1/fill/w_423,h_856,al_c,q_85,enc_auto/44b0fc_4dd472759c7b40b2b16d718ca610f40a~mv2.jpg" };

    const [pedido, setPedido] = useState([])

    function deletarPedido(id) {
        database.collection("Pedidos").doc(id).delete()
    }

    // 

    useEffect(() => {
        database.collection("Pedidos").onSnapshot((query) => {
            const list = []
            query.forEach((doc) => {
                list.push({ ...doc.data(), id: doc.id })
            })
            setPedido(list)
        })
    }, [])

    return (

        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
                <FlatList showsVerticalScrollIndicator={false}
                    data={pedido}
                    renderItem={(item) => {
                        return (
                            <View style={styles.Pedidos}>
                                <TouchableOpacity style={styles.deletePedidos} onPress={() => {
                                    deletarPedido(item['item']['id'])
                                }}>
                                    <FontAwesome name="close" size={23} color="#32cd30">

                                    </FontAwesome>
                                </TouchableOpacity>
                                <Text style={styles.DescriptionPedido} onPress={() => navigation.navigate("Detalhes", {
                                    id: item['item']['id'],
                                    description: item['item']['description'],
                                    user: item['item']['user'],
                                    endereco: item['item']['endereco'],
                                    sabor: item['item']['sabor']
                                })}>
                                    {item['item']['description']}

                                </Text>
                            </View>

                        )

                    }}

                />
                <TouchableOpacity style={styles.buttonNovoPedido} onPress={() => navigation.navigate("NovoPedido")}>
                    <FontAwesome name="sticky-note" size={23} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonSobre} onPress={() => navigation.navigate("Sobre")}>
                    <FontAwesome name="bookmark" size={23} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonLogoff} onPress={logoff}>
                    <FontAwesome name="sign-out" size={23} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonEnvios} onPress={() => navigation.navigate("Envios")}>
                    <View style={styles.enviosFlex}>
                        <FontAwesome name="truck" size={23} color="#32cd30" />
                        <Text style={styles.enviosText}>ENVIADOS</Text>
                    </View>
                </TouchableOpacity>
            </ImageBackground>
        </View>

    )
}