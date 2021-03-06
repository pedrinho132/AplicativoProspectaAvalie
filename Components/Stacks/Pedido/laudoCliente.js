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
    height:'8%',width:'30%',borderWidth:1,borderColor:"black",alignItems:"center",justifyContent:'center'
  },
  textContainer:{
      fontWeight:'700'
  },
  conatinerUp:{
    height:'8%',width:'50%',borderColor:"black",borderWidth:1,alignItems:"center",justifyContent:'center'
  },

  containerFull:{
    height:'8%',width:'100%',borderWidth:1,borderColor:"black",alignItems:"center",justifyContent:'center'
  },

})


export default LaudoCliente = ({route,navigation }) => {
   const [pedido, setPedido ] = useState();
   const [ dados, setDados ] = useState();

   useEffect(()=>{
    auth().onAuthStateChanged(function(user) {
        if (user) {                 
               const userDados = user._user
               const email64 = base64.encode(userDados.email)
               database()
               .ref(`/pedidos/${email64}/laudo`)
               .on('value', snapshot => {
                     
                     setPedido(snapshot.val());
                   });
       }})
   },[])

   const LaudoAssinado = () => {
  
      if(pedido.laudoAssinado) return(
            <Text style={{fontWeight:'bold',fontSize:18,color:'green'}} >Laudo Assinado</Text>
      )
      return null;
   
   
   }




if (!pedido) return null;

  return(
   <Swiper style={{}} showsButtons={true} >
   <View style={{flex:1,opacity:0.3}}>
      <View style={{flex:1,marginHorizontal:15}}>
          <Image style={{height:'70%',width:'50%',borderRadius:50,margin:15}} source={require('../../assets/logo-prospecta-avalie.png')} />
        </View>
        <Text style={{fontWeight:'bold',marginTop:10,fontSize:17}} >Introdu????o/Identifica????o</Text>
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
                      <Text style={styles.textContainer} >Servi??os P??blicos e Comunitarios</Text>
                         <Text> {pedido.inputServi??osPublico} </Text>
                </View>

                <View style={styles.containerFull}>
                      <Text style={styles.textContainer} >Usos Predominantes no Logradouro</Text>
                         <Text> {pedido.inputLogadouro} </Text>
                </View>

                
                <View style={styles.conatinerUp}>
                         <Text style={styles.textContainer} >Padr??es de Edifica????o </Text>
                         <Text> {pedido.inputPadrao} </Text>
                </View>

                <View style={styles.conatinerUp}>
                      <Text style={styles.textContainer} >Via de acesso ao endere??o </Text>
                         <Text> {pedido.inputVia} </Text>
                </View>

                <View style={styles.conatinerUp}>
                      <Text style={styles.textContainer} > Regi??o Contexto Urbano </Text>
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
                 
         

                <View style={{flex:1,opacity:0.3,flexDirection:'row',flexWrap:'wrap',alignItems:'center'}}>
                 <Text style={{fontWeight:'bold',marginTop:10,fontSize:17}} >Caracteriza????o do Im??vel --</Text>
                 <Text style={{fontWeight:'bold',marginTop:10,fontSize:13}} >Edifica????o do Im??vel -- </Text>

                 <View style={styles.container}>
                      <Text style={styles.textContainer} >Implementa????o</Text>
                         <Text> {pedido.inputImplementa??ao} </Text>
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
                      <Text style={styles.textContainer} >Ocupa??ao</Text>
                         <Text> {pedido.inputOcupa??ao} </Text>
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



                <Text style={{fontWeight:'bold',marginTop:10,fontSize:13,marginLeft:'42%'}} >??reas molhadas</Text>
              
                <View style={styles.conatinerUp}>
                      <Text style={styles.textContainer} >Pisos</Text>
                         <Text> {pedido.inputPisos} </Text>
                </View>

                <View style={styles.conatinerUp}>
                      <Text style={styles.textContainer} >Parede Interna</Text>
                         <Text> {pedido.inputParedeInterna} </Text>
                </View>

                <Text style={{fontWeight:'bold',marginTop:10,fontSize:13,marginLeft:'42%'}} >??reas secas</Text>

                <View style={styles.conatinerUp}>
                      <Text style={styles.textContainer} >Pisos</Text>
                         <Text> {pedido.inputPisoSeco} </Text>
                </View>

                <View style={styles.conatinerUp}>
                      <Text style={styles.textContainer} >Idade Estimada</Text>
                         <Text> {pedido.inputIdadeEstimada} </Text>
                </View>
                
                <View style={styles.container}>
                      <Text style={styles.textContainer} >N?? T??rreos</Text>
                         <Text> {pedido.inputNumterreos} </Text>
                </View>

                <View style={styles.container}>
                      <Text style={styles.textContainer} >Qntd Pavimentos</Text>
                         <Text> {pedido.inputPavimento} </Text>
                </View>

                <View style={styles.container}>
                      <Text style={styles.textContainer} >Loca????o no terreno</Text>
                         <Text> {pedido.inputLoca??ao} </Text>
                </View>


                <View style={styles.container}>
                      <Text style={styles.textContainer} >Vista Paron??mica</Text>
                         <Text> {pedido.inputVistaParonamica} </Text>
                </View>


                <View style={styles.container}>
                      <Text style={styles.textContainer} >Orienta????o Solar</Text>
                         <Text> {pedido.inputOrienta??aoSolar} </Text>
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
                      <Text style={styles.textContainer} >Compartimento Arm??rios</Text>
                         <Text> {pedido.inputCompartilhamentoArmario} </Text>
                </View>
               </View>           


              
               <View style={{flex:1,opacity:0.3,flexDirection:'row',flexWrap:'wrap',alignItems:'center'}}>
                        
               <View style={styles.container}>
                      <Text style={styles.textContainer} >Sal??es Lazer</Text>
                         <Text> {pedido.inputSalaoLazer} </Text>
                </View>


                <View style={styles.container}>
                      <Text style={styles.textContainer} >Padr??o de Acabamento</Text>
                         <Text> {pedido.inputPadraoAcabamento} </Text>
                </View>


                <View style={styles.container}>
                      <Text style={styles.textContainer} >Estado de Conserva????o</Text>
                         <Text> {pedido.inputEstadoConserva??ao} </Text>
                </View>

                <Text style={{fontWeight:'bold',marginTop:10,fontSize:13,marginLeft:'30%'}} >Areas de conserva????o averbadas(m??)</Text>
                   
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

                <Text style={{fontWeight:'bold',marginTop:10,fontSize:13,marginLeft:'30%'}} >Areas de conserva????o n??o averbadas(m??)</Text>
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
                      <Text style={styles.textContainer} >Total n??o Averbada</Text>
                         <Text> {pedido.inputTotalNao} </Text>
                </View>

                <Text style={{fontWeight:'bold',marginTop:10,fontSize:13,marginLeft:'30%'}} >Areas de constru??ao Totals(m??)</Text>
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


                <View style={{flex:1,opacity:0.3,flexDirection:'row',flexWrap:'wrap',alignItems:'center'}}>
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
                      <Text style={styles.textContainer} >Area m(??)</Text>
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
                      <Text style={styles.textContainer} >Posi????o</Text>
                         <Text> {pedido.inputPosi??aoTerreno} </Text>
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
                      <Text style={styles.textContainer} >Inclina??ao</Text>
                         <Text> {pedido.inputInclina??aoTerreno} </Text>
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
                      <Text style={styles.textContainer} >Voca??ao Principal</Text>
                         <Text> {pedido.inputVoca??aoPrincipalTerreno} </Text>
                </View>

                <View style={styles.conatinerUp}>
                      <Text style={styles.textContainer} >Lados do Terreno</Text>
                         <Text> {pedido.inputLadosDoTerreno} </Text>
                </View>
                </View>



                <View style={{flex:1,opacity:0.3,flexDirection:'row',flexWrap:'wrap',alignItems:'center'}}>

                <Text style={{fontWeight:'bold',marginTop:10,fontSize:13,marginLeft:'35%'}} >Empreendimento Condominio</Text>

                <View style={styles.container}>
                      <Text style={styles.textContainer} >Numero de Prdios</Text>
                         <Text> {pedido.inputNumeroPredio} </Text>
                </View>

                <View style={styles.container}>
                      <Text style={styles.textContainer} >Total de Unidades</Text>
                         <Text> {pedido.inputTotalDeUnidades} </Text>
                </View>

                <View style={styles.conatinerUp}>
                      <Text style={styles.textContainer} >Ocupa??ao do Terreno</Text>
                         <Text> {pedido.inputOcupa??aoDoTerreno} </Text>
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
                      <Text style={styles.textContainer} >Estado de Conserva????o</Text>
                         <Text> {pedido.inputEstadoConserva??aoEmpreendimento} </Text>
                </View>
                 
                <Text style={{fontWeight:'bold',marginTop:10,fontSize:13,marginLeft:'35%'}} >Terreno do Empreendimento</Text>
                        
                <View style={styles.container}>
                      <Text style={styles.textContainer} >Area (m??)</Text>
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
                      <Text style={styles.textContainer} >Posi????o</Text>
                         <Text> {pedido.inputPosi??aoEmpreedimento} </Text>
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
                      <Text style={styles.textContainer} >Vicios de Constru????es</Text>
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
                      <Text style={styles.textContainer} >Condi??oes Habitalidade</Text>
                         <Text> {pedido.inputCondi??oesDeHabilidade} </Text>
                </View>

               
                </View>

                <View style={{flex:1,opacity:0.3,flexDirection:'row',flexWrap:'wrap',alignItems:'center'}}>

                <Text style={{fontWeight:'bold',marginTop:10,fontSize:13,marginLeft:'35%'}} >Diagnostico Resumido Mercado</Text>

                <View style={styles.container}>
                      <Text style={styles.textContainer} >Perfomace Percebida</Text>
                         <Text> {pedido.inputPerfomacePercebida} </Text>
                </View>

                <View style={styles.container}>
                      <Text style={styles.textContainer} >Nivel de Ofertas</Text>
                         <Text> {pedido.inputOfertas} </Text>
                </View>

                <View style={styles.container}>
                      <Text style={styles.textContainer} >L??quidez Inferida</Text>
                         <Text> {pedido.inputLiquidezInferida} </Text>
                </View>

                <Text style={{fontWeight:'bold',marginTop:10,fontSize:13,marginLeft:'35%'}} >Especifica????es</Text>

                <View style={{ height: 20 , width:'40%'}}>
                      
                </View>

                <View style={styles.container}>
                      <Text style={styles.textContainer} >Metodo</Text>
                         <Text> {pedido.inputMetodo} </Text>
                </View>

                <View style={styles.container}>
                      <Text style={styles.textContainer} >Grau de Fundamenta??ao</Text>
                         <Text> {pedido.inputGrauFundamenta??ao} </Text>
                </View>

                <View style={styles.container}>
                      <Text style={styles.textContainer} >Grau de Precis??o</Text>
                         <Text> {pedido.inputGrauPrecisao} </Text>
                </View>

                <Text style={{fontWeight:'bold',marginTop:10,fontSize:13,marginLeft:'35%'}} >Resultados</Text>

                <View style={{ height: 20 , width:'40%'}}>
                      
                </View>

                <View style={styles.container}>
                      <Text style={styles.textContainer} >Situa??ao Descrita</Text>
                         <Text> {pedido.inputSitua??ao} </Text>
                </View>

                <View style={styles.container}>
                      <Text style={styles.textContainer} >Tipo de Valor</Text>
                         <Text> {pedido.inputTipoValor} </Text>
                </View>

                <View style={styles.container}>
                      <Text style={styles.textContainer} >Data da Avalia????o</Text>
                         <Text> {pedido.inputDataReferencia} </Text>
                </View>

                <Text style={{fontWeight:'bold',marginTop:10,fontSize:13,marginLeft:'35%'}} >Avalia??ao Global</Text>

                <View style={{ height: 20 , width:'40%'}}>
                      
                </View>
                          
                <View style={styles.container}>
                      <Text style={styles.textContainer} >Area(m??)</Text>
                         <Text> {pedido.inputAreaMcal} </Text>
                </View>

                <View style={styles.container}>
                      <Text style={styles.textContainer} >R$/m(??)</Text>
                         <Text> {pedido.inputRSMetro} </Text>
                </View>

                <View style={styles.container}>
                      <Text style={styles.textContainer} >Valor Global</Text>
                         <Text> 000 </Text>
                </View>

                </View>

                <View style={{flex:1,flexDirection:'row',flexWrap:'wrap',alignItems:'center'}}>
                       <Text style={{fontWeight:'bold',marginTop:10,fontSize:13,marginLeft:'35%'}} >Signat??rios</Text>

                       <View style={{ height: 20 , width:'40%'}}>
                           
                     </View>
                                 
                       <View style={styles.container}>
                           <Text style={styles.textContainer} >Responsavel Tecnico</Text>
                              <Text> {pedido.inputResponsavelTecnico} </Text>
                     </View>

                     <View style={styles.container}>
                           <Text style={styles.textContainer} >Forma????o</Text>
                              <Text> {pedido.inputForma??aoTecnico} </Text>
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
                              <Text> {pedido.inputNomeEmpresa} </Text>
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