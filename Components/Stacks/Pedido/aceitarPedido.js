import React,{ useState,useEffect} from 'react';
import { View,Text,TouchableOpacity,Alert } from 'react-native';
import base64 from 'react-native-base64';
import database from '@react-native-firebase/database';
import { useSelector, } from 'react-redux';
import auth from '@react-native-firebase/auth';
import MercadoPagoCheckout from '@blackbox-vision/react-native-mercadopago-px';


const getPreferenceId = async (payer, ...items) => {
  const response = await fetch(
    `https://api.mercadopago.com/checkout/preferences?access_token=TEST-2177457783366676-040515-521c1c3410ce5bf0e95de2d7730fd3b9-516863351`,
    {
      method: 'POST',
      body: JSON.stringify({
        items,
        payer: {
          email: payer,
        },
        payment_methods: {
          excluded_payment_types:[
              {id:"ticket"}
          ]
        },
      }),
    }
  );

  const preference = await response.json();

  return preference.id;
};



export default function AceitarPedido ({route,navigation })  {
     
     const pedidoID = useSelector( state => state.criarPedido.act.idPedido )
     const [ user, setUser ] = useState();   
     const [ pedido, setPedido ] = useState();
     const [paymentResult, setPaymentResult] = useState(null);
   
     const dadosPro = route.params.dadosPro
     const propostaId = route.params.propostaId
   

     






     useEffect(()=>{
      auth().onAuthStateChanged(function(user) {
        if (user) {
           setUser(user)
                  
        }})
      },[console.log(dadosPro)]);





     
     

     
    
     useEffect(()=>{

        auth().onAuthStateChanged(function(user) {
            if (user) {                 
                   setUser(user)
        
                   const clienteEmail64 = base64.encode(user.email)
                   database()
                   .ref(`/pedidos/${clienteEmail64}`)
                 .on('value', snapshot => {
                setPedido(snapshot.val());
                       
            })
        }})
                             
     },[]);

     

     function aceitarProposta (){
        const proEmail64 = base64.encode(dadosPro.email)
        const clienteEmail64 = base64.encode(user.email)
        const engatual = base64.encode(pedido.engenheiro)
       database()
       .ref(`usuario/profissional/${proEmail64}/pedidosAceitos/${clienteEmail64}`)
       .set({ emailCliente:user._user.email,pedidoID:pedido.itemId,nome:user._user.displayName } );

      
       database()
       .ref(`usuario/profissional/${engatual}/pedidosAceitos/${clienteEmail64}`)
       .remove()

      

       setTimeout(() => {
        database()
        .ref(`/pedidos/${clienteEmail64}`)
        .update({ pedidoAceito:true, engenheiro:dadosPro.email, nome:dadosPro.nome ,proposta:dadosPro.proposta });
        navigation.navigate('perfilCliente');
       }, 1000);
     
       
alert('Por Favor aguarde')
      
     }

     



    return(
       <View style={{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:'#113d35'}} >
        
           <Text style={{color:'white',fontWeight:"bold"}} >Nome: {dadosPro.nome}</Text>
           <Text style={{color:'white',fontWeight:"bold"}} >Especialidades: {dadosPro.proposta}</Text>

           <TouchableOpacity onPress={()=>aceitarProposta()} style={{height:'10%',width:'60%',marginTop:20,backgroundColor:'white',alignItems:"center",borderWidth:2,borderColor:"black",borderRadius:30,justifyContent:"center"}} >
               <Text style={{color:'black',fontWeight:"bold"}} >Aceitar Proposta</Text>
               </TouchableOpacity>
     
       

       </View>
    );
}