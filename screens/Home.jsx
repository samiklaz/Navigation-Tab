import React, {useState} from 'react'
import {View, Text, StyleSheet, Button, FlatList, TouchableOpacity, TextInput} from 'react-native'
import { global } from '../styles/global'
import { useSelector, useDispatch } from 'react-redux'
import { addTask, deleteTask, didTask } from '../store/taskAction'

const Home = ({navigation}) => {
    const tasks = useSelector(state => state.tasks)

    const [text, setText] = useState('')
    const changeHandler = (val) => {
        setText(val)
    }

    const dispatch = useDispatch()
    const submitTask = (text) => dispatch(addTask(text))

    const removeTask = (id) => dispatch(deleteTask(id))
    const finishTask = (id) => dispatch(didTask(id))

    return (
        <View style={global.container}>
            <TextInput
                style={styles.input}
                placeholder="Add new Task"
                onChangeText={changeHandler}
            />
            <Button title="add task" color="blue" onPress={() => submitTask(text)} />

            <FlatList data={tasks} 
            renderItem={({item}) => (
                <TouchableOpacity style={global.item} onPress={() => navigation.navigate("Task", item)}>
                    <Text onPress={() => finishTask(item.id)} style={item.done ? null: {fontWeight: 'bold'}}>{item.task}</Text>
                    <Button title="delete" onPress={() => removeTask(item.id)} />
                </TouchableOpacity>
                
            )}
             />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        margin: 10,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
    }
})

export default Home
