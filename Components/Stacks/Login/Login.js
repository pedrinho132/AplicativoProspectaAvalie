import  React, { Component,useState,useEffect } from 'react';
import { StyleSheet, View, Text,TouchableHighlight,Linking,Image,TouchableOpacity,ImageBackground} from 'react-native';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { useSelector, useDispatch, } from 'react-redux';
import "@react-native-firebase/app";

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import auth from '@react-native-firebase/auth';

import MainTabNavigation from '../stack';

import PerfilCliente from '../PerfilCliente/perfilCliente';
import preloadCadastro from '../Preload/preloadCadastro';
import Laudo from '../Pedido/laudo';
import PerfilProfissional from '../PerfilProfissional/PerfilProfissional'




const styles = StyleSheet.create({
  linearGradient: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})


   


export default Login = ({  navigation }) => { 

  const Tab = createMaterialBottomTabNavigator();
  const [ user, setUser ] = useState()
  const [ loggedin, setloggedIn ] = useState();
  const [initializing, setInitializing] = useState(true);

  
useEffect(() => {
   
  GoogleSignin.configure({
    scopes: ['email'], // what API you want to access on behalf of the user, default is email and profile
    webClientId: '784117731234-mfgnihau349jqacq8mbslopsma38vqpg.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
    offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    hostedDomain: '', // specifies a hosted domain restriction
    loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
    forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
    accountName: '', // [Android] specifies an account name on the device that should be used
    iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    googleServicePlistPath: '', // [iOS] optional, if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
  });

 
}, []);
 function linkIbape(){


  const url = 'http://www.ibapemaranhao.com.br/'
  Linking.openURL(url)


}

function linkCrea(){

  const url = 'https://www.creama.org.br/'
   Linking.openURL(url)


}

useEffect(() => {
 hasPlayServicesGoogle();
},[]);

async function hasPlayServicesGoogle (){
  try {
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // google services are available
  } catch (err) {
    console.error('play services are not available');
  }
}

const Menus = () => {
  if(user.emailVerified){
    <View>
 <MainTabNavigation />
    </View>
  
  }if(!user.emailVerified){
    <View>
 <PerfilProfissional />
    </View>
    
  }else{
    return(
      <Login />
    )
  }
    
  }

signIn = async () => {
  GoogleSignin.configure({
    scopes: ['email'], // what API you want to access on behalf of the user, default is email and profile
    webClientId: '784117731234-mfgnihau349jqacq8mbslopsma38vqpg.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
    offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    hostedDomain: '', // specifies a hosted domain restriction
    loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
    forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
    accountName: '', // [Android] specifies an account name on the device that should be used
    iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    googleServicePlistPath: '', // [iOS] optional, if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
  });

  try {
    GoogleSignin.hasPlayServices();
    const { idToken } = await GoogleSignin.signIn();

    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    setloggedIn(true)
    navigation.navigate('perfilCliente')
    return auth().signInWithCredential(googleCredential);
   
   
  } catch (error) {
    if (error.coded === statusCodes.SIGN_IN_CANCELLED) {
      alert(error.coded)
    } else if (error.codee === statusCodes.IN_PROGRESS) {
      alert(erro.codee)
    } else if (error.codem === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        alert(error.codem)
    } else {
      // some other error happened
    }
  }
};

  
  
 return (
      
   
      <View style={{flex:1,backgroundColor:'#113d35'}}>
              <ImageBackground style={{flex:1}} source={require('../../assets/backlogoicon.png')}>

              <View style={{flex:2,alignItems:'center',justifyContent:'center',marginTop:"35%"}}>
        
            
              <TouchableHighlight  onPress={()=>navigation.navigate('autenticarLogin')} style={{height:'25%',width:'60%',backgroundColor:'white',marginTop:20,borderRadius:50,alignItems:"center",justifyContent:"center"}}>
                          <Text  style={{fontSize:13,color:'black',fontWeight:'bold'}} >Você é avaliador ? Clique aqui</Text>
          </TouchableHighlight>
               
           

              </View>
          <View style={{flex:2,alignItems:'center',justifyContent:'center'}} >

           

             
          
              <TouchableOpacity  onPress={()=> signIn()}  style={{height:'25%',width:'60%',marginBottom:'50%',backgroundColor:'white',borderRadius:40,flexDirection:'row'}} >
                   <View style={{flex:1,alignItems:'flex-start',justifyContent:'center'}} >
                     <View style={{marginLeft:26,width:35,height:35,borderRightWidth:2,borderColor:'black'}} >
                                  <Image style={{flex:1}} source={{uri:'https://i1.wp.com/www.androidawareness.com/wp-content/uploads/2018/10/google-icon.png?fit=500%2C500'}} />
                                          </View>
                     </View>

                   <View style={{flex:3,alignItems:'center',justifyContent:'center'}}>

                      <Text style={{fontSize:12,fontWeight:'bold'}} > Login Gmail</Text>
                     </View>
                    

                </TouchableOpacity>
            
               <Text style={{color:'white'}} >Apoio:</Text>
          </View>

          <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:"center"}}>
               <TouchableHighlight onPress={()=>linkIbape()}>
               <Image  style={{ height:80,width:80,margin:15 }} source={require('../../assets/ibape.png')} />
           
               </TouchableHighlight>

               <TouchableHighlight onPress={()=>linkCrea()}>
            <Image style={{ height:80,width:80,margin:15 }} source={require('../../assets/crea.jpg')} />
          </TouchableHighlight>
          </View>
      
           
              </ImageBackground>
      
         
      </View>

  );
    
  }
