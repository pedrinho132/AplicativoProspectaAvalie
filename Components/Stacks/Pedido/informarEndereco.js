import React,{useState,useEffect} from 'react';
import { View,Text,TextInput,TouchableHighlight } from 'react-native';
import { useSelector, useDispatch, } from 'react-redux'

export default InformarEndereco = ({route,navigation}) => {
 
    const dispatch = useDispatch()

    const [ endereco, setEndereco ] = useState();
  
    const [ situaçao, setInputSituaçao] = useState()

   
    const tipo = route.params.tipo

    useEffect(()=>{
         
    },[console.log(tipo)])

    const  button = () => {
        if(!endereco && !situaçao){
            alert('Preencha o campo')
        }

        if(endereco){
            navigation.navigate(`${tipo}`)
        }

        dispatch({ type:'input_endereco', payload:endereco })
        
    }

    function inputSituaçao(texto){
       dispatch({ type:'input_descricao', payload:texto })
       setInputSituaçao(texto)
      }

      function inputEndereco (texto){
        dispatch({ type:'input_endereco', payload:texto })
        setEndereco(texto)
    }

    
   return(
    
           <View style={{flex:1,backgroundColor:'#113d35'}}>
               <View style={{flex:1,alignItems:"center",justifyContent:'center'}}>

                    <Text style={{fontWeight:'bold',fontSize:20,color:'white'}} >Precisamos que preencha os campos para continuarmos </Text>
                  </View>
               <View style={{flex:5,alignItems:'center',justifyContent:'center'}} >
               <Text style={{fontSize:15,fontWeight:'bold',margin:15,color:'white'}} >Nos informe seu endereço completo  </Text>
                <TextInput color='white' style={{height:'10%',width:'60%',borderBottomWidth:1,borderColor:'white',alignItems:"center",justifyContent:"center"}}  onChangeText={texto => inputEndereco(texto)} value={endereco} placeholder='Digite aqui seu endereço...' placeholderTextColor='#2ca86a' />

                <Text style={{fontSize:15,fontWeight:'bold',marginTop:30,color:'white'}} >Nos Informe a situação Atual do imovel</Text>
                    <TextInput  color='white' style={{height:'10%',width:'60%',borderBottomWidth:1,borderColor:'white',alignItems:"center",justifyContent:"center"}} value={situaçao} onChangeText={texto => inputSituaçao(texto)} placeholder='Descreva..' placeholderTextColor='#2ca86a' />

                </View>

                <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <TouchableHighlight onPress={()=> button()} style={{height:'60%',backgroundColor:'white',borderRadius:50, width:'60%',marginTop:20,alignItems:'center',borderWidth:2,borderColor:'#2ca86a',justifyContent:'center'}} >
                 <Text style={{fontWeight:'bold',color:'#2ca86a'}}> Continuar </Text>
                 </TouchableHighlight>
                </View>
           </View>

           
   )
}