import React, { Component,useEffect,useState} from 'react';
import {
  
  Text,
  View,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableHighlight
} from 'react-native';

import database from '@react-native-firebase/database';
import   '@react-native-firebase/app';
import base64 from 'react-native-base64';



const styles = StyleSheet.create({
    input:{
       height:'0.7%',width:'60%',borderBottomWidth:1,borderColor:'black',alignItems:"center",justifyContent:"center"
    }
  })
 

export default GerarLaudo = ({route,navigation }) => {
    const [laudo,setLaudo] = useState(null);
    const [inputCep, setCep ] = useState();
    const [pedido, setPedido ] = useState();
    const [inputBairro, setBairro ] = useState();
    const [inputCategoria, setCategoria ] = useState();
    const [inputUf, setUf ] = useState();
    const [inputMunicipio, setMunicipio] = useState();
    const [inputDlc, setDlc ] = useState();
    const [inputObjetivo, setObjetivo ] = useState();
    const [inputFinalidade, setFinalidade ] = useState();
    const [inputInteressado, setInteressado ] = useState();
    const [inputRessalvas, setRessalvas ] = useState();
    const [inputInfra, setInfra ] = useState();
    const [inputServiçosPublicos, setServiçosPublicos ] = useState();
    const [inputPadrao, setPadrao ] = useState();
    const [inputLogadouro, setLogadouro ] = useState();
    const [inputVia, setVia ] = useState();
    const [inputRegiaoUrbano, setRegiaoUrbano] = useState();
    const [inputIv, setIv ] = useState();
    const [inputId, setId ] = useState();
    const [inputImplementaçao, setImplementaçao ] = useState();
    const [inputVistorias, setVistorias ] = useState();
    const [inputData, setData ] = useState();
    const [inputOcupaçao, setOcupaçao ] = useState();
    const [inputUso, setUso ] = useState();
    const [inputTeto, setTeto ] = useState();
    const [inputCobertura, setCobertura ] = useState();
    const [inputParedeExterna, setParedeExterna ] = useState();
    const [inputFachada, setFachada ] = useState();
    const [inputDemaisFachadas, setDemaisFachadas ] = useState();
    const [inputEsquadrisFachada, setEsquadrisFachada ] = useState();
    const [inputPisos, setPisos ] = useState();
    const [inputPisoSeco, setPisoSeco ] = useState();
    const [inputParedeInterna, setparedeInterna ] = useState();
    const [inputIdadeEstimada, setIdadeEstimada] = useState();
    const [inputNumterreos, setNumTerreos ] = useState();
    const [inputPavimento, setPavimento ] = useState();
    const [inputDemaisEsquadris, setDemaisEsquadris ] = useState();
    const [inputLocaçao, setLocaçao ] = useState();
    const [inputVistaParonamica, setVistaParonamica ] = useState();
    const [inputOrientaçaoSolar, setOrientaçaoSolar ] = useState();
    const [inputVagaCoberta, setVagaCoberta ] = useState();
    const [inputVagaDescoberta, setVagaDescoberta ] = useState();
    const [inputTotal, setTotal ] = useState();
    const [inputTaxadeCondo, setTaxadeCondo ] = useState();
    const [inputCompartilhamentoArmario, setCompartilhamentoArmario ] = useState();
    const [inputSalaoLazer, setSalaoLazer ] = useState();
    const [inputPadraoAcabamento, setPadraoAcabamento ] = useState();
    const [inputPrivativaUnidade, setPrivativaUnidade] = useState();
    const [inputPrivativaDescontruida, setPrivativaDescontruida ] = useState();
    const [inputComuns, setComuns ] = useState();
    const [inputTotalAverbada, setTotalAverbada ] = useState();
    const [inputEstadoConservaçao, setEstadodeConservaçao ] = useState();
    const [inputPrivativaUnidadeNao, setPrivativaUnidadeNao ] = useState();
    const [inputPrivativaDescontinuaNao, setPrivativaDescontinuaNao ] = useState();
    const [inputComunsNao, setComunsNao ] = useState();
    const [inputTotalNao, setTotalNao ] = useState();
    const [inputPrivativaUnidadeTotales, setPrivativaUnidadeTotales  ] = useState();
    const [inputPrivativaDescontinuaTotales, setPrivativaDescontinuaTotales ] = useState();
    const [inputComunsTotales, setComunsTotales  ] = useState();
    const [inputTotalConstruidaTotales, setTotalConstruidaTotales  ] = useState();


    const [ inputDivisaoInterna, setDivisaoInterna ] = useState();
    const [ inputEquipamentosDaUnidade, setEquipamentosDaUnidade ] = useState();
 

    const [ inputAreaQuadradaTerreno, setAreaQuadrada ] = useState();
    const [ inputTestadaTerreno, setTestadaTerreno ] = useState();
    const [ inputProfundidadeTerreno, setProfundidadeTerreno ] = useState();
    const [ inputPosiçaoTerreno, setPosiçaoTerreno ] = useState();
    const [ inputCotaTerreno, setCotaTerreno ] = useState();
    const [ inputFormatoAproximadoTerreno, setFormatoAproximado ] = useState();
    const [ inputInclinaçaoTerreno, setInclinaçaoTerreno ] = useState();
    const [ inputCercamentoTerreno, setCercamentoTerreno ] = useState();
    const [ inputCercamentoTerrenoFrente, setCercamentoTerrenoFrente ] = useState();
    const [ inputCercamentoLaterais, setCercamentoLateralTerreno ] = useState();
    const [ inputVocaçaoPrincipalTerreno, setPrincipalTerreno ] = useState();
    const [ inputLadosDoTerreno, setLadosTerreno ] = useState();

    const [ inputNumeroPredio, setNumeroPredio ] = useState();
    const [ inputTotalDeUnidades, setTotalDeUnidades ] = useState();
    const [ inputOcupaçaoDoTerreno, setOcupaçaoDoTerreno ] = useState();
    const [ inputPadraoEmpreendimento, setPadraoEmpreedimento ] = useState();
    const [ inputInfraEstrutura, setInfraEstruturaEmpreedimento ] = useState();
    const [ inputEstadoConservaçaoEmpreendimento, setEstadodeConservaçaoEmpreendimento ] = useState();

    const [ inputAreaQuadradaEmpreendimento, setAreaQuadradaEmpreeedimento ] = useState();
    const [ inputTestadaEmpreedimento, setTestadaEmpreedimento ] = useState();
    const [ inputProfundidadeEquivalente, setProfundidadeEmpreedimento ] = useState();
    const [ inputPosiçaoEmpreedimento, setPosiçaoEmpreedimento ] = useState();
    const [ inputCotaEmpreedimento, setCotaEmpreedimento] = useState();
    const [ inputCercamentoEmpreedimento, setCercamentoEmpreedimento ] = useState();
    const [ inputCercamentoFrenteEmpreedimento, setCercamentoFrenteEmpreedimento ] = useState();
    const [ inputCercamentoLateralEmpreedimento, setCercamentoLateralEmpreedimento ] = useState();
    const [ inputControleDeAcessoEmpreedimento, setControleDeAcessoEmpreedimento ] = useState();
    const [ inputVicios, setVicios ] = useState();
    const [ inputOutrosDanos, setDanos ] = useState();
    const [ inputEstabilidade, setEstabilidade ] = useState();
    const [ inputCondiçoesDeHabilidade, setCondiçoesDeHabilidade ] = useState();

    const [ inputPerfomacePercebida, setPerfomacePercebida ] = useState();
    const [ inputLiquidezInferida, setLiquidezInferida ] = useState();
    const [ inputOfertas, setOfertas ] = useState();
    const [ inputMetodo, setMetodo ] = useState();
    const [ inputGrauFundamentaçao, setGrauFundamentaçao ] = useState();
    const [ inputGrauPrecisao, setGrauPrecisao ] = useState();
    const [ inputSituaçao, setSituaçao ] = useState();
    const [ inputTipoValor, setTipoValor ] = useState();
    const [ inputDataReferencia, setDataReferencia ] = useState();
    const [ inputAreaMcal, setAreaMCal ] = useState();
    const [ inputRSMetro, setRsMetro ] = useState();
    const [ inputCnpj, setCnpj ] = useState();
    const [ inputNomeEmpresa, setNomeEmpresa ] = useState();
  


    

  const itemId = route.params.itemId
  const tipoLaudo = route.params.tipoLaudo
  const emailCliente = route.params.emailCliente
  const emailCliente64 = base64.encode(emailCliente)

useEffect(()=> {
  database()
      .ref(`/pedidos/${emailCliente64}`)
      .on('value', snapshot => {
              console.log(snapshot.val())
            setPedido(snapshot.val());
          });
},[console.log(pedido)]);

textInputBairro = (texto) => {
    setBairro(texto)
}

textInputCep = (texto) => {
  setCep(texto)
}

textInputUf = (texto) => {
    setUf(texto)
}

textInputBairro = (texto) => {
    setBairro(texto)
}

textInputCategoria = (texto) => {
    setCategoria(texto)
}

textInputMunicipio = (texto) => {
    setMunicipio(texto)
}

textInputDlc = (texto) => {
    setDlc(texto)
}


textInputFinalidade = (texto) => {
    setFinalidade(texto)
}


textInputObjetivo = (texto) => {
  setObjetivo(texto)
}


textInputInteressado = (texto) => {
  setInteressado(texto)
}

textInputRessalvas = (texto) => {
  setRessalvas(texto)
}

textInputInfraEstrutura = (texto) => {
  setInfra(texto)
}

textInputServiçosPublicos = (texto) => {
  setServiçosPublicos(texto)
}

textInputPadrao = (texto) => {
  setPadrao(texto)
}

textInputLogadouro = (texto) => {
  setLogadouro(texto)
}

textInputVia = (texto) => {
  setVia(texto)
}

textInputRegiaoUrbano = (texto) => {
  setRegiaoUrbano(texto)
}

textInputIv = (texto) => {
  setIv(texto)
}

textInputId = (texto) => {
  setId(texto)
}

textInputImplementaçao = (texto) => {
  setImplementaçao(texto)
}

textInputVistorias = (texto) => {
  setVistorias(texto)
}

textInputData = (texto) => {
  setData(texto)
}

textInputOcupaçao = (texto) => {
  setOcupaçao(texto)
}

textInputUso = (texto) => {
  setUso(texto)
}

textInputTeto = (texto) => {
  setTeto(texto)
}

textInputCobertura = (texto) => {
  setCobertura(texto)
}

textInputParedeExterna = (texto) => {
  setParedeExterna(texto)
}

textInputFachada = (texto) => {
  setFachada(texto)
}

textInputDemaisFachadas = (texto) => {
  setDemaisFachadas(texto)
}

textInputFachadaPrincipal = (texto) => {
  setFachada(texto)
}

textInputEsquadriasPrincipal = (texto) => {
  setEsquadrisFachada(texto)
}

textInputPisos = (texto) => {
  setPisos(texto)
}

textInputPisosSeco = (texto) => {
  setPisoSeco(texto)
}
textInputParedeInterna = (texto) => {
  setparedeInterna(texto)
}

textInputIdadeEstimada = (texto) => {
  setIdadeEstimada(texto)
}

textInputNumeroTerreos = (texto) => {
  setNumTerreos(texto)
}

textInputPavimento = (texto) => {
  setPavimento(texto)
}

textInputTeto = (texto) => {
  setTeto(texto)
}

textInputUso = (texto) => {
  setUso(texto)
}

textInputDemaisEsquadrias = (texto) => {
  setDemaisEsquadris(texto)
}

textInputLocaçao = (texto) => {
  setLocaçao(texto)
}


textInputVistaParonamica = (texto) => {
  setVistaParonamica(texto)
}


textInputOrientaçaoSolar = (texto) => {
  setOrientaçaoSolar(texto)
}

textInputVagaCoberta = (texto) => {
  setVagaCoberta(texto)
}

textInputVagaDescoberta = (texto) => {
  setVagaDescoberta(texto)
}

textInputTotalGaragem = (texto) => {
  setTotal(texto)
}

textInputTaxaCondominio = (texto) => {
  setTaxadeCondo(texto)
}


textInputCompartilhamentoArmario = (texto) => {
  setCompartilhamentoArmario(texto)
}


textInputSalaoLazer = (texto) => {
  setSalaoLazer(texto)
}


textInputPadraoAcabamento = (texto) => {
  setPadraoAcabamento(texto)
}

textInputEstadodeConservaçao = (texto) => {
  setEstadodeConservaçao(texto)
}

textInputPrivativaUnidade = (texto) => {
  setPrivativaUnidade(texto)
}

textInputPrivativaDescontruida = (texto) => {
  setPrivativaDescontruida(texto)
}

textInputComuns = (texto) => {
  setComuns(texto)
}

textInputTotalAverbada = (texto) => {
  setTotalAverbada(texto)
}



textInputPrivativaUnidadeNao = (texto) => {
  setPrivativaUnidadeNao(texto)
}

textInputPrivativaDescontruidaNao = (texto) => {
  setPrivativaDescontinuaNao(texto)
}

textInputComunsNao = (texto) => {
  setComunsNao(texto)
}

textInputTotalAverbadaNao = (texto) => {
  setTotalNao(texto)
}

textInputPrivativaUnidadeTotales = (texto) => {
  setPrivativaUnidadeTotales(texto)
}

textInputPrivativaDescontinuaTotales = (texto) => {
  setPrivativaDescontinuaTotales(texto)
}

textInputComunsTotales = (texto) => {
  setComunsTotales(texto)
}

textInputTotalConstruidaTotales = (texto) => {
  setTotalConstruidaTotales(texto)
}

textInputDivisaoInterna = (texto) => {
  setDivisaoInterna(texto)
}

textInputEquipamentosDaUnidade = (texto) => {
  setEquipamentosDaUnidade(texto)
}

textInputAreaQuadradaTerreno = (texto) => {
  setAreaQuadrada(texto)
}

textInputTestadaTerreno = (texto) => {
  setTestadaTerreno(texto)
}

textInputProfundidadeTrreno = (texto) => {
  setProfundidadeTerreno(texto)
}

textInputPosiçaoTerreno = (texto) => {
  setPosiçaoTerreno(texto)
}

textInputCotaTerreno = (texto) => {
  setCotaTerreno(texto)
}

textInputFormatoAproximadoTerreno = (texto) => {
  setFormatoAproximado(texto)
}

textInputInclinaçaoTerreno = (texto) => {
  setInclinaçaoTerreno(texto)
}

textInputCercamentoTerreno = (texto) => {
  setCercamentoTerreno(texto)
}

textInputCercamentoTerrenoFrente = (texto) => {
  setCercamentoTerrenoFrente(texto)
}

textInputCercamentoLateralTerreno = (texto) => {
  setCercamentoLateralTerreno(texto)
}

textInputVocaçaoPrincipalTerreno = (texto) => {
  setPrincipalTerreno(texto)
}

textInputLadosDoTerreno = (texto) => {
  setLadosTerreno(texto)
}

textInputNumeroPredio = (texto) => {
  setNumeroPredio(texto)
}

textInputTotalDeUnidades = (texto) => {
  setTotalDeUnidades(texto)
}

textInputOcupaçaoDoTerreno = (texto) => {
  setOcupaçaoDoTerreno(texto)
}

textInputPadraoEmpreedimento = (texto) => {
  setPadraoEmpreedimento(texto)
}

textInputInfraEstruturaEmpreendimento = (texto) => {
  setInfraEstruturaEmpreedimento(texto)
}

textInputEstadodeConservaçaoEmpreendimento = (texto) => {
  setEstadodeConservaçaoEmpreendimento(texto)
}

textInputAreaQuadradaEmpreedimento = (texto) => {
  setAreaQuadradaEmpreeedimento(texto)
}

textInputTestadaEmpreedimento = (texto) => {
  setTestadaEmpreedimento(texto)
}

textInputProfundidadeEmpreeedimento = (texto) => {
  setProfundidadeEmpreedimento(texto)
}

textInputPosiçaoEmpreedimento = (texto) => {
  setPosiçaoEmpreedimento(texto)
}

textInputCotaEmpreedimento = (texto) => {
  setCotaEmpreedimento(texto)
}

textInputCercamentoEmpreedimento = (texto) => {
  setCercamentoEmpreedimento(texto)
}

textInputCercamentoFrenteEmpreedimento = (texto) => {
  setCercamentoFrenteEmpreedimento(texto)
}

textInputCercamentoLateralEmpreendimento = (texto) => {
  setCercamentoLateralEmpreedimento(texto)
}

textInputControleDeAcessoEmpreedimento = (texto) => {
  setControleDeAcessoEmpreedimento(texto)
}

textInputVicios = (texto) => {
  setVicios(texto)
}

textInputOutrosDanos = (texto) => {
  setDanos(texto)
}

textInputEstabilidade = (texto) => {
  setEstabilidade(texto)
}

textInputCondiçoesDeHabilidade = (texto) => {
  setCondiçoesDeHabilidade(texto)
}

textInputPerfomacePercebida = (texto) => {
  setPerfomacePercebida(texto)
}

textInputOfertas = (texto) => {
  setOfertas(texto)
}

textInputLiquidezInferida = (texto) => {
  setLiquidezInferida(texto)
}

textInputMetodo = (texto) => {
  setMetodo(texto)
}

textInputGrauPrecisao = (texto) => {
  setGrauPrecisao(texto)
}

textInputGrauFundamentaçao = (texto) => {
  setGrauFundamentaçao(texto)
}

textInputSituaçao = (texto) => {
  setSituaçao(texto)
}

textInputTipoValor = (texto) => {
  setTipoValor(texto)
}

textInputDataReferencia = (texto) => {
  setDataReferencia(texto)
}

textInputAreaMCal = (texto) => {
  setAreaMCal(texto)
}

textInputRsMetro = (texto) => {
  setRsMetro(texto)
}

textInputCnpj = (texto) => {
  setCnpj(texto)
}

textInputNomeEmpresa = (texto) => {
  setNomeEmpresa(texto)
}

function gerarPaginaUm () {
  database()
  .ref(`pedidos/${emailCliente64}/laudo`)
  .set({ 
    idPedido:itemId,
    tipo:`${tipoLaudo}`,
    inputCep,
   inputBairro,
   inputCategoria, 
    inputUf,
   inputMunicipio,
   inputDlc, 
   inputObjetivo,
   inputFinalidade,
    inputInteressado,
    inputRessalvas, 
    inputInfra,
    inputServiçosPublicos, 
    inputPadrao, 
    inputLogadouro, 
    inputVia, 
    inputRegiaoUrbano,
    inputIv, 
    inputId, 
    inputImplementaçao, 
    inputVistorias, 
    inputData, 
    inputOcupaçao, 
    inputUso, 
    inputTeto, 
    inputCobertura, 
    inputParedeExterna, 
    inputFachada, 
    inputDemaisFachadas, 
    inputEsquadrisFachada, 
    inputPisos, 
    inputPisoSeco, 
    inputParedeInterna, 
    inputIdadeEstimada, 
    inputNumterreos, 
    inputPavimento, 
    inputDemaisEsquadris, 
    inputLocaçao, 
    inputVistaParonamica, 
    inputOrientaçaoSolar, 
    inputVagaCoberta, 
    inputVagaDescoberta, 
    inputTotal, 
    inputTaxadeCondo, 
    inputCompartilhamentoArmario, 
    inputSalaoLazer, 
    inputPadraoAcabamento, 
    inputPrivativaUnidade, 
    inputPrivativaDescontruida, 
    inputComuns, 
    inputTotalAverbada, 
    inputEstadoConservaçao,
    inputPrivativaUnidadeNao, 
    inputPrivativaDescontinuaNao, 
    inputComunsNao, 
    inputTotalNao, 
    inputPrivativaUnidadeTotales, 
    inputPrivativaDescontinuaTotales, 
    inputComunsTotales, 
    inputTotalConstruidaTotales, 
    inputDivisaoInterna,
    inputEquipamentosDaUnidade,
    inputAreaQuadradaTerreno,
    inputTestadaTerreno,
    inputProfundidadeTerreno,
    inputPosiçaoTerreno,
    inputCotaTerreno,
    inputFormatoAproximadoTerreno,
    inputInclinaçaoTerreno,
    inputCercamentoTerreno,
    inputCercamentoTerrenoFrente,
    inputCercamentoLaterais,
    inputVocaçaoPrincipalTerreno,
    inputLadosDoTerreno,
    inputNumeroPredio,
    inputTotalDeUnidades,
    inputOcupaçaoDoTerreno,
    inputPadraoEmpreendimento,
    inputInfraEstrutura,
    inputEstadoConservaçaoEmpreendimento,
     inputAreaQuadradaEmpreendimento,
     inputTestadaEmpreedimento,
     inputProfundidadeEquivalente, 
     inputPosiçaoEmpreedimento,
     inputCotaEmpreedimento,
     inputCercamentoEmpreedimento, 
     inputCercamentoFrenteEmpreedimento, 
     inputCercamentoLateralEmpreedimento, 
     inputControleDeAcessoEmpreedimento, 
     inputVicios,
     inputOutrosDanos,
     inputEstabilidade,
     inputCondiçoesDeHabilidade,
     inputPerfomacePercebida, 
     inputLiquidezInferida, 
     inputOfertas,
     inputMetodo,
     inputGrauFundamentaçao, 
     inputGrauPrecisao, 
     inputSituaçao,
     inputTipoValor, 
     inputDataReferencia, 
     inputAreaMcal, 
     inputRSMetro, 
     inputCnpj, 
     inputNomeEmpresa,
     inputResponsavelTecnico:null,
     inputFormaçaoTecnico:null,
     inputCreaCau:null,
     inputCpfAvaliador:null,
     inputRepresentanteLegal:null
 
 
   }).then(()=> navigation.navigate('PerfilProfissional'))
}

if (!pedido) return null;

  return(
     <View style={{flex:1}}>
       <ScrollView contentContainerStyle={{ height:8000,width:"100%" }} >
         <Text style={{fontWeight:'bold',marginTop:10,fontSize:17}} >Introdução/Identificação</Text>
            <TextInput value={inputBairro} placeholderTextColor='#adcbbc' onChangeText={texto => textInputBairro(texto)}  style={styles.input} placeholder='Bairro'/>
            <TextInput value={inputCategoria} placeholderTextColor='#adcbbc' onChangeText={texto => textInputCategoria(texto)} style={styles.input} placeholder='Categoria'/>
            <TextInput value={inputUf} placeholderTextColor='#adcbbc' onChangeText={texto => textInputUf(texto)} style={styles.input} placeholder='UF'/>
            <TextInput value={inputMunicipio} placeholderTextColor='#adcbbc' onChangeText={texto => textInputMunicipio(texto)} style={styles.input} placeholder='Municipio do Imovel'/>
            <TextInput value={inputCep} placeholderTextColor='#adcbbc' onChangeText={texto => textInputCep(texto)} style={styles.input} placeholder='Cep'/>
            <TextInput value={inputDlc} placeholderTextColor='#adcbbc' onChangeText={texto => textInputDlc(texto)} style={styles.input} placeholder='Distito/Localidade/Cidade'/>
            <TextInput value={inputFinalidade} placeholderTextColor='#adcbbc' onChangeText={texto => textInputFinalidade(texto)} style={styles.input} placeholder='Finalidade'/>
            <TextInput value={inputObjetivo} placeholderTextColor='#adcbbc' onChangeText={texto => textInputObjetivo(texto)} style={styles.input} placeholder='Objetivo'/>
            <TextInput value={inputInteressado} placeholderTextColor='#adcbbc' onChangeText={texto => textInputInteressado(texto)} style={styles.input} placeholder='Interessado'/>
            <TextInput value={inputRessalvas} placeholderTextColor='#adcbbc' onChangeText={texto => textInputRessalvas(texto)} style={styles.input} placeholder='Presupostos, Ressalvas e Fatores Limitantes'/>
    
    
        <Text style={{fontWeight:'bold',marginTop:10,fontSize:17}} >Caracteristicas da região</Text>
            <TextInput value={inputInfra} placeholderTextColor='#adcbbc' onChangeText={texto => textInputInfraEstrutura(texto)}  style={styles.input} placeholder='Infra-Estrutura Urbana'/>
            <TextInput value={inputServiçosPublicos} placeholderTextColor='#adcbbc' onChangeText={texto => textInputServiçosPublicos(texto)}  style={styles.input} placeholder='Serviços publicos e comunitarios'/>
            <TextInput value={inputPadrao} placeholderTextColor='#adcbbc' onChangeText={texto => textInputPadrao(texto)}  style={styles.input} placeholder='Padrão das Edificaçôes na Regiao'/>
            <TextInput value={inputLogadouro} placeholderTextColor='#adcbbc' onChangeText={texto => textInputLogadouro(texto)}  style={styles.input} placeholder='Usos predominantes no Logadouro'/>
            <TextInput value={inputVia} placeholderTextColor='#adcbbc' onChangeText={texto => textInputVia(texto)}  style={styles.input} placeholder='Via de acesso ao endereço'/>
            <TextInput value={inputRegiaoUrbano} placeholderTextColor='#adcbbc' onChangeText={texto => textInputRegiaoUrbano(texto)}  style={styles.input} placeholder='Região do contexto urbano'/>
            <TextInput value={inputIv} placeholderTextColor='#adcbbc' onChangeText={texto => textInputIv(texto)}  style={styles.input} placeholder='Influencias Valorizantes'/>
            <TextInput value={inputId} placeholderTextColor='#adcbbc' onChangeText={texto => textInputId(texto)}  style={styles.input} placeholder='Influencias Desvalorizante'/>
    
    
         <Text style={{fontWeight:'bold',marginTop:10,fontSize:17}} >Caracteristicas do Imovel</Text>
         <TextInput value={inputImplementaçao} placeholderTextColor='#adcbbc' onChangeText={texto => textInputImplementaçao(texto)}  style={styles.input} placeholder='Implementação/Iserção'/>
         <TextInput value={inputVistorias} placeholderTextColor='#adcbbc' onChangeText={texto => textInputVistorias(texto)}  style={styles.input} placeholder='Vistoria'/>
         <TextInput value={inputData} placeholderTextColor='#adcbbc' onChangeText={texto => textInputData(texto)}  style={styles.input} placeholder='Data da vistoria'/>
         <TextInput value={inputOcupaçao} placeholderTextColor='#adcbbc' onChangeText={texto => textInputOcupaçao(texto)}  style={styles.input} placeholder='Ocupação'/>
         <TextInput value={inputUso} placeholderTextColor='#adcbbc' onChangeText={texto => textInputUso(texto)}  style={styles.input} placeholder='Uso'/>
         <TextInput value={inputTeto} placeholderTextColor='#adcbbc' onChangeText={texto => textInputTeto(texto)}  style={styles.input} placeholder='Teto'/>
         <TextInput value={inputCobertura} placeholderTextColor='#adcbbc' onChangeText={texto => textInputCobertura(texto)}  style={styles.input} placeholder='Cobertura'/>
         <TextInput value={inputParedeExterna} placeholderTextColor='#adcbbc' onChangeText={texto => textInputParedeExterna(texto)}  style={styles.input} placeholder='Paredes Externas'/>
         <TextInput value={inputFachada} placeholderTextColor='#adcbbc' onChangeText={texto => textInputFachadaPrincipal(texto)}  style={styles.input} placeholder='Fachada Principal'/>
         <TextInput value={inputDemaisFachadas} placeholderTextColor='#adcbbc' onChangeText={texto => textInputDemaisFachadas(texto)}  style={styles.input} placeholder='Demais fachadas'/>
         <TextInput value={inputEsquadrisFachada} placeholderTextColor='#adcbbc' onChangeText={texto => textInputEsquadriasPrincipal(texto)}  style={styles.input} placeholder='Esquadrias fachada Principal'/>
         <TextInput value={inputDemaisEsquadris} placeholderTextColor='#adcbbc' onChangeText={texto => textInputDemaisEsquadrias(texto)}  style={styles.input} placeholder='Demais Esquadrias'/>
      
      
         <Text style={{fontWeight:'bold'}} >Áreas Molhadas</Text>
         <TextInput value={inputPisos} placeholderTextColor='#adcbbc' onChangeText={texto => textInputPisos(texto)}  style={styles.input} placeholder='Pisos'/>
         <TextInput value={inputParedeInterna} placeholderTextColor='#adcbbc' onChangeText={texto => textInputParedeInterna(texto)}  style={styles.input} placeholder='Parede Internas'/>
     
         <Text style={{fontWeight:'bold'}} >Áreas Secas</Text>
         <TextInput value={inputPisoSeco} placeholderTextColor='#adcbbc' onChangeText={texto => textInputPisosSeco(texto)}  style={styles.input} placeholder='Pisos'/>
   
   
         <Text style={{fontWeight:'bold'}} >Demais Informaçoes</Text>
         <TextInput value={inputIdadeEstimada} placeholderTextColor='#adcbbc' onChangeText={texto => textInputIdadeEstimada(texto)}  style={styles.input} placeholder='Idade Estimada'/>
         <TextInput value={inputNumterreos} placeholderTextColor='#adcbbc' onChangeText={texto => textInputNumeroTerreos(texto)}  style={styles.input} placeholder='Numero de Térreos'/>
         <TextInput value={inputPavimento} placeholderTextColor='#adcbbc' onChangeText={texto => textInputPavimento(texto)}  style={styles.input} placeholder='Qnt pavimento da unidade'/>
         <TextInput value={inputLocaçao} placeholderTextColor='#adcbbc' onChangeText={texto => textInputLocaçao(texto)}  style={styles.input} placeholder='Locação do terreno'/>
         <TextInput value={inputVistaParonamica} placeholderTextColor='#adcbbc' onChangeText={texto => textInputVistaParonamica(texto)}  style={styles.input} placeholder='Vista paronamica'/>
         <TextInput value={inputOrientaçaoSolar} placeholderTextColor='#adcbbc' onChangeText={texto => textInputOrientaçaoSolar(texto)}  style={styles.input} placeholder='Orientação Solar'/>
   
   
         <Text style={{fontWeight:'bold'}} >Vagas de garagem definidas</Text>
         <TextInput value={inputVagaCoberta} placeholderTextColor='#adcbbc' onChangeText={texto => textInputVagaCoberta(texto)}  style={styles.input} placeholder='Total Cobertas'/>
         <TextInput value={inputVagaDescoberta} placeholderTextColor='#adcbbc' onChangeText={texto => textInputVagaDescoberta(texto)}  style={styles.input} placeholder='Total Descoberta'/>
         <TextInput value={inputTotal} placeholderTextColor='#adcbbc' onChangeText={texto => textInputTotalGaragem(texto)}  style={styles.input} placeholder='ao Total'/>
 
 
 
         <Text style={{fontWeight:'bold'}} >Outras informaçoes do Ímovel</Text>
         <TextInput value={inputTaxadeCondo} placeholderTextColor='#adcbbc' onChangeText={texto => textInputTaxaCondominio(texto)}  style={styles.input} placeholder='Taxa de Condominio'/>
         <TextInput value={inputCompartilhamentoArmario} placeholderTextColor='#adcbbc' onChangeText={texto => textInputCompartilhamentoArmario(texto)}  style={styles.input} placeholder='Compartilhamento de armarios'/>
         <TextInput value={inputSalaoLazer} placeholderTextColor='#adcbbc' onChangeText={texto => textInputSalaoLazer(texto)}  style={styles.input} placeholder='Salão Lazer'/>
         <TextInput value={inputPadraoAcabamento} placeholderTextColor='#adcbbc' onChangeText={texto => textInputPadraoAcabamento(texto)}  style={styles.input} placeholder='Padrao de Acabamento'/>
         <TextInput value={inputEstadoConservaçao} placeholderTextColor='#adcbbc' onChangeText={texto => textInputEstadodeConservaçao(texto)}  style={styles.input} placeholder='Estado de Conservaçao'/>
   
   
         <Text style={{fontWeight:'bold'}} >Areas de construçao averbadas(m2)</Text>
         <TextInput value={inputPrivativaUnidade} placeholderTextColor='#adcbbc' onChangeText={texto => textInputPrivativaUnidade(texto)}  style={styles.input} placeholder='Privativa Unidade'/>
         <TextInput value={inputPrivativaDescontruida} placeholderTextColor='#adcbbc' onChangeText={texto => textInputPrivativaDescontruida(texto)}  style={styles.input} placeholder='Privativa Descontruida'/>
         <TextInput value={inputComuns} placeholderTextColor='#adcbbc' onChangeText={texto => textInputComuns(texto)}  style={styles.input} placeholder='Comuns'/>
         <TextInput value={inputTotalAverbada} placeholderTextColor='#adcbbc' onChangeText={texto => textInputTotalAverbada(texto)}  style={styles.input} placeholder='Total Averbada'/>
   
   
         <Text style={{fontWeight:'bold'}} >Areas de construçao não averbadas(m2)</Text>
         <TextInput value={inputPrivativaUnidadeNao} placeholderTextColor='#adcbbc' onChangeText={texto => textInputPrivativaUnidadeNao(texto)}  style={styles.input} placeholder='Privativa Unidade '/>
         <TextInput value={inputPrivativaDescontinuaNao} placeholderTextColor='#adcbbc' onChangeText={texto => textInputPrivativaDescontruidaNao(texto)}  style={styles.input} placeholder='Privativa Descontruida'/>
         <TextInput value={inputComunsNao} placeholderTextColor='#adcbbc' onChangeText={texto => textInputComunsNao(texto)}  style={styles.input} placeholder='Comuns'/>
         <TextInput value={inputTotalNao} placeholderTextColor='#adcbbc' onChangeText={texto => textInputTotalAverbadaNao(texto)}  style={styles.input} placeholder='Total Nao Averbada'/>
  
  
         <Text style={{fontWeight:'bold'}} >Áreas de construção totale(m2)</Text>
         <TextInput value={inputPrivativaUnidadeTotales} placeholderTextColor='#adcbbc' onChangeText={texto => textInputPrivativaUnidadeTotales(texto)}  style={styles.input} placeholder='Privativa Unidade '/>
         <TextInput value={inputPrivativaDescontinuaTotales} placeholderTextColor='#adcbbc' onChangeText={texto => textInputPrivativaDescontinuaTotales(texto)}  style={styles.input} placeholder='Privativa Descontínua'/>
         <TextInput value={inputComunsTotales} placeholderTextColor='#adcbbc' onChangeText={texto => textInputComunsTotales(texto)}  style={styles.input} placeholder='Comuns'/>
         <TextInput value={inputTotalConstruidaTotales} placeholderTextColor='#adcbbc' onChangeText={texto => textInputTotalConstruidaTotales(texto)}  style={styles.input} placeholder='Total Construida'/>
   
         <Text style={{fontWeight:'bold'}} >Divisao Interna</Text>

         <TextInput value={inputDivisaoInterna} placeholderTextColor='#adcbbc' onChangeText={texto => textInputDivisaoInterna(texto)}  style={styles.input} placeholder='Divisão Interna '/>
       

         <Text style={{fontWeight:'bold'}} >Equipamentos da Unidade ou Disponiveis </Text>

         <TextInput value={inputEquipamentosDaUnidade} placeholderTextColor='#adcbbc' onChangeText={texto => textInputEquipamentosDaUnidade(texto)}  style={styles.input} placeholder='Equipamentos da Unidade '/>
 
         <Text style={{fontWeight:'bold'}} >Terreno da Unidade </Text>
          
         <TextInput value={inputAreaQuadradaTerreno} placeholderTextColor='#adcbbc' onChangeText={texto => textInputAreaQuadradaTerreno(texto)}  style={styles.input} placeholder='Area m(²) '/>
         <TextInput value={inputTestadaTerreno} placeholderTextColor='#adcbbc' onChangeText={texto => textInputTestadaTerreno(texto)}  style={styles.input} placeholder='Testada m(²) '/>
         <TextInput value={inputProfundidadeTerreno} placeholderTextColor='#adcbbc' onChangeText={texto => textInputProfundidadeTrreno(texto)}  style={styles.input} placeholder='Profundidade Terreno '/>
         <TextInput value={inputPosiçaoTerreno} placeholderTextColor='#adcbbc' onChangeText={texto => textInputPosiçaoTerreno(texto)}  style={styles.input} placeholder='Posiçao do Terreno '/>
         <TextInput value={inputCotaTerreno} placeholderTextColor='#adcbbc' onChangeText={texto => textInputCotaTerreno(texto)}  style={styles.input} placeholder='Cota/Greide '/>
         <TextInput value={inputFormatoAproximadoTerreno} placeholderTextColor='#adcbbc' onChangeText={texto => textInputFormatoAproximadoTerreno(texto)}  style={styles.input} placeholder='Formato Aproximado '/>
         <TextInput value={inputInclinaçaoTerreno} placeholderTextColor='#adcbbc' onChangeText={texto => textInputInclinaçaoTerreno(texto)}  style={styles.input} placeholder='Inclinaçao Terreno '/>
         <TextInput value={inputCercamentoTerreno} placeholderTextColor='#adcbbc' onChangeText={texto => textInputCercamentoTerreno(texto)}  style={styles.input} placeholder='Cercamento Terreno '/>
         <TextInput value={inputCercamentoTerrenoFrente} placeholderTextColor='#adcbbc' onChangeText={texto => textInputCercamentoTerrenoFrente(texto)}  style={styles.input} placeholder='Cercamento Terreno Frente '/>
         <TextInput value={inputCercamentoLaterais} placeholderTextColor='#adcbbc' onChangeText={texto => textInputCercamentoLateralTerreno(texto)}  style={styles.input} placeholder='Cercamento Terreno Lateral '/>
         <TextInput value={inputVocaçaoPrincipalTerreno} placeholderTextColor='#adcbbc' onChangeText={texto => textInputVocaçaoPrincipalTerreno(texto)}  style={styles.input} placeholder='Vocaçao Principal '/>
         <TextInput value={inputLadosDoTerreno} placeholderTextColor='#adcbbc' onChangeText={texto => textInputLadosDoTerreno(texto)}  style={styles.input} placeholder='Lados do Terreno  '/>
   
   

         <Text style={{fontWeight:'bold'}} >Empreendimento/Condominio </Text>

         <TextInput value={inputNumeroPredio} placeholderTextColor='#adcbbc' onChangeText={texto => textInputNumeroPredio(texto)}  style={styles.input} placeholder='Numero de Predios '/>
         <TextInput value={inputTotalDeUnidades} placeholderTextColor='#adcbbc' onChangeText={texto => textInputTotalDeUnidades(texto)}  style={styles.input} placeholder='Total de Unidades '/>
         <TextInput value={inputOcupaçaoDoTerreno} placeholderTextColor='#adcbbc' onChangeText={texto => textInputOcupaçaoDoTerreno(texto)}  style={styles.input} placeholder='Ocupação do Terreno '/>
         <TextInput value={inputPadraoEmpreendimento} placeholderTextColor='#adcbbc' onChangeText={texto => textInputPadraoEmpreedimento(texto)}  style={styles.input} placeholder='Padrao do Empreeedimento '/>
         <TextInput value={inputInfraEstrutura} placeholderTextColor='#adcbbc' onChangeText={texto => textInputInfraEstruturaEmpreendimento(texto)}  style={styles.input} placeholder='Infra Estrutura '/>
         <TextInput value={inputEstadoConservaçaoEmpreendimento} placeholderTextColor='#adcbbc' onChangeText={texto => textInputEstadodeConservaçaoEmpreendimento(texto)}  style={styles.input} placeholder='Estado de Conservação '/>


         <Text style={{fontWeight:'bold'}} >Terreno do Empreendimento </Text>

         <TextInput value={inputAreaQuadradaEmpreendimento} placeholderTextColor='#adcbbc' onChangeText={texto => textInputAreaQuadradaEmpreedimento(texto)}  style={styles.input} placeholder='Area m(²) '/>
         <TextInput value={inputTestadaEmpreedimento} placeholderTextColor='#adcbbc' onChangeText={texto => textInputTestadaEmpreedimento(texto)}  style={styles.input} placeholder='Testada '/>
         <TextInput value={inputProfundidadeEquivalente} placeholderTextColor='#adcbbc' onChangeText={texto => textInputProfundidadeEmpreeedimento(texto)}  style={styles.input} placeholder='Profundidade '/>
         <TextInput value={inputPosiçaoEmpreedimento} placeholderTextColor='#adcbbc' onChangeText={texto => textInputPosiçaoEmpreedimento(texto)}  style={styles.input} placeholder='Posiçao Equivalente (m²) '/>
         <TextInput value={inputCotaEmpreedimento} placeholderTextColor='#adcbbc' onChangeText={texto => textInputCotaEmpreedimento(texto)}  style={styles.input} placeholder='Cota/Greide '/>
         <TextInput value={inputCercamentoEmpreedimento} placeholderTextColor='#adcbbc' onChangeText={texto => textInputCercamentoEmpreedimento(texto)}  style={styles.input} placeholder='Cercamento '/>
         <TextInput value={inputCercamentoFrenteEmpreedimento} placeholderTextColor='#adcbbc' onChangeText={texto => textInputCercamentoFrenteEmpreedimento(texto)}  style={styles.input} placeholder='Cercamento frente '/>
         <TextInput value={inputCercamentoLateralEmpreedimento} placeholderTextColor='#adcbbc' onChangeText={texto => textInputCercamentoLateralEmpreendimento(texto)}  style={styles.input} placeholder='Cercamento Lateral/Fundo '/>
         <TextInput value={inputControleDeAcessoEmpreedimento} placeholderTextColor='#adcbbc' onChangeText={texto => textInputControleDeAcessoEmpreedimento(texto)}  style={styles.input} placeholder='Constrole de Acesso '/>
        
        <Text style={{fontWeight:'bold'}}>Com Base na Vistoria Observamos</Text>

         <TextInput value={inputVicios} placeholderTextColor='#adcbbc' onChangeText={texto => textInputVicios(texto)}  style={styles.input} placeholder='Vicios de Construçao Grave '/>
         <TextInput value={inputOutrosDanos} placeholderTextColor='#adcbbc' onChangeText={texto => textInputOutrosDanos(texto)}  style={styles.input} placeholder='Outros Danos Graves '/>
         <TextInput value={inputEstabilidade} placeholderTextColor='#adcbbc' onChangeText={texto => textInputEstabilidade(texto)}  style={styles.input} placeholder='Estabilidade e Solidez'/>
         <TextInput value={inputCondiçoesDeHabilidade} placeholderTextColor='#adcbbc' onChangeText={texto => textInputCondiçoesDeHabilidade(texto)}  style={styles.input} placeholder='Condições de Habitalidade '/>
          
            
         <Text style={{fontWeight:'bold'}}>Diagnostico Resumido de Mercado</Text>

         <TextInput value={inputPerfomacePercebida} placeholderTextColor='#adcbbc' onChangeText={texto => textInputPerfomacePercebida(texto)}  style={styles.input} placeholder='Perfomace Percebida '/>
         <TextInput value={inputOfertas} placeholderTextColor='#adcbbc' onChangeText={texto => textInputOfertas(texto)}  style={styles.input} placeholder='Nivel de Ofertas Verificado no Segmento '/>
         <TextInput value={inputLiquidezInferida} placeholderTextColor='#adcbbc' onChangeText={texto => textInputLiquidezInferida(texto)}  style={styles.input} placeholder='Líquidez Inferida '/>


         <Text style={{fontWeight:'bold'}}>Especificações</Text>

         <TextInput value={inputMetodo} placeholderTextColor='#adcbbc' onChangeText={texto => textInputMetodo(texto)}  style={styles.input} placeholder='Metodo '/>
         <TextInput value={inputGrauFundamentaçao} placeholderTextColor='#adcbbc' onChangeText={texto => textInputGrauFundamentaçao(texto)}  style={styles.input} placeholder='Grau De Fundamentaçao '/>
         <TextInput value={inputGrauPrecisao} placeholderTextColor='#adcbbc' onChangeText={texto => textInputGrauPrecisao(texto)}  style={styles.input} placeholder='Grau De Precisão '/>
               
         <Text style={{fontWeight:'bold'}}>Resultados</Text>

         <TextInput value={inputSituaçao} placeholderTextColor='#adcbbc' onChangeText={texto => textInputSituaçao(texto)}  style={styles.input} placeholder='Situaçao Descrita e Considerada Avaliação '/>
         <TextInput value={inputTipoValor} placeholderTextColor='#adcbbc' onChangeText={texto => textInputTipoValor(texto)}  style={styles.input} placeholder='Tipo de Valor Determinado '/>
         <TextInput value={inputDataReferencia} placeholderTextColor='#adcbbc' onChangeText={texto => textInputDataReferencia(texto)}  style={styles.input} placeholder='Data de Referencia '/>

         <Text style={{fontWeight:'bold'}}>Avaliação Global ( Digite apenas Numeros ) </Text>

         <TextInput value={inputAreaMcal} placeholderTextColor='#adcbbc' onChangeText={texto => textInputAreaMCal(texto)}  style={styles.input} placeholder='Area m(²) '/>
         <TextInput value={inputRSMetro} placeholderTextColor='#adcbbc' onChangeText={texto => textInputRsMetro(texto)}  style={styles.input} placeholder='R$/m(²) '/>

         <Text style={{fontWeight:'bold'}}>Deseja Forncer Empresa ? (Para assinatura digital)</Text>
          
         <TextInput value={inputCnpj} placeholderTextColor='#adcbbc' onChangeText={texto => textInputCnpj(texto)}  style={styles.input} placeholder='CNPJ'/>
         <TextInput value={inputNomeEmpresa} placeholderTextColor='#adcbbc' onChangeText={texto => textInputNomeEmpresa(texto)}  style={styles.input} placeholder='Nome da Empresa'/>


     </ScrollView>
     <TouchableHighlight onPress={()=>gerarPaginaUm()} style={{height:'8%',width:'100%',backgroundColor:'#113d35',alignItems:'center',justifyContent:'center'}}>
       <Text style={{color:'white'}} >Gerar Laudo</Text>
     </TouchableHighlight>
     </View>
  );
}