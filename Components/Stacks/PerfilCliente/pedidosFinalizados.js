import React,{useEffect,useState} from 'react';
import { View,Text,TouchableOpacity} from 'react-native';
import base64 from 'react-native-base64';
import LaudoFinalizado from './laudoFinalizado';
import database from '@react-native-firebase/database';
import LaudoFinalizadoAct from './laudoFinalizadoAct';
import auth from '@react-native-firebase/auth'


export default PedidosFinzalizados = ({ route,navigation }) => {



    const [ pedido, setPedido] = useState();
    const [ email, setEmail ] = useState();
    const [ user,setUser ] = useState();

    const itemId = route.params.idItem

      useEffect(()=>{
        auth().onAuthStateChanged(function(user) {
          if (user) {
             setUser(user)
    
             const email64 = base64.encode(user.email)
                console.log(user)
             database()
             .ref(`cliente/${email64}/pedidosFinalizados/${itemId}/pedido/laudo`)
             .on('value', snapshot => {
                setPedido(snapshot.val());
             console.log(snapshot.val())

        })}
        })
    
      },[console.log(pedido)]);
    
      if(!pedido) return null;

      switch(pedido.tipo){
          case'imovelNovo':
          return <LaudoFinalizado id={itemId} />

          case'imovelAct':
          return <LaudoFinalizadoAct id={itemId}/>

          case'imovelUsado':
          return <LaudoFinalizado id={itemId}/>
      }

      
    
}