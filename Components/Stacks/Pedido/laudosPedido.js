import React, { Component,useState,useEffect } from 'react'
import { AppRegistry, StyleSheet, Text, View,Image } from 'react-native'
import { useSelector, useDispatch, } from 'react-redux'
import storage from '@react-native-firebase/storage';
import "@react-native-firebase/app"
import Swiper from 'react-native-swiper'


   



export default LaudoPedido  = ({}) => {
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
  
  
  const  emailUser  = useSelector( state => state.dadosUser.email );
  
  const [ imageCteor, setImageCteor ] = useState();
  const [ imageCra, setImageCra ] = useState();
  const [ imageCro, setImageCro ] = useState();
  const [ imageCoa, setImageCoa ] = useState();
  const [ imageArt, setImageArt ] = useState();
  const [ imageProjetoLegal, setImageProjetoLegal ] = useState();
  const [ imagePfui, setImagePfui ] = useState();
  const [ imageProjetosAssinados, setImageProjetosAssinados ] = useState();
  const [ imageAlvaraC, setImageAlvaraC ] = useState();
  

   
    useEffect(()=>{


  
      async function urlImageCteor (){
        const  urlCteor = await storage()
       .ref(`pedidos/${emailUser}/dossies/foto_cteor.jpeg`)
       .getDownloadURL();
      
       setImageCteor(urlCteor)
      
      }
      
      async function urlImageCro (){
       const urlCro = await storage()
       .ref(`pedidos/${emailUser}/dossies/foto_cro.jpeg`)
       .getDownloadURL();
      
       setImageCro(urlCro)
      }
      
      async function urlImageCra (){
       const urlCra = await storage()
       .ref(`pedidos/${emailUser}/dossies/foto_cra.jpeg`)
       .getDownloadURL();
      
       setImageCra(urlCra)
      }
      
      async function urlImageCoa (){
       const urlCoa = await storage()
       .ref(`pedidos/${emailUser}/dossies/foto_coa.jpeg`)
       .getDownloadURL();
      
       setImageCoa(urlCoa)
      }
      
      async function urlImageAlvaraC (){
       const urlAlvaraC = await storage()
       .ref(`pedidos/${emailUser}/dossies/foto_alvaraC.jpeg`)
       .getDownloadURL();
      
       setImageAlvaraC(urlAlvaraC)
      }
      
      async function urlImageArt (){
       const urlArt = await storage()
       .ref(`pedidos/${emailUser}/dossies/foto_art.jpeg`)
       .getDownloadURL();
      
       setImageArt(urlArt)
      }
      
      async function urlImageProjetoLegal (){
       const urlProjetoLgal = await storage()
       .ref(`pedidos/${emailUser}/dossies/foto_projetoLegal.jpeg`)
       .getDownloadURL();
      
       setImageProjetoLegal(urlProjetoLgal)
      }
      
      async function urlImagePfui (){
       const urlPfui = await storage()
       .ref(`pedidos/${emailUser}/dossies/foto_pfui.jpeg`)
       .getDownloadURL();
      
       setImagePfui(urlPfui)
      }
      
      async function urlImageProjetosAssinados (){
       const urlProjetosAssinados = await storage()
       .ref(`pedidos/${emailUser}/dossies/foto_projetosAssinados.jpeg`)
       .getDownloadURL();
      
       setImageProjetosAssinados(urlProjetosAssinados)
      }
      
      
      },[])

      
    return (
      <Swiper style={styles.wrapper} showsButtons={true}>
        <View style={styles.slide1}>
          <Image style={{flex:1,height:'100%',width:'100%'}} source={{uri:`${imageCteor}`}} />
        </View>
        <View style={styles.slide2}>
        <Image style={{flex:1,height:'100%',width:'100%'}} source={{uri:`${imageCro}`}} />
        </View>
        <View style={styles.slide3}>
        <Image style={{flex:1,height:'100%',width:'100%'}} source={{uri:`${imageCra}`}} />
        </View>
        <View style={styles.slide4}>
        <Image style={{flex:1,height:'100%',width:'100%'}} source={{uri:`${imageCoa}`}} />
        </View>
        <View style={styles.slide5}>
        <Image style={{flex:1,height:'100%',width:'100%'}} source={{uri:`${imageAlvaraC}`}} />
        </View>
        <View style={styles.slide6}>
        <Image style={{flex:1,height:'100%',width:'100%'}} source={{uri:`${imageProjetosAssinados}`}} />
        </View>
        <View style={styles.slide7}>
        <Image style={{flex:1,height:'100%',width:'100%'}} source={{uri:`${imagePfui}`}} />
        </View>
        <View style={styles.slide8}>
        <Image style={{flex:1,height:'100%',width:'100%'}} source={{uri:`${imageArt}`}} />
        </View>
        <View style={styles.slide9}>
        <Image style={{flex:1,height:'100%',width:'100%'}} source={{uri:`${imageProjetoLegal}`}} />
        </View>
      </Swiper>
    )
  
}

AppRegistry.registerComponent('myproject', () => SwiperComponent)