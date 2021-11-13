import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

export default function Button({ title, onPress=()=>{}, color="purple", backgroundColor="#fff", ...rest }) {
  return (
    <Pressable style={{...styles.button, backgroundColor, ...rest }} onPress={onPress}>
      <Text style={{...styles.text, color }}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
    button: {
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        padding: 12,
        borderRadius: 8,
        elevation: 3,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 16,
    },
});
