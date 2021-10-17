import React,{useEffect,useState} from 'react';
import { View,Text,TouchableHighlight } from 'react-native';
import base64 from 'react-native-base64';
import LaudoProNovo from './laudoPro';
import database from '@react-native-firebase/database';
import LaudoProAct from './laudoProAct';


export default SelecionarLaudo = ({ route,navigation }) => {



    const [ pedido, setPedido] = useState();

    const itemId = route.params.itemId
    const emailCliente = route.params.emailCliente
    const emailCliente64 = base64.encode(emailCliente)

    useEffect(()=> {
        database()
            .ref(`/pedidos/${emailCliente64}/laudo`)
            .on('value', snapshot => {
                    console.log(snapshot.val())
                  setPedido(snapshot.val());
                });
      },[]);
    
      if(!pedido) return (


        <View style={{flex:1,backgroundColor:'#113d35',alignItems:"center",justifyContent:"center"}}>
        <TouchableHighlight onPress={()=> navigation.navigate('denifirLaudo',{emailCliente,itemId})} style={{height:'8%',width:'60%',alignItems:"center",justifyContent:"center",borderWidth:2,borderColor:'green'}} >
                  <Text style={{color:"white",fontWeight:'bold'}}> Selecionar Laudo </Text>
        </TouchableHighlight>
 </View>
      );

      switch(pedido.tipo){

        case'terreno':
          return <LaudoProNovo />

          case'imovelNovo':
          return <LaudoProNovo />

          case'imovelAct':
          return <LaudoProAct />

          case'imovelUsado':
          return <LaudoProNovo />
      }

      
    
}