import React,{useEffect,useState} from 'react';
import { View,Text,TouchableOpacity } from 'react-native';
import base64 from 'react-native-base64';
import database from '@react-native-firebase/database';

export default DefinirLaudo = ({ route,navigation }) => {

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

      

      
    return(
        <View style={{flex:1,backgroundColor:'#113d35'}}>

<TouchableOpacity onPress={()=> navigation.navigate('gerarLaudo',{emailCliente:emailCliente,tipoLaudo:'terreno',itemId:itemId})} style={{flex:1,borderTopWidth:1,alignItems:'center',justifyContent:"center",borderColor:'black'}} > 
                            
                        

                            <Text style={{fontWeight:'bold',color:"white"}} >Terreno</Text>
                           
                            
                             
               </TouchableOpacity>

          
               <TouchableOpacity onPress={()=> navigation.navigate('gerarLaudoAct',{emailCliente:emailCliente,tipoLaudo:'imovelAct',itemId:itemId})} style={{flex:1,borderTopWidth:1,alignItems:'center',justifyContent:"center",borderColor:'black'}} > 
                            
                        

                            <Text style={{fontWeight:'bold',color:"white"}} >Laudo para Aquisição/Construção</Text>
                           
                            
                             
               </TouchableOpacity>



               <TouchableOpacity onPress={()=>navigation.navigate('gerarLaudo',{emailCliente:emailCliente,tipoLaudo:'imovelNovo',itemId:itemId})} style={{flex:1,alignItems:'center',justifyContent:'center',borderTopWidth:1,borderColor:'black'}} > 
  

                            <Text style={{fontWeight:'bold',color:"white"}} >Laudo para Imovel Novo</Text>
                        
               </TouchableOpacity>





               <TouchableOpacity onPress={()=>navigation.navigate('gerarLaudo',{emailCliente:emailCliente,tipoLaudo:'imovelUsado',itemId:itemId})} style={{flex:1,borderTopWidth:1,alignItems:"center",justifyContent:"center",borderColor:'black'}} > 
            

                            <Text style={{fontWeight:'bold',color:"white"}} >Laudo para Imovel Usado</Text>
                         
               </TouchableOpacity>
        </View>
    )
}