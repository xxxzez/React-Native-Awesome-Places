import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function App() {
    const [outputText, setOutputText] = useState(0)
    return (
        <View style={styles.container}>
            <Text>I have {outputText} $</Text>
            <Button
                title="Add 100$"
                onPress={() => setOutputText(outputText + 100)}
            />
            <Button
                title="Remove 100$"
                onPress={() => setOutputText(outputText - 100)}
            />
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
