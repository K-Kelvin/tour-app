import React from "react"
import { SafeAreaView, StyleSheet } from "react-native"
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants'


export default function Screen({ children }){
    return (
        <SafeAreaView style={styles.safearea}>
            {children}
			<StatusBar style="auto" />
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    safearea: {
        paddingTop: Constants.statusBarHeight,
        flex: 1
    },
})