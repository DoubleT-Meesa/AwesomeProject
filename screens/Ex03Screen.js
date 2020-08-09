import * as React from 'react';
import { View, Text, Button,TouchableOpacity  } from 'react-native';


export default function Ex03Screen({ navigation }) {
    

    return (
        <View style={{ flex : 1 , flexDirection : 'column' }}>
            <View style={{ flex : 1 , flexDirection : 'row' }}>
                <View style={{ backgroundColor : '#50E3C2' , flex : 2 }}></View>
                <View style={{ backgroundColor : '#4A90E2' , flex : 2  }}></View>
                <View style={{ backgroundColor : '#9013FE' , flex : 2  }}></View>
                <View style={{ flex : 1  }}></View>
            </View>
        <View style={{ flex : 4 , flexDirection : 'column' }}></View>
        </View>
        
    );
}