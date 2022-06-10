import React, { useState, useLayoutEffect, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native"
import { FontAwesome } from "@expo/vector-icons"
import database from "../../config/firebaseConfig";
import * as authentication from "../../config/authentication"
import styles from "./style"
import firebase from 'firebase/app';
import 'firebase/auth';
import AsyncStorage from "@react-native-async-storage/async-storage"
import CheckBox from "../../components/CheckBox";

export default function Login({ navigation }) {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [check, setCheck] = useState('')
    const [errorLogin, setErrorLogin] = useState('')
    const [lembreme, setLembreme] = useState(false);

    const verificarLembreme = async () => {
        let emailMemory = await AsyncStorage.getItem("email")
        let senhaMemory = await AsyncStorage.getItem("senha")
        let checkMemory = await AsyncStorage.getItem("check")
        if (emailMemory) {
            setEmail(emailMemory)
            setSenha(senhaMemory)
            setCheck(checkMemory)
            setLembreme(true)

        }
    }

    useEffect(() => {
        verificarLembreme()
        setErrorLogin("")
    }, [])

    const lembrar = async () => {
        setLembreme(!lembreme)

        if (!lembreme) {
            await AsyncStorage.setItem('email', email)
            await AsyncStorage.setItem("senha", senha)
            await AsyncStorage.setItem('check', check)
            if (check === 'check') {
                setCheck('')
            } else {
                setCheck('check')
            }

        } else {
            await AsyncStorage.removeItem("email")
            await AsyncStorage.removeItem("senha")
            await AsyncStorage.removeItem("check")
            if (check === 'check') {
                setCheck('')
            } else {
                setCheck('check')
            }

        }
    }

    const loginFirebase = () => {
        firebase.auth().signInWithEmailAndPassword(email, senha)
            .then((userCredential) => {
                let user = userCredential.user;
                navigation.navigate('Pedidos')
                setErrorLogin("")
            })
            .catch((error => {
                var errorCode = error.code;
                var errorMessage = error.message;
                setErrorLogin("Usuário ou senha inválidos.")
            }))
    }

    const registroFirebase = () => {
        firebase.auth().createUserWithEmailAndPassword(email, senha)
            .then((userCredential) => {
                let user = userCredential.user;
                setErrorLogin('Conta criada com sucesso!')

            })
            .catch((error) => {
                let errorCode = error.code;
                let errorMessage = error.message;
                setErrorLogin('Erro ao criar sua conta!')

            })
    }

    return (

        <View style={styles.container} >
            <Text style={styles.label}>Faça seu login para continuar</Text>
            <TextInput
                style={styles.input}
                autoCapitalize='none'
                keyboardType='email-address'
                placeholder="E-mail"
                onChangeText={(e) => setEmail(e)}
                value={email}
            />

            <TextInput
                style={styles.input}
                placeholder='Senha'
                autoCapitalize='none'
                secureTextEntry
                onChangeText={(e) => setSenha(e)}
                value={senha}
            />
            <TouchableOpacity style={styles.buttonNovoPedido} onPress={loginFirebase}>
                <Text style={styles.iconButton}>Login</Text>
            </TouchableOpacity>
            <View style={styles.checktext}>
                <CheckBox
                    title='Lembrar-me'
                    check={check}
                />
                <TouchableOpacity onPress={lembrar}>
                    <Text>Lembrar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.faq} onPress={() => navigation.navigate('FAQ')}>
                    <FontAwesome name="info-circle" size={22} color="#0077b6" />
                    <Text style={styles.faq_text}>FAQ</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.invalido}>{errorLogin}</Text>
            <TouchableOpacity style={styles.buttonNovoPedido2} onPress={registroFirebase}>
                <Text style={styles.iconButton}>Criar uma conta</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modo} onPress={() => navigation.navigate('Modo')}>
                <FontAwesome name="book" size={20} color="#32cd30" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.arquitetura} onPress={() => navigation.navigate('Arquitetura')}>
                <FontAwesome name="folder-open" size={20} color="#32cd30" />
            </TouchableOpacity>
        </View>

    )
}