import React, { useState, useEffect, useContext  } from 'react';
import { View, Text, Button,TouchableOpacity  } from 'react-native';
import { fb } from '../db_config';
import { AuthContext, AuthContextProvider } from "../hooks/AuthContext";


export default function HomeScreen({ navigation }) {
    
    const onLogout = () => {
        fb.auth().signOut().then(function() {
          console.log("Logout successfully");
          // Sign-out successful.
        }).catch(function(error) {
          // An error happened.
          console.log(error);
        });      
    };   
    
    const [user, setUser] = useContext(AuthContext);

    //var email = user.email;
   

    return ( 
        
        <View style={{ flex: 1, alignItems: 'center' }}>
            
            <Text>Welcome ,{user.email}</Text> 
           

            <View style={{ flex : 1 , alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <TouchableOpacity  onPress={() => navigation.navigate('BmiScreen') } >                    
                    <Text style={{ padding : 10 }}>Go to BMI Screen</Text>
                </TouchableOpacity>

                <TouchableOpacity  onPress={() => navigation.navigate('SecondBottomTab') } >                    
                    <Text style={{ padding : 10 }}>Go to Second BottomTab</Text>
                </TouchableOpacity>

                <TouchableOpacity  onPress={() => navigation.navigate('MidtermFirstScreen') } >                    
                    <Text style={{ padding : 10 }}>Go to MidtermFirstScreen</Text>
                </TouchableOpacity>

                <TouchableOpacity  onPress={() => navigation.navigate('MidtermTab') } >                    
                    <Text style={{ padding : 10 }}>Go to MidtermTab</Text>
                </TouchableOpacity>

                <TouchableOpacity  onPress={() => navigation.navigate('TodoTab') } >                    
                    <Text style={{ padding : 10 }}>To-do List</Text>
                </TouchableOpacity>

                <TouchableOpacity  onPress={onLogout} >                    
                    <Text style={{ padding : 10 }}>Log out</Text>
                </TouchableOpacity>  



            </View> 

            <View>                
                <Button  
                    onPress={() => navigation.navigate('BmiScreen')}
                    title="Next"
                    color=""
                    />
            </View>                            
        </View>
    );
}
