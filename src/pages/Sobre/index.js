import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native"
import database from "../../config/firebaseConfig";
import * as authentication from "../../config/authentication"
import styles from "./style"
import firebase from 'firebase/app';
import 'firebase/auth';
export default function Sobre({ navigation }) {

    return (

        <View style={styles.container} >
            <Text style={styles.label}>Sobre</Text>
            <Text style={styles.description}>expo init</Text>
            <Text style={styles.description2}>about</Text>
            <Text style={styles.maintext}>Projeto feito pelos acadêmicos
                Afonso Navarini (1120458) e Matheus Henrique Piana (1120438) na cadeira
                de Tópicos Especiais em Programação, com foco em React Native e suas tecnologias.</Text>
        </View>

    )
}