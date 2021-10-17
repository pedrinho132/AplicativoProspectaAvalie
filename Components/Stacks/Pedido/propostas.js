import  React, { Component,useState,useEffect } from 'react';
import { StyleSheet, View, Text,TouchableOpacity,Image,TextInput,FlatList} from 'react-native';
import database from '@react-native-firebase/database';
import  '@react-native-firebase/app';
import base64 from 'react-native-base64';
import auth from '@react-native-firebase/auth';
  

export default Propostas = ({route,navigation}) => {

    const [ user, setUser ] = useState();
    const [ proposta, setProposta] = useState();
    const [ trocaAvaliador, setTrocaAvaliador ] = useState();



   
    useEffect(()=>{
        auth().onAuthStateChanged(function(user) {
          if (user) {
                           setUser(user)
                            const email64 = base64.encode(user.email)
             database()
            .ref(`/pedidos/${email64}/lances`)
           .once('value', function(snapshot) {
            var li = []
            snapshot.forEach((child)=>{
             li.push({
              key: child.val().id,
              proposta:child.val().proposta,  
              email:child.val().email,
              nome:child.val().nome,
              crea:child.val().crea  
             })
             setProposta(li)
    })
          })} else {
              // No user is signed in.
              console.log('There is no logged in user');
          }
      })
          
      

      },[])

      if(!proposta) return null

   
    return (

        <View style={{flex:1}}>

<FlatList 
        data={proposta}
      renderItem={({ item }) =>  <TouchableOpacity key={item.proposta} onPress={()=> navigation.navigate('aceitarPedido',{dadosPro:item,propostaId:item.proposta})} style={{height:60,width:'100%',flexDirection:'row',borderBottomWidth:1,borderColor:'black'  }}>

      <View style={{flex:1,borderRightWidth:2,borderColor:'black',alignItems:'center',justifyContent:'center'}}>
   <Text>{item.nome}</Text>
                 
            </View>


            

            <View style={{flex:2,alignItems:'center',justifyContent:'center'}}>
            <Text style={{fontWeight:'bold',color:'green'}} > Especialidades: </Text>
                <Text style={{color:'green'}} > {item.proposta} </Text>
            </View>
                 
      </TouchableOpacity>   }
      />     
      </View>
   
    )
}




  


