import React,{useEffect,useState} from 'react';
import { View,Text,TouchableOpacity,FlatList } from 'react-native'
import '@react-native-firebase/app';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import base64 from 'react-native-base64';

export default PedidosPro = ({ navigation }) => {

  const [ pedidos, setPedidos ] = useState();
  const [ user, setUser ] = useState();

  useEffect(()=>{
    auth().onAuthStateChanged(function(user) {
      if (user) {
         setUser(user)

         const email64Pro = base64.encode(user.email)

         database()
         .ref(`usuario/profissional/${email64Pro}/pedidosAceitos`)
         .once('value', function(snapshot) {
          var li = []
          snapshot.forEach((child)=>{
           li.push({  
            email:child.val().emailCliente,
            nome:child.val().nome   
           })
           setPedidos(li)
    })
        })

      } else {
          // No user is signed in.
          console.log('There is no logged in user');
      }
  })
  },[]);

  const SemPedidos = () => {
    return(
      <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
        <Text>Nenhum Pedido Aceito..</Text>
      </View>
    )
  }
     

   if(!pedidos) return ( <SemPedidos /> );


  return(
      <View style={{flex:1}}>   
      <Text style={{fontWeight:'bold',fontSize:17}} >Pedidos Aceitos</Text>

      <FlatList 
        data={pedidos}
      renderItem={({ item }) => <TouchableOpacity key={item.nome} onPress={()=> navigation.navigate('aceitarPedidoPro',{emailCliente:item.email})} style={{height:60,width:'100%',flexDirection:'row',borderTopWidth:1,borderBottomWidth:1,borderColor:'black',marginTop:10 }}>

                
                 
                 
      <View style={{flex:2,alignItems:"center",justifyContent:'center'}}>
       <Text style={{fontWeight:'bold',color:'black'}} >{item.nome}</Text>
      </View>  

      <View style={{flex:1,alignItems:"center",justifyContent:'center'}}>
       <Text style={{fontWeight:'bold',color:'green'}} >Aceito</Text>
      </View> 

</TouchableOpacity> }
      />

             
      </View>
  )
}