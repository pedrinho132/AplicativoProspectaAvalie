import React, { Component,useState,useEffect } from 'react';
import { AppRegistry, StyleSheet, Text, View,Image, ImageBackground } from 'react-native';
import { useSelector, useDispatch, } from 'react-redux'
import storage from '@react-native-firebase/storage';
import "@react-native-firebase/app";
import Swiper from 'react-native-swiper';
import database from '@react-native-firebase/database';
import base64 from 'react-native-base64';
import auth from '@react-native-firebase/auth';


   



export default Dossies  = ({route,navigation}) => {

  const styles = StyleSheet.create({
    wrapper: {},
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB'
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5'
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9'
    },
    slide4: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9'
    },
    slide5: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9'
    },
    slide6: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9'
    },
    slide7: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9'
    },
    slide8: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9'
    },
    slide9: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9'
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
    }
  })
  
  
  const [ imageHabitese, setImageHabitese] = useState();
  const [ imageScpo, setImageScpo ] = useState();
  const [ imageMemorial, setImageMemorial ] = useState();
  const [ imageCteor, setImageCteor ] = useState();
  const [ imageCra, setImageCra ] = useState();
  const [ imageCro, setImageCro ] = useState();
  const [ imageCoa, setImageCoa ] = useState();
  const [ imageArt, setImageArt ] = useState();
  const [ imageProjetoLegal, setImageProjetoLegal ] = useState();
  const [ imagePfui, setImagePfui ] = useState();
  const [ imageProjetosAssinados, setImageProjetosAssinados ] = useState();
  const [ imageAlvaraC, setImageAlvaraC ] = useState();
  const [ user, setUser ] = useState();
   const [ pedido, setPedido] = useState();
  
  

   const email = route.params.email

   const itemId = route.params.itemId


  
  useEffect(()=>{
    auth().onAuthStateChanged(function(user) {
            if (user) {
               setUser(user);
              const email64 = base64.encode(user.email)
               database()
               .ref(`pedidos/${email64}`)
               .on('value', snapshot => {
                console.log(snapshot.val())
              setPedido(snapshot.val());
            });
               
            } else {
                // No user is signed in.
                console.log('There is no logged in user');
            }
        })

},[]);
  

const  urlImageCteor = async () => {
 
 await storage().ref(`pedidos/${email}/${itemId}/dossies/foto_cteor`)
  .getDownloadURL().then(url=>  setImageCteor(url) )
  

    }

    const  urlImageAlvaraC = async () => {
 
      await storage().ref(`pedidos/${email}/${itemId}/dossies/foto_alvaraC`)
       .getDownloadURL().then(url=>   setImageAlvaraC(url))
       
     
         }

         const  urlImageCoa = async () => {
 
          await storage().ref(`pedidos/${email}/${itemId}/dossies/foto_cOA`)
           .getDownloadURL().then(url=>   setImageCoa(url))
           
         
             }

             const  urlImageCra = async () => {
 
              await storage().ref(`pedidos/${email}/${itemId}/dossies/foto_cRA`)
               .getDownloadURL().then(url=>  setImageCra(url))
               
             
                 }

                 const  urlImageCro = async () => {
 
                  await storage().ref(`pedidos/${email}/${itemId}/dossies/foto_cRO`)
                   .getDownloadURL().then(url=>  setImageCro(url))
                   
                 
                     }

                     const  urlImagePfui = async () => {
 
                      await storage().ref(`pedidos/${email}/${itemId}/dossies/foto_pfui`)
                       .getDownloadURL().then(url=>   setImagePfui(url))
                       
                     
                         }

                         const  urlImageProjetoLegal = async () => {
 
                          await storage().ref(`pedidos/${email}/${itemId}/dossies/foto_projetoLegal`)
                           .getDownloadURL().then(url=>   setImageProjetoLegal(url))
                           
                         
                             }

                             const  urlImageProjetoAssinado = async () => {
 
                              await storage().ref(`pedidos/${email}/${itemId}/dossies/foto_projetosAssinados`)
                               .getDownloadURL().then(url=>   setImageProjetosAssinados(url))
                               
                             
                                 }

                                 const  urlImageArt = async () => {
 
                                  await storage().ref(`pedidos/${email}/${itemId}/dossies/foto_art`)
                                   .getDownloadURL().then(url=>   setImageArt(url))
                                   
                                 
                                     }

                                     const  urlImageScpo = async () => {
 
                                      await storage().ref(`pedidos/${email}/${itemId}/dossies/foto_scpo`)
                                       .getDownloadURL().then(url=>   setImageScpo(url))
                                       
                                     
                                         }

                                         const  urlImageMemorial = async () => {
 
                                          await storage().ref(`pedidos/${email}/${itemId}/dossies/foto_memorial`)
                                           .getDownloadURL().then(url=>   setImageMemorial(url))
                                           
                                         
                                             }

                                             const  urlImageHabitese = async () => {
 
                                              await storage().ref(`pedidos/${email}/${itemId}/dossies/foto_habitese`)
                                               .getDownloadURL().then(url=>   setImageHabitese(url))
                                               
                                             
                                                 }

                                
  
useEffect(()=>{
  urlImageCteor();
  urlImageCra();
  urlImageCro();
  urlImageAlvaraC();
  urlImageProjetoLegal();
  urlImageProjetoAssinado();
  urlImageArt();
  urlImagePfui();
  urlImageCoa();
  urlImageScpo();
  urlImageMemorial();
  urlImageHabitese();
},[])

      if(!pedido) return null;

      
    return (
      <Swiper style={styles.wrapper} showsButtons={true}>
        
          <ImageBackground style={{flex:1}} source={{uri:`${imageCteor}`}} />
    
     
        <ImageBackground style={{flex:1}} source={{uri:`${imageCro}`}} />
      
        
        <ImageBackground style={{flex:1}} source={{uri:`${imageCra}`}} />
      
      
        <ImageBackground style={{flex:1}} source={{uri:`${imageCoa}`}} />
    
      
        <ImageBackground style={{flex:1}} source={{uri:`${imageAlvaraC}`}} />
    
        
        <ImageBackground style={{flex:1}} source={{uri:`${imageProjetosAssinados}`}} />
  
       
        <ImageBackground style={{flex:1}} source={{uri:`${imagePfui}`}} />
    
      
        <ImageBackground style={{flex:1}} source={{uri:`${imageArt}`}} />
     
      
        <ImageBackground style={{flex:1}} source={{uri:`${imageProjetoLegal}`}} />

        <ImageBackground style={{flex:1}} source={{uri:`${imageMemorial}`}} />

        <ImageBackground style={{flex:1}} source={{uri:`${imageScpo}`}} />

        <ImageBackground style={{flex:1}} source={{uri:`${imageHabitese}`}} />
      
      </Swiper>
    )
  
}

AppRegistry.registerComponent('myproject', () => SwiperComponent)