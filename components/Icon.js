import React from "react";
import { Pressable } from "react-native";
import { Icon as RNEIcon } from "react-native-elements";

export default function Icon({ name, type="feather", onPress=null, color="white", style={} }) {
    return (
        <Pressable onPress={(e) => {}}>
            <RNEIcon 
                name={name}
                type={type}
                color={color}
                size={18}
                style={style}
            />
        </Pressable>
    )
}

export function SearchIcon(onPress=()=>{}, style={}){
    return <Icon name="search" onPress={onPress} style={style} />
}

export function OptionsIcon(onPress=()=>{}, style={}){
    return <Icon name="more-horizontal" onPress={onPress} style={style} />
}

export function RateIcon(onPress=()=>{}, style={}){
    return <Icon name="star" color="#000" onPress={onPress} style={style} />
}

export function ClockIcon(onPress=()=>{}, style={}){
    return <Icon name="clock" color="#000" onPress={onPress} style={style} />
}

export function PlaneIcon(onPress=()=>{}, style={}){
    return <Icon name="flight" type="material" color="#000" onPress={onPress} style={style} />
}