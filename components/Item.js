import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button,Image } from 'react-native';

export default function Item(props) {
  
    return (
        <View style={{flex : 1, flexDirection : 'row',margin : 10, }}>
            <View style={{flex:1}}>
                <Image 
                source={{uri: props.image }}
                style={{width: 70, height: 70}} />
            </View>

            <View style={{flex:2}}>
                <Text style={{ fontSize :  20 }}>
                    {props.title} 
                </Text>
                
                <Text style={{ fontSize :  16 }}>
                {props.releaseYear} 
                </Text>
            </View>
        </View>
    );
}

 