import {NavigationContainer} from '@react-navigation/native'
import React, {useState} from 'react';
import MyDrawer from './routes/MyDrawer';

export default function App() {

  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
    
  );
}


