import  React, { Component,useState,useEffect} from 'react';
import { StyleSheet, View, Text,TouchableOpacity,ActivityIndicator,Button,Image} from 'react-native';
import database from '@react-native-firebase/database';
import "@react-native-firebase/app";
import { useSelector, useDispatch, } from 'react-redux';
import base64 from 'react-native-base64';
import auth from '@react-native-firebase/auth';
import { parse } from '@babel/core';



 export default Saque = ({ route,navigation }) => {
        
         const dadosUser = useSelector( state => state.dadosUser )
         const [ pedido , setPedido ] = useState();

         
         
         return(

          <View style={{flex:1,backgroundColor:'black',alignItens:'center',justifyContent:"center"}}>

              <TouchableOpacity style={{ height:'10%',width:'60%',borderWidth:2,borderColor:'green',backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
                  <Text style={{color:'black',fontWeight:'bold'}} >Aprovar Cadastro</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{ height:'10%',marginTop:20,width:'60%',borderWidth:2,borderColor:'green',backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
              <Text style={{color:'green',fontWeight:'bold'}} >Solicitaçoes de Saque</Text>
              </TouchableOpacity>
          
          </View>

         )
  

  

        
}
  




