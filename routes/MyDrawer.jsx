import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import { AboutStack, HomeStack } from './MyStack'
import MyTab from './MyTab'

function MyDrawer() {
    const Drawer = createDrawerNavigator()
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={MyTab} />
            <Drawer.Screen name="About" component={AboutStack} />
        </Drawer.Navigator>
    )
}

export default MyDrawer
