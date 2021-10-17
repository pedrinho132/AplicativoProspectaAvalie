import  React, { Component,useState,useEffect } from 'react';
import { StyleSheet, View, Text,TouchableHighlight,Image,} from 'react-native';
import auth from '@react-native-firebase/auth';
import "@react-native-firebase/app";


const styles = StyleSheet.create({
  })

  
 export default Pedido = ({ route,navigation }) => {
 
        useEffect(()=>{
         
        },[]);
   

    return (

        <View style={{flex:1,backgroundColor:'white'}}>

          <View style={{flex:1,}}>
            <Text>Quadra 209 lote 2</Text>
             <Text></Text>
            <Text>Pedro Yago</Text>
            <Text>Pedido #989788</Text>


          </View>
  
           <View style={{flex:4,alignItems:'center',justifyContent:'center'}}>
<TouchableHighlight  onPress={()=>navigation.navigate('laudoPedido')} style={{marginTop:10,height:'20%',width:'100%',alignItems:'center',justifyContent:'center',borderWidth:2,borderColor:'black'}} >
                              <Text>Dossies</Text>
                    </TouchableHighlight>

                    <TouchableHighlight   style={{marginTop:10,height:'20%',width:'100%',alignItems:'center',justifyContent:'center',borderWidth:2,borderColor:'black'}} >
                              <Text>Laudos</Text>
                    </TouchableHighlight>
               </View>

               <View style={{flex:1,alignItems:'center',justifyContent:'center',borderTopWidth:1,borderColor:'black'}}>
                 <Text>Aguardando engenheiro....</Text>
                 </View>     
              </View>
   
    )
}
  


