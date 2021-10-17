import  React, { Component,useState } from 'react';
import { StyleSheet, View, Text,TouchableOpacity,Image,} from 'react-native';



 export default Definir = ({ route,navigation }) => {
        
    return (

        <View style={{flex:1}}>

<TouchableOpacity onPress={()=> navigation.navigate('informarEndereco',{tipo:'terreno'})} style={{flexDirection:'row',flex:1,borderTopWidth:1,borderColor:'black'}} > 
                            
                            <View style={{flex:1,alignItems:'center',justifyContent:'center'}} >
                                 <Image style={{height:'30%',width:'30%'}} source={require('../../assets/iconACT.jpg')} />
                            </View>

                            <View style={{flex:2,alignItems:"center",justifyContent:'center'}} >
                            <Text style={{fontWeight:'bold',color:"#113d35"}} >Terreno</Text>
                            </View>
                            
                             
               </TouchableOpacity>

                <TouchableOpacity onPress={()=> navigation.navigate('informarEndereco',{tipo:'act'})} style={{flexDirection:'row',flex:1,borderTopWidth:1,borderColor:'black'}} > 
                            
                             <View style={{flex:1,alignItems:'center',justifyContent:'center'}} >
                                  <Image style={{height:'30%',width:'30%'}} source={require('../../assets/iconACT.jpg')} />
                             </View>

                             <View style={{flex:2,alignItems:"center",justifyContent:'center'}} >
                             <Text style={{fontWeight:'bold',color:"#113d35"}} >Aquisição/Construção</Text>
                             </View>
                             
                              
                </TouchableOpacity>



                <TouchableOpacity onPress={()=> navigation.navigate('informarEndereco',{tipo:'imovelNovo'}) } style={{flexDirection:'row',flex:1,borderTopWidth:1,borderColor:'black'}} > 
                <View style={{flex:1,alignItems:'center',justifyContent:'center'}} >
                                  <Image style={{height:40,width:40}} source={require('../../assets/iconImovelNovo.png')} />
                             </View>

                             <View style={{flex:2,alignItems:"center",justifyContent:'center'}} >
                             <Text style={{fontWeight:'bold',color:"#113d35"}} >Imovel Novo</Text>
                             </View>
                </TouchableOpacity>





                <TouchableOpacity onPress={()=>navigation.navigate('informarEndereco',{tipo:'imovelUsado'})} style={{flexDirection:'row',flex:1,borderTopWidth:1,borderColor:'black'}} > 
                <View style={{flex:1,alignItems:'center',justifyContent:'center'}} >
                                  <Image style={{height:60,width:40}} source={require('../../assets/iconImovelUsado.jpg')} />
                             </View>

                             <View style={{flex:2,alignItems:"center",justifyContent:'center'}} >
                             <Text style={{fontWeight:'bold',color:"#113d35"}} >Imovel Usado</Text>
                             </View>
                </TouchableOpacity>
                    
              </View>
   
    )
}
  


