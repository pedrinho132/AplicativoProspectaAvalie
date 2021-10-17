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

         const emailUser = item.email
         const senhaUser = item.senha

      const cadastroUsuario = ( ) => {
      
         
      
                      auth().createUserWithEmailAndPassword(emailUser,senhaUser)
                      .then(user =>{
                        const email64 = base64.encode(emailUser)
                        database().ref(`usuario/profissional/${email64}`)
                        .set({email:emailUser,crea:item.crea,cpf:item.cpf,formaçao:item.formaçao,rg:item.rg,ganhos:0})
                        sucess()
                      } )
                       

 const sucess = () => {  
  const emailUser = item.email   
   const email64userpro = base64.encode(emailUser)
    alert('Usuario Cadastrado Com Sucesso')
  navigation.navigate("adm");
  database().ref(`solicitacoes/cadastro/${email64userpro}`).remove();
  auth().signOut();
 }
  
      }

         return(

          <View style={{flex:1,backgroundColor:'black',alignItems:'center',justifyContent:'center'}}>

                       <Text style={{color:'white',fontWeight:'bold',margin:10}} > Nome:{item.nome}</Text>
                       <Text style={{color:'white',fontWeight:'bold',margin:10}} > Email:{item.email}</Text>
                       <Text style={{color:'white',fontWeight:'bold',margin:10}} > Crea: {item.crea}</Text>
                       <Text style={{color:'white',fontWeight:'bold',margin:10}} > Cpf: {item.cpf}</Text>
                       <Text style={{color:'white',fontWeight:'bold',margin:10}} > Formação: {item.formaçao}</Text>
                       <Text style={{color:'white',fontWeight:'bold',margin:10}} > Senha: {item.senha}</Text>
                       <Text style={{color:'white',fontWeight:'bold',margin:10}} > RG: {item.rg}</Text>

                       <TouchableOpacity onPress={()=>cadastroUsuario()} style={{ height:'10%',marginTop:20,width:'60%',borderWidth:2,borderColor:'white',backgroundColor:'green',backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
                  <Text style={{color:'black',fontWeight:'bold'}} >Cadastrar Usuario</Text>
              </TouchableOpacity>

          </View>

         )
  

  

        
}
  




