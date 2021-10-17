import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button, Linking } from 'react-native';
import { useSelector, useDispatch, } from 'react-redux';
import database from '@react-native-firebase/database';
import base64 from 'react-native-base64';
import auth from '@react-native-firebase/auth';
import '@react-native-firebase/app';
import { set } from 'react-native-reanimated';










export default Cadastro = ({ navigation }) => {

   const dispatch = useDispatch();
   const usuario = useSelector(state => state.cadastro)
   const [email, setEmail] = useState();
   const [senha, setSenha] = useState();
   const [rg, setRg] = useState();
   const [endereco, setEndereco] = useState();
   const [crea, setCrea] = useState();
   const [formaçao, setFormaçao] = useState();
   const [cpf, setCpf] = useState()
   const [nome, setNome] = useState()
   const [telefone, setTelefone] = useState()
   const [termos, setTermos] = useState(null);
   const [corBotao, setCorBotao] = useState('grey')


   const styles = StyleSheet.create({
      input: {
         height: '15%',
         width: '80%',
         borderBottomWidth: 2,
         borderColor: 'white'

      }
   })

   function aceitarTermos() {

      if (corBotao == 'grey') {
         setCorBotao('green')
         setTermos(true);
      }
      if (corBotao == 'green') {
         setCorBotao('grey');
         setTermos(null);
      }
   }



   function cadastraUsuario() {

      const email64base = base64.encode(email)
      database().ref(`solicitacoes/cadastro/${email64base}`)
         .set({ email, senha, rg, endereco, crea, formaçao, cpf, nome, telefone })
      alert('Sua solicitação fo enviada, Aguarde enquanto Validamos suas credencias, prazo de até 24 horas')
      navigation.goBack()

   }




   function textInputNome(texto) {
      setNome(texto)
   }

   function textInputCpf(texto) {
      setCpf(texto)
   }
   function textInputRg(texto) {
      setRg(texto)
   }

   function textInputEndereço(texto) {
      setEndereco(texto)
   }
   function textInputEmail(texto) {
      setEmail(texto)
   }

   function textInputTelefone(texto) {
      setTelefone(texto)
   }

   function textInputCrea(texto) {
      setCrea(texto)
   }

   function textInputSenha(texto) {
      setSenha(texto)
   }

   function textInputFormaçao(texto) {
      setFormaçao(texto)
   }

   async function termosContrato() {
      navigation.navigate('contrato')

   }

   const CadastrarButton = () => {
      if (termos) {
         return (
            <TouchableOpacity onPress={() => cadastraUsuario()} style={{ alignItems: 'center', justifyContent: 'center', height: '10%', marginBottom: 20, width: '70%', marginLeft: '15%', borderWidth: 2, borderColor: 'white', borderRadius: 40, backgroundColor: 'white' }}  >
               <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#15312c' }}>Cadastrar</Text>
            </TouchableOpacity>
         )
      } else {
         return null
      }
   }

   return (

      <View style={{ flex: 1, backgroundColor: "#15312c" }}>

         <View style={{ flex: 7 }}>

            <TextInput style={{
               height: 40,
               width: '60%',
               borderBottomWidth: 2,
               marginTop: 20,
               borderColor: 'white'
            }} color='white' placeholderTextColor='white' onChangeText={texto => textInputEmail(texto)} placeholder='Email' value={email} />

            <TextInput style={{
               height: 40,
               width: '60%',
               borderBottomWidth: 2,
               borderColor: 'white'
            }} color='white' placeholderTextColor='white' onChangeText={texto => textInputSenha(texto)} placeholder='Senha' value={senha} />

            <TextInput style={{
               height: 40,
               width: '60%',
               borderBottomWidth: 2,
               borderColor: 'white'
            }} color='white' placeholderTextColor='white' onChangeText={texto => textInputNome(texto)} placeholder='Nome' value={nome} />

            <TextInput style={{
               height: 40,
               width: '60%',
               borderBottomWidth: 2,
               borderColor: 'white'
            }} color='white' placeholderTextColor='white' onChangeText={texto => textInputCpf(texto)} placeholder='CPF' value={cpf} />

            <TextInput style={{
               height: 40,
               width: '60%',
               borderBottomWidth: 2,
               borderColor: 'white'
            }} color='white' placeholderTextColor='white' onChangeText={texto => textInputRg(texto)} placeholder='Rg' value={rg} />

            <TextInput style={{
               height: 40,
               width: '60%',
               borderBottomWidth: 2,
               borderColor: 'white'
            }} color='white' placeholderTextColor='white' onChangeText={texto => textInputEndereço(texto)} placeholder='Endereço' value={endereco} />

            <TextInput style={{
               height: 40,
               width: '60%',
               borderBottomWidth: 2,
               borderColor: 'white'
            }} color='white' placeholderTextColor='white' color='white' placeholderTextColor='white' onChangeText={texto => textInputTelefone(texto)} placeholder='Telefone' value={telefone} />

            <TextInput style={{
               height: 40,
               width: '60%',
               borderBottomWidth: 2,
               borderColor: 'white'
            }} color='white' placeholderTextColor='white' onChangeText={texto => textInputCrea(texto)} placeholder='Crea/Cau' value={crea} />

            <TextInput style={{
               height: 40,
               width: '60%',
               borderBottomWidth: 2,
               borderColor: 'white'
            }} color='white' placeholderTextColor='white' onChangeText={texto => textInputFormaçao(texto)} placeholder='Formaçao' value={formaçao} />


         </View>

         <Text style={{ color: 'white', marginTop: 20 }} >Ao me Cadastrar estou ciente nos</Text>
         <Text onPress={() => termosContrato()} style={{ color: 'blue', marginTop: 10 }} >Termos de Contrato</Text>



         <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>

            <TouchableOpacity onPress={() => aceitarTermos()} style={{ height: 15, width: 15, backgroundColor: 'grey', marginLeft: 10 }} />
            <Text style={{ color: 'white' }} >Aceitar termos  </Text>

         </View>



         <CadastrarButton />

      </View>



   )
}