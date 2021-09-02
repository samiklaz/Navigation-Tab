import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'


const Task = ({item, deleteTask}) => {
    return (
        <TouchableOpacity style={styles.item}>
            <Text>{item.task}</Text>
            <MaterialIcons name="delete" size={24} color="red" onPress={() => deleteTask(item.id)} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 15,
        borderColor:'black',
        borderRadius: 5,
        borderWidth: 1,
        marginTop: 15,
        borderStyle: 'dashed',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
})

export default Task