import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { FontAwesome } from "@expo/vector-icons"
import React from 'react'

export default function CheckBox(props) {
    return (
        <View>
            <TouchableOpacity style={styles.checkboxMark} />
            <FontAwesome style={styles.icon} name={props.check} size={15} color="#32cd30"></FontAwesome>
        </View>
    )
}

const styles = StyleSheet.create({
    checkbox: {
        height: 20,
        width: 20,
        marginRight: 350,
        borderWidth: 2,
        borderBottomColor: 'black',
        backgroundColor: '#fff',
        alignSelf: 'center'
    },
    checkboxMark: {
        height: 20,
        width: 20,
        marginRight: 5,
        marginLeft: 20,
        borderWidth: 2,
        borderBottomColor: 'black',
        backgroundColor: '#fff',
        alignSelf: 'center'
    },
    icon: {
        position: 'absolute',
        marginLeft: 23,
        marginTop: 2,
    }
});