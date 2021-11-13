import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import TextInput from "../components/TextInput";

export default function UserDetails({ navigator }) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    const goBack = () => {
        navigator.goBack();
    }

    return (
        <View style={{padding: 12}}>
            <Text style={styles.title}>Enter details</Text>
            <View style={styles.form}>
                <TextInput label="First name" placeholder="Enter first name" value={firstName} onChangeText={setFirstName} />
                <TextInput label="Last name" placeholder="Enter last name" value={lastName} onChangeText={setLastName} />
                <TextInput label="Email" placeholder="Enter email" value={email} onChangeText={setEmail} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 20,
        color: "black"
    },
    form: {
        display: "flex",
        gap: 12,
    }
});
