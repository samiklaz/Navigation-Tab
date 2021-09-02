import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View, FlatList, SafeAreaView, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import {v4 as uuidv4} from 'uuid';
import Header from './components/Header';
import Task from './components/Task';
import AddTask from './components/AddTask';

export default function App() {

  const [tasks, setTasks] = useState([
    {
      "id": 1,
      "task": "Reading my books",
      "done": "true"
    },
    {
      "id": 2,
      "task": "Program on React Native",
      "done": true
    },
    {
      "id": 3,
      "task": "Doing my Morning Rituals",
      "done": true
    },
    {
      "id": 4,
      "task": "Configuring my Database",
      "done": false
    }
    

  ])

  const addToTask = (text) => {
    if(!text) {
      Alert.alert("No task", 'Please add a task', [
        { text: 'OK', onPress: () => console.log("OK pressed")}
      ],
      {cancelable: true}
      );
    }
    else {
      setTasks(prevTasks => {
        return [
          { task: text, id:uuidv4() }, ...prevTasks
        ]
      })
    }
    
  }

  const deleteTask = (id) => {
    setTasks(prevTasks => {
      return prevTasks.filter(task => task.id != id)
    })
  }

  return (
    <TouchableWithoutFeedback onPres={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTask addToTask={addToTask} />

          <View style={styles.list}>
            <FlatList data={tasks} renderItem={({item}) => (
                <Task item={item} deleteTask={deleteTask} />
              )} 
            />
          </View>      

        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
  content : {
    padding:30,
    backgroundColor: 'lightgray',
    flex: 1,
  },
  list: {
    marginTop: 30,
    flex: 1,
  }

  
});
