import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View } from 'react-native';
import Bmi from './components/Bmi';

import { NavigationContainer } from '@react-navigation/native';

import HomeStack from './navigations/HomeStack';

import Network from './components/Network';

import BottomTab from './navigations/BottomTab';

import SecondBottomTab from './navigations/SecondBottomTab';
import { createStackNavigator } from '@react-navigation/stack';
import TodoTab from './navigations/TodoTab';

import React, { useState, useEffect, useContext } from 'react';

import { fb } from './db_config';

import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import { AuthContext, AuthContextProvider } from "./hooks/AuthContext";
const AuthStack = createStackNavigator();


const RootStack = createStackNavigator();

export default function MainNavigation() {

  //const [user, setUser] = useState({}); 
  const [user, setUser] = useContext(AuthContext);    

  useEffect(() => {
      const subscriber = fb.auth().onAuthStateChanged((current_user) => {            
          if(current_user){
              //IF USER SIGN IN
              setUser(current_user);
          }else{
              //ELSE USER SIGN OUT OR NOT LOGIN
              setUser(null);
          }            
          console.log("USER : ",user); 
      });
      return subscriber; // unsubscribe on unmount
  });    

  if(user != null){
  return (
    <NavigationContainer>
           <RootStack.Navigator initialRouteName="BottomTab">
                <RootStack.Screen 
                    name="BottomTab" 
                    component={BottomTab} 
                    options={{  title: 'Main' , headerShown: false   }} 
                    />

                <RootStack.Screen 
                    name="SecondBottomTab" 
                    component={SecondBottomTab} 
                    options={{  title: 'Second Tab'   }} 
                    />                               
                <RootStack.Screen 
                    name="TodoTab" 
                    component={TodoTab} 
                    options={{  title: 'Todo Tab'   }} 
                    />  
            </RootStack.Navigator>

    </NavigationContainer>
         
  );
  }else{
  return (
      <NavigationContainer>
          <AuthStack.Navigator >      
              <AuthStack.Screen 
                  name="LoginScreen" 
                  component={LoginScreen} 
                  options={{  title: 'Login'   }} 
                  />
              <AuthStack.Screen 
                  name="RegisterScreen" 
                  component={RegisterScreen} 
                  options={{  title: 'Register'   }} 
                  />                    
          </AuthStack.Navigator>
      </NavigationContainer>
  );
}        
}


