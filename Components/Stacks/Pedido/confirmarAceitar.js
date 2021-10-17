import  React, { Component,useState,useEffect} from 'react';
import { StyleSheet, View, Text,TouchableOpacity,ActivityIndicator,Button,Image} from 'react-native';
import database from '@react-native-firebase/database';
import "@react-native-firebase/app";
import { useSelector, useDispatch, } from 'react-redux';
import base64 from 'react-native-base64';
import auth from '@react-native-firebase/auth';
import { parse } from '@babel/core';



 export default ConfirmarAceitar = ({ route,navigation }) => {
        
         const dadosUser = useSelector( state => state.dadosUser )
         const [ pedido , setPedido ] = useState();
         
         const [ user, setUser ] = useState();
         const [ email, setEmail ] = useState();
         const [ userPro, setUserPro] = useState();
         const [ valorGanhosServiço, setValorServiço ] = useState();

     
  

         const  email64ProFetch = route.params.emailPro

        

  
  

    

      useEffect(()=>{
        auth().onAuthStateChanged(function(user) {
                if (user) {
                  setEmail(user.email)
                  const email64clientea = base64.encode(user.email)
                 database().ref(`pedidos/${email64clientea}`)
                 .on('value', snapshot => {
                  setPedido(snapshot.val());                       
               });   
                   
                } else {
                    // No user is signed in.
                    console.log('There is no logged in user');
                }
            })
    
    },[]);

   
   

    useEffect(()=>{
    
      const email64Pro = base64.encode(email64ProFetch)
 
         database().ref(`usuario/profissional/${email64Pro}`)
       .on('value', snapshot => {
         console.log(snapshot.val().ganhos)
        setValorServiço(snapshot.val().ganhos);                       
     });   
    
       
     },[])




    const finalizarSim = () => {
      const engenheiro = pedido.engenheiro
      const email64Pro = base64.encode(engenheiro)
      const email64clientea = base64.encode(email)

     database()
     .ref(`cliente/${email64clientea}/pedidosFinalizados/${pedido.itemId}`)
     .set({pedido,itemId:pedido.itemId});

     database()
     .ref(`usuario/profissional/${email64Pro}`)
     .update({ ganhos: parseInt(valorGanhosServiço) + parseInt(pedido.valorPedido) })

     database()
     .ref(`usuario/profissional/${email64Pro}/pedidosAceitos/${email64clientea}`)
      .remove()

      let email64cliente = base64.encode(email)

       const rerence = database().ref(`pedidos/${email64cliente}`)
  
       rerence.remove()

        navigation.navigate('perfilCliente')
      alert('Pedido Finalizado')
      
     
    }

     if(!pedido) return null;          
     

         return(

          <View style={{flex:1,backgroundColor:'#113d35'}}>
            <View style={{flex:1,alignItems:"center",justifyContent:"center",marginHorizontal:16}}>
              <Text style={{fontWeight:'bold',color:'white'}}> Você tem certeza que deseja confirmar  e finalizar o pedido? </Text>
          
              </View>
              <View    style={{flex:1,alignItems:'center',justifyContent:'center',marginHorizontal:15}}>
              <TouchableOpacity  onPress={()=>  finalizarSim()} style={{margin:15,backgroundColor:"white",height:'20%',width:'60%',borderWidth:2,alignItems:"center",justifyContent:'center',borderColor:'green'}}>
                   <Text style={{color:'green',fontWeight:'bold'}} >Sim</Text>
              </TouchableOpacity>

              <TouchableOpacity  onPress={()=> navigation.goBack() } style={{margin:15,backgroundColor:'white',height:'20%',width:'60%',borderWidth:2,alignItems:"center",justifyContent:'center',borderColor:'green'}}>
                    <Text style={{color:'green',fontWeight:'bold'}} >Nao</Text>
              </TouchableOpacity>
            
          </View>
          </View>

         )
  

  

        
}
  




