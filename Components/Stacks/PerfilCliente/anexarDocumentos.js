import React,{ useState,useEffect } from 'react';
import { View,Text,ScrollView,TouchableOpacity,TextInput,StyleSheet } from 'react-native';
import { useSelector, useDispatch, } from 'react-redux';
import base64 from 'react-native-base64';
import database from '@react-native-firebase/database';
import '@react-native-firebase/app';



export default anexarDocumentos = ({ navigation }) => {
   
const dispatch = useDispatch();
const usuario = useSelector( state => state.dadosUser );
const [inicializaçao, setInicializaçao] = useState(false);
const [rgCnh, setRgCnh] = useState();
const [RegistroTitulo, setRegistroTitulo] = useState();
const [cnh,setCnh]= useState(0);
const [titulo,seTitulo] = useState(0);

const styles = StyleSheet.create({
  input:{
     fontSize:20,
     height:40,
     
  }
})




consultarDocumentos = () => {
  const email = usuario.email
  const email64B = base64.encode(email)
  database()
  .ref(`usuario/clientes/${email64B}`)
  .once('value')
  .then(snapshot => {
    console.log('User data: ', snapshot.val());
     setCnh(snapshot.val().rgOuCnh);
     seTitulo(snapshot.val().titulo);
  })
  .catch( (console.log('error')) )
}

useEffect(()=>{
  consultarDocumentos()
},[])


function anexarDocument () {

  const email64 = base64.encode(usuario.email);

     database().ref(`/usuario/clientes/${email64}`)
     .update({ rgOrCnh: rgCnh, titulo: RegistroTitulo });

    alert('Registrado!')


}

function textInputRgCNH (texto) {
  setRgCnh(texto)
}

function textInputRegistroTitulo (texto) {
  setRegistroTitulo(texto)
}

if(cnh == 0 && titulo == 0){
    return(
     
          <View style={{flex:1,backgroundColor:"white"}}>
             
             <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
           <TextInput value={rgCnh} placeholderTextColor='#adcbbc' onChangeText={texto => textInputRgCNH(texto) } styles={styles.input} placeholder='RG ou CNH' />
           <TextInput value={RegistroTitulo} placeholderTextColor='#adcbbc' onChangeText={texto =>textInputRegistroTitulo (texto)} styles={styles.input} placeholder='Registro ou Titulo do imovel'/>
             </View>

           <View style={{flex:1,alignItems:'center',justifyContent:'center' }} >
           <TouchableOpacity  onPress={ () => anexarDocument()} style={{alignItems:'center',justifyContent:'center',height:'17%',width:'70%',borderWidth:4,borderColor:'#194d33',borderRadius:40,backgroundColor:'white'}} >
                      <Text style={{fontSize:17,fontWeight:'bold',color:'#194d33'}}>Anexar Dados</Text>
         </TouchableOpacity>
         </View>

            </View> 
        
    )
}


return(
  <View style={{flex:1,alignItems:'center',justifyContent:'center'}} >
    <Text style={{color:'#2ca86a',fontWeight:'bold',fontSize:20}} >Documentos Anexados </Text>
  </View>
)
}