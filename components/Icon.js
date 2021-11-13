import React from "react";
import { TouchableOpacity } from "react-native";
import { Icon as RNEIcon } from "react-native-elements";

export default function Icon({ name, onPress=()=>{}, style={} }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <RNEIcon 
                name={name}
                type="feather"
                color="white"
                size={18}
                style={style}
            />
        </TouchableOpacity>
    )
}

export function SearchIcon(onPress=()=>{}, style={}){
    return <Icon name="search" onPress={onPress} style={style} />
}

export function OptionsIcon(onPress=()=>{}, style={}){
    return <Icon name="more-horizontal" onPress={onPress} style={style} />
}

export function RateIcon(onPress=()=>{}, style={}){
    return <Icon name="star" onPress={onPress} style={style} />
}

export function ClockIcon(onPress=()=>{}, style={}){
    return <Icon name="clock" onPress={onPress} style={style} />
}

export function PlaneIcon(onPress=()=>{}, style={}){
    return <Icon name="send" onPress={onPress} style={style} />
}