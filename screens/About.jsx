import React from 'react'
import {View, Text, FlatList, TouchableOpacity} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

const About = () => {
    const tasks = useSelector(state => state.tasks)
    const taskDone = tasks.filter(item => item.done === true)
    return (
        <View style={global.container}>
            <Text>Task that have been done</Text>

            <FlatList data={taskDone} 
            renderItem={({item}) => (
                <TouchableOpacity style={global.item} onPress={() => navigation.navigate("Task", item)}>
                    <Text onPress={() => finishTask(item.id)} style={item.done ? null: {fontWeight: 'bold'}}>{item.task}</Text>
                </TouchableOpacity>
                
            )}
             />
        </View>
    )
}

export default About
