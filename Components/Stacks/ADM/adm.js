import  React, { Component,useState,useEffect} from 'react';
import { StyleSheet, View, Text,TouchableOpacity,ActivityIndicator,Button,Image} from 'react-native';
import database from '@react-native-firebase/database';
import "@react-native-firebase/app";
import { useSelector, useDispatch, } from 'react-redux';
import base64 from 'react-native-base64';
import auth from '@react-native-firebase/auth';
import { parse } from '@babel/core';



 export default ADM = ({ route,navigation }) => {
        
         const dadosUser = useSelector( state => state.dadosUser )
         const [ pedido , setPedido ] = useState();

         const sair = () => {
           auth().signOut
                navigation.navigate('Login')
            
           }
    
         
         return(

          <View style={{flex:1,backgroundColor:'black',alignItems:'center',justifyContent:'center'}}>

              <TouchableOpacity onPress={()=>navigation.navigate('cadastroADM')} style={{ height:'10%',width:'60%',borderWidth:2,borderColor:'yellow',backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
                  <Text style={{color:'black',fontWeight:'bold'}} >Aprovar Cadastro</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={()=>navigation.navigate('solicitarSaque')} style={{ height:'10%',marginTop:20,width:'60%',borderWidth:2,borderColor:'green',backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
              <Text style={{color:'green',fontWeight:'bold'}} >Solicitaçoes de Saque</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={()=>sair()} style={{ height:'10%',marginTop:20,width:'60%',borderWidth:2,borderColor:'green',backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
              <Text style={{color:'red',fontWeight:'bold'}} >Sair</Text>
              </TouchableOpacity>
          
          </View>

         )
  

  

        
}
  




