
import React, { useState } from 'react';
import { View, Text, Button,TouchableOpacity,TextInput  } from 'react-native';


export default function MidtermFirstScreen({ navigation }) {
    
    const [name , setName] = useState("test");
    const [num , setNum] = useState("4");
    const [n,setN]=useState("Text");
    console.log("STATE : ", name);

    const save = () => {
        var output = num;
        console.log(name.length);
        setNum(name.length);
        setN(name);
       };
    
    return (
      <View style={{ flex : 1 , flexDirection : 'column', }}>
        
      <View style={{ backgroundColor : '#50E3C2' , flex : 2,alignItems: 'flex-end'}}>
        <Text style={{ fontSize : 20 ,margin : 10}}>{n}</Text>
        <Text style={{ fontSize : 20 }}>{num}  Charaters</Text>
      </View>
      
      <View style={{ backgroundColor : '#ECECEC' , 
                    flex : 5,
                    flexDirection : 'column', 
                     padding : 50,
                    paddingHorizontal : 20 , }}>
        <Text style={{ fontSize : 30,padding : 8 }}>Your Name : </Text>
        <TextInput 
            placeholder="text"            
            //keyboardType="text"
            style={{ marginBottom : 20 ,
            fontSize : 20,
            backgroundColor:'white',
            width: 320,
            height:60}}
            value={name}
            onChangeText={ (text) => setName(text) } 
            />

                    <Button  
                    onPress={save}
                    title="SAVE"
                    color=""
                    />

      </View>
     
    </View>
    );
}