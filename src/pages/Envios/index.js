import React, { useState, useEffect, useLayoutEffect } from "react";
import { SafeAreaView, View, Text, TouchableOpacity, Button, FlatList, ImageBackground, Alert } from "react-native"
import database from "../../config/firebaseConfig";
import { FontAwesome } from "@expo/vector-icons"
import styles from "./style"
import firebase from 'firebase/app';
import 'firebase/auth';
import * as authentication from '../../config/authentication'

export default function Envios({ navigation }) {



    const image = { uri: "https://static.wixstatic.com/media/44b0fc_4dd472759c7b40b2b16d718ca610f40a~mv2.jpg/v1/fill/w_423,h_856,al_c,q_85,enc_auto/44b0fc_4dd472759c7b40b2b16d718ca610f40a~mv2.jpg" };

    const [envio, setEedido] = useState([])

    function deletarPedido(id) {
        database.collection("Envios").doc(id).delete()
    }

    // 

    useEffect(() => {
        database.collection("Envios").onSnapshot((query) => {
            const list = []
            query.forEach((doc) => {
                list.push({ ...doc.data(), id: doc.id })
            })
            setEedido(list)
        })
    }, [])

    return (

        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
                <FlatList showsVerticalScrollIndicator={false}
                    data={envio}
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
                                    user: item['item']['user'],
                                    sabor: item['item']['sabor']
                                })}>
                                    {item['item']['user']}
                                </Text>
                            </View>

                        )

                    }}

                />
            </ImageBackground>
        </View>

    )
}