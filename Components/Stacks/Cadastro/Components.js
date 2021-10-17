import React, { useState, Component } from 'react';
import { View,Text,ScrollView,TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Input = ({ noome,value,onChangeText,password}) => {
  return (
    <View style={{marginLeft:7,}}>
    <View style={{height:70,width:'85%',alignItems:"center",borderRadius:17,justifyContent:'center'}} >
        <TextInput style={{ borderBottomColor:'#dedddd',borderTopColor:'#dedddd' ,width:'90%',borderRadius:11,letterSpacing:1,height: 50, paddingLeft:10 ,borderColor: 'gray', borderWidth: 1 }}
               value={value}
               placeholder={noome}
               placeholderTextColor='#e9ebea'
               onChangeText={onChangeText}
               secureTextEntry={password}
           />
    </View>
      <View style={{height:10}} />
      </View>
  )
}

const Titulos = ({ titulo }) => {
  return(
  <Text style={{fontSize:33,paddingTop:30,paddingBottom:14,paddingLeft:20,color:'#30b673'}}>{titulo}</Text>
  )
}


const AreaButton = () => {
  return(
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}} >
             <TouchableOpacity onPress={ () => navigation.navigate('PerfilProfissional') } style={{height:75,width:'60%',borderRadius:40,backgroundColor:'#339d68',alignItems:'center',justifyContent:'center'}} >
                <Text style={{ fontWeight:'bold',fontSize:30,color:'white'}} > Cadastrar </Text>
             </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  linearGradient: {
    flex:1,
  },
})

const  Dados = () => {
  
  const [nameField,setNameField] = useState('');
  const [passwordField,setPasswordField] = useState('');
  const [confirmPasswordField,setConfirmPassowordField] = useState('');
  const [phoneField,setPhoneField] = useState('');
 
  

    return(

      <LinearGradient
      colors={['#15312c', '#113d35', '#13332d' ]}
      style={styles.linearGradient}
    >
               
                     <Titulos titulo={'Dados para o perfil'} />    
                           <Input noome={'Nome'}
                                  value={nameField}
                                  onChangeText={t=>setNameField(t)}
                           />
                          
                           <Input noome={'Numero Celular'}
                             value={phoneField}
                             onChangeText={t=>setPhoneField(t)}
                           />
                           <Input noome={'Serviço'}
                            value={passwordField}
                            onChangeText={t=>setPasswordField(t)}
                            password={true}
                           />
                           <Input noome={'Email'}
                           value={confirmPasswordField}
                           onChangeText={t=>setConfirmPassowordField(t)}
                           password={true}
                           />

                 
                           
            
     </LinearGradient>
    )
  
};

export default Dados;