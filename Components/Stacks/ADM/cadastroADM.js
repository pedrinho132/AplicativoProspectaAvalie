/*
                      auth().createUserWithEmailAndPassword(email,senha)
                      .then(user =>{
                        const email64 = base64.encode(email)
                        database().ref(`usuario/profissional/${email64}`)
                        .set({email,ganhos:0})
                        .then(() => sucess());
                      } )
                       .catch(error => alert(error));

 const sucess = () => {     
   auth().signInWithEmailAndPassword(email,senha)
   .then(() => navigation.goBack())
   */


  import  React, { Component,useState,useEffect} from 'react';
  import { StyleSheet, View, Text,TouchableOpacity,ActivityIndicator,FlatList,Button,Image} from 'react-native';
  import database from '@react-native-firebase/database';
  import "@react-native-firebase/app";
  import { useSelector, useDispatch, } from 'react-redux';
  import base64 from 'react-native-base64';
  import auth from '@react-native-firebase/auth';


  export default CadastroADM = ({ route,navigation }) => {
  const dadosUser = useSelector( state => state.dadosUser )
  const [ pedido , setPedido ] = useState();

  useEffect(()=>{
      database().ref(`solicitacoes/cadastro`)
      .once('value', function(snapshot) {
         var li = []
         snapshot.forEach((child)=>{
          li.push({  
           email:child.val().email,
           nome:child.val().nome,
           rg:child.val().rg,
           crea:child.val().crea,
           formaçao:child.val().formaçao,
           cpf:child.val().cpf,
           telefone:child.val().telefone,
           senha:child.val().senha
          })
          setPedido(li)
      })
     })
  },[])


  if(!pedido) return(
    <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'black'}}>
        <Text style={{color:'white',fontWeight:'bold'}} >Nenhuma Solicitação de cadastro pendente</Text>
    </View>
)

return(

 <View style={{flex:1,backgroundColor:'black',alignItens:'center',justifyContent:"center"}}>

<FlatList 
        data={pedido}
      renderItem={({ item }) =>  <TouchableOpacity key={item.nome} onPress={()=> navigation.navigate('aprovarCadastro',{item:item})} style={{backgroundColor:'white',height:60,width:'100%',flexDirection:'row',borderTopWidth:1,borderBottomWidth:2,borderColor:'grey',marginTop:10 }}>

       
        
        
      <View style={{flex:2,alignItems:"center",justifyContent:'center'}}>
      <Text style={{fontWeight:'bold',color:'black'}} >{item.nome}</Text>
      </View>  
      
      <View style={{flex:1,alignItems:"center",justifyContent:'center'}}>
      <Text style={{fontWeight:'bold',color:'green'}} >{item.email}</Text>
      </View> 
      
      </TouchableOpacity>    }
      />    



 </View>

)





}
