import React,{useEffect,useState} from 'react';
import { View,Text,TouchableHighlight } from 'react-native';
import base64 from 'react-native-base64';
import LaudoCliente from './laudoCliente';
import database from '@react-native-firebase/database';
import LaudoActCliente from './laudoActCliente';
import auth from '@react-native-firebase/auth';


export default DefinirLaudoCliente = ({ route,navigation }) => {
  const [ pedido, setPedido] = useState();
  const [ user,setUser ] = useState();
  const [ laudo,setLaudo ] = useState();

  useEffect(()=>{

    auth().onAuthStateChanged(function(user) {
        if (user) {                 
               
            setUser(user)  
            const email64 = base64.encode(user.email)  
       
         
    database()
    .ref(`/pedidos/${email64}/laudo`)
    .on('value', snapshot => {
            console.log(snapshot.val())
          setLaudo(snapshot.val());
          
        });

       }})
                         
                    },[]);
   
    if(!laudo) return null;

    switch(laudo.tipo){

      case'terreno':
      return <LaudoCliente />

      case'imovelNovo':
      return <LaudoCliente />

      case'imovelAct':
      return <LaudoActCliente />

      case'imovelUsado':
      return <LaudoCliente />
  }
    
  
}