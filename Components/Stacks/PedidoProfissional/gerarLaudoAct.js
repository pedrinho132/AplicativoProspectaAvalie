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
 

export default GerarLaudoAct = ({route,navigation }) => {
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

    const [ inputExistenteResidencial, setExistenteResidencial ] = useState();
    const [ inputContruirResidencial, setConstruirResidencial ] = useState();
    const [ inputTotalResidencial, setTotalResidencial ] = useState();
    const [ inputPorcentagemResidencial, setPorcentagemResidencal ] = useState();
    const [ inputExistenteComercial, setExistenteComercial ] = useState();
    const [ inputConstruirComercial, setConstruirComercial ] = useState();
    const [ inputTotalComercial, setTotalComercial ] = useState();
    const [ inputPorcentagemComercial, setPorcentagemComercial ] = useState();
    const [ inputExistentePrivativa, setExistentePrivativa ] = useState();
    const [ inputConstruirPrivativa, setConstruirPrivativa ] = useState();
    const [ inputTotalPrivativa, setTotalPrivativa ] = useState();
    const [ inputPorcentagemPrivativa, setPorcentagemPivativa ] = useState();
    const [ inputAreaComum, setAreaComum ] = useState();
    const [ inputAreaTotalGeral, setAreaTotalGeral ] = useState();
    const [ inputAreaQuadradaTerreno, setAreaQuadrada ] = useState();
    const [ inputTestadaTerreno, setTestadaTerreno ] = useState();
    const [ inputProfundidadeTerreno, setProfundidadeTerreno ] = useState();
    const [ inputPosiçaoTerreno, setPosiçaoTerreno ] = useState();
    const [ inputCotaTerreno, setCotaTerreno ] = useState();
    const [ inputFormatoAproximadoTerreno, setFormatoAproximadoTerreno ] = useState();
    const [ inputInclinaçaoTerreno, setInclinaçaoTereno ] = useState();
    const [ inputCercamentoTerreno, setCercamentoTerreno ] = useState();
    const [ inputCercamentoTerrenoFrente, setCercamentoTerrenoFrente ] = useState();
    const [ inputCercamentoLaterais, setCercamentoLaterais ] = useState();
    const [ inputVocaçaoPrincipalTerreno, setVocaçaoPrincipalTerreno ] = useState();
    const [ inputLadosDoTerreno, setLadosDoTerreno ] = useState();
    const [ inputNumeroPredio, setNumeroPredio ] = useState();
    const [ inputTotalDeUnidades, setTotalUnidades ] = useState();
    const [ inputOcupaçaoDoTerreno, setOcupaçaoDoTerrno ] = useState();
    const [ inputPadraoEmpreendimento, setPadraoEmpreedimento ] = useState();
    const [ inputInfraEstrutura, setInfraEstrutura ] = useState();
    const [ inputEstadoConservaçaoEmpreendimento, setEstadoConservaçaoEmpreedimento ] = useState()
    const [ inputAreaQuadradaEmpreendimento, setAreaQuadradaeEmpreedimento ] = useState();
    const [ inputTestadaEmpreedimento, setTestadaEmpreedimento ] = useState();
    const [ inputProfundidadeEquivalente, setProfundidadeEquivalente ] = useState();
    const [ inputPosiçaoEmpreedimento, setPosiçaoEmpreedimento ] = useState();
    const [ inputCotaEmpreedimento, setCotaEmpreedimento ] = useState();
    const [ inputCercamentoEmpreedimento, setCercamentoEmpreedimento ] = useState();
    const [ inputCercamentoFrenteEmpreedimento, setCercamentoFrenteeEmpreedimento ] = useState();
    const [ inputCercamentoLateralEmpreedimento, setCercamentoLateralEmpreedimento ] = useState();
    const [ inputControleDeAcessoEmpreedimento, setControleDeAcesoEmpreedimento ] = useState();
    const [ inputVicios, setVicios ] = useState();
    const [ inputOutrosDanos, setOutrosDanos ] = useState();
    const [ inputEstabilidade, setEstabilidade ] = useState();
    const [ inputCondiçoesDeHabilidade, setCondiçoesDeHabilidade ] = useState();
    const [ inputSituaçao, setSituaçao ] = useState();
    const [ inputTipoValor, setTipoValor ] = useState();
    const [ inputDataReferencia, setDataReferencia ] = useState();
    const [ inputAreaAvaliaçaoGlobal, setAreaAvaliaçaoGlobal ] = useState();
    const [ inputRSAreaGlobal, setRSAreaGlobal ] = useState();
    const [ inputValorGlobal, setValorGlobal ] = useState();
    const [ inputParteResidencialGlobal, setParteResidencialGlobal ] = useState();
    const [ inputParteComercial, setParteComercial ] = useState();
    const [ inputValorDeAvaliaçaoDoImovel, setValorDeAvaliaçaoDoImovel ] = useState();
    const [ inputAreaTerreno, setAreaTerreno ] = useState();
    const [ inputRSAreaTerreno, setRSAreaTerreno ] = useState();
    const [ inputValorTerreno, setValorTerreno ] = useState();
    const [ inputParteResidencialTerreno, setParteResidencialTerreno ] = useState();
    const [ inputParteTerreno, setParteTerreno ] = useState();
    const [ inputAreaCompra, setAreaCompra ] = useState();
    const [ inputRSAreaCompra, setRSAreaCompra ] = useState();
    const [ inputValorCompra, setValorCompra ] = useState();
    const [ inputParteResidencialCompra, setParteResidencialCompra ] = useState();
    const [ inputParteCompra, setParteCompra ] = useState();


    const [ inputServiçosPreliminares, setserviçospreliminares ] = useState();
    const [ inputServiçosInfraEstrutura, setserviçosinfraestrutura ] = useState();
    const [ inputServiçosSupraEstrutura, setsupraestrutura ] = useState();
    const [ inputServiçosParedesePaineis, setparedespaineis ] = useState();
    const [ inputServiçosVidroPlastico, setvidrosplasticos ] = useState();
    const [ inputServiçosCoberturas, setcoberturas ] = useState();
    const [ inputServiçosImpermeabilizaçoes, setimperbilizaçoes ] = useState();
    const [ inputServiçosRevestimentosInternos, setrevestimentosinternos ] = useState();
    const [ inputServiçosForros, setforros ] = useState();
    const [ inputServiçosRevestimentosExternos, setrevestimentosexternos ] = useState();
    const [ inputServiçosEsquadrias, setesquadrias ] = useState();
    const [ inputServiçosPintura, setpintura ] = useState(); 
    const [ inputServiçosPisos, setserviçospisos ] = useState();
    const [ inputServiçosAcabamentos, setserviçosacabamento ] = useState();
    const [ inputServiçosInstalaçoesEletricas, setinstalaçoeseletricas ] = useState();
    const [ inputServiçosInstalaçõesHidraulicas, setinstalaçoeshidraulicas ] = useState();
    const [ inputServiçosInstalaçoesDeEsgoto, setinstalaçoesdeesgoto ] = useState();
    const [ inputServiçosLouçasMetais, setlouçasmetais ] = useState();
    const [ inputServiçosComplementos, setcomplementos ] = useState();
    const [ inputServiçosOutrosServiços, setoutrosserviços ] = useState();

    const [ inputServiçosCustoTotal, setserviçoscustotal ] = useState();
    const [ inputServiçosTotalPorcentagem, setserviçostotalporcentagem ] = useState();
    const [ inputServiçosUnitarioRS, setserviçosunitariosrs ] = useState();
    const [ inputServiçosCustoResidencial, setcustoresidencial ] = useState();
    const [ inputServiçosCustoComercial, setcustocomercial ] = useState();

    const [ inputCronogramaPrazoPrevisto, setcronogramaprazoprevisto ] = useState();
    const [ inputCronogramaNumeroDeParcelasPrevistas, setcronogramanumerodeparcelasprevistas ] = useState();

    const [ inputParcela1, setparcela1 ] = useState();
    const [ inputParcela2, setparcela2 ] = useState();
    const [ inputParcela3, setparcela3 ] = useState();
    const [ inputParcela4, setparcela4 ] = useState();
    const [ inputParcela5, setparcela5 ] = useState();
    const [ inputParcela6, setparcela6 ] = useState();
    const [ inputParcela7, setparcela7 ] = useState();
    const [ inputParcela8, setparcela8 ] = useState();
    const [ inputParcela9, setparcela9 ] = useState();
    const [ inputParcela10, setparcela10 ] = useState();
    const [ inputParcela11, setparcela11 ] = useState();
    const [ inputParcela12, setparcela12 ] = useState();
    const [ inputParcela13, setparcela13 ] = useState();
    const [ inputParcela14, setparcela14 ] = useState();
    const [ inputParcela15, setparcela15 ] = useState();
    const [ inputParcela16, setparcela16 ] = useState();
    const [ inputParcela17, setparcela17 ] = useState();
    const [ inputParcela18, setparcela18 ] = useState();
    const [ inputParcela19, setparcela19 ] = useState();
    const [ inputParcela20, setparcela20 ] = useState();
    const [ inputParcela21, setparcela21 ] = useState();
    const [ inputParcela22, setparcela22 ] = useState();
    const [ inputParcela23, setparcela23 ] = useState();
    const [ inputParcela24, setparcela24 ] = useState();

    const [ inputConclusaoDocumentos, setconclusaodocumentos ] = useState();
    const [ inputConclusaoProposta, setconslusaoproposta ] = useState();
    const [ inputConclusaoOrçamento, setorçamento ] = useState();
    const [ inputConclusaoCronograma, setcronograma ] = useState();
    const [ inputConclusaoGarantia, setgarantia ] = useState();
    
    const [ inputResponsavelTecnico, setresponsaveltecnico ] = useState();
    const [ inputFormaçao, setformaçao ] = useState();
    const [ inputCrea, setcrea ] = useState();
    const [ inputCpfMatricula, setcpfmatricula ] = useState();
    const [ inputEmpresas, setempresas ] = useState();
    const [ inputCnpj, setcnpj ] = useState();
    const [ inputRepresentanteLegal, setrepresentantelegal ] = useState();
    const [ inputCpf, setcpf ] = useState();
    const [ inputLaudoData, setlaudodata ] = useState();
    

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

textInputExistenteResidencial = (texto) => {
  setExistenteResidencial(texto)
}

textInputConstruirResidencial = (texto) => {
  setConstruirResidencial(texto)
}

textInputTotalResidencial = (texto) => {
  setTotalResidencial(texto)
}

textInputPorcentagemResidencial = (texto) => {
  setPorcentagemResidencal(texto)
}

textInputExistenteComercial = (texto) => {
  setExistenteComercial(texto)
}

textInputConstruirComercial = (texto) => {
  setConstruirComercial(texto)
}

textInputTotalComercial = (texto) => {
  setTotalComercial(texto)
}

textInputPorcentagemComercial = (texto) => {
  setPorcentagemComercial(texto)
}

textInputExistentePrivativa = (texto) => {
  setExistentePrivativa(texto)
}

textInputConstruirPrivativa = (texto) => {
  setConstruirPrivativa(texto)
}

textInputTotalPrivativa = (texto) => {
  setTotalPrivativa(texto)
}

textInputPorcentagemPrivativa = (texto) => {
  setPorcentagemPivativa(texto)
}

textInputAreaComumPrivativa = (texto) => {
  setAreaComum(texto)
}

textInputAreaTotalGeral = (texto) => {
  setAreaTotalGeral(texto)
}

textInputAreaQuadradaTerreno = (texto) => {
  setAreaQuadrada(texto)
}

textInputTestadaTerreno = (texto) => {
  setTestadaTerreno(texto)
}

textInputProfundidadeTerreno = (texto) => {
  setProfundidadeTerreno(texto)
}

textInputPosiçaoTerreno = (texto) => {
  setPosiçaoTerreno(texto)
}

textInputCotaTerreno = (texto) => {
  setCotaTerreno(texto)
}

textInputFormatoAproximadoTerreno = (texto) => {
  setFormatoAproximadoTerreno(texto)
}

textInputInclinaçaoTerreno = (texto) => {
  setInclinaçaoTereno(texto)
}

textInputCercamentoTerreno = (texto) => {
  setCercamentoTerreno(texto)
}

textInputCercamentoTerrenoFrente = (texto) => {
  setCercamentoTerrenoFrente(texto)
}

textInputCercamentoLateralTerreno = (texto) => {
  setCercamentoLaterais(texto)
}

textInputVocaçaoPrincipalTerreno = (texto) => {
  setVocaçaoPrincipalTerreno(texto)
}

textInputLadosDoTerreno = (texto) => {
  setLadosDoTerreno(texto)
}
textInputNumeroPredio = (texto) => {
  setNumeroPredio(texto)
}

textInputTotalDeUnidades = (texto) => {
  setTotalUnidades(texto)
}

textInputOcupaçaoDoTerreno = (texto) => {
  setOcupaçaoDoTerrno(texto)
}

textInputPadraoEmpreedimento = (texto) => {
  setPadraoEmpreedimento(texto)
}

textInputInfraEstruturaEmpreendimento = (texto) => {
  setInfraEstrutura(texto)
}

textInputEstadodeConservaçaoEmpreendimento = (texto) => {
  setEstadoConservaçaoEmpreedimento(texto)
}

textInputAreaQuadradaEmpreedimento = (texto) => {
  setAreaQuadradaeEmpreedimento(texto)
}

textInputTestadaEmpreedimento = (texto) => {
  setTestadaEmpreedimento(texto)
}

textInputProfundidadeEmpredimento = (texto) => {
  setProfundidadeEquivalente(texto)
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
  setCercamentoFrenteeEmpreedimento(texto)
}

textInputCercamentoLateralEmpreendimento = (texto) => {
  setCercamentoLateralEmpreedimento(texto)
}

textInputControleDeAcessoEmpreedimento = (texto) => {
  setControleDeAcesoEmpreedimento(texto)
}

textInputVicios = (texto) => {
  setVicios(texto)
}

textInputOutrosDanos = (texto) => {
  setOutrosDanos(texto)
}

textInputEstabilidade = (texto) => {
  setEstabilidade(texto)
}

textInputCondiçoesDeHabilidade = (texto) => {
  setCondiçoesDeHabilidade(texto)
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

textInputAreaAvaliaçaoGlobal = (texto) => {
  setAreaAvaliaçaoGlobal(texto)
}

textInputTRSAreaGlobal = (texto) => {
  setRSAreaGlobal(texto)
}


textInputValorGlobal = (texto) => {
  setValorGlobal(texto)
}


textInputParteResidencialGlobal = (texto) => {
  setParteResidencialGlobal(texto)
}


textInputParteComercial = (texto) => {
  setParteComercial(texto)
}

textInputValorDeAvaliaçaoDoImovel = (texto) => {
  setValorDeAvaliaçaoDoImovel(texto)
}


textInputTRSAreaTerreno = (texto) => {
  setRSAreaTerreno(texto)
}


textInputValorTerreno = (texto) => {
  setValorTerreno(texto)
}


textInputParteResidencialTerreno = (texto) => {
  setParteResidencialTerreno(texto)
}


textInputParteTerreno = (texto) => {
  setParteTerreno(texto)
}


textInputAreaAvaliaçaoTerreno = (texto) => {
  setAreaAvaliaçaoGlobal(texto)
}

textInputAreaAvaliaçaoCompra = (texto) => {
  setAreaCompra(texto)
}


textInputTRSAreaCompra = (texto) => {
  setRSAreaCompra(texto)
}

textInputValorCompra = (texto) => {
  setValorCompra(texto)
}


textInputParteResidencialCompra = (texto) => {
  setParteResidencialCompra(texto)
}


textInputParteCompra = (texto) => {
  setParteCompra(texto)
}


textInputServiçosPreliminares = (texto) => {
  setserviçospreliminares(texto)
}


textInputServiçosInfraEstrutura = (texto) => {
  setserviçosinfraestrutura(texto)
}


textInputServiçosSupraestrutura = (texto) => {
  setsupraestrutura(texto)
}


textInputServiçosParedesePaines = (texto) => {
  setparedespaineis(texto)
}


textInputServiçosEsquadrias = (texto) => {
  setesquadrias(texto)
}


textInputServiçosVidroePlastico = (texto) => {
  setvidrosplasticos(texto)
}

textInputServiçosCoberturas = (texto) => {
  setcoberturas(texto)
}


textInputServiçosImpermeabilizaçoes = (texto) => {
  setimperbilizaçoes(texto)
}


textInputServiçosRevestimentosInternos = (texto) => {
  setrevestimentosinternos(texto)
}

textInputServiçosForros = (texto) => {
  setforros(texto)
}


textInputServiçosRevestimentosExternos = (texto) => {
  setrevestimentosexternos(texto)
}


textInputPintura = (texto) => {
  setpintura(texto)
}

textInputServiçosPisos = (texto) => {
  setserviçospisos
}

textInputServiçosAcabamentos = (texto) => {
  setserviçosacabamento(texto)
}

textInputServiçosInstalaçoesEletricas = (texto) => {
  setinstalaçoeseletricas(texto)
}

textInputServiçosInstalaçoesHidraulicas = (texto) => {
  setinstalaçoeshidraulicas(texto)
}

textInputServiçosInstalaçoesDeEsgoto = (texto) => {
  setinstalaçoesdeesgoto(texto)
}

textInputServiçosLouçasMetais = (texto) => {
  setlouçasmetais(texto)
}

textInputServiçosComplementos = (texto) => {
  setcomplementos(texto)
}

textInputServiçosOutrosServiços = (texto) => {
  setoutrosserviços(texto)
}



textInputServiçosCustoTotal = (texto) => {
  setserviçoscustotal(texto)
}

textInputServiçosTotalPorcentagem = (texto) => {
  setserviçostotalporcentagem(texto)
}

textInputServiçosValorUnitarioRs = (texto) => {
  setserviçosunitariosrs(texto)
}

textInputServiçosCustoComercial = (texto) => {
  setcustocomercial(texto)
}

textInputServiçosCustoResidencial = (texto) => {
  setcustoresidencial(texto)
}

textInputCronogramaPrazoprevisto = (texto) => {
setcronogramaprazoprevisto(texto)
}
textInputParcelasPrevitas= (texto) => {
setcronogramanumerodeparcelasprevistas(texto)
  }

textInputParcela1 = (texto) => {
setparcela1(texto)
    }

textInputParcela2 = (texto) => {
setparcela2(texto)
      }

textInputParcela3 = (texto) => {
setparcela3(texto)
        }
textInputParcela4 = (texto) => {
setparcela4(texto)
          }
textInputParcela5 = (texto) => {
setparcela5(texto)
            }

textInputParcela6 = (texto) => {
setparcela6(texto)
              }
              
textInputParcela7 = (texto) => {
setparcela7(texto)
                }
textInputParcela8 = (texto) => {
setparcela8(texto)
                  }
                
textInputParcela9 = (texto) => {
setparcela9(texto)
                    }
                
textInputParcela10 = (texto) => {
setparcela10(texto)
                      }
                
textInputParcela11 = (texto) => {
setparcela11(texto)
                        }
textInputParcela12 = (texto) => {
setparcela12(texto)
                          }
textInputParcela13 = (texto) => {
setparcela13(texto)
                            }
                
textInputParcela14 = (texto) => {
setparcela14(texto)
 };     
 textInputParcela15 = (texto) => {
  setparcela15(texto)
   };  
   textInputParcela16 = (texto) => {
    setparcela16(texto)
     }; 
 textInputParcela17 = (texto) => {
      setparcela17(texto)
       };   
   textInputParcela18 = (texto) => {
        setparcela18(texto)
         };   
     textInputParcela19 = (texto) => {
          setparcela19(texto)
           };   
    textInputParcela20 = (texto) => {
            setparcela20(texto)
             };   
 textInputParcela21 = (texto) => {
              setparcela21(texto)
               };   
  textInputParcela22 = (texto) => {
                setparcela22(texto)
                 };   
   textInputParcela23 = (texto) => {
                  setparcela23(texto)
                   };   
 textInputParcela24 = (texto) => {
      setparcela24(texto)
                     };

  textInputConclusaoDocumentos = (texto) => {
    setconclusaodocumentos(texto)
                       };                   
   textInputConclusaoProposta = (texto) => {
    setconslusaoproposta(texto)
                         };   
   textInputConclusaoOrçamento = (texto) => {
    setorçamento(texto)
                           };   
  textInputConclusaoCronograma = (texto) => {
     setcronograma(texto)
                             };   
                            
 textInputResponsavelTecnico = (texto) => {
      setresponsaveltecnico(texto)
};   

textInputFormaçao = (texto) => {
  setformaçao(texto)
};  

textInputCrea = (texto) => {
  setcrea(texto)
};  

textInputCpfMatricula = (texto) => {
  setcpfmatricula(texto)
};  

textInputEmpresas = (texto) => {
  setempresas(texto)
};  

textInputCnpj = (texto) => {
  setcnpj(texto)
};  

textInputRepresentanteLegal = (texto) => {
  setrepresentantelegal(texto)
};  

textInputCpf = (texto) => {
  setcpf(texto)
};  

textInputLaudoData = (texto) => {
  setlaudodata(texto)
};  
        

function gerarPaginaUm () {
  database()
  .ref(`pedidos/${emailCliente64}/laudo`)
  .set({ 
    idPedido:itemId,
    tipo:`imovelAct`,
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
 inputExistenteResidencial, 
 inputContruirResidencial,
   inputTotalResidencial, 
   inputPorcentagemResidencial,
     inputExistenteComercial, 
  inputConstruirComercial, 
 inputTotalComercial, 
  inputPorcentagemComercial, 
    inputExistentePrivativa, 
     inputConstruirPrivativa, 
   inputTotalPrivativa, 
    inputPorcentagemPrivativa, 
   inputAreaComum,
   inputAreaTotalGeral, 
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
     inputSituaçao, 
   inputTipoValor,
    inputDataReferencia, 
     inputAreaAvaliaçaoGlobal, 
    inputRSAreaGlobal, 
     inputValorGlobal, 
     inputParteResidencialGlobal, 
   inputParteComercial, 
     inputValorDeAvaliaçaoDoImovel,
     inputAreaTerreno,
    inputRSAreaTerreno,
    inputValorTerreno,
    inputParteResidencialTerreno, 
    inputParteTerreno,
    inputAreaCompra, 
     inputRSAreaCompra, 
     inputValorCompra, 
     inputParteResidencialCompra, 
     inputParteCompra, 
   inputServiçosPreliminares, 
   inputServiçosInfraEstrutura,
   inputServiçosSupraEstrutura, 
    inputServiçosParedesePaineis, 
inputServiçosVidroPlastico, 
    inputServiçosCoberturas,
   inputServiçosImpermeabilizaçoes,
     inputServiçosRevestimentosInternos,
    inputServiçosForros, 
    inputServiçosRevestimentosExternos,
   inputServiçosEsquadrias,
    inputServiçosPintura, 
   inputServiçosPisos,
   inputServiçosAcabamentos, 
    inputServiçosInstalaçoesEletricas, 
    inputServiçosInstalaçõesHidraulicas,
   inputServiçosInstalaçoesDeEsgoto,
    inputServiçosLouçasMetais, 
    inputServiçosComplementos, 
    inputServiçosOutrosServiços, 
     inputServiçosCustoTotal,
    inputServiçosTotalPorcentagem, 
    inputServiçosUnitarioRS,
     inputServiçosCustoResidencial, 
     inputServiçosCustoComercial, 
     
     inputCronogramaPrazoPrevisto, 
     inputCronogramaNumeroDeParcelasPrevistas, 
    inputParcela1,
    inputParcela2, 
     inputParcela3, 
     inputParcela4,
    inputParcela5, 
    inputParcela6, 
    inputParcela7, 
  inputParcela8, 
    inputParcela9,
    inputParcela10, 
   inputParcela11, 
    inputParcela12, 
    inputParcela13, 
     inputParcela14, 
    inputParcela15, 
   inputParcela16, 
   inputParcela17, 
  inputParcela18, 
    inputParcela19, 
   inputParcela20,
     inputParcela21,
    inputParcela22, 
    inputParcela23, 
    inputParcela24, 
    inputConclusaoDocumentos, 
    inputConclusaoProposta, 
     inputConclusaoOrçamento, 
     inputConclusaoCronograma, 
     inputConclusaoGarantia,   
    inputResponsavelTecnico, 
     inputFormaçao,
     inputCrea,
     inputCpfMatricula, 
    inputEmpresas, 
     inputCnpj, 
     inputRepresentanteLegal, 
     inputCpf, 
    inputLaudoData,
    
 
   }).then(()=> navigation.navigate('PerfilProfissional'));
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
 
         <Text style={{fontWeight:'bold'}} >Area Privativa Residencial </Text>
          
         <TextInput value={inputExistenteResidencial} placeholderTextColor='#adcbbc' onChangeText={texto => textInputExistenteResidencial(texto)}  style={styles.input} placeholder='Existente'/>
         <TextInput value={inputContruirResidencial} placeholderTextColor='#adcbbc' onChangeText={texto => textInputConstruirResidencial(texto)}  style={styles.input} placeholder='A construir'/>
         <TextInput value={inputTotalResidencial} placeholderTextColor='#adcbbc' onChangeText={texto => textInputTotalResidencial(texto)}  style={styles.input} placeholder='Total Residencial '/>
         <TextInput value={inputPorcentagemResidencial} placeholderTextColor='#adcbbc' onChangeText={texto => textInputPorcentagemResidencial(texto)}  style={styles.input} placeholder='% Residencial '/>
        
         <Text style={{fontWeight:'bold'}} >Area Privativa Comercial </Text>
         <TextInput value={inputExistenteComercial} placeholderTextColor='#adcbbc' onChangeText={texto => textInputExistenteComercial(texto)}  style={styles.input} placeholder='Existente '/>
         <TextInput value={inputConstruirComercial} placeholderTextColor='#adcbbc' onChangeText={texto => textInputConstruirComercial(texto)}  style={styles.input} placeholder='A Construir '/>
         <TextInput value={inputTotalComercial} placeholderTextColor='#adcbbc' onChangeText={texto => textInputTotalComercial(texto)}  style={styles.input} placeholder='Total Comercial '/>
         <TextInput value={inputPorcentagemComercial} placeholderTextColor='#adcbbc' onChangeText={texto => textInputPorcentagemComercial(texto)}  style={styles.input} placeholder='% Comercial '/>
        
         <Text style={{fontWeight:'bold'}} >Area Privativa Total(m²) </Text>            
         <TextInput value={inputExistentePrivativa} placeholderTextColor='#adcbbc' onChangeText={texto => textInputExistentePrivativa(texto)}  style={styles.input} placeholder='Existente '/>
         <TextInput value={inputConstruirPrivativa} placeholderTextColor='#adcbbc' onChangeText={texto => textInputConstruirPrivativa(texto)}  style={styles.input} placeholder='A Construir '/>
         <TextInput value={inputTotalPrivativa} placeholderTextColor='#adcbbc' onChangeText={texto => textInputTotalPrivativa(texto)}  style={styles.input} placeholder='Total Privativa '/>
         <TextInput value={inputPorcentagemPrivativa} placeholderTextColor='#adcbbc' onChangeText={texto => textInputPorcentagemPrivativa(texto)}  style={styles.input} placeholder='% Privativa '/>
         <TextInput value={inputAreaComum} placeholderTextColor='#adcbbc' onChangeText={texto => textInputAreaComumPrivativa(texto)}  style={styles.input} placeholder='Area Comum  '/>
         <TextInput value={inputAreaTotalGeral} placeholderTextColor='#adcbbc' onChangeText={texto => textInputAreaTotalGeral(texto)}  style={styles.input} placeholder='Area TOTAL geral '/>
   
   

   
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
          
            


         <Text style={{fontWeight:'bold'}}>Avaliaçao</Text>

           <TextInput value={inputSituaçao} placeholderTextColor='#adcbbc' onChangeText={texto => textInputSituaçao(texto)}  style={styles.input} placeholder='Situaçao Descrita e Considerada Avaliação '/>
            <TextInput value={inputTipoValor} placeholderTextColor='#adcbbc' onChangeText={texto => textInputTipoValor(texto)}  style={styles.input} placeholder='Tipo de Valor Determinado '/>
           <TextInput value={inputDataReferencia} placeholderTextColor='#adcbbc' onChangeText={texto => textInputDataReferencia(texto)}  style={styles.input} placeholder='Data de Referencia '/>

           <Text style={{fontWeight:'bold'}}>Avaliaçao Global</Text>

           <TextInput value={inputAreaAvaliaçaoGlobal} placeholderTextColor='#adcbbc' onChangeText={texto => textInputAreaAvaliaçaoGlobal(texto)}  style={styles.input} placeholder='Area de Avaliaçao (m²)'/>
           <TextInput value={inputRSAreaGlobal} placeholderTextColor='#adcbbc' onChangeText={texto => textInputTRSAreaGlobal(texto)}  style={styles.input} placeholder='R$/m² Valor  '/>
           <TextInput value={inputValorGlobal} placeholderTextColor='#adcbbc' onChangeText={texto => textInputValorGlobal(texto)}  style={styles.input} placeholder='Valor Global '/>
           <TextInput value={inputParteResidencialGlobal} placeholderTextColor='#adcbbc' onChangeText={texto => textInputParteResidencialGlobal(texto)}  style={styles.input} placeholder='Parte Residencil Global '/>
           <TextInput value={inputParteComercial} placeholderTextColor='#adcbbc' onChangeText={texto => textInputParteComercial(texto)}  style={styles.input} placeholder='Parte Comercial '/>
             
           <Text style={{fontWeight:'bold'}}>Avaliaçao Itemazada</Text>

           <TextInput value={inputValorDeAvaliaçaoDoImovel} placeholderTextColor='#adcbbc' onChangeText={texto => textInputValorDeAvaliaçaoDoImovel(texto)}  style={styles.input} placeholder='Valor de Avaliação '/>
            
           <Text style={{fontWeight:'bold'}}>Avaliação Terreno </Text>

          
           <TextInput value={inputAreaTerreno} placeholderTextColor='#adcbbc' onChangeText={texto => textInputAreaAvaliaçaoTerreno(texto)}  style={styles.input} placeholder='Area de Avaliaçao (m²)'/>
           <TextInput value={inputRSAreaTerreno} placeholderTextColor='#adcbbc' onChangeText={texto => textInputTRSAreaTerreno(texto)}  style={styles.input} placeholder='R$/m² Valor  '/>
           <TextInput value={inputValorTerreno} placeholderTextColor='#adcbbc' onChangeText={texto => textInputValorTerreno(texto)}  style={styles.input} placeholder='Valor Terreno '/>
           <TextInput value={inputParteResidencialTerreno} placeholderTextColor='#adcbbc' onChangeText={texto => textInputParteResidencialTerreno(texto)}  style={styles.input} placeholder='Parte Residencil do Terreno '/>
           <TextInput value={inputParteTerreno} placeholderTextColor='#adcbbc' onChangeText={texto => textInputParteTerreno(texto)}  style={styles.input} placeholder='Parte Comercial '/>
             

                
           <Text style={{fontWeight:'bold'}}>Avaliação de Compra e Venda </Text>

          
           <TextInput value={inputAreaCompra} placeholderTextColor='#adcbbc' onChangeText={texto => textInputAreaAvaliaçaoCompra(texto)}  style={styles.input} placeholder='Area de Avaliaçao (m²)'/>
           <TextInput value={inputRSAreaCompra} placeholderTextColor='#adcbbc' onChangeText={texto => textInputTRSAreaCompra(texto)}  style={styles.input} placeholder='R$/m² Valor  '/>
           <TextInput value={inputValorCompra} placeholderTextColor='#adcbbc' onChangeText={texto => textInputValorCompra(texto)}  style={styles.input} placeholder='Valor de Compra e Venda '/>
           <TextInput value={inputParteResidencialCompra} placeholderTextColor='#adcbbc' onChangeText={texto => textInputParteResidencialCompra(texto)}  style={styles.input} placeholder='Parte Compra e venda do Terreno '/>
           <TextInput value={inputParteCompra} placeholderTextColor='#adcbbc' onChangeText={texto => textInputParteCompra(texto)}  style={styles.input} placeholder='Parte de Compra e venda '/>
  
           <Text style={{fontWeight:'bold'}}>Serviços preliminares e gerais </Text>

           <TextInput value={inputServiçosPreliminares} placeholderTextColor='#adcbbc' onChangeText={texto => textInputServiçosPreliminares(texto)}  style={styles.input} placeholder='Serviços Preliminares'/>

           <Text style={{fontWeight:'bold'}}>Infraestrutura </Text> 

           <TextInput value={inputServiçosInfraEstrutura} placeholderTextColor='#adcbbc' onChangeText={texto => textInputServiçosInfraEstrutura(texto)}  style={styles.input} placeholder='Infra Estrutura'/>

           <Text style={{fontWeight:'bold'}}>Supraestrutura</Text> 

           <TextInput value={inputServiçosSupraEstrutura} placeholderTextColor='#adcbbc' onChangeText={texto => textInputServiçosSupraestrutura(texto)}  style={styles.input} placeholder='Supraeestrutura'/>

           <Text style={{fontWeight:'bold'}}>Paredes e painéis</Text> 

            <TextInput value={inputServiçosParedesePaineis} placeholderTextColor='#adcbbc' onChangeText={texto => textInputServiçosParedesePaines(texto)}  style={styles.input} placeholder='Paredes e Paineis'/>

            <Text style={{fontWeight:'bold'}}>Esquadrias</Text> 

            <TextInput value={inputServiçosEsquadrias} placeholderTextColor='#adcbbc' onChangeText={texto => textInputServiçosEsquadrias(texto)}  style={styles.input} placeholder='Serviços Esaquadrias'/>
                
                
            <Text style={{fontWeight:'bold'}}>Vidros e Plásticos</Text> 

             <TextInput value={inputServiçosVidroPlastico} placeholderTextColor='#adcbbc' onChangeText={texto => textInputServiçosVidroePlastico(texto)}  style={styles.input} placeholder='Vidros e Plasticos'/>
              
             <Text style={{fontWeight:'bold'}}>Coberturas</Text> 

            <TextInput value={inputServiçosCoberturas} placeholderTextColor='#adcbbc' onChangeText={texto => textInputServiçosCoberturas(texto)}  style={styles.input} placeholder='Coberturas'/>
             
             <Text style={{fontWeight:'bold'}}>Impermeabilizações</Text> 

            <TextInput value={inputServiçosImpermeabilizaçoes} placeholderTextColor='#adcbbc' onChangeText={texto => textInputServiçosImpermeabilizaçoes(texto)}  style={styles.input} placeholder='Impermeabilizações'/>
             
            <Text style={{fontWeight:'bold'}}>Revestimentos Internos</Text> 

            <TextInput value={inputServiçosRevestimentosInternos} placeholderTextColor='#adcbbc' onChangeText={texto => textInputServiçosRevestimentosInternos(texto)}  style={styles.input} placeholder='Revestimentos Internos'/>
            
            <Text style={{fontWeight:'bold'}}>Forros</Text> 

           <TextInput value={inputServiçosForros} placeholderTextColor='#adcbbc' onChangeText={texto => textInputServiçosForros(texto)}  style={styles.input} placeholder='Forros'/>

           <Text style={{fontWeight:'bold'}}>Revestimentos Externos</Text> 

           <TextInput value={inputServiçosRevestimentosExternos} placeholderTextColor='#adcbbc' onChangeText={texto => textInputServiçosRevestimentosExternos(texto)}  style={styles.input} placeholder='Revestimentos Externos'/>

           <Text style={{fontWeight:'bold'}}>Pintura</Text> 

           <TextInput value={inputServiçosPintura} placeholderTextColor='#adcbbc' onChangeText={texto => textInputPintura(texto)}  style={styles.input} placeholder='Pintura'/>

           <Text style={{fontWeight:'bold'}}>Pisos</Text> 

              <TextInput value={inputServiçosPisos} placeholderTextColor='#adcbbc' onChangeText={texto => textInputServiçosPisos(texto)}  style={styles.input} placeholder='Pisos'/>
                
              <Text style={{fontWeight:'bold'}}>Acabamentos</Text> 

            <TextInput value={inputServiçosAcabamentos} placeholderTextColor='#adcbbc' onChangeText={texto => textInputServiçosAcabamentos(texto)}  style={styles.input} placeholder='Acabamentos'/>

            <Text style={{fontWeight:'bold'}}>Instalações Elétricas e Telefônicas</Text> 

           <TextInput value={inputServiçosInstalaçoesEletricas } placeholderTextColor='#adcbbc' onChangeText={texto => textInputServiçosInstalaçoesEletricas(texto)}  style={styles.input} placeholder='Instalações Eletricas'/>
              
           <Text style={{fontWeight:'bold'}}>Instalações Hidráulicas </Text> 

           <TextInput value={inputServiçosInstalaçõesHidraulicas } placeholderTextColor='#adcbbc' onChangeText={texto => textInputServiçosInstalaçoesHidraulicas(texto)}  style={styles.input} placeholder='Instalações Hidraulicas'/>

               
           <Text style={{fontWeight:'bold'}}>Instalações de Esgoto e Águas Pluviais</Text> 

            <TextInput value={inputServiçosInstalaçoesDeEsgoto} placeholderTextColor='#adcbbc' onChangeText={texto => textInputServiçosInstalaçoesDeEsgoto(texto)}  style={styles.input} placeholder='Instalações De Esgoto'/>
              
            <Text style={{fontWeight:'bold'}}>Louças e Metais</Text> 

             <TextInput value={inputServiçosLouçasMetais} placeholderTextColor='#adcbbc' onChangeText={texto => textInputServiçosLouçasMetais(texto)}  style={styles.input} placeholder='Louças Metais'/>
             
             <Text style={{fontWeight:'bold'}}>Complementos</Text> 

             <TextInput value={inputServiçosComplementos} placeholderTextColor='#adcbbc' onChangeText={texto => textInputServiçosComplementos(texto)}  style={styles.input} placeholder='Complementos'/>

             <Text style={{fontWeight:'bold'}}>Outros Serviços</Text> 

                <TextInput value={inputServiçosOutrosServiços} placeholderTextColor='#adcbbc' onChangeText={texto => textInputServiçosOutrosServiços(texto)}  style={styles.input} placeholder='Outros Serviços'/>

                <Text style={{fontWeight:'bold'}}>Avaliação de Compra e Venda </Text>

          
             <TextInput value={inputServiçosCustoTotal} placeholderTextColor='#adcbbc' onChangeText={texto => textInputServiçosCustoTotal(texto)}  style={styles.input} placeholder='Custo Total'/>
             <TextInput value={inputServiçosTotalPorcentagem} placeholderTextColor='#adcbbc' onChangeText={texto => textInputServiçosTotalPorcentagem(texto)}  style={styles.input} placeholder='% Total '/>
             <TextInput value={inputServiçosUnitarioRS} placeholderTextColor='#adcbbc' onChangeText={texto => textInputServiçosValorUnitarioRs(texto)}  style={styles.input} placeholder='Valor Unitario R$/m² '/>
             <TextInput value={inputServiçosCustoResidencial} placeholderTextColor='#adcbbc' onChangeText={texto => textInputServiçosCustoResidencial(texto)}  style={styles.input} placeholder='Custo Residencial '/>
             <TextInput value={inputServiçosCustoComercial} placeholderTextColor='#adcbbc' onChangeText={texto => textInputServiçosCustoComercial(texto)}  style={styles.input} placeholder='Custo Comercial '/>


             <Text style={{fontWeight:'bold'}}>Cronograma</Text>
             <TextInput value={inputCronogramaPrazoPrevisto} placeholderTextColor='#adcbbc' onChangeText={texto => textInputServiçosCustoTotal(texto)}  style={styles.input} placeholder='Custo Total'/>
             <TextInput value={inputCronogramaNumeroDeParcelasPrevistas} placeholderTextColor='#adcbbc' onChangeText={texto => textInputServiçosTotalPorcentagem(texto)}  style={styles.input} placeholder='Total % '/>
             
             <TextInput value={inputParcela1} placeholderTextColor='#adcbbc' onChangeText={texto => textInputParcela1(texto)}  style={styles.input} placeholder='Parcela 1'/>
             <TextInput value={inputParcela2} placeholderTextColor='#adcbbc' onChangeText={texto => textInputParcela2(texto)}  style={styles.input} placeholder='Parcela 2'/>
             <TextInput value={inputParcela3} placeholderTextColor='#adcbbc' onChangeText={texto => textInputParcela3(texto)}  style={styles.input} placeholder='Parcela 3'/>
             <TextInput value={inputParcela4} placeholderTextColor='#adcbbc' onChangeText={texto => textInputParcela4(texto)}  style={styles.input} placeholder='Parcela 4'/>
             <TextInput value={inputParcela5} placeholderTextColor='#adcbbc' onChangeText={texto => textInputParcela5(texto)}  style={styles.input} placeholder='Parcela 5'/>
             <TextInput value={inputParcela6} placeholderTextColor='#adcbbc' onChangeText={texto => textInputParcela6(texto)}  style={styles.input} placeholder='Parcela 6 '/>
             <TextInput value={inputParcela7} placeholderTextColor='#adcbbc' onChangeText={texto => textInputParcela7(texto)}  style={styles.input} placeholder='Parcela 7'/>
             <TextInput value={inputParcela8} placeholderTextColor='#adcbbc' onChangeText={texto => textInputParcela8(texto)}  style={styles.input} placeholder='Parcela 8'/>
             <TextInput value={inputParcela9} placeholderTextColor='#adcbbc' onChangeText={texto => textInputParcela9(texto)}  style={styles.input} placeholder='Parcela 9'/>
             <TextInput value={inputParcela10} placeholderTextColor='#adcbbc' onChangeText={texto => textInputParcela10(texto)}  style={styles.input} placeholder='Parcela 10'/>
             <TextInput value={inputParcela11} placeholderTextColor='#adcbbc' onChangeText={texto => textInputParcela11(texto)}  style={styles.input} placeholder='Parcela 11'/>
             <TextInput value={inputParcela12} placeholderTextColor='#adcbbc' onChangeText={texto => textInputParcela12(texto)}  style={styles.input} placeholder='Parcela 12'/>
             <TextInput value={inputParcela13} placeholderTextColor='#adcbbc' onChangeText={texto => textInputParcela13(texto)}  style={styles.input} placeholder='Parcela 13'/>
             <TextInput value={inputParcela14} placeholderTextColor='#adcbbc' onChangeText={texto => textInputParcela14(texto)}  style={styles.input} placeholder='Parcela 14'/>
             <TextInput value={inputParcela15} placeholderTextColor='#adcbbc' onChangeText={texto => textInputParcela15(texto)}  style={styles.input} placeholder='Parcela 15'/>
             <TextInput value={inputParcela16} placeholderTextColor='#adcbbc' onChangeText={texto => textInputParcela16(texto)}  style={styles.input} placeholder='Parcela 16'/>
             <TextInput value={inputParcela17} placeholderTextColor='#adcbbc' onChangeText={texto => textInputParcela17(texto)}  style={styles.input} placeholder='Parcela 17'/>
             <TextInput value={inputParcela18} placeholderTextColor='#adcbbc' onChangeText={texto => textInputParcela18(texto)}  style={styles.input} placeholder='Parcela 18'/>
             <TextInput value={inputParcela19} placeholderTextColor='#adcbbc' onChangeText={texto => textInputParcela19(texto)}  style={styles.input} placeholder='Parcela 19'/>
             <TextInput value={inputParcela20} placeholderTextColor='#adcbbc' onChangeText={texto => textInputParcela20(texto)}  style={styles.input} placeholder='Parcela 20'/>
             <TextInput value={inputParcela21} placeholderTextColor='#adcbbc' onChangeText={texto => textInputParcela21(texto)}  style={styles.input} placeholder='Parcela 21'/>
             <TextInput value={inputParcela22} placeholderTextColor='#adcbbc' onChangeText={texto => textInputParcela22(texto)}  style={styles.input} placeholder='Parcela 22'/>
             <TextInput value={inputParcela23} placeholderTextColor='#adcbbc' onChangeText={texto => textInputParcela23(texto)}  style={styles.input} placeholder='Parcela 23'/>
             <TextInput value={inputParcela24} placeholderTextColor='#adcbbc' onChangeText={texto => textInputParcela24(texto)}  style={styles.input} placeholder='Parcela 24'/>
             
             <Text style={{fontWeight:'bold'}}>Conclusção</Text>

              
             <TextInput value={inputConclusaoDocumentos} placeholderTextColor='#adcbbc' onChangeText={texto => textInputConclusaoDocumentos(texto)}  style={styles.input} placeholder='Os Documentos estão compativeis?'/>
             <TextInput value={inputConclusaoProposta} placeholderTextColor='#adcbbc' onChangeText={texto => textInputConclusaoProposta(texto)}  style={styles.input} placeholder='A proposta atende as normas exigidas pela Pospecta?'/>
             <TextInput value={inputConclusaoOrçamento} placeholderTextColor='#adcbbc' onChangeText={texto => textInputConclusaoOrçamento(texto)}  style={styles.input} placeholder='Orçamento Proposta'/>
             <TextInput value={inputConclusaoCronograma} placeholderTextColor='#adcbbc' onChangeText={texto => textInputConclusaoCronograma(texto)}  style={styles.input} placeholder='Cronograma Proposto foi aproavdo?'/>
             <TextInput value={inputConclusaoGarantia} placeholderTextColor='#adcbbc' onChangeText={texto => textInputConclusaGarantia(texto)}  style={styles.input} placeholder='A Proposta é viavel a credito imobiliario'/>
             
             <TextInput value={inputResponsavelTecnico} placeholderTextColor='#adcbbc' onChangeText={texto => textInputResponsavelTecnico(texto)}  style={styles.input} placeholder='Responsavel Tecnico'/>
             <TextInput value={inputFormaçao} placeholderTextColor='#adcbbc' onChangeText={texto => textInputFormaçao(texto)}  style={styles.input} placeholder='Formaçao'/>
             <TextInput value={inputCrea} placeholderTextColor='#adcbbc' onChangeText={texto => textInputCrea(texto)}  style={styles.input} placeholder='Crea'/>
             <TextInput value={inputCpfMatricula} placeholderTextColor='#adcbbc' onChangeText={texto => textInputCpfMatricula(texto)}  style={styles.input} placeholder='Cpf Matricula'/>
             <TextInput value={inputEmpresas} placeholderTextColor='#adcbbc' onChangeText={texto => textInputEmpresas(texto)}  style={styles.input} placeholder='Empresa'/>
             <TextInput value={inputCnpj} placeholderTextColor='#adcbbc' onChangeText={texto => textInputCnpj(texto)}  style={styles.input} placeholder='Cnpj'/>
             <TextInput value={inputRepresentanteLegal} placeholderTextColor='#adcbbc' onChangeText={texto => textInputRepresentanteLegal(texto)}  style={styles.input} placeholder='Representante Legal'/>
             <TextInput value={inputCpf} placeholderTextColor='#adcbbc' onChangeText={texto => textInputCpf(texto)}  style={styles.input} placeholder='Cpf'/>
             <TextInput value={inputLaudoData} placeholderTextColor='#adcbbc' onChangeText={texto => textInputLaudoData(texto)}  style={styles.input} placeholder='Laudo Data'/>
    
             
     </ScrollView>
     <TouchableHighlight onPress={()=>gerarPaginaUm()} style={{height:'8%',width:'100%',backgroundColor:'#113d35',alignItems:'center',justifyContent:'center'}}>
       <Text style={{color:'white'}} >Gerar Laudo</Text>
     </TouchableHighlight>
     </View>
  );
}