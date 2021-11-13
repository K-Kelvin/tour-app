import React from "react"
import { View, Text } from "react-native"

export default function IconText({text, icon: Icon}){
    return (
        <View style={{display: "flex", flexDirection: "row", gap: 6}}>
            <Icon/>
            <Text style={{fontSize: 14, fontWeight: "bold"}}>
                {text}
            </Text>
        </View>
    )
}