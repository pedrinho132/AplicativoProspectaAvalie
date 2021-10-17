import  React, { Component,useState,useEffect } from 'react';
import { StyleSheet, View, Text,TouchableOpacity,TextInput} from 'react-native';
import { useSelector, useDispatch, } from 'react-redux'
import '@react-native-firebase/app';
import base64 from 'react-native-base64';
import database from '@react-native-firebase/database';
import Geolocation from '@react-native-community/geolocation';
import  auth from '@react-native-firebase/auth';


export default CriarPedido = ({ route,navigation }) => {

  const dispatch = useDispatch();
  const dadosUser = useSelector( state => state.dadosUser )
  const [latitude,setLatitude]= useState();
  const [longitude,setLongitude] = useState();
  const [descricao, setDescricao] = useState();
  const [userInfo, setUserInfo ] = useState();

 useEffect(()=>{
                
  auth().onAuthStateChanged(function(user) {
    if (user) {
       setUserInfo(user._user)
    } else {
        // No user is signed in.
        console.log('There is no logged in user');
    }
});



  Geolocation.getCurrentPosition(info => {
    const position = info.coords
   setLatitude(position.latitude)
   setLongitude(position.longitude)
  } )
 },[])



fazerPedido = () =>{
    const email64 = base64.encode(dadosUser.email)
    database().ref(`pedidos/${email64}`)
    .update({ latitude:latitude,longitude:longitude,descricao:descricao,nome:userInfo.displayName,email:userInfo.email,photo:userInfo.photoURL,pedidoValido:true});

    navigation.navigate('perfilCliente')
    alert('Pedido Criado!')
}

  function textInputDescriçao  (texto)  {
     setDescricao(texto)
   }
  
 

 

    return (

        <View style={{flex:1,backgroundColor:'white'}}>
                          
                         
               
                          <View style={{flex:1,alignItems:'center',justifyContent:'center',}}>  
                       <Text style={{color:'black',fontSize:22,fontWeight:'bold'}} >  </Text>
                       </View>


                       <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>      
                  <Text style={{color:'#8e8e8f',fontSize:14,fontWeight:'bold'}} > Nos conte resumidamente o motivo da sua vistoria </Text>
                  <TextInput value={descricao} placeholderTextColor='black' onChangeText={texto => textInputDescriçao(texto) } styles={{ height:100,borderColor: 'red', borderWidth: 1 }} placeholder='Descreva...' />
               </View>
               

             <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <TouchableOpacity  onPress={ () => fazerPedido() } style={{ alignItems:'center',justifyContent:'center',height:'25%',width:'70%',borderWidth:4,borderColor:'#194d33',borderRadius:40,backgroundColor:'white' }}  >

                        <Text style={{color:'#194d33',fontSize:17,fontWeight:'bold'}} >Gerar pedido de Vistoria </Text>
                </TouchableOpacity>     
      </View>      



  
</View>    
   
    )
}
  


