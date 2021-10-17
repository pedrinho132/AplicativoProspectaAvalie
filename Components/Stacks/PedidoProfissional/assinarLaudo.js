import React, { Component,useEffect,useState} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  PermissionsAndroid,
  BackHandler,
  NativeModules,
  TouchableHighlight,
  Alert,
  Button
} from 'react-native';

import database from '@react-native-firebase/database';
import   '@react-native-firebase/app';
import base64 from 'react-native-base64';
import { useSelector, useDispatch, } from 'react-redux';
import auth from '@react-native-firebase/auth'

export default assinarLaudo = ({route,navigation }) => {
  const dispatch =  useDispatch();
  const [pedido, setPedido] = useState();
  const [ user,setUser]= useState();
  const [ userDados, setUserDados ] = useState();

 const emailClienteRoute = route.params.emailCliente
  useEffect(()=>{
    auth().onAuthStateChanged(function(user) {
        if (user) {  
            auth().onAuthStateChanged(function(user) {
                if (user) {  
                setUserDados(user)
                const emailCliente64 = base64.encode(emailClienteRoute)
                const email64pro = base64.encode(user.email)

                    database().ref(`pedidos/${emailCliente64}/laudo`)   
                     .on('value', snapshot => {
                    setPedido(snapshot.val());
                            });  

                          
     }})}})                 
        
  },[console.log(user)])

  useEffect(()=>{

    auth().onAuthStateChanged(function(user) {
      if (user) { 
            
        const email64pro = base64.encode(user.email)
     
        database().ref(`usuario/profissional/${email64pro}`)   
        .on('value', snapshot => {
       setUser(snapshot.val());
       console.log(snapshot.val())
               }); 

       }})

  },[])
  
  const assinarLaudo =  () => {
      const emailclienteassianr = base64.encode(emailClienteRoute)

      if(pedido){
    database().ref(`pedidos/${emailclienteassianr}/laudo`)
    .update({ inputResponsavelTecnico:user.nome, inputFormaçaoTecnico:user.formaçao, inputCreaCau: user.crea,inputCpfMatricula:user.cpf,inputCpf:user.cpf,inputRepresentanteLegal:user.nome,laudoAssinado:true });
   
    database().ref(`pedidos/${emailclienteassianr}`)
    .update({ laudoAssinado:true })
   
    navigation.goBack()
    alert('Laudo Assinado')
      }
     else{
       alert('Laudo não gerado')
     }
  }


 if(!user) return null;

  return(
     <View style={{flex:1,alignItems:'center',justifyContent:"center",backgroundColor:'#113d35'}}>
       
  <Text style={{color:'white'}}>Suas credenciais:</Text>
              
  <Text style={{fontWeight:'bold',margin:15}} >CREA:{user.crea}</Text>
  <Text style={{fontWeight:'bold',margin:15}} >Formação:{user.formaçao}</Text>
  <Text style={{fontWeight:'bold',margin:15}} >Nome:{user.nome}</Text>
  <Text style={{fontWeight:'bold',margin:15}} >CPF:{user.cpf}</Text>
  <TouchableHighlight  onPress={()=> assinarLaudo()} style={{height:'10%',width:'60%',backgroundColor:'white',marginTop:20,borderRadius:50,alignItems:"center",justifyContent:"center"}}>
                          <Text  style={{fontSize:13,color:'black',fontWeight:'bold'}} >Assinar Laudo</Text>
          </TouchableHighlight>
               
     </View>
  );
}