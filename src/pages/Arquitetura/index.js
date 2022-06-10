import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native"
import database from "../../config/firebaseConfig";
import * as authentication from "../../config/authentication"
import styles from "./style"
import firebase from 'firebase/app';
import 'firebase/auth';
export default function Arquitetura({ navigation }) {

    return (

        <View style={styles.container} >
            <Text style={styles.label}>Arquitetura</Text>
            <Text style={styles.description}>expo init</Text>
            <Text style={styles.description2}>architecture</Text>
            <Text style={styles.maintext}>O projeto se baseia em uma arquitetura de pastas,
                separando o esquema de telas do back-end. As páginas se encontram em pastas únicas,
                de forma que cada componente tenha seu próprio index e style, facilitando a compreensão,
                manutenção e manuseio do código.</Text>
        </View>

    )
}