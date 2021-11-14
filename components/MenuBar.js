import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { OptionsIcon, SearchIcon } from "./Icon"

export default function MenuBar(){
    return (
        <View style={styles.menubar}>
            <View>
                <Text style={{color: "#fff", fontWeight: "bold", fontSize: 16}}>Valkyrie Sky</Text>
                <Text style={{color: "#fff", fontSize: 14}}>The journey of a lifetime</Text>
            </View>
            <View style={{display:"flex", flexDirection:"row"}}>
                <SearchIcon />
                <View style={{marginRight: 12}} />
                <OptionsIcon />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    menubar: {
        height: 64,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        color: "#fff",
        backgroundColor: "purple",
    }
})