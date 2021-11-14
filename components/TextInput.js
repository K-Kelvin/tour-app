import React from "react"
import { StyleSheet, Text, View, TextInput as RNTextInput } from "react-native"
import purple from "../constants"

export default function TextInput({ label, placeholder, value, onChangeText }){
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <RNTextInput
                style={styles.input}
                placeholder={placeholder}
                onChangeText={onChangeText}
                value={value}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        marginBottom: 16,
    },
    label: {
        color: "#000",
        fontSize: 16,
        textAlign: "left",
        marginBottom: 4,
    },
    input: {
        borderWidth: 1, 
        borderRadius: 8,
        borderColor: purple.violet, 
        paddingVertical: 10,
        paddingHorizontal: 16
    }
})