import React from 'react'
import {StyleSheet, Text, View} from 'react-native'


const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Tasks</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        paddingTop: 35,
        paddingBottom: 10,
        backgroundColor: 'blue',
    },
    title: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    }
    
  });
  

export default Header