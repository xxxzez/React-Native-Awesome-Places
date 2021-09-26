import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function App() {
    const [outputText, setOutputText] = useState(0)
    return (
        <View style={styles.container}>
            <Text>{outputText}</Text>
            <Button
                title="Add 1 more"
                onPress={() => setOutputText(outputText + 1)}
            />
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#a3f41a',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
