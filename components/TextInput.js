import React from "react"
import { StyleSheet, Text, View, TextInput as RNTextInput } from "react-native"

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
        gap: 4,
    },
    label: {
        color: "#000",
        fontSize: 16,
        textAlign: "left",
    },
    input: {
        height: 40, 
        borderWidth: 1, 
        borderRadius: 8,
        borderColor: "purple", 
        paddingHorizontal: 8
    }
})