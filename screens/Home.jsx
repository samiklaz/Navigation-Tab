import React, {useState} from 'react'
import {View, Text, StyleSheet, Button, FlatList, TouchableOpacity} from 'react-native'
import { global } from '../styles/global'

const Home = ({navigation}) => {
    const [tasks, setTasks] = useState([
        {"id": 1, "task": "Coding all day", "done": true},
        {"id": 2, "task": "Reading Business books", "done": true},
        {"id": 3, "task": "Taking a good nap", "done": true}
    ])

    return (
        <View style={global.container}>
            <FlatList data={tasks} 
            renderItem={({item}) => (
                <TouchableOpacity onPress={() => navigation.navigate("Task", item)}>
                    <Text>{item.task}</Text>
                </TouchableOpacity>
                
            )}
             />
        </View>
    )
}

const styles = StyleSheet.create({
    
})

export default Home
