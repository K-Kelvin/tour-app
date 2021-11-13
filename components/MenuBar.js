import React from "react"
import { StyleSheet, View } from "react-native"

export default function MenuBar(){
    return (
        <View style={styles.menubar}>
            Menu bar
        </View>
    )
}

const styles = StyleSheet.create({
    menubar: {
        paddingHorizontal: 16,
        paddingVertical: 12,
        color: "#fff",
        backgroundColor: "purple",
    }
})