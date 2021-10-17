import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

export default function App() {
    const [outputText, setOutputText] = useState('')

    const taskInputHandler = (enteredText) => setOutputText(enteredText)

    return (
        <View style={styles.screen}>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Write something"
                    onChangeText={taskInputHandler}
                    value={outputText}
                />
            </View>
            <Button
                title="Set goal"
                onPress={() => setOutputText(outputText)}
            />
            <Text>{outputText}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#fff489',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputContainer: {},
})
