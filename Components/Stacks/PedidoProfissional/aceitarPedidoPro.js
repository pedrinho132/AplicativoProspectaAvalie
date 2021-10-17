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

export default  AceitarPedidoPro = ({route,navigation }) => {
  const dispatch =  useDispatch();
  const [ pedido, setPedido ] = useState();
  const [ initializing, setInitializing ] = useState(null);
  const [ laudo, setLaudo ] = useState();

  const emailCliente = route.params.emailCliente
 

  useEffect(()=> {
    const emailCliente64 = base64.encode(emailCliente)
    database()
        .ref(`/pedidos/${emailCliente64}`)
        .once('value')
  .then(snapshot => {
    setPedido(snapshot.val());
              setInitializing(true);
              dispatch({ type:'emailClienteInfo', payload:emailCliente64 })
  });
  
  },[]);


  useEffect(()=> {
    const emailCliente64 = base64.encode(emailCliente)
    database()
        .ref(`/pedidos/${emailCliente64}/laudo`)
        .once('value')
  .then(snapshot => {
    setLaudo(snapshot.val());
  });
        
  },[console.log(pedido)]);

  const InfoLaudo = () => {
    if(!laudo) return null;

  if(laudo)  return (
    <View style={{alignItems:'center',justifyContent:"center"}}>
      <Text style={{fontWeight:"bold",color:'white'}} > Seu laudo foi enviado! </Text>
      <Text style={{fontWeight:"bold",color:'white'}} >  Aguarde o Cliente finalizar o pedido  </Text>
      </View>
    )
    }

  if(!pedido) return (<View><Text>oi</Text></View>);


  return(
     <View style={{flex:1}}>
          <View style={{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"#113d35",borderBottomWidth:2,borderColor:'#00ff00'}}>
              <InfoLaudo />
             
             <Text style={{color:'white'}} >{pedido.email}</Text>
             <Text style={{color:'white'}}>{pedido.nome}</Text>
             <Text style={{color:'white'}}>{pedido.endereco}</Text>
             <Text style={{color:'white'}}> Pedido #{pedido.itemId}</Text>
           </View>

           <View style={{flex:2,alignItems:"center",justifyContent:"center",borderTopWidth:1,borderColor:'black'}}>
            
             <View style={{height:'20%',width:'70%',borderRadius:50,borderWidth:2,borderColor:'#116455'}}>
             <TouchableHighlight style={{flex:1,alignItems:'center',justifyContent:"center",borderRadius:50}} onPress={()=>navigation.navigate('selecionarLaudo',{emailCliente:pedido.email,idItem:pedido.idItem})} >
             <Text style={{color:'#116455',fontWeight:'bold'}} >Laudo</Text>
             </TouchableHighlight>
             </View>

             <TouchableHighlight  onPress={()=>navigation.navigate('assinarLaudo',{emailCliente:emailCliente})} style={{height:'20%',width:'70%',borderRadius:50,borderWidth:2,borderColor:'#116455',marginTop:20,alignItems:"center",justifyContent:'center'}}>
             <Text style={{color:'#116455',fontWeight:'bold'}} >Assinar</Text>
             </TouchableHighlight>

            <TouchableHighlight onPress={()=>navigation.navigate('dossiesCliente',{emailCliente:emailCliente,itemId:pedido.itemId})} style={{height:'20%',width:'70%',borderRadius:50,marginTop:20,borderWidth:2,borderColor:'#116455',alignItems:"center",justifyContent:'center'}}>
            <Text style={{color:'#116455',fontWeight:'bold'}} >Dossies</Text>
             </TouchableHighlight>

             <TouchableHighlight onPress={()=>navigation.navigate('locationEndereço',{emailCliente:emailCliente,latitude:pedido.latitude,longitude:pedido.longitude})} style={{height:'20%',width:'70%',borderRadius:50,marginTop:20,borderWidth:2,borderColor:'#116455',alignItems:"center",justifyContent:'center'}}>
            <Text  style={{color:'#116455',fontWeight:'bold'}} >Abrir Endereço no mapa</Text>
            </TouchableHighlight>
           </View>

             
     </View>
  );
}