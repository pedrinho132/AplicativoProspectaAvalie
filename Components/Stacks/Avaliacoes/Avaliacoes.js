import  React, { Component,useState } from 'react';
import { StyleSheet, View, Text,TouchableOpacity,Image} from 'react-native';
import Swiper from 'react-native-swiper'



const styles = StyleSheet.create({
    wrapper: {},
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
    }
  })

export default Avaliacoes = () => {

    return (

        <View style={{flex:1,backgroundColor:'#dbdcdb'}}>

          <View style={{flex:2}}>

<Swiper style={styles.wrapper} showsButtons={true}>
        <Image style={{flex:1}} source={{uri:'https://i.pinimg.com/originals/75/fb/ca/75fbca42673aa3180ca9de6084546361.jpg'}} />
        <Image style={{flex:1}} source={{uri:'https://resizedimgs.vivareal.com/crop/286x200/vr.images.sp/edfb7cd71e385ba7df5efb8d94b70b38.jpg'}} />
        <Image style={{flex:1}} source={{uri:'https://www.temporadadeferias.com.br/Recursos/Imagens/grande/p1ah9t1kqc1fkdled40rvt2sl4f.jpg'}} />
      </Swiper>

              </View>

              <View style={{flex:1,flexDirection:'row',borderTopWidth:2,borderColor:'black',borderBottomWidth:2}} >

                  <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>

              <Text style={{fontSize:14,fontWeight:'500'}}>Leandro</Text>
              <Text style={{fontSize:14,fontWeight:'500'}}>995925801</Text>
              <Text style={{fontSize:14,fontWeight:'500'}}>Brasilia df- Aguas Claras</Text>
              </View>
           
           <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
           <AirbnbRating size={20} />
</View>
            
                  </View>

              <View style={{flex:2}} >
             
                  <Text style={{fontSize:20,fontWeight:'bold',paddingTop:20}}>Resumo do Atendimento</Text>
                  <Text style={{fontSize:16,fontWeight:'400'}}>Detalhes</Text>
                  <Text style={{fontSize:16,fontWeight:'400'}}>Detalhes</Text>
                  <Text style={{fontSize:16,fontWeight:'400'}}>Detalhes</Text>

                  </View>

              </View>
   
    )
}
  


