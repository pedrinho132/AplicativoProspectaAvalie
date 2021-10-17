import React, { Component,useEffect,useState} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  PermissionsAndroid,
  BackHandler,
  NativeModules,
  TouchableHighlight,
  Alert,
  Button,
  ScrollView,
  Image
} from 'react-native';


import database from '@react-native-firebase/database';
import   '@react-native-firebase/app';
import base64 from 'react-native-base64';
import Logo from '../../assets/logoProspecta2.jpeg';
import Swiper from 'react-native-swiper'
import { useSelector, useDispatch, } from 'react-redux';
import auth from '@react-native-firebase/auth';






const styles = StyleSheet.create({
      container:{
        height:'10%',width:'30%',borderWidth:1,borderColor:"black",alignItems:"center",justifyContent:'center'
      },
      textContainner:{
          fontWeight:'700'
      },
      conatinerUp:{
        height:'10%',width:'50%',borderColor:"black",borderWidth:1,alignItems:"center",justifyContent:'center'
      },
    
      containerFull:{
        height:'10%',width:'100%',borderWidth:1,borderColor:"black",alignItems:"center",justifyContent:'center'
      },
    
      containerFull:{
          height:'10%',width:'100%',borderWidth:1,borderColor:"black",alignItems:"center",justifyContent:'center'
        },
      
        containerr:{
        height:'3%',width:'100%',borderWidth:1,borderColor:"black",alignItems:"center",justifyContent:'center',flexDirection:"row"
        },
    
        containerrr:{
          height:'3%',width:'100%',borderWidth:1,borderColor:"black",alignItems:"center",backgroundColor:'grey',justifyContent:'center',flexDirection:"row"
          }
    })

 

