import React, { useState } from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import IconText from "../components/IconText";
import MenuBar from "../components/MenuBar";
import Button from "../components/Button";
import { ClockIcon, PlaneIcon, RateIcon } from "../components/Icon";
import Screen from "../components/Screen";


export default function Home({ navigator }) {
    const [days, setDays] = useState(1)
    const [placeTitle, setPlaceTitle] = useState("McWay Falls, United States")
    const [rating, setRating] = useState("5.0")
    const [time, setTime] = useState("7 hours")
    const [distance, setDistance] = useState("200 km")
    const [description, setDescription] = useState("McWay Falls is an 80-foot-tall waterfall on the coast of Big Sur in central...")
    const [totalPrice, setTotalPrice] = useState("$450")

    const navigateToUserDetails = () => {
        navigator.navigate("UserDetails")
    }
    const addDays = () => {setDays(prev => prev + 1)}
    const subtractDays = () => {setDays(prev => prev - 1)}

    return (
        <Screen>
            <View style={{flex: 1}}>
                <MenuBar/>
                <ImageBackground source={{uri: "https://picsum.photos/id/1018/536/354"}} resizeMode="cover" style={styles.background}>
                    <View style={styles.body}>
                        <View style={{padding: 12}}>
                            <Text style={{fontWeight: "bold", fontSize: 18, marginBottom: 12}}>
                                {placeTitle}
                            </Text>
                            <View style={{display:"flex", flexDirection:"row", gap: 12, marginBottom: 24}}>
                                <IconText icon={RateIcon} text={rating} />
                                <IconText icon={ClockIcon} text={time} />
                                <IconText icon={PlaneIcon} text={distance} />
                            </View>
                            <View style={{display: "flex", flexDirection: "row", gap: 24, alignItems: "center"}}>
                                <View style={{display: "flex", flexDirection: "row", alignItems: "center", gap: 8, borderRadius: 100, padding: 6, backgroundColor:"purple"}}>
                                    <Button title="-" padding={4} color="#000" onPress={subtractDays} />
                                    <Text style={{color: "white"}}>{days}</Text>
                                    <Button title="+" padding={4} color="#000" onPress={addDays} />
                                </View>
                                <IconText icon={ClockIcon} text={`${days} Days`} />
                            </View>
                        </View>
                        <View>
                            <View style={{padding: 12, backgroundColor: "#fff", height: "50%"}}>
                                <View style={{display:"flex", flexDirection: "row", justifyContent: "space-evenly"}}>
                                    <Text style={{fontWeight: "bold"}}>Descriptions</Text>
                                    <Text style={{color:"gray"}}>Facility</Text>
                                </View>
                                <Text>
                                    {description}
                                </Text>
                            </View>
                            <View style={styles.footer}>
                                <Text style={styles.totalPrice}>{totalPrice}</Text>
                                <Button
                                    title="Book a tour"
                                    color="purple"
                                    onPress={navigateToUserDetails}
                                />
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </Screen>
    );
}

const appBorderRadius = 12
const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end"
    },
    body: {
        height: "60%",
        borderTopLeftRadius: appBorderRadius,
        borderTopRightRadius: appBorderRadius,
        backgroundColor: "lightblue"
    },
    footer: {
        borderRadius: 12,
        padding: 16,
        flex: 1,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "purple",
    },
    totalPrice: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff",
    },
    btnBook: {
        padding: 6,
        borderRadius: 8,
        backgroundColor: "#fff",
        color: "purple",
    }
});
