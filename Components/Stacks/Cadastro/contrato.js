import React, { Component, useState, useEffect } from 'react';
import { View, ActivityIndicator, Text, ScrollView, TouchableOpacity, Image, ImageBackground } from 'react-native';
import '@react-native-firebase/auth';
import '@react-native-firebase/app';
import { useSelector, useDispatch, } from 'react-redux';





export default contrato = ({ navigation }) => {

    return (

        <View style={{ flex: 1, backgroundColor: '#15312c', alignItems: "center", justifyContent: 'center' }}>
            <ScrollView>

                <Text style={{ color: "white", fontWeight: 'bold' }} > CONTRATO DE PRESTAÇÃO DE SERVIÇOS DE LICENÇA E USO DE SOFTWARE
                    Termos gerais e condições de uso do sistema:
                    Por este instrumento particular de contrato, na melhor forma do Direito, por estarem de acordo com todas as cláusulas que se seguem, tendo por PARTES, de um lado, PROSPECTA AVALIE, pessoa jurídica de direito privado, detentora dos direitos do SOFTWARE, inscrita no CNPJ sob o nº: XX.XXX.XXX/XXXX-XX, com sede na Rua XXXXXXXXXXXXXXXXXXXXXXXX, n° XX, Bairro XXXXXX, XXXXXXX/MA, CEP XXXXX-XXX, doravante denominada simplesmente “CONTRATADA”, e de outro lado, (Razão social), com sede na (Rua), (número), (bairro), (CEP), (Cidade), (Estado), inscrita no CNPJ sob o n° xxxxxxx, e com Inscrição Estadual sob o nº xxxxxx, neste ato representado pelo senhor (Nome), (nacionalidade), (estado civil), (profissão), portador da cédula de Identidade nº xxxxxx, CPF/MF nº xxxxxxx, residente e domiciliado na (Rua), (número), (bairro), (CEP), (Cidade), (Estado), doravante denominado “CONTRATANTE”, têm entre si justo e contratado o presente instrumento particular, acordando quanto às cláusulas e condições adiante estabelecidas, obrigando-se por si, seus herdeiros e/ou sucessores.
                    1. DAS CONDIÇÕES GERAIS E DEFINIÇÕES
                    1.1 O presente contrato tem por objeto a execução de serviços técnicos de avaliação de imóveis urbanos e rurais em todo território nacional, suas Autarquias e Fundações, conforme as normativas técnicas vigentes e demais especificações técnicas, através de um Software Online consistente em uma plataforma eletrônica disponibilizada pela CONTRATADA, daqui pra frente denominada apenas de “PLATAFORMA PROSPECTA AVALIE’’, a qual poderá ser acessada  através da Internet (informar se por endereço eletrônico ou loja de aplicativo).
                    1.2 A plataforma Prospecta Avalie, fica obrigada a manter no seu aplicativo, informações sobre o serviço ofertado pela CONTRATANTE, devendo as mesmas serem divulgadas de forma a facilitar sua visualização e localização.
                    1.3  As informações sobre o serviço devem ser organizadas de modo a tornar a leitura pelo cliente agradável e interessante, sendo de responsabilidade da empresa CONTRATADA a criação e adequação do layout da página.
                    1.4 O Software Online proporcionará a execução dos "serviços técnicos de avaliação de imóveis urbanos e rurais em todo território nacional, suas Autarquias e Fundações, conforme as normativas técnicas vigentes e demais especificações, à distância através de Software Online", denominado de "PLATAFORMA PROSPECTA AVALIE" ou "PROSPECTA AVALIE" e terá as seguintes características:
                    Através do "PROSPECTA AVALIE", o CONTRATANTE poderá verificar os imóveis disponíveis para avaliação na região que bem lhe prouver, escolher e executar o serviço, sempre atento as normas técnicas vigentes para execução da respectiva avaliação técnica e posterior emissão de laudo e parecer, todas normatizadas pela Associação Brasileira de Normas Técnicas, a ABNT, pela NBRs 14.653-1, 14.653-2, 14.653-3 e 14.653-4;
                    As partes reconhecem não haver a transmissão de qualquer tipo de licença por parte da CONTRATADA ficando o acesso liberado a partir do cadastro e aceites dos termos e condições gerais de utilização.
                    Para usufruir dos serviços da CONTRATADA, a CONTRATANTE assinará um Contrato de Prestação de Serviços e Uso de Licença de Software, onde se compromete a aceitar os Termos e Condições Gerais.
                    2. ACEITE DOS TERMOS
                    Os Termos e Condições Gerais constituem um contrato entre nós e aplicam-se a qualquer pessoa física ou jurídica interessada em utilizar os serviços, sistemas e aplicativos da PLATAFORMA PROSPECTA AVALIE. Caso você não concorde com estes Termos e Condições, você não poderá acessar ou usar os Serviços do PLATAFORMA PROSPECTA AVALIE
                    Se você se registrar ou usar o nosso serviço, isso será considerado uma confirmação de que você aceita os Termos e significará que você concordou com este contrato. Ao utilizar os serviços, você reconhece, aceita e concorda com todas as provisões da Política de Privacidade, incluindo, sem limitação, o uso e tratamento de suas Informações de conta e seu conteúdo de acordo com tal de política de privacidade.
                    3. SERVIÇOS DA PLATAFORMA PROSPECTA AVALIE
                    Os Termos e Condições Gerais, abaixo estipulados, aplicam-se a qualquer pessoa física ou jurídica previamente cadastrada na Plataforma para fim de elaboração de avaliação imobiliária, com emissão de laudo e parecer dos imóveis cadastrados na plataforma como importante ferramenta de gestão nos negócios imobiliários, desempenho de profissionais de Engenharia e Arquitetura, devidamente registrados nos seus respectivos Conselhos, sendo CREA – Conselho Regional de Engenharia e Agronomia, no caso dos Engenheiros e o CAU – Conselho de Arquitetura de Urbanismo, no caso dos Arquitetos, e pessoas jurídicas em geral, via internet, doravante denominadas “USUÁRIO”, que pretendam utilizar da PLATAFORMA PROSPECTA AVALIE deverão aceitar os presentes Termos e Condições Gerais de Uso do aplicativo, e todas as demais políticas e princípios que os regem.
                    Este Contrato de Licença de Usuário (“CONTRATO”) é um acordo legal entre o licenciado (pessoa física ou jurídica), doravante denominada simplesmente USUÁRIO e a empresa PLATAFORMA PROSPECTA AVALIE, pessoa jurídica de direito privado, inscrita no CNPJ sob nº XX.XXX.XXX/XXXX-XX, estabelecida na cidade de Imperatriz/MA, com sede social na xxxxxxx, xxx, Bairro: xxxxxxxxxxx, representada neste ato pelo Sr. XXXXXXXXXXXX, sócio-administrador, doravante denominada simplesmente PROSPECTA AVALIE para uso do programa e aplicativos “PROSPECTA AVALIE” na Apple App Store e Google Play, doravante conjunto (SOFTWARE, SITE e APLICATIVOS) denominado “APLICATIVO”, no ato do licenciamento do APLICATIVO, compreendendo o programa de computador e podendo incluir os meios físicos associados, bem como quaisquer materiais impressos e qualquer documentação online ou eletrônica.
                    Ao utilizar o APLICATIVO, mesmo que parcialmente ou a título de teste, o LICENCIADO estará vinculado aos termos deste CONTRATO, concordando com suas disposições, principalmente com relação ao CONSENTIMENTO PARA o ACESSO, COLETA, USO, ARMAZENAMENTO, TRATAMENTO E TÉCNICAS DE PROTEÇÃO ÀS INFORMAÇÕES do USUÁRIO pelo PROSPECTA AVALIE, necessárias para a integral execução das funcionalidades ofertadas pelo APLICATIVO. Em caso de discordância com os termos aqui apresentados, a utilização do APLICATIVO deve ser imediatamente interrompida pelo USUÁRIO.

                    4. DECLARAÇÕES DO USUÁRIO FINAL
                    Declara ter pleno conhecimento dos direitos e obrigações decorrentes do presente CONTRATO, constituindo este instrumento o acordo completo entre as partes. Declara, ainda, ter lido, compreendido e aceito todos os seus termos e condições. O USUÁRIO declara que foi devidamente informado da política de Privacidade e confidencialidade e ambientes de proteção de informações confidenciais, dados pessoais e registros de acesso da PLATAFORMA PROSPECTA AVALIE, consentindo livre e expressamente às ações de coleta, o uso, armazenamento e tratamento das referidas informações e dados.
                    O USUÁRIO declara estar ciente de que as operações que correspondam à aceitação do presente CONTRATO, de determinadas condições e opções, bem como eventual rescisão do presente instrumento e demais alterações, serão registradas nos bancos de dados da PLATAFORMA PROSPECTA AVALIE, juntamente com a data e hora em que foram realizadas pelo USUÁRIO, podendo tais informações serem utilizadas como prova pelas partes, independentemente do cumprimento de qualquer outra formalidade.
                    5. CADASTRO DE USUÁRIOS NO SITE E APLICATIVO
                    a) CAPACIDADE PARA CADASTRAR-SE
                    Os serviços do APLICATIVO estão disponíveis para USUÁRIOS, profissionais de Engenharia, Arquitetura, devidamente registrados nos Conselhos de suas respectivas categorias. Não podem fazê-lo, portanto, profissionais das respectivas áreas que não detenham os requisitos ora apresentados.
                    Não é permitido a prestação de serviços inclusive por menores de idade (DEZOITO ANOS), ou USUÁRIOS que já tenham sido desabilitados na PLATAFORMA, temporária ou definitivamente. Também não é permitido que um USUÁRIO tenha mais de um cadastro.
                    b) CADASTROS DE USUÁRIOS DO SITE
                    Apenas será confirmado o cadastramento no APLICATIVO o interessado que preencher todos os dados solicitados nas telas de cadastro de EMPRESA ou cadastro do USUÁRIO, devendo este interessado, completá-los com informações exatas, precisas e verdadeiras e assumir o compromisso de atualizá-las sempre que nelas ocorrer alguma alteração. A PLATAFORMA PROSPECTA AVALIE se reserva o direito de utilizar todos os meios legalmente válidos e possíveis para identificar seus USUÁRIOS.
                    c) A PLATAFORMA PROSPECTA AVALIE não se responsabiliza pela exatidão dos dados inseridos pelos USUÁRIOS. Estes, por sua vez, garantem e respondem, em qualquer caso, pela veracidade, exatidão e autenticidade dos dados inseridos.
                    d) A PLATAFORMA PROSPECTA AVALIE se reserva o direito de utilizar todos os meios legalmente válidos e possíveis para identificar os USUÁRIOS e seus responsáveis, bem como de solicitar dados adicionais e documentos que considere serem pertinentes, a fim de conferir os dados cadastrais informados.
                    e) Os USUÁRIOS autorizam A PLATAFORMA PROSPECTA AVALIE a conferir a veracidade dos seus dados cadastrais e, caso se constate haver entre eles dados incorretos, conflitantes ou inverídicos, ou ainda caso os USUÁRIOS se furtem ou se neguem a enviar os documentos requeridos para complementação ou comprovação de regularidade, A PLATAFORMA PROSPECTA AVALIE poderá bloquear seu acesso para uso, suspender temporariamente ou cancelar definitivamente o seu cadastro, sem prejuízo de outras medidas que entender necessárias e oportunas, mediante remessa de aviso, por e-mail, descrevendo a medida  e a justificativa dela.
                    f) os USUÁRIOS são os únicos responsáveis civil e criminalmente, pelas atividades desenvolvidas, cabendo apenas a PLATAFORMA PROSPECTA AVALIE, o monitoramento através de geolocalização por meio de Login e Senha do USUÁRIO, e recepção das informações das atividades em prática profissional. Não poderão ser imputados ao APLICATIVO e/ou a PLATAFORMA PROSPECTA AVALIE, quaisquer ônus por informações falsas ou que descumpram esta cláusula por parte dos USUÁRIOS, cabendo a estes, por conseguinte, responder inteiramente por seus atos nestes casos.
                    g) havendo a identificação dos problemas acima mencionados, e necessárias as medidas acima referidas, automaticamente será suspensa a permissão para uso do aplicativo da finalidade para que se destina, não assistindo aos USUÁRIO, por essa razão, qualquer sorte de indenização ou ressarcimento, recebendo os USUÁRIOS as informações dos cancelamentos via e-mail e as justificativas cabíveis.
                    h) os USUÁRIOS acessarão o APLICATIVO através de uma conta do serviço PLATAFORMA PROSPECTA AVALIE, para criar uma conta os USUÁRIOS nos fornecem um endereço de e-mail e/ou CPF e escolhem uma senha. Nos referimos a isto como sua “tela inicial”. A PLATAFORMA PROSPECTA AVALIE encoraja os USUÁRIOS a usar em uma combinação distinta e não óbvia de senha, distinta da utilizada por você em outros serviços. OS USUÁRIOS são responsáveis por manter em a exatidão, integralidade e confidencialidade das suas informações da conta, assim como por todas as atividades que ocorram em sua conta, inclusive as atividades de terceiros aos quais você tenha fornecido suas informações da conta ou cadastrado terceiros como colaboradores. A PLATAFORMA PROSPECTA AVALIE não será responsável por nenhuma perda ou dano decorrente da sua falha em fornecer informações acuradas ou em manter seguras as suas Informações da Conta.
                    i) os USUÁRIOS se comprometem a notificar a PLATAFORMA PROSPECTA AVALIE, imediatamente, e através de meio seguro, a respeito de qualquer uso não autorizado de seu identificador e senha de acesso ou de qualquer tipo acesso não autorizado, porventura realizado por terceiros. Os USUÁRIOS serão os únicos responsáveis pelas operações efetuadas com seu identificador e senha de acesso, uma vez que o acesso às áreas de operação do APLICATIVO só será possível mediante a utilização da senha, cujo conhecimento é exclusivo dos USUÁRIOS.
                    j) em nenhuma hipótese será permitida a cessão, venda, aluguel ou outra forma de transferência do identificador e senha de um USUÁRIO. Também não se permitirá a existência ou manutenção de mais de um cadastro por uma mesma pessoa física ou jurídica, ou ainda a criação de novos cadastros por pessoas físicas ou jurídicas cujos cadastros originais tenham sido cancelados ou desabilitados por infrações às políticas da PLATAFORMA PROSPECTA AVALIE.
                    k) A PLATAFORMA PROSPECTA AVALIE se reserva o direito de recusar qualquer solicitação de cadastro e de cancelar um cadastro previamente aceito em virtude de atos, omissões que afrontem as presentes disposições, a política de sigilo e a legislação pátria, sendo remetido um aviso, via e-mail para os USUÁRIOS, com a descrição da medida e a sua justificativa.
                    6. INCLUSÃO E EXCLUSÃO DE IMAGENS, FOTOGRAFIAS, LINKS DE SITES E CADASTROS
                    a) Os USUÁRIOS poderão incluir em seus dados cadastrais, após avaliação prévia e autorização da PLATAFORMA PROSPECTA AVALIE, imagens como fotografias, documentos, atestados, relatórios, atas, bem como, quaisquer um inerente a atividade desenvolvida.
                    7. LICENÇA DE USO DO APLICATIVO
                    Sujeito aos termos e condições aqui estabelecidos, este CONTRATO concede ao USUÁRIO uma licença revogável, não exclusiva e intransferível para uso do APLICATIVO. O USUÁRIO não poderá utilizar e nem permitir que o APLICATIVO seja utilizado para outra finalidade que não seja o processamento de suas informações e execução dos serviços disponibilizados no APLICATIVO. Em nenhuma hipótese o USUÁRIO  terá acesso ao código  fonte do APLICATIVO ora licenciado, por se tratar  de propriedade intelectual  da PLATAFORMA PROSPECTA AVALIE.
                    8. DAS RESTRIÇÕES
                    Em hipótese alguma é permitido ao USUÁRIO ou a terceiros por ele autorizados, de forma geral:
                    a) copiar, ceder, sublicenciar, vender, dar em locação ou em garantia, reproduzir, doar, alienar de qualquer forma, transferir total ou parcialmente, sob quaisquer modalidades, gratuita ou onerosamente, provisória ou permanentemente, o APLICATIVO objeto deste CONTRATO, assim como seus módulos, partes, manuais ou quaisquer informações a ele relativas;
                    b) retirar ou alterar, total ou parcialmente, os avisos de reserva de direito existente no APLICATIVO e na documentação;
                    c) praticar engenharia reversa, descompilação ou desmontagem do APLICATIVO.
                    9. DA VIGÊNCIA
                    O presente CONTRATO entra em vigor na data de seu aceite pelo USUÁRIO e vigorará por período indeterminado enquanto o USUÁRIO mantiver seu cadastro ativo na plataforma, caso o USUÁRIO não se manifeste expressamente em contrário.
                    10. PREÇO, VENCIMENTO, COBRANÇA E ÍNDICE DE REAJUSTE CONTRATADOS
                    O Cadastro de USUÁRIOS no APLICATIVO é gratuito.
                    11. RESTITUIÇÃO DAS INFORMAÇÕES
                    Suspenso o acesso do USUÁRIO ao APLICATIVO, a PLATAFORMA PROSPECTA AVALIE manterá as informações do USUÁRIO armazenadas no APLICATIVO pelo período de 90 (noventa) dias, contados da suspensão de acesso. Durante este período, a PLATAFORMA PROSPECTA AVALIE tornará as informações do USUÁRIO disponíveis para serem consultadas e/ou extraídas do APLICATIVO, podendo o USUÁRIO solicitar sua exclusão.


                    11. DAS OBRIGAÇÕES DA PLATAFORMA PROSPECTA AVALIE
                    Obriga - se a PLATAFORMA PROSPECTA AVALIE a:
                    a) A PLATAFORMA PROSPECTA AVALIE garante ao USUÁRIO que o APLICATIVO deverá funcionar regularmente, se respeitadas as condições de uso definidas na documentação. Na ocorrência de falhas de programação (“bugs”), PLATAFORMA PROSPECTA AVALIE, obrigar-se-á a corrigir tais falhas, podendo a seu critério substituir a cópia dos Programas com falhas por cópias corrigidas;
                    b) fornecer, ato contínuo ao aceite deste CONTRATO, acesso ao APLICATIVO durante a vigência deste CONTRATO;
                    c) suspender o acesso ao APLICATIVO do USUÁRIO que esteja desrespeitando as regras de conteúdo aqui estabelecidas ou as normas legais em vigor;
                    d) alterar as especificações e/ou características do APLICATIVO licenciados para a melhoria e/ou correções de erros;
                    e) disponibilizar acesso aos serviços de suporte compreendido de segunda a sexta-feira, das 08:30h às 17:30h (pelo horário de Brasília), sem intervalo, via xxxxxxxxxxxxxx, por meio de correio eletrônico (xxxxxxxxxxxxxx), para esclarecimento de dúvidas de ordem não técnica diretamente relacionadas ao aplicativo.
                    12. ISENÇÃO DE RESPONSABILIDADE DA PLATAFORMA PROSPECTA AVALIE
                    A PLATAFORMA PROSPECTA AVALIE, não se responsabiliza:
                    a) por falha de operação, operação por pessoas não autorizadas ou qualquer outra causa em que não exista culpa DA PLATAFORMA PROSPECTA AVALIE;
                    b) pelos danos ou prejuízos decorrentes de decisões administrativas, gerenciais ou comerciais tomadas com base nas informações fornecidas pelo APLICATIVO;
                    c) por problemas definidos como “caso fortuito” ou “força maior”, contemplados pelo Art. 393 do Código Civil Brasileiro;
                    d) por eventuais problemas oriundos de ações de terceiros que possam interferir na qualidade do serviço;
                    e) por danos causados a terceiros em razão de conteúdo gerado pela PLATAFORMA PROSPECTA AVALIE através de APLICATIVO;
                    f) pela indisponibilidade de internet do USUÁRIO;
                    g) por qualquer dano, prejuízo ou perda nos equipamentos dos USUÁRIOS DO SITE causados por falhas no sistema de gerenciamento do SITE, no servidor ou na internet decorrentes de condutas de terceiros.
                    A PLATAFORMA PROSPECTA AVALIE também não será responsável por qualquer vírus que possa atacar os equipamentos dos USUÁRIO Sem decorrência do acesso, utilização ou navegação no site na internet ou como consequência da transferência de dados, arquivos, imagens, textos ou áudio contidos no mesmo.
                    A PLATAFORMA PROSPECTA AVALIE adota as medidas de segurança adequadas de acordo com os padrões de mercado para a proteção das INFORMAÇÕES do USUÁRIO armazenadas no APLICATIVO. Contudo, o USUÁRIO reconhece que nenhum sistema, servidor ou software está absolutamente imune a ataques e/ou invasões de hackers e outros agentes maliciosos, não sendo a PLATAFORMA PROSPECTA AVALIE responsável por qualquer exclusão, obtenção, utilização ou divulgação não autorizada de INFORMAÇÕES resultantes de ataques que a PLATAFORMA PROSPECTA AVALIE não poderia razoavelmente evitar por meio dos referidos padrões de segurança.
                    13. DA RETOMADA DOS APLICATIVOS
                    A PLATAFORMA PROSPECTA AVALIE se reserva o direito de cancelar imediatamente o acesso do USUÁRIO ao APLICATIVO nos casos em que o USUÁRIO e/ou USUÁRIO FINAL usar o APLICATIVO de forma diversa daquela estipulada no presente instrumento.
                    14. DAS GARANTIAS LIMITADAS
                    Na extensão máxima permitida pela lei em vigor, o APLICATIVO é fornecido "no estado em que se encontra" e "conforme a disponibilidade", com todas as falhas e sem garantia de qualquer espécie. A PLATAFORMA PROSPECTA AVALIE  não garante que as funções contidas no APLICATIVO atendam às suas necessidades, que a operação do APLICATIVO será ininterrupta ou livre de erros, que qualquer serviço continuará disponível, que os defeitos no APLICATIVO serão corrigidos ou que o APLICATIVO será compatível ou funcione com qualquer software, aplicações ou serviços de terceiros.
                    1.6 - A " PLATAFORMA PROSPECTA AVALIE " conterá ferramenta tecnológica apropriada ao cadastro de imóveis para posterior escolha e emissão de "avaliações imobiliárias" doravante apenas denominados "LAUDOS DE AVALIAÇÃO’’. Tais "LAUDOS DE AVALIAÇÃO’’ serão gerados por discricionariedade da CONTRATANTE conforme entenda, dentro de sua proposta técnica, que a emissão atende às finalidades da CONTRATANTE, sendo esta responsável pela emissão e validade de tais avaliações.
                    1.6.1 - Toda a responsabilidade pela emissão, validação, fiscalização, certificação e regularização dos "CERTIFICADO" perante os órgãos gestores/fiscalizadores do ensino (no Brasil e em outros países) é da CONTRATANTE, ficando a CONTRATADA responsável pelo bom funcionamento do Software Online aqui referido no contexto da "PLATAFORMA".
                    1.7 - Toda e qualquer nova funcionalidade, implementações ou alterações de qualquer tipo que venha a ser solicitada ou requerida pela CONTRATANTE sobre o software, deverá obrigatoriamente ser realizada através do e-mail suporte@maestrus.com e a CONTRATANTE sujeitar-se-á ao pagamento de valores previamente ajustados para esta modificação seja inserida, renunciando a favor da CONTRATADA a qualquer direito sobre a propriedade intelectual sobre o que vier a ser solicitado.
                    1.7.1 - Ainda, para que a nova funcionalidade, implementação ou alteração seja executada pela  CONTRATADA, deverá ser previamente aprovada, haja vista que o software é entregue na forma em que está e qualquer alteração será de inteira discricionariedade da CONTRATADA.
                    CLÁUSULA SEGUNDA: DIREITOS E RESPONSABILIDADES DAS PARTES
                    2.1 - São, concomitantemente, direitos e deveres, consistindo em obrigações da CONTRATADA, mas também prerrogativa que somente ela pode exercer ou dela dispor:
                    a.  disponibilizar e manter atualizado Software Online que pode ser acessado através da Internet e manuseado online, sem transmissão de licença.
                    b. garantir os meios para o cadastro dos imóveis objeto das avaliações através de um software, também online, com ferramentas tecnológicas adequadas à criação e gestão das disponibilidades desses serviços.
                    c. prestar suporte técnico da "PLATAFORMA" se for solicitado.
                    d. prestar suporte na customização dos cursos criados pela CONTRATANTE se for solicitado.
                    2.2 - São, concomitantemente, direitos e deveres, consistindo em obrigações e prerrogativas da CONTRATANTE:
                    Utilizar-se dos meios disponibilizados através da prestação de serviço da CONTRATADA, devendo, por sua conta e risco, sozinho ou através de consultoria especializada, realizar a criação e gestão dos cursos online dentro dos seus interesses autônomos empresariais e/ou educacionais;
                    Contratar consultoria especializada para gerir a sua "INSCRIÇÃO ATIVA" caso entenda que precisa de um apoio maior que o dado pelo Suporte da CONTRATADA;
                    Recolher, quando devido, os tributos Federais, Estaduais e Municipais (impostos, taxas, contribuições de melhorias, recolhimentos previdenciários etc...), que sejam inerentes à sua atividade empresarial, isentando a CONTRATADA de responder por qualquer responsabilidade solidária ou subsidiária;
                    Cumprir devidamente suas obrigações perante seus empregados e contratados, isentando a CONTRATADA de qualquer responsabilidade (principal, solidária ou subsidiária) pelos empregados e/ou contratados que a CONTRATANTE admitir à execução da atividade empresarial que exerça através da "PLATAFORMA", reembolsando as despesas com Advogado que a CONTRATADA tenha sido obrigada a gastar para se defender.
                    2.3 - A CONTRATANTE terá liberdade para criar, gerir e comercializar tantas avaliações quantas sejam possíveis criar em cada Pacote contratado, desde que o conteúdo de tais avaliações, seja:
                    a. condizente com a ideia de educar e transmitir conhecimento;
                    b. favorável ao cumprimento das leis e não agressor de direitos de terceiros, principalmente de vulneráveis tais como crianças, idosos e dos hipossuficientes em geral;
                    c. não ofensivos à moral a aos bons costumes;
                    d. de propriedade da CONTRATANTE ou que esta seja detentora de direitos que lhe permitam usufruir do conteúdo;
                    e. isento de condutas que possam configurar qualquer tipo de discriminação, injúria, injúria racial ou qualquer outro tipo de conduta discriminatória em relação ao idoso, à criança e ao adolescente, à pessoa com deficiência, entre outras mais mencionada nas leis especiais;
                    f. estejam dentro do limite do "Espaço em disco" contratado em cada "PLANO";
                    g. Não atue em desacordo com o Termo de Uso em relação às categorias de negócios e conteúdos proibidos.
                    2.3.1 - Caso a CONTRATANTE venha a publicar cursos com conteúdo violador do quanto disposto na cláusula 2.3 e se recuse à adequação, poderá a CONTRATADA cancelar o cadastro da CONTRATANTE e dar o presente contrato por encerrado.

                    2.4 - A CONTRATADA não tem qualquer responsabilidade perante o Poder Público, bem como perante terceiros, pelo conteúdo veiculado através de seu sistema, tampouco no que concerne à sua veracidade, frequência, formato, qualidade, periodicidade e suas demais características, cabendo ao CONTRATANTE a exclusiva responsabilidade pelo material publicado e veiculado.

                    2.4.1 - A CONTRATANTE será a única responsável, administrativa, civil e criminal pelo conteúdo dos "CERTIFICADOS", reconhecendo apenas utilizar das ferramentas tecnológicas disponíveis na "PLATAFORMA" apropriada à confecção e customização de "CERTIFICADOS".

                    2.5 - As partes reconhecem que a "PLATAFORMA" pode não estar disponível ou ser indisponibilizado por diversos fatores, incluindo, sem limitação, manutenções periódicas do sistema (programadas ou não), manifestações da natureza, falhas técnicas do Software, infraestrutura de telecomunicações ou atraso ou interrupção ocasionada por vírus, ataques de negação de serviços, aumento ou flutuação de demanda, ações e omissões de terceiros ou qualquer outra causa que esteja fora do controle da CONTRATADA.

                    2.6 - Atendendo ao princípio da boa-fé, sempre que alguma das partes possa ser responsável em relação à outra parte por lucro cessante, ou danos indiretos, especiais, incidentais, consequentes, de cobertura ou punitivos, seja qual for a causa, deve a parte ciente notificar a outra sobre a possibilidade de tais danos.

                    CLÁUSULA TERCEIRA: SUPORTE TÉCNICO
                    3.1 - Compreende-se como suporte os serviços de apoio quanto à estabilidade da "PLATAFORMA", com o objetivo de auxiliar no diagnóstico e solução de dificuldades técnicas que possam surgir durante a utilização da "PLATAFORMA".

                    3.2 - O serviço de Suporte Técnico será executado remotamente nos horários compreendido das 9 às 18 horas (horário de Brasília), de segunda à sexta-feira, exceto feriados nacionais e do Estado de domicílio da CONTRATADA.

                    3.3 - A CONTRATADA deverá disponibilizar um canal de contato eletrônico e correio eletrônico para recebimento das solicitações, ou formulário de abertura de chamados em um local na internet.

                    3.4 - A CONTRATADA prestará Suporte, apenas online, da "PLATAFORMA", instruindo a CONTRATANTE para o manuseio e interação com o Software online no sentido de auxiliar a CONTRATANTE na criação, gestão e comercialização de cursos online.

                    3.5 - O Suporte será oferecido de acordo com as disposições para cada Plano contratado.

                    3.5.1 - Não fará parte do suporte técnico:

                    Criação, revisão e/ou diagramação de qualquer tipo de conteúdo para a página .
                    Solicitação de desenvolvimento de novas funcionalidades.
                    Consultoria, salvo aquela contratada em serviços Extras;
                    Suporte a serviços, softwares ou plataformas de terceiros.
                    CLÁUSULA QUARTA: CUSTOMIZAÇÃO E GESTÃO DOS CURSOS
                    4.1 -  A customização visual e gestão dos cursos é de total responsabilidade do CONTRATANTE devendo este utilizar-se das ferramentas tecnológicas disponíveis na "PLATAFORMA" conforme plano contratado.

                    4.2  - Mediante auxílio através de suporte técnico, a CONTRATADA prestará orientação no manuseio das ferramentas disponíveis na "PLATAFORMA", com a finalidade de proporcionar o ajuste dos logotipos e escolha das cores pelo painel administrativo da CONTRATANTE.

                    4.3  - As customizações de layout, criação de templates personalizados, manipulação de imagens e manipulação técnica da linguagem CSS (cascading style sheets) disponível na "PLATAFORMA" não estão inclusas em qualquer dos planos, podendo o CONTRATANTE solicitar orçamento à CONTRATADA.

                    4.4  - A CONTRATANTE poderá modificar partes do layout do Site adicionando novas regras de códigos CSS no painel da PLATAFORMA.

                    CLÁUSULA QUINTA: PRAZO
                    5.1 - O presente contrato vigorará por prazo indeterminado enquanto a CONTRATANTE estiver pagando sua mensalidade corretamente, podendo qualquer das partes denunciá-lo mediante as seguintes posturas:

                    PARA A CONTRATANTE: Basta que deixe de realizar o pagamento mensal conforme o "PLANO" contratado.
                    PARA A CONTRATADA: Basta enviar notificação com antecedência mínima de 30 dias.
                    5.2 - Caso não vigore o pagamento da assinatura pela CONTRATANTE dentro do prazo haverão:

                    A incorrência de multa de 2% por atraso + juros de 0,33% por dia de atraso;
                    Após o quarto dia de atraso os serviços serão temporariamente suspensos automaticamente até resolução da situação;
                    CLÁUSULA SEXTA: PREÇOS
                    6.1 - Pela prestação dos serviços a CONTRATANTE pagará à CONTRATADA o valor mensal descrito em um dos "PLANOS" que escolher, conforme o nível de cada serviço.

                    6.2 - Todos os planos com servidores de vídeo Maestrus tem seu respectivo limite de upload, limitado por quantidade de horas de vídeos enviados, de acordo com o plano contratado. Caso a CONTRATADA ultrapasse esse limite, caberá a CONTRATANTE realizar a cobrança de valores adicionais a franquia contratada, conforme o valor apresentado na hora da contratação.

                    CLÁUSULA SÉTIMA: REAJUSTE E FORMA DE PAGAMENTO
                    7.1 - A CONTRATANTE efetuará o pagamento dos valores cobrados por cada "ASSINATURA ATIVA" mediante boleto ou cartão de crédito.

                    7.2 - Os valores cobrados por cada "ASSINATURA ATIVA" poderão ser reajustados a cada período de 12 meses pelo acúmulo da variação do IGPM/FGV, quando positiva, ou por índice que vier a substituí-lo, observadas as normas legais aplicáveis, tendo como data base a data do dia do primeiro pagamento.

                    CLÁUSULA OITAVA: RESCISÃO DE CONTRATO
                    8.1 - O presente contrato poderá ser considerado rescindido de pleno direito, na ocorrência de inadimplência ou não cumprimento de obrigações por uma das partes;

                    8.2 - O presente contrato poderá ser rescindido por extinção de qualquer das partes, insolvência, falta de pagamento, decretação de recuperação judicial ou falência. decurso natural do prazo da "ASSINATURA ATIVA", caso não seja renovada automaticamente; denúncia manifestada expressamente pela parte interessada à parte infratora, com antecedência mínima de 30 (trinta) dias, nos casos em que não for respeitada, pela parte infratora, qualquer uma das cláusulas anteriores.

                    8.3 - Havendo desistência por parte da CONTRATANTE em dar continuidade ao projeto iniciado e serviço contratado sob o regimento deste contrato, a CONTRATANTE deverá notificar a CONTRATADA por email o desejo do rompimento do acordo celebrado entre as partes. A CONTRATADA  irá cancelar o serviço prestado bem como as cobranças geradas por este, o cancelamento apenas terá validade após o envio do email pela CONTRATANTE e confirmação do mesmo pela CONTRATADA.

                    8.4 - Havendo a rescisão do contrato por qualquer das partes, todo o conteúdo relacionado aos cursos criados pelo CONTRATANTE ficará disponível por mais 6 (seis) meses, podendo nesse período, realizar, se for de seu interesse e desde que haja solicitação formal por email, "backup" das informações. O arquivo de backup será compreendido por um arquivo com extensão "zip", contendo os dados de aulas, cursos, matriculas, modulos, objetos de aprendizagem, planos e turmas em formato "csv". Informações como vendas e vídeos seguros não comporão o arquivo de backup.

                    8.5 - Decorridos 90 dias da data do vencimento da mensalidade não paga, e caso a parte CONTRATANTE deseja retornar com o seu projeto, deverá notificar a CONTRATADA e submeter-se às regras descritas no documento TERMO DE USO;

                    8.6 - Havendo desistência por parte da CONTRATANTE em dar continuidade ao projeto iniciado e serviço contratado sob o regimento deste contrato, a CONTRATANTE deverá notificar a CONTRATADA por email o desejo do rompimento do acordo celebrado entre as partes. A CONTRATADA  irá cancelar o serviço prestado bem como as cobranças recorrentes futuras geradas por este.
                    CLÁUSULA NONA - TRANSFERÊNCIA DE TITULARIDADE
                    9.1 - Fica vedada a transferência de titularia do plano adquirido pela CONTRATANTE a outros, mesmo sendo ascendente/descendente da CONTRATADA ou ainda colaborador/preposto da pessoa jurídica da mesma.

                    9.2 - Em caso de solicitação de transferência de titularidade, o responsável deverá enviar uma notificação a nossa central de Suporte Técnico solicitando a transferência de titularidade, bem como já informando os dados cadastrais do novo proprietário.

                    9.3 - Em caso de transferência de titularidade, contratação atual (instância) será cancelada, e uma nova será criada atrelada às informações do novo titular. Os conteúdos existentes na "Plataforma" serão mantidos, apenas trocando o responsável titular.

                    9.4 - Havendo discordâncias entre as informações cadastrais referente ao novo titular ( CPF/CNPJ incompatível com o nome da pessoa ou representante social legal), a contratação permanecerá com o titular antigo vigente e, continuará sob as regras normais de contratação e funcionamento.

                    9.5 - Após a solicitação de troca de titularidade, a CONTRATADA poderá solicitar à CONTRATANTE documentos que comprovem a veracidade da pessoa (Física ou Jurídica) responsável pela nova titularidade.

                    CLÁUSULA DÉCIMA: DISPOSIÇÕES GERAIS
                    10.1 - Os signatários do presente contrato assegurem e afirmam que são os representantes legais competentes para assumir em nome das partes as obrigações descritas neste contrato e representar de forma efetiva seus interesses.

                    10.2 - As partes são contratantes totalmente independentes, sendo cada uma inteiramente responsável por seus atos, obrigações e conteúdo das informações prestadas, em toda e qualquer circunstância, visto que o presente instrumento não cria relação de parceria, emprego e nem de representação comercial entre elas, e nenhuma delas poderá declarar que possui qualquer autoridade para assumir ou criar qualquer obrigação, expressa ou implícita, em nome da outra, e nem representá-la sob nenhum pretexto e em nenhuma situação.

                    10.3 - O não exercício por qualquer das partes de direitos ou faculdades que lhe assistam em decorrência do presente contrato, ou a tolerância com o atraso no cumprimento das obrigações da outra parte, não afetará aqueles direitos ou faculdades, os quais poderão ser exercidos a qualquer tempo, a exclusivo critério do interessado, não alterando as condições neste instrumento estipuladas.

                    10.4 - A eventual tolerância de qualquer das Partes quanto ao atraso, ao não cumprimento ou ao inexato cumprimento de qualquer das disposições deste Acordo, não será interpretada ou entendida como renúncia a qualquer direito das demais Partes, não prejudicará o direito de exigir o cumprimento da obrigação assumida e nem constituirá novação.

                    10.5 - A nulidade ou ineficácia de qualquer das disposições deste Contrato, ou mesmo da Política de Privacidade ou do Termo de Uso não prejudicará a validade e eficácia das demais cláusulas, que serão integralmente cumpridas, obrigando-se as Partes a envidar seus melhores esforços de modo a validamente alcançarem os mesmos efeitos da disposição que tiver sido anulada ou tiver se tornado ineficaz.

                    10.6 - Cada uma das Partes se responsabiliza pelo integral e pontual pagamento de todo e qualquer tributo que incida ou venha a incidir na consecução do objeto deste Acordo, e a cuja Parte, na qualidade legal de sujeito passivo da relação tributária, impute-se o pagamento dos referidos tributos.

                    10.7 - Fica eleito o foro da Campo Grande, Mato Grosso do Sul, para decidir qualquer litígio decorrente do presente instrumento. DO FORO
                    Cláusula 16ª - Para dirimir quaisquer controvérsias oriundas do CONTRATO, as partes elegem o foro da comarca da Capital - São Paulo;
                    Por estarem assim justos e contratados, firmam o presente instrumento, em duas vias de igual teor, juntamente com 2 (duas) testemunhas.
                    (Local, data e ano).
                    (Nome e assinatura do Parceiro-outrogante)
                    (Nome e assinatura do Parceiro-outorgado)
                    (Nome, RG e assinatura da Testemunha 1)
                    (Nome, RG e assinatura da Testemunha 2) </Text>

            </ScrollView>

        </View>

    )
}

