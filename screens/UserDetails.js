import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

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
                <TextInput
                    style={{height: 40, borderWidth: 1, borderRadius: 6, paddingHorizontal: 8}}
                    placeholder="Type here to translate!"
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                />
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
