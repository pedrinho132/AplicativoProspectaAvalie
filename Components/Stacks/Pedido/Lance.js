import  React, { Component,useState,useEffect } from 'react';
import { StyleSheet, View, Text,TouchableHighlight,Image,TextInput} from 'react-native';
import { connect } from 'react-redux';
import darLance from '../../actions/darLance';
import database from '@react-native-firebase/database';
import  '@react-native-firebase/app';
import base64 from 'react-native-base64';
import auth from '@react-native-firebase/auth';
  

export default Lance = ({route,navigation}) => {

    const [ proposta, setProposta ] = useState();
    const [ user, setUser] = useState();
    const [ userPro, setUserPro] = useState();
    const [ avaliador, setAvaliador] =useState();
    const [ pedido, setPedido] =useState();

    const data = route.params.data
    

    function inputProposta(texto){
        setProposta(texto)
    }

    function nomeAvaliador(texto){
        setAvaliador(texto)
    }

    function enviarProposta(){
        const email64 = base64.encode(data.email)
        const userEmail64 = base64.encode(user.email)
        database()
        .ref(`/pedidos/${email64}/lances/${userEmail64}`)
        .update({ email:user.email, nome:avaliador })



        navigation.navigate('PerfilProfissional')
        alert('Prosposta Enviada, ela aparecera na aba pedidos! ')
        aceitarProposta()
    }

    useEffect(()=>{
        auth().onAuthStateChanged(function(user) {
            if (user) {
                setUser(user)
            
            } else {
                // No user is signed in.
                console.log('There is no logged in user');
            }
        })
    },[])

    useEffect(() => {
        const clienteEmail64 = base64.encode(data.email)
        database()
        .ref(`/pedidos/${clienteEmail64}`)
      .on('value', snapshot => {
     setPedido(snapshot.val());
            
    })
    },[])

  


    function aceitarProposta (){

        
        const proEmail64 = base64.encode(user.email)
        const clienteEmail64 = base64.encode(data.email)
       database()
       .ref(`usuario/profissional/${proEmail64}/pedidosAceitos/${clienteEmail64}`)
       .set({ emailCliente:data.email,pedidoID:pedido.itemId,nome:data.nome } );

       database()
       .ref(`/pedidos/${clienteEmail64}`)
       .update({ pedidoAceito:true, engenheiro:user.email, nome:user.displayName  });

       
     
       alert('Pedido Aceito, acompanhe o pedido em "Pedidos"')

       navigation.navigate('PerfilProfissional');
     }

    if(!user) return null

    const EnviaButton = () => {
        if(avaliador && proposta && proposta) return(
            <TouchableHighlight  onPress={()=> aceitarProposta()} style={{height:'20%',borderRadius:50,backgroundColor:'#113d35' ,width:'60%',marginTop:20,alignItems:'center',borderWidth:2,borderColor:'#2ca86a',justifyContent:'center'}} >
            <Text style={{fontWeight:'bold',color:'white'}}> Aceitar Proposta</Text>
            </TouchableHighlight>
        )
       return null
    }

    
    return (

        <View style={{flex:1}}>
                  <View style={{flex:1,flexDirection:'row',backgroundColor:'#113d35'}}>
                      <View style={{flex:1,alignItems:'center',justifyContent:"center"}}>
                      <Image source={{uri:data.photo}} style={{height:'70%',width:'90%',borderRadius:60,borderWidth:1,bordercolor:'white'}} />
                      </View>

                      <View style={{flex:2,alignItems:"center",justifyContent:'center'}}>
                         <Text style={{fontWeight:'bold',color:'white'}} >{data.nome}</Text>
                         <Text style={{fontWeight:'bold',color:'white'}} >{data.endereco}</Text>
                         <Text style={{fontWeight:'bold',color:'white'}} >{data.email}</Text>  
                      </View>                
                  </View>

                  <View style={{flex:4,alignItems:"center",justifyContent:'center'}}>

                  <Text style={{fontWeight:'bold',margin:10}}>Envia sua proposta ao cliente ( preço medio R$500,00 )</Text>
                           <TextInput style={{width:'60%',height:'10%',borderBottomWidth:1,bordercolor:'black'}}  maxLength={50} value={proposta} onChangeText={texto => inputProposta(texto)} placeholder='Diga suas competencias' />
                           <TextInput style={{width:'60%',height:'10%',marginTop:10,borderBottomWidth:1,bordercolor:'black'}}  maxLength={10} value={avaliador} onChangeText={texto => nomeAvaliador(texto)} placeholder='Digite seu nome' />
                          <EnviaButton />
                            
                  </View>
              </View>
   
    )
}




  


