import React,{useState,useEffect} from 'react';
import { View,Text,ScrollView,TouchableOpacity, PermissionsAndroid,TextInput,StyleSheet,Image } from 'react-native';
import { useSelector, useDispatch, } from 'react-redux'
import base64 from 'react-native-base64'
import auth from '@react-native-firebase/auth';
import '@react-native-firebase/app';
import PerfilProfissional from '../PerfilProfissional/PerfilProfissional';




const styles = StyleSheet.create({
   input:{
      height:'25%',width:'60%',borderBottomWidth:1,borderColor:'white',alignItems:"center",justifyContent:"center"
   }
 })

 

export default autenticarLogin = ({ navigation }) => {
   
const dispatch = useDispatch();
const usuario = useSelector( state => state.autenticacao );

const [user, setUser] = useState();
const [initializing, setInitializing] = useState(true);

   function textInputEmail (texto) {
      dispatch({ type:'input_EmailLogin', email:texto })
   }
   
   
   function textInputSenha  (texto)  {
      dispatch({ type:'input_SenhaLogin', senha:texto })
   }

   const permissionLoc =()=>{    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION).then(() => fetchLocation() )    
   }  
 
   useEffect(()=>{
     permissionLoc()
   },[])

   
   function fetchLocation (){
      Geolocation.getCurrentPosition(info => {
        const position = info.coords
       dispatch({ type:'latitude', payload:position.latitude });
       dispatch({ type:'longitude', payload:position.longitude })
      }).then(() => console.log('true'))
     }
  

  

    async function  onButton (){
        if(usuario.email == 'adm@prospecta.com.br' && usuario.senha == 'admadm'){
           navigation.navigate('adm')
           alert('ADM Logado')
        }else{
           
          auth().signInWithEmailAndPassword(usuario.email,usuario.senha)
         .then(sucess=> navigation.navigate('PerfilProfissional')  )
         .catch(erro => alert(erro))
        }
    }






   return(
     
     <View style={{flex:1,backgroundColor:"#15312c"}}>
    
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Image style={{height:'90%',width:'55%',borderRadius:100,borderWidth:1,borderColor:'#113d35',marginTop:20}} source={require('../../assets/logoProspecta.jpeg')} />
               </View>
          <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>

          
             
        
           <TextInput color='white' value={usuario.email} placeholderTextColor='#adcbbc' onChangeText={texto => textInputEmail(texto)} style={styles.input} placeholder='E-mail'/>
           <TextInput color='white' value={usuario.senha} placeholderTextColor='#adcbbc' onChangeText={texto => textInputSenha (texto)} style={styles.input} placeholder='Senha'/>
          </View>

           <View style={{flex:1,alignItems:'center',justifyContent:'flex-start' }} >
           <TouchableOpacity onPress={() => onButton() } style={{ alignItems:'center',justifyContent:'center',height:'25%',width:'70%',borderWidth:2,borderColor:'white',borderRadius:40,backgroundColor:'white' }}  >
                      <Text style={{fontSize:15,fontWeight:'bold',color:'#15312c'}}>Login</Text>
         </TouchableOpacity>
         <TouchableOpacity  onPress={ () => navigation.navigate('Cadastro')} style={{marginTop:20}}>
         <Text  style={{marginTop:20,fontSize:14,fontWeight:'bold',color:'white'}}>Ainda não é cadastrado? Clique aqui</Text>
         </TouchableOpacity>
         </View>

            </View> 

    );

   

return ( <PerfilProfissional /> );


    
}
