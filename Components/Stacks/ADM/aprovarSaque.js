import  React, { Component,useState,useEffect} from 'react';
import { StyleSheet, View, Text,TouchableOpacity,ActivityIndicator,Button,Image} from 'react-native';
import database from '@react-native-firebase/database';
import "@react-native-firebase/app";
import { useSelector, useDispatch, } from 'react-redux';
import base64 from 'react-native-base64';
import auth from '@react-native-firebase/auth';
import { parse } from '@babel/core';



 export default AprovarCadatro = ({ route,navigation }) => {
        
         const dadosUser = useSelector( state => state.dadosUser )
         const [ pedido , setPedido ] = useState();

         const item = route.params.item


      const enviarSaque = ( ) => {
         
        const reference = database().ref(`solicitacoes/saques/${item.email}`)

        reference.remove()
        navigation.navigate('adm')
        alert('Saque Confirmado')
      }

         return(

          <View style={{flex:1,backgroundColor:'black',alignItems:'center',justifyContent:'center'}}>

                       <Text style={{color:'white',fontWeight:'bold',margin:10}} > Nome:{item.nome}</Text>
                       <Text style={{color:'white',fontWeight:'bold',margin:10}} > Pix:{item.pix}</Text>
                       <Text style={{color:'white',fontWeight:'bold',margin:10}} > Valor: R$ {item.valor}</Text>

                       <TouchableOpacity onPress={()=>enviarSaque()} style={{ height:'10%',marginTop:20,width:'60%',borderWidth:2,borderColor:'white',backgroundColor:'green',backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
                  <Text style={{color:'black',fontWeight:'bold'}} >Saque Enviado</Text>
              </TouchableOpacity>

          </View>

         )
  

  

        
}
  




