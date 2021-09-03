import React, {useState} from 'react'
import { View, StyleSheet, TextInput, Button } from 'react-native'
import { addTask } from '../store/taskAction'

const AddTask = ({AddTask}) => {
    const [text, setText] = useState('')
    const changeHandler = (val) => {
        setText(val)
    }
    return (
        <View>
            <TextInput
                style={StyleSheet.input}
                placeholder="Add new Task"
                onChangeText={changeHandler}
            />
            <Button title="add task" color="blue" onPress={() => addTask(text)} />
        </View>
    )
}

export default AddTask
