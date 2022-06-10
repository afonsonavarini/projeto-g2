import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native"
import database from "../../config/firebaseConfig";
import * as authentication from "../../config/authentication"
import styles from "./style"
import firebase from 'firebase/app';
import 'firebase/auth';
export default function Modo({ navigation }) {

    return (

        <View style={styles.container} >
            <Text style={styles.label}>Por que o Expo?</Text>
            <Text style={styles.description}>expo init</Text>
            <Text style={styles.description2}>expo-info</Text>
            <Text style={styles.maintext}>Como não existe uma situação do tipo "Quando usar o Expo?",
                é mais fácil entender quando não usá-lo. Fica a seu critério de usar o Expo ou não.
                Se seu aplicativo for muito simples, não houver limitações e você está iniciando com React Native agora, o Expo pode
                te ajudar bastante!</Text>
        </View>

    )
}