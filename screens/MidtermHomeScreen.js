import * as React from 'react';
import { View, Text, Button,TouchableOpacity  } from 'react-native';


export default function MidtermHomeScreen({ navigation }) {
    

    return (
        <View style={{ flex : 1 , flexDirection : 'row', justifyContent:"center",alignItems:"center" }}>
    <Text style={{ fontSize : 30 }}>React Native Midterm</Text>
    </View>
    );
}