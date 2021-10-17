import  React, { Component,useState } from 'react';
import { StyleSheet, View, Text,TouchableOpacity,Image} from 'react-native';


export default Ganhos = () => {

    return (

        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>

<Text style={{fontSize:20,fontWeight:'bold'}}>R$ 940,00</Text>

<TouchableOpacity 
style={{height:'15%',width:'100%',flexDirection:'row',borderBottomWidth:2,borderColor:'black',marginTop:10}}
>

<View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
    <Text style={{fontSize:20}}>Leandro</Text>
    
  </View>

  <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
  
  </View>

 <View style={{flex:1,alignItems:'flex-end',justifyContent:'center',marginHorizontal:10}}>
         <Text style={{fontSize:17,color:'green',fontWeight:'bold'}} > +470.00 </Text>
    </View>
</TouchableOpacity>

<TouchableOpacity 
style={{height:'15%',width:'100%',flexDirection:'row',borderBottomWidth:2,borderColor:'black',marginTop:10}}
>

<View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
    <Text style={{fontSize:20}}>Giovanif</Text>
    
  </View>

  <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
  
  </View>

 <View style={{flex:1,alignItems:'flex-end',justifyContent:'center',marginHorizontal:10}}>
         <Text style={{fontSize:17,color:'green',fontWeight:'bold'}} > +470.00 </Text>
    </View>
</TouchableOpacity>

 

              </View>
   
    )
}
  


