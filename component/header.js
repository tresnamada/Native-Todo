import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Coba Native Todos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 60,
        paddingTop: 15,
        backgroundColor: '#77CDFF'
    },
    title: {
        textAlign: 'center',
        color: '#091057',
        fontSize: 24,
        fontWeight: 'bold'
    }
})