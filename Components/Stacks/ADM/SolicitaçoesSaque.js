import  React, { Component,useState,useEffect} from 'react';
import { StyleSheet, View, Text,TouchableOpacity,ActivityIndicator,FlatList,Button,Image} from 'react-native';
import database from '@react-native-firebase/database';
import "@react-native-firebase/app";
import { useSelector, useDispatch, } from 'react-redux';
import base64 from 'react-native-base64';
import auth from '@react-native-firebase/auth';
import { parse } from '@babel/core';



 export default SolicitaçoesSaque = ({ route,navigation }) => {
        
         const dadosUser = useSelector( state => state.dadosUser )
         const [ pedido , setPedido ] = useState();

         useEffect(()=>{
             database().ref(`solicitacoes/saques`)
             .once('value', function(snapshot) {
                var li = []
                snapshot.forEach((child)=>{
                 li.push({  
                  pix:child.val().pix,
                  nome:child.val().nome,
                  valor:child.val().valor,
                  email:child.val().email
                 })
                 setPedido(li)
             })
            })
         },[])

         if(!pedido) return(
             <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'black'}}>
                 <Text style={{color:'white',fontWeight:'bold'}} >Nenhuma Solicitação de saque pendente</Text>
             </View>
         )
         
         return(

          <View style={{flex:1,backgroundColor:'black',alignItens:'center',justifyContent:"center"}}>

<FlatList 
        data={pedido}
      renderItem={({ item }) =>  <TouchableOpacity key={item.nome} onPress={()=> navigation.navigate('aprovarSaque',{item:item})} style={{backgroundColor:'white',height:60,width:'100%',flexDirection:'row',borderTopWidth:1,borderBottomWidth:2,borderColor:'grey',marginTop:10 }}>

                
                 
                 
      <View style={{flex:2,alignItems:"center",justifyContent:'center'}}>
       <Text style={{fontWeight:'bold',color:'black'}} >{item.nome}</Text>
      </View>  
      
      <View style={{flex:1,alignItems:"center",justifyContent:'center'}}>
      <Text style={{fontWeight:'bold',color:'green'}} >{item.valor}</Text>
      </View> 
      
      </TouchableOpacity>    }
      />     

        
    
          </View>

         )
  

  

        
}
  




