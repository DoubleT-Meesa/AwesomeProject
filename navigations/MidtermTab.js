import * as React from 'react';
import { View, Text, Button , Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MidtermHomeScreen from '../screens/MidtermHomeScreen';
import MidtermFirstScreen from '../screens/MidtermFirstScreen';

//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//const Tab = createBottomTabNavigator();

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();


export default function MidtermTab() {

    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                switch(route.name){
                    case "MidtermHomeScreen" :
                        iconName = 'md-flash';
                        break;
                    case "MidtermFirstScreen" : 
                        iconName = 'md-flame';
                        break;
                          
                }
                
                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
            },
        })}

        tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        }}
        >
        
        <Tab.Screen 
            name="MidtermHomeScreen" 
            component={MidtermHomeScreen} 
            options={{  title: 'MidtermHomeScreen'  }} 
            />                
        <Tab.Screen 
            name="MidtermFirstScreen" 
            component={MidtermFirstScreen} 
            options={{  title: 'MidtermFirstScreen'  }} 
            
            />
        
        
    </Tab.Navigator>     
    );
}
