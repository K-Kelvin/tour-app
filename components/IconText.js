import React from "react"
import { View, Text } from "react-native"

export default function IconText({text, icon: Icon, style}){
    return (
        <View style={{display: "flex", flexDirection: "row"}}>
            <Icon/>
            <Text style={{fontSize: 14, fontWeight: "bold", marginLeft: 6}}>
                {text}
            </Text>
        </View>
    )
}