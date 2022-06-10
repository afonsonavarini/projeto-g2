import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Modal, Alert, Pressable, FlatList, ImageBackground } from "react-native"
import database from "../../config/firebaseConfig";
import styles from "./style"

export default function NovoPedido({ navigation }) {

    const image = { uri: "https://st2.depositphotos.com/3263255/6393/i/950/depositphotos_63934167-stock-photo-circle-pizza-with-cheese.jpg" };
    const [description, setDescription] = useState(null)
    const [user, setUser] = useState(null)
    const [endereco, setEndereco] = useState(null)
    const [sabor, setSabor] = useState(null)

    function addPedido() {
        database.collection("Pedidos").add({
            description: description,
            user: user,
            endereco: endereco,
            sabor: sabor,
            status: 'Criado'
        })
        navigation.navigate("Pedidos")
    }

    const sabores = [{ 'sabor': 'Calabresa' }, { 'sabor': 'Frango com catupiry' }, { 'sabor': 'Bacon' }, { 'sabor': 'Mussarela' }, { 'sabor': 'Pepperoni' }]

    return (

        <View style={styles.container} >
            <Text style={styles.label}>Descrição</Text>
            <TextInput
                style={styles.input}
                placeholder="Ex: Pizza Calabresa"
                onChangeText={setDescription}
                value={description}
            />
            <Text style={styles.label}>Usuário</Text>
            <TextInput
                style={styles.input}
                placeholder="Ex: Roger Figueiredo"
                onChangeText={setUser}
                value={user}
            />
            <Text style={styles.label}>Endereço</Text>
            <TextInput
                style={styles.input}
                placeholder="Ex: Av. Flores da Cunha"
                onChangeText={setEndereco}
                value={endereco}
            />
            <Text style={styles.label}>Sabor:</Text>
            <Text style={styles.sabor}>{sabor}</Text>

            <FlatList
                style={styles.cardMain}
                horizontal
                data={sabores}
                renderItem={(item) => {
                    return (

                        <ImageBackground source={image} style={styles.imageBg}>
                            <View style={styles.card}>
                                <TouchableOpacity onPress={() => { setSabor(item['item']['sabor']) }}>
                                    <Text style={styles.saborText}>{item['item']['sabor']}</Text>
                                </TouchableOpacity>
                            </View>
                        </ImageBackground>

                    )
                }}
            />
            <TouchableOpacity style={styles.buttonNovoPedido} onPress={() => { addPedido() }}>
                <Text style={styles.iconButton}>Salvar</Text>
            </TouchableOpacity>
        </View>

    )
}