export default LaudoFinalizadoAct = ({route,navigation, id }) => {
   const emailCliente64 = useSelector( state => state.criarPedido.emailCliente64 );
const [pedido, setPedido ] = useState();




useEffect(()=>{
    auth().onAuthStateChanged(function(user) {
        if (user) {                 
            
               const email64 = base64.encode(user.email)
               database()
               .ref(`/cliente/${email64}/pedidosFinalizados/${id}/pedido/laudo`)
               .on('value', snapshot => {
                     
                     setPedido(snapshot.val());
                   });
       }})
   },[])



if (!pedido) return null;

const LaudoAssinado = () => {
  
      if(pedido.laudoAssinado) return(
            <Text style={{fontWeight:'bold',fontSize:18,color:'green'}} >Laudo Assinado</Text>
      )
      return null;
   
   
   }


return(
      <Swiper style={{}} showsButtons={true} >
      <View style={{flex:1}}>
         <View style={{flex:1,marginHorizontal:15}}>
             <Image style={{height:'70%',width:'50%',borderRadius:50,margin:15}} source={require('../../assets/logoProspecta2.jpeg')} />
           </View>
           <Text style={{fontWeight:'bold',marginTop:10,fontSize:17}} >Introdução/Identificação</Text>
           <View style={{flex:3,flexDirection:'row',flexWrap:'wrap'}}>
             
                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Categoria</Text>
                            <Text>{pedido.inputCategoria}</Text>
                   </View>

                   <View style={styles.container}>
                         <Text style={styles.textContainer} >UF</Text>
                                 <Text>{pedido.inputUf}</Text>
                   </View>

                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Municipio </Text>
                            <Text> {pedido.inputMunicipio} </Text>
                   </View>

                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Cidade</Text>
                            <Text> {pedido.inputDlc} </Text>
                   </View>

                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Bairro</Text>
                            <Text> {pedido.inputBairro} </Text>
                   </View>

                 

                   <View style={styles.container}>
                         <Text style={styles.textContainer} >CEP</Text>
                            <Text> {pedido.inputCep} </Text>
                   </View>

                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Finalidade</Text>
                            <Text> {pedido.inputFinalidade} </Text>
                   </View>

                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Objetivo</Text>
                            <Text> {pedido.inputObjetivo} </Text>
                   </View>

                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Interessado</Text>
                            <Text> {pedido.inputInteressado} </Text>
                   </View>


                   <View style={styles.conatinerUp}>
                         <Text style={styles.textContainer} >Pressupostos,Ressalvas</Text>
                            <Text> {pedido.inputRessalvas} </Text>
                   </View>


                   <Text style={{fontWeight:'bold',marginTop:10,fontSize:17}} >Caracteristicas da Regiao --</Text>


          

                   <View style={styles.containerFull}>
                         <Text style={styles.textContainer} >Infra-Estrutura Urbana</Text>
                            <Text> {pedido.inputInfra} </Text>
                   </View>

                   <View style={styles.containerFull}>
                         <Text style={styles.textContainer} >Serviços Públicos e Comunitarios</Text>
                            <Text> {pedido.inputServiçosPublico} </Text>
                   </View>

                   <View style={styles.containerFull}>
                         <Text style={styles.textContainer} >Usos Predominantes no Logradouro</Text>
                            <Text> {pedido.inputLogadouro} </Text>
                   </View>

                   
                   <View style={styles.conatinerUp}>
                            <Text style={styles.textContainer} >Padrões de Edificação </Text>
                            <Text> {pedido.inputPadrao} </Text>
                   </View>

                   <View style={styles.conatinerUp}>
                         <Text style={styles.textContainer} >Via de acesso ao endereço </Text>
                            <Text> {pedido.inputVia} </Text>
                   </View>

                   <View style={styles.conatinerUp}>
                         <Text style={styles.textContainer} > Região Contexto Urbano </Text>
                            <Text> {pedido.inputRegiaoUrbano} </Text>
                   </View>

                   <View style={styles.conatinerUp}>
                         <Text style={styles.textContainer} >Influencias Valorizantes </Text>
                            <Text> {pedido.inputIv} </Text>
                   </View>

                   
                   <View style={styles.containerFull}>
                         <Text style={styles.textContainer} >Influencias Desvalorizantes</Text>
                            <Text> {pedido.inputId} </Text>
                   </View>
                    
                   </View>  
                   </View>      
                    
            

                   <View style={{flex:1,flexDirection:'row',flexWrap:'wrap',alignItems:'center'}}>
                    <Text style={{fontWeight:'bold',marginTop:10,fontSize:17}} >Caracterização do Imóvel --</Text>
                    <Text style={{fontWeight:'bold',marginTop:10,fontSize:13}} >Edificação do Imóvel -- </Text>

                    <View style={styles.container}>
                         <Text style={styles.textContainer} >Implementação</Text>
                            <Text> {pedido.inputImplementaçao} </Text>
                   </View>

                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Vistoria</Text>
                            <Text> {pedido.inputVistorias} </Text>
                   </View>

                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Data da Vistoria</Text>
                            <Text> {pedido.inputData} </Text>
                   </View>

                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Ocupaçao</Text>
                            <Text> {pedido.inputOcupaçao} </Text>
                   </View>

                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Uso</Text>
                            <Text> {pedido.inputUso} </Text>
                   </View>

                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Teto</Text>
                            <Text> {pedido.inputTeto} </Text>
                   </View>

                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Cobertura</Text>
                            <Text> {pedido.inputCobertura} </Text>
                   </View>

                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Paredes Externas</Text>
                            <Text> {pedido.inputParedeExterna} </Text>
                   </View>

                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Fachada Principal</Text>
                            <Text> {pedido.inputFachada} </Text>
                   </View>

                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Demais Fachdas</Text>
                            <Text> {pedido.inputDemaisFachadas} </Text>
                   </View>

                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Esquadrias Principal</Text>
                            <Text> {pedido.inputEsquadrisFachada} </Text>
                   </View>

                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Demais Esquadrias</Text>
                            <Text> {pedido.inputDemaisEsquadris} </Text>
                   </View>

   

                   <Text style={{fontWeight:'bold',marginTop:10,fontSize:13,marginLeft:'42%'}} >Áreas molhadas</Text>
                 
                   <View style={styles.conatinerUp}>
                         <Text style={styles.textContainer} >Pisos</Text>
                            <Text> {pedido.inputPisos} </Text>
                   </View>

                   <View style={styles.conatinerUp}>
                         <Text style={styles.textContainer} >Parede Interna</Text>
                            <Text> {pedido.inputParedeInterna} </Text>
                   </View>

                   <Text style={{fontWeight:'bold',marginTop:10,fontSize:13,marginLeft:'42%'}} >Áreas secas</Text>

                   <View style={styles.conatinerUp}>
                         <Text style={styles.textContainer} >Pisos</Text>
                            <Text> {pedido.inputPisoSeco} </Text>
                   </View>

                   <View style={styles.conatinerUp}>
                         <Text style={styles.textContainer} >Idade Estimada</Text>
                            <Text> {pedido.inputIdadeEstimada} </Text>
                   </View>
                   
                   <View style={styles.container}>
                         <Text style={styles.textContainer} >N° Térreos</Text>
                            <Text> {pedido.inputNumterreos} </Text>
                   </View>

                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Qntd Pavimentos</Text>
                            <Text> {pedido.inputPavimento} </Text>
                   </View>

                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Locação no terreno</Text>
                            <Text> {pedido.inputLocaçao} </Text>
                   </View>


                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Vista Paronâmica</Text>
                            <Text> {pedido.inputVistaParonamica} </Text>
                   </View>


                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Orientação Solar</Text>
                            <Text> {pedido.inputOrientaçaoSolar} </Text>
                   </View>
                         
                   <Text style={{fontWeight:'bold',marginTop:10,fontSize:13,marginLeft:'30%'}} >Vagas de Garagem Definidas</Text>

                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Total Coberta</Text>
                            <Text> {pedido.inputVagaCoberta} </Text>
                   </View>
                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Total Descoberta</Text>
                            <Text> {pedido.inputVagaDescoberta} </Text>
                   </View>
                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Total</Text>
                            <Text> {pedido.inputTotal} </Text>
                   </View>

                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Taxa de Condominio</Text>
                            <Text> {pedido.inputTaxadeCondo} </Text>
                   </View>

                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Compartimento Armários</Text>
                            <Text> {pedido.inputCompartilhamentoArmario} </Text>
                   </View>
                  </View>           


                 
                  <View style={{flex:1,flexDirection:'row',flexWrap:'wrap',alignItems:'center'}}>
                           
                  <View style={styles.container}>
                         <Text style={styles.textContainer} >Salões Lazer</Text>
                            <Text> {pedido.inputSalaoLazer} </Text>
                   </View>


                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Padrão de Acabamento</Text>
                            <Text> {pedido.inputPadraoAcabamento} </Text>
                   </View>


                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Estado de Conservação</Text>
                            <Text> {pedido.inputEstadoConservaçao} </Text>
                   </View>

                   <Text style={{fontWeight:'bold',marginTop:10,fontSize:13,marginLeft:'30%'}} >Areas de conservação averbadas(m²)</Text>
                      
                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Privativa Unidade</Text>
                            <Text> {pedido.inputPrivativaUnidade} </Text>
                   </View>

                           
                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Privativa Descontinua</Text>
                            <Text> {pedido.inputPrivativaDescontruida} </Text>
                   </View>
                      

                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Comuns</Text>
                            <Text> {pedido.inputComuns} </Text>
                   </View>

                   
                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Total Averbadas</Text>
                            <Text> {pedido.inputTotalAverbada} </Text>
                   </View>

                   <Text style={{fontWeight:'bold',marginTop:10,fontSize:13,marginLeft:'30%'}} >Areas de conservação não averbadas(m²)</Text>
                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Privativa Unidade</Text>
                            <Text> {pedido.inputPrivativaUnidadeNao} </Text>
                   </View>

                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Privativa Descontinua</Text>
                            <Text> {pedido.inputPrivativaDescontinuaNao} </Text>
                   </View>

                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Comuns</Text>
                            <Text> {pedido.inputComunsNao} </Text>
                   </View>

                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Total não Averbada</Text>
                            <Text> {pedido.inputTotalNao} </Text>
                   </View>

                   <Text style={{fontWeight:'bold',marginTop:10,fontSize:13,marginLeft:'30%'}} >Areas de construçao Totals(m²)</Text>
                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Privativa Unidade</Text>
                            <Text> {pedido.inputPrivativaUnidadeTotales} </Text>
                   </View>
                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Privativa Descontinua</Text>
                            <Text> {pedido.inputPrivativaDescontinuaTotales} </Text>
                   </View>
                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Comuns</Text>
                            <Text> {pedido.inputComunsTotales} </Text>
                   </View>
                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Total Construida</Text>
                            <Text> {pedido.inputTotalConstruidaTotales} </Text>
                   </View>

                   
                  </View>


                   <View style={{flex:1,flexDirection:'row',flexWrap:'wrap',alignItems:'center'}}>
                   <View style={styles.conatinerUp}>
                         <Text style={styles.textContainer} >Divisao Interna</Text>
                            <Text> {pedido.inputDivisaoInterna} </Text>
                   </View>
                   <View style={styles.conatinerUp}>
                         <Text style={styles.textContainer} >Equipamentos da Undiade</Text>
                            <Text> {pedido.inputEquipamentosDaUnidade} </Text>
                   </View>

                   <Text style={{fontWeight:'bold',marginTop:10,fontSize:13,marginLeft:'35%'}} >Terreno da Unidade</Text>

                   <View style={{ height: 20 , width:'40%'}}>
                         
                         </View>

                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Area m(²)</Text>
                            <Text> {pedido.inputAreaQuadradaTerreno} </Text>
                   </View>

                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Testada</Text>
                            <Text> {pedido.inputTestadaTerreno} </Text>
                   </View>

                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Profundidade</Text>
                            <Text> {pedido.inputProfundidadeTerreno} </Text>
                   </View>

                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Posição</Text>
                            <Text> {pedido.inputPosiçaoTerreno} </Text>
                   </View>

                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Cota/Greide</Text>
                            <Text> {pedido.inputCotaTerreno} </Text>
                   </View>

                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Formato Aproximado</Text>
                            <Text> {pedido.inputFormatoAproximadoTerreno} </Text>
                   </View>

                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Inclinaçao</Text>
                            <Text> {pedido.inputInclinaçaoTerreno} </Text>
                   </View>

                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Cercamento</Text>
                            <Text> {pedido.inputCercamentoTerreno} </Text>
                   </View>

                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Cercamento Frente</Text>
                            <Text> {pedido.inputCercamentoTerrenoFrente} </Text>
                   </View>

                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Cercamento Lateral/Fundo</Text>
                            <Text> {pedido.inputCercamentoLaterais} </Text>
                   </View>

                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Vocaçao Principal</Text>
                            <Text> {pedido.inputVocaçaoPrincipalTerreno} </Text>
                   </View>

                   <View style={styles.conatinerUp}>
                         <Text style={styles.textContainer} >Lados do Terreno</Text>
                            <Text> {pedido.inputLadosDoTerreno} </Text>
                   </View>
                   </View>



                   <View style={{flex:1,flexDirection:'row',flexWrap:'wrap',alignItems:'center'}}>

                   <Text style={{fontWeight:'bold',marginTop:10,fontSize:13,marginLeft:'35%'}} >Empredimento</Text>

                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Numero de Prdios</Text>
                            <Text> {pedido.inputNumeroPredio} </Text>
                   </View>

                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Total de Unidades</Text>
                            <Text> {pedido.inputTotalDeUnidades} </Text>
                   </View>

                   <View style={styles.conatinerUp}>
                         <Text style={styles.textContainer} >Ocupaçao do Terreno</Text>
                            <Text> {pedido.inputOcupaçaoDoTerreno} </Text>
                   </View>

                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Padrao do Empreendimento</Text>
                            <Text> {pedido.inputPadraoEmpreendimento} </Text>
                   </View>

                   <View style={styles.conatinerUp}>
                         <Text style={styles.textContainer} >Infra Etrutura</Text>
                            <Text> {pedido.inputInfraEstrutura} </Text>
                   </View>

                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Estado de Conservação</Text>
                            <Text> {pedido.inputEstadoConservaçaoEmpreendimento} </Text>
                   </View>
                    
                   <Text style={{fontWeight:'bold',marginTop:10,fontSize:13,marginLeft:'35%'}} >Terreno do Empreendimento</Text>
                           
                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Area (m²)</Text>
                            <Text> {pedido.inputAreaQuadradaEmpreendimento} </Text>
                   </View>

                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Testa (m)</Text>
                            <Text> {pedido.inputTestadaEmpreedimento} </Text>
                   </View>

                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Profundidade (m)</Text>
                            <Text> {pedido.inputProfundidadeEquivalente} </Text>
                   </View>

                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Posição</Text>
                            <Text> {pedido.inputPosiçaoEmpreedimento} </Text>
                   </View>

                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Cota/Greide</Text>
                            <Text> {pedido.inputCotaEmpreedimento} </Text>
                   </View>

                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Cercamento</Text>
                            <Text> {pedido.inputCercamentoEmpreedimento} </Text>
                   </View>

                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Cercamento Frente</Text>
                            <Text> {pedido.inputCercamentoFrenteEmpreedimento} </Text>
                   </View>

                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Cercamento Lateral</Text>
                            <Text> {pedido.inputCercamentoLateralEmpreedimento} </Text>
                   </View>

                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Controle de acesso</Text>
                            <Text> {pedido.inputControleDeAcessoEmpreedimento} </Text>
                   </View>

                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Vicios de Construções</Text>
                            <Text> {pedido.inputVicios} </Text>
                   </View>

                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Outros Danos</Text>
                            <Text> {pedido.inputOutrosDanos} </Text>
                   </View>

                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Estabilidade e Solidez</Text>
                            <Text> {pedido.inputEstabilidade} </Text>
                   </View>

                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Condiçoes Habitalidade</Text>
                            <Text> {pedido.inputCondiçoesDeHabilidade} </Text>
                   </View>

                  
                   </View>


                   <View style={{flex:1,flexDirection:'row',flexWrap:'wrap',alignItems:'center'}}>



                   <Text style={{fontSize:16,fontWeight:"bold"}} >Avaliaçao</Text>
                   <Text style={styles.textContainer} >Situaçao descrita e Considerada para efeitdo de avaliação </Text>

                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Situaçao</Text>
                            <Text> {pedido.inputSituaçao} </Text>
                   </View>

                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Tipo de Valor determinado</Text>
                            <Text> {pedido.inputTipoValor} </Text>
                   </View>

                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Data de Refencia de avaliação</Text>
                            <Text> {pedido.inputDataReferencia} </Text>
                   </View>

                   <Text style={{fontWeight:'bold',marginTop:10,fontSize:13,marginLeft:'35%'}} >Avaliaçao Global</Text>


                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Area Terreno</Text>
                            <Text> {pedido.inputAreaAvaliaçaoGlobal} </Text>
                   </View>

                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Area R$/m²</Text>
                            <Text> {pedido.inputRSAreaGlobal} </Text>
                   </View>

                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Valor de Avaliação</Text>
                            <Text> {pedido.inputValorGlobal} </Text>
                   </View>

                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Parte Residencial</Text>
                            <Text> {pedido.inputParteResidencialGlobal} </Text>
                   </View>

                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Parte Comercial</Text>
                            <Text> {pedido.inputParteComercial} </Text>
                   </View>

                   <Text style={{fontWeight:'bold',marginTop:10,fontSize:13,marginLeft:'35%'}} >Avaliação Itemizada</Text>

                   <View style={styles.conatinerUp}>
                         <Text style={styles.textContainer} >Valor Intemizado</Text>
                            <Text> {pedido.inputValorDeAvaliaçaoDoImovel} </Text>
                   </View>

                   <Text style={{fontWeight:'bold',marginTop:10,fontSize:13,marginLeft:'35%'}} >Avaliação Terreno</Text>

                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Area Terreno (m²)</Text>
                            <Text> {pedido.inputAreaTerreno} </Text>
                   </View>

                   <View style={styles.container}>
                         <Text style={styles.textContainer} >R$/m²</Text>
                            <Text> {pedido.inputRSAreaTerreno} </Text>
                   </View>

                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Valor de avaliaçao do terreno</Text>
                            <Text> {pedido.inputValorTerreno} </Text>
                   </View>

                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Valor Fração Terreno Residencial</Text>
                            <Text> {pedido.inputParteResidencialTerreno} </Text>
                   </View>

                   <Text style={{fontWeight:'bold',marginTop:10,fontSize:13,marginLeft:'35%'}} >Avaliação Compra e Venda</Text>

                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Area/m²</Text>
                            <Text> {pedido.inputAreaCompra} </Text>
                   </View>

                   <View style={styles.container}>
                         <Text style={styles.textContainer} >R$/m²</Text>
                            <Text> {pedido.inputRSAreaCompra} </Text>
                   </View>

                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Valor de compra</Text>
                            <Text> {pedido.inputValorCompra} </Text>
                   </View>

                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Parte Residencial</Text>
                            <Text> {pedido.inputParteResidencialCompra} </Text>
                   </View>
                   
                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Parte Comercial</Text>
                            <Text> {pedido.inputParteCompra} </Text>
                   </View>

                   </View>


                   <View style={{flex:1,flexDirection:'row',flexWrap:'wrap',alignItems:'center'}}>
        
                     <ScrollView  contentContainerStyle={{height:3000,width:'100%'}} > 

                       <View style={{height:'5%',width:'100%',flexDirection:'row'}}>
                             <View style={{flex:2,alignItems:"center",justifyContent:"center"}}>
                                <Text>Serviços Preliminares</Text>
                             </View>

                             <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
                                       <Text>{pedido.inputServiçosPreliminares}</Text>
                             </View>
                       </View>

                       <View style={{height:'5%',width:'100%',flexDirection:'row'}}>
                             <View style={{flex:2,alignItems:"center",justifyContent:"center"}}>
                                <Text>Infraestrutura</Text>
                             </View>

                             <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
                                       <Text>{pedido.inputServiçosInfraEstrutura}</Text>
                             </View>
                       </View>

                       <View style={{height:'5%',width:'100%',flexDirection:'row'}}>
                             <View style={{flex:2,alignItems:"center",justifyContent:"center"}}>
                                <Text>Supraestrutura</Text>
                             </View>

                             <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
                                       <Text>{pedido.inputServiçosSupraEstrutura}</Text>
                             </View>
                       </View>

                       <View style={{height:'5%',width:'100%',flexDirection:'row'}}>
                             <View style={{flex:2,alignItems:"center",justifyContent:"center"}}>
                                <Text>Paredes e Paineis</Text>
                             </View>

                             <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
                                       <Text>{pedido.inputServiçosParedesePaineis}</Text>
                             </View>
                       </View>

                       <View style={{height:'5%',width:'100%',flexDirection:'row'}}>
                             <View style={{flex:2,alignItems:"center",justifyContent:"center"}}>
                                <Text>Vidros e Plasticos</Text>
                             </View>

                             <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
                                       <Text>{pedido.inputServiçosVidroPlastico}</Text>
                             </View>
                       </View>

                       <View style={{height:'5%',width:'100%',flexDirection:'row'}}>
                             <View style={{flex:2,alignItems:"center",justifyContent:"center"}}>
                                <Text>Coberturas</Text>
                             </View>

                             <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
                                       <Text>{pedido.inputServiçosCoberturas}</Text>
                             </View>
                       </View>

                       <View style={{height:'5%',width:'100%',flexDirection:'row'}}>
                             <View style={{flex:2,alignItems:"center",justifyContent:"center"}}>
                                <Text>Impermeabilizações</Text>
                             </View>

                             <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
                                       <Text>{pedido.inputServiçosImpermeabilizaçoes}</Text>
                             </View>
                       </View>

                       <View style={{height:'5%',width:'100%',flexDirection:'row'}}>
                             <View style={{flex:2,alignItems:"center",justifyContent:"center"}}>
                                <Text>Revestimento Interno </Text>
                             </View>

                             <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
                                       <Text>{pedido.inputServiçosRevestimentosInternos}</Text>
                             </View>
                       </View>

                       <View style={{height:'5%',width:'100%',flexDirection:'row'}}>
                             <View style={{flex:2,alignItems:"center",justifyContent:"center"}}>
                                <Text>Forros</Text>
                             </View>

                             <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
                                       <Text>{pedido.inputServiçosForros}</Text>
                             </View>
                       </View>

                       <View style={{height:'5%',width:'100%',flexDirection:'row'}}>
                             <View style={{flex:2,alignItems:"center",justifyContent:"center"}}>
                                <Text>Revestimento Externo</Text>
                             </View>

                             <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
                                       <Text>{pedido.inputServiçosRevestimentosExternos}</Text>
                             </View>
                       </View>


                       <View style={{height:'5%',width:'100%',flexDirection:'row'}}>
                             <View style={{flex:2,alignItems:"center",justifyContent:"center"}}>
                                <Text>Esquadrias</Text>
                             </View>

                             <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
                                       <Text>{pedido.inputServiçosEsquadrias}</Text>
                             </View>
                       </View>

                       <View style={{height:'5%',width:'100%',flexDirection:'row'}}>
                             <View style={{flex:2,alignItems:"center",justifyContent:"center"}}>
                                <Text>Pintura</Text>
                             </View>

                             <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
                                       <Text>{pedido.inputServiçosPintura}</Text>
                             </View>
                       </View>

                       <View style={{height:'5%',width:'100%',flexDirection:'row'}}>
                             <View style={{flex:2,alignItems:"center",justifyContent:"center"}}>
                                <Text>Pisos</Text>
                             </View>

                             <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
                                       <Text>{pedido.inputServiçosPisos}</Text>
                             </View>
                       </View>

                       <View style={{height:'5%',width:'100%',flexDirection:'row'}}>
                             <View style={{flex:2,alignItems:"center",justifyContent:"center"}}>
                                <Text>Acabamentos</Text>
                             </View>

                             <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
                                       <Text>{pedido.inputServiçosAcabamentos}</Text>
                             </View>
                       </View>

                       <View style={{height:'5%',width:'100%',flexDirection:'row'}}>
                             <View style={{flex:2,alignItems:"center",justifyContent:"center"}}>
                                <Text>Instalações Eletricas</Text>
                             </View>

                             <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
                                       <Text>{pedido.inputServiçosInstalaçoesEletricas}</Text>
                             </View>
                       </View>

                       <View style={{height:'5%',width:'100%',flexDirection:'row'}}>
                             <View style={{flex:2,alignItems:"center",justifyContent:"center"}}>
                                <Text>Instalações Hidraulicas</Text>
                             </View>

                             <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
                                       <Text>{pedido.inputServiçosInstalaçõesHidraulicas}</Text>
                             </View>
                       </View>


                       <View style={{height:'5%',width:'100%',flexDirection:'row'}}>
                             <View style={{flex:2,alignItems:"center",justifyContent:"center"}}>
                                <Text>Intalaçoes de Esgoto</Text>
                             </View>

                             <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
                                       <Text>{pedido.inputServiçosInstalaçoesDeEsgoto}</Text>
                             </View>
                       </View>

                       <View style={{height:'5%',width:'100%',flexDirection:'row'}}>
                             <View style={{flex:2,alignItems:"center",justifyContent:"center"}}>
                                <Text>Louças Metais</Text>
                             </View>

                             <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
                                       <Text>{pedido.inputServiçosLouçasMetais}</Text>
                             </View>
                       </View>


                       <View style={{height:'5%',width:'100%',flexDirection:'row'}}>
                             <View style={{flex:2,alignItems:"center",justifyContent:"center"}}>
                                <Text>Complementos</Text>
                             </View>

                             <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
                                       <Text>{pedido.inputServiçosComplementos}</Text>
                             </View>
                       </View>

                       <View style={{height:'5%',width:'100%',flexDirection:'row'}}>
                             <View style={{flex:2,alignItems:"center",justifyContent:"center"}}>
                                <Text>Outros Seviços</Text>
                             </View>
                            

                             <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
                                       <Text>{pedido.inputServiçosOutrosServiços}</Text>
                             </View>
                       </View>
                       <View style={styles.container}>
                         <Text style={styles.textContainer} >Custo Total</Text>
                            <Text> {pedido.inputServiçosCustoTotal} </Text>
                   </View>
                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Porcentagem</Text>
                            <Text> {pedido.inputServiçosTotalPorcentagem} </Text>
                   </View>
                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Valor unitario R$</Text>
                            <Text> {pedido.inputServiçosUnitarioRS} </Text>
                   </View>

                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Custo Residencial</Text>
                            <Text> {pedido.inputServiçosCustoResidencial} </Text>
                   </View>

                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Responsavel Tecnico</Text>
                            <Text> {pedido.inputServiçosCustoComercial} </Text>
                   </View>

                   </ScrollView>
                   </View>

                   <View style={{flex:1}}>

                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Prazo Previstos para execução</Text>
                            <Text> {pedido.inputCronogramaPrazoPrevisto} </Text>
                   </View>


                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Numero de Parceas previstas</Text>
                            <Text> {pedido.inputCronogramaNumeroDeParcelasPrevistas} </Text>
                   </View>

                   <ScrollView contentContainerStyle={{height:3000,width:'100%'}} >

                   <View style={styles.container}>
                         <Text style={styles.textContainer} ></Text>
                            <Text> </Text>
                   </View>

                   <View style={styles.containerrr}>
                         <Text style={styles.textConntainer} >Parcela 1</Text>
                            <Text> {pedido.inputParcela1} </Text>
                   </View>

                   <View style={styles.containerr}>
                         <Text style={styles.textConntainer} >Parcela 2</Text>
                            <Text> {pedido.inputParcela2} </Text>
                   </View>

                   <View style={styles.containerrr}>
                         <Text style={styles.textConntainer} >Parcela 3</Text>
                            <Text> {pedido.inputParcela3} </Text>
                   </View>

                   <View style={styles.containerr}>
                         <Text style={styles.textConntainer} >Parcela 4</Text>
                            <Text> {pedido.inputParcela4} </Text>
                   </View>

                   <View style={styles.containerrr}>
                         <Text style={styles.textConntainer} >Parcela 5</Text>
                            <Text> {pedido.inputParcela5} </Text>
                   </View>

                   <View style={styles.containerr}>
                         <Text style={styles.textConntainer} >Parcela 6</Text>
                            <Text> {pedido.inputParcela6} </Text>
                   </View>

                   <View style={styles.containerrr}>
                         <Text style={styles.textConntainer} >Parcela 7</Text>
                            <Text> {pedido.inputParcela7} </Text>
                   </View>

                   <View style={styles.containerr}>
                         <Text style={styles.textConntainer} >Parcela 8</Text>
                            <Text> {pedido.inputParcela8} </Text>
                   </View>

                   <View style={styles.containerrr}>
                         <Text style={styles.textConntainer} >Parcela 9</Text>
                            <Text> {pedido.inputParcela9} </Text>
                   </View>

                   <View style={styles.containerr}>
                         <Text style={styles.textConntainer} >Parcela 10</Text>
                            <Text> {pedido.inputParcela10} </Text>
                   </View>

                   <View style={styles.containerrr}>
                         <Text style={styles.textConntainer} >Parcela 11</Text>
                            <Text> {pedido.inputParcela11} </Text>
                   </View>

                   <View style={styles.containerr}>
                         <Text style={styles.textConntainer} >Parcela 12</Text>
                            <Text> {pedido.inputParcela12} </Text>
                   </View>

                   <View style={styles.containerrr}>
                         <Text style={styles.textConntainer} >Parcela 13</Text>
                            <Text> {pedido.inputParcela13} </Text>
                   </View>

                   <View style={styles.containerr}>
                         <Text style={styles.textConntainer} >Parcla 14</Text>
                            <Text> {pedido.inputParcela14} </Text>
                   </View>

                   <View style={styles.containerrr}>
                         <Text style={styles.textConntainer} >parcela 15</Text>
                            <Text> {pedido.inputParcela15} </Text>
                   </View>

                   <View style={styles.containerr}>
                         <Text style={styles.textConntainer} >Parcela 16</Text>
                            <Text> {pedido.inputParela16} </Text>
                   </View>

                   <View style={styles.containerrr}>
                         <Text style={styles.textConntainer} >Parcela 17</Text>
                            <Text> {pedido.inputParcela17} </Text>
                   </View>

                   <View style={styles.containerr}>
                         <Text style={styles.textConntainer} >Parcela 18</Text>
                            <Text> {pedido.inputParcela18} </Text>
                   </View>


                   <View style={styles.containerrr}>
                         <Text style={styles.textConntainer} >Parcela 19</Text>
                            <Text> {pedido.inputParcela19} </Text>
                   </View>

                   <View style={styles.containerr}>
                         <Text style={styles.textConntainer} >Parcela 20</Text>
                            <Text> {pedido.inputParcela20} </Text>
                   </View>

                   <View style={styles.containerrr}>
                         <Text style={styles.textConntainer} >Parcela 21</Text>
                            <Text> {pedido.inputParcela21} </Text>
                   </View>

                   <View style={styles.containerr}>
                         <Text style={styles.textConntainer} >Parcela 22</Text>
                            <Text> {pedido.inputParcela22} </Text>
                   </View>

                   <View style={styles.containerrr}>
                         <Text style={styles.textConntainer} >Parcela 23</Text>
                            <Text> {pedido.inputParcela23} </Text>
                   </View>

                   <View style={styles.containerr}>
                         <Text style={styles.textConntainer} >Parcela 24</Text>
                            <Text> {pedido.inputParcela24} </Text>
                   </View>

                   </ScrollView>


                   </View>


                   <View style={{flex:1,alignItems:'flex-start',justifyContent:'flex-start'}}>
                   <Text style={{fontWeight:'bold',marginTop:10,fontSize:13,marginLeft:'15%'}} >Os Documentos Apresenados estao compativeis entre si</Text>
                   <View style={{flex:1,alignItems:'center',justifyContent:"center"}}>
                         <Text> {pedido.inputConclusaoDocumentos} </Text>
                   </View>

                   <Text style={{fontWeight:'bold',marginTop:10,fontSize:13,marginLeft:'15%'}} >Conclusao Proposta</Text>
                   <View style={{flex:1,alignItems:'center',justifyContent:"center"}}>
                         <Text>{pedido.inputConclusaoProposta}</Text>
                   </View>

                   <Text style={{fontWeight:'bold',marginTop:10,fontSize:13,marginLeft:'15%'}} >Orçamento</Text>
                   <View style={{flex:1,alignItems:'center',justifyContent:"center"}}>
                           <Text>{pedido.inputConclusaoOrçamento}</Text>
                   </View>

                   <Text style={{fontWeight:'bold',marginTop:10,fontSize:13,marginLeft:'15%'}} >Cronograma</Text>
                   <View style={{flex:1,alignItems:'center',justifyContent:"center"}}>
                              <Text> {pedido.inputConclusaoCronograma} </Text>
                   </View>

                   <Text style={{fontWeight:'bold',marginTop:10,fontSize:13,marginLeft:'15%'}} >Garantia</Text>
                   <View style={{flex:1,alignItems:'center',justifyContent:"center"}}>
                         <Text> {pedido.inputConclusaoGarantia} </Text>
                   </View>

                   <Text style={{fontWeight:'bold',marginTop:10,fontSize:13,marginLeft:'15%'}} >total</Text>
                   <View style={{flex:1,alignItems:'center',justifyContent:"center"}}>

                   </View>

                   </View>


                   <View style={{flex:1,flexDirection:'row',flexWrap:'wrap',alignItems:'flex-start',justifyContent:'flex-start'}}>
                     
                               
                     <View style={styles.container}>
                         <Text style={styles.textContainer} >Responsavel Tecnico</Text>
                            <Text> {pedido.inputResponsavelTecnico} </Text>
                   </View>

                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Formação</Text>
                            <Text> {pedido.inputFormaçaoTecnico} </Text>
                   </View>

                   <View style={styles.container}>
                         <Text style={styles.textContainer} >CREA/CAU</Text>
                            <Text> {pedido.inputCreaCau} </Text>
                   </View>

                   <View style={styles.container}>
                         <Text style={styles.textContainer} >CPF</Text>
                            <Text> {pedido.inputCpfMatricula} </Text>
                   </View>

                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Empresa</Text>
                            <Text> {pedido.inputEmpresas} </Text>
                   </View>

                   <View style={styles.container}>
                         <Text style={styles.textContainer} >CNPJ</Text>
                            <Text> {pedido.inputCnpj} </Text>
                   </View>

                   <View style={styles.container}>
                         <Text style={styles.textContainer} >Representante Legal</Text>
                            <Text> {pedido.inputRepresentanteLegal} </Text>
                   </View>

                   <View style={styles.container}>
                         <Text style={styles.textContainer} >CPF</Text>
                            <Text> {pedido.inputCpf} </Text>
                   </View>

          



                   

                   <View style={{ height:'8%',width:'30%',borderBottomWidth:1,borderColor:"black",alignItems:"center",justifyContent:'center'}}>
                          <Text style={styles.textContainer} >Responsavel Tecnico</Text>
                          <Text> {pedido.inputResponsavelTecnico} </Text>
                    </View>

                    <View style={{ height:'8%',width:'30%',borderBottomWidth:1,borderColor:"black",alignItems:"center",justifyContent:'center'}}>
                          <Text style={styles.textContainer} >Representante Legal</Text>
                          <Text> {pedido.inputRepresentanteLegal} </Text>
                    </View>

                    <LaudoAssinado />
                   </View>
   </Swiper>
   );
}