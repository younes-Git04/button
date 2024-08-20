import React from "react";
import { StyleSheet,View,Text } from "react-native";
import Feather from '@expo/vector-icons/Feather';
import { Button } from "react-native-paper";
const Index = ()=>{
  return(
    <View style={{flex:1}}>
      <Button style={{backgroundColor:'red',alignItems:'center',marginBottom:30}} icon="camera" labelStyle={{fontSize:30,color:'#fff'}}>
        <Text style={{color:'#fff',fontWeight:'bold'}}>
         camera
        </Text>
        </Button>
        <Button style={{backgroundColor:'red',alignItems:'center',marginBottom:30}} icon="calendar" labelStyle={{fontSize:30,color:'#fff'}}>
        <Text style={{color:'#fff',fontWeight:'bold'}}>
         calendar
        </Text>
        </Button> 
        <Button style={{backgroundColor:'red',alignItems:'center',marginBottom:30}} icon="music" labelStyle={{fontSize:30,color:'#fff'}}>
        <Text style={{color:'#fff',fontWeight:'bold'}}>
         music
        </Text>
        </Button>  
        <Button style={{backgroundColor:'red',alignItems:'center',marginBottom:30}} icon="camera" labelStyle={{fontSize:30,color:'#fff'}}>
        <Text style={{color:'#fff',fontWeight:'bold'}}>
         camera
        </Text>
        </Button>
        <Button style={{backgroundColor:'red',alignItems:'center',marginBottom:30}} icon="calendar" labelStyle={{fontSize:30,color:'#fff'}}>
        <Text style={{color:'#fff',fontWeight:'bold'}}>
         calendar
        </Text>
        </Button> 
        <Button style={{backgroundColor:'red',alignItems:'center',marginBottom:30}} icon="music" labelStyle={{fontSize:30,color:'#fff'}}>
        <Text style={{color:'#fff',fontWeight:'bold'}}>
         music
        </Text>
        </Button>  
                      
    </View>
  );
}
export default Index;