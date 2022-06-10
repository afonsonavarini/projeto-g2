import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native"
import database from "../../config/firebaseConfig";
import * as authentication from "../../config/authentication"
import styles from "./style"
import firebase from 'firebase/app';
import 'firebase/auth';
export default function FAQ({ navigation }) {

    return (

        <View style={styles.container} >
            <Text style={styles.label}>FAQ</Text>
            <Text style={styles.description}>expo init</Text>
            <Text style={styles.description2}>faq</Text>
            <Text style={styles.maintext}>O sistema funciona de forma simples:
                Na tela inicial é onde se encontra o login e cadastro, em seguida os pedidos
                já feitos. Botão de adicionar pedido no canto inferior direito e ao pressionar
                um pedido é possível verificar seus detalhes e editá-lo. Ao clicar na estrela seu
                pedido é deletado. Demais botões são puramente para informações adicionais.</Text>
        </View>

    )
}