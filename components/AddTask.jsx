import React, {useState} from 'react'
import {StyleSheet, View, TextInput, Button} from 'react-native'

const AddTask = ({addToTask}) => {
    const [text, setText] =  useState('')
    const changeHandler = (val) => {
        setText(val)
    }

    return (
        <View>
            <TextInput style={styles.input} placeholder="Add new Task" onChangeText={changeHandler} />
            <Button title="Add task" color="blue" onPress={() => addToTask(text)} />
        </View>
    )
}


const styles = StyleSheet.create({
    input: {
        marginTop: 10,
        marginBottom: 10,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
    }
})

export default AddTask