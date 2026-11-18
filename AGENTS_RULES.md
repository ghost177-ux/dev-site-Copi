**AGENTS_RULES**

### PARTE 1. COMPORTAMENTO DOS AGENTES
Como o agente deve pensar, analisar, se comunicar e lidar com dúvidas.

	REGRA 1.  Não inventar informações: nunca invente informações, dados ou características. Se não encontrar o que precisa nos arquivos ou nas referências disponíveis, ou se as informações encontradas não forem claras, pergunte ao usuário. Não tente adivinhar, fazer suposições ou assumir que sabe algo quando não tiver certeza. Não escolha por conta própria detalhes que não foram informados e que possam mudar o resultado da tarefa.

        Exemplo: se o usuário pedir para pintar uma parede, mas não informar a cor, pergunte qual cor deve ser utilizada antes de executar a tarefa.

	REGRA 2. Ser transparente: informe ao usuário sempre que ocorrer algum imprevisto, erro, dificuldade ou limitação durante a execução de uma tarefa. Não esconda problemas nem tente contorná-los silenciosamente. Explique o que aconteceu e informe se isso afetou ou pode afetar a execução da tarefa.

	REGRA 3. Diferenciar fatos de sugestões: deixe claro quando uma informação foi confirmada nos arquivos ou nas referências disponíveis e quando se trata de uma sugestão, opinião ou interpretação do próprio agente. Não apresente algo que não foi confirmado como se fosse um fato.

	REGRA 4. Analisar o projeto e verificar possíveis impactos: Antes de executar qualquer alteração, o agente deve analisar os arquivos, códigos, estruturas e documentações disponíveis que tenham relação com o trabalho. Procure entender como o projeto funciona, quais padrões já são utilizados e qual é a melhor forma de realizar o que foi solicitado. Utilize as documentações, como Design System, especificações de páginas, Skills e demais referências disponíveis, como base para a execução. Analise também se a alteração pode afetar outros arquivos, componentes, funcionalidades ou páginas além daqueles solicitados pelo usuário, considerando:
        - Quais arquivos, componentes, funcionalidades ou páginas podem ser afetados.
        - Quais dependências existem entre os elementos envolvidos.
        - Se a alteração pode modificar comportamentos ou características de outros elementos.
        - Se os possíveis impactos ultrapassam o escopo autorizado.
        - Se esses impactos podem ser evitados sem comprometer a solicitação.
    Se identificar algum risco relevante de impacto fora do escopo, informe ao usuário o que pode ser afetado e explique as possíveis consequências. Não continue com a alteração até receber a autorização do usuário.
            

### PARTE 2. EXECUÇÃO DAS TAREFAS
Como o agente deve agir, fazer, executar, realizar as alterações no projeto.


	REGRA 5. Respeitar o escopo da solicitação: o agente deverá modificar apenas os arquivos e elementos necessários para realizar a tarefa solicitada pelo usuário. Não deverá modificar outros elementos ou características do projeto que não façam parte do pedido.

    REGRA 6. Não tomar decisões sem autorização: não faça alterações, não tome decisões importantes ou mude o objetivo da solicitação por iniciativa própria, mesmo que considere que outra solução seja melhor para o projeto. Se identificar algo fora do pedido que acredita que deveria ser alterado, ou uma forma diferente ou mais adequada de realizar a tarefa, apresente a proposta ao usuário e aguarde sua aprovação antes de prosseguir. 

	REGRA 7. Atualização da documentação: quando uma alteração realizada no projeto modificar informações registradas nos arquivos localizados na pasta project_documentation, o agente deverá atualizar os trechos correspondentes para manter a documentação sincronizada com o projeto. Essa atualização poderá ser feita sem autorização adicional, desde que se limite às informações diretamente afetadas pela alteração realizada. Não modifique outros conteúdos, estruturas ou orientações documentadas. Esta regra não se aplica ao Design System, às Skills e às especificações das páginas, que seguem as proteções estabelecidas na Regra 33.

	REGRA 8. Autonomia durante a execução: o agente possui liberdade para realizar os procedimentos operacionais necessários à execução da tarefa, incluindo acessar o terminal, executar comandos, consultar a web, analisar arquivos, utilizar ferramentas e realizar testes e verificações, sem precisar solicitar autorização para cada etapa ou enviar atualizações rotineiras sobre seu progresso.
	Essa autonomia se limita aos procedimentos operacionais. Ela não autoriza alterações fora do escopo solicitado, decisões importantes sem autorização ou operações que possam comprometer o funcionamento do projeto e seus elementos existentes. Nesses casos, deverá seguir as orientações das Regras 4, 5 e 6, conforme aplicável.
	A autonomia também não dispensa o agente de comunicar imprevistos, erros, dificuldades ou limitações, conforme a Regra 2.
	Exemplos práticos:
		- Abrir o terminal, consultar a web ou executar comandos necessários: pode fazer livremente.
		- Realizar testes seguros para verificar o funcionamento do projeto: pode fazer livremente.
		- Decidir entre posicionar um botão à direita ou à esquerda, quando isso não estiver definido: deve perguntar ao usuário.
		- Identificar uma melhoria que não foi solicitada: deve apresentar a sugestão antes de implementá-la.
	Essa autonomia não permite realizar operações que possuem restrições específicas em outras regras deste documento, mesmo que sejam necessárias para executar a tarefa.


### PARTE 3. PROTEÇÃO DO PROJETO
Proteção contra alterações que possam causar perdas, comprometer funcionalidades ou afetar estruturas importantes do projeto.

    REGRA 9. Proteger os elementos existentes contra perdas e danos: preserve as funcionalidades, estruturas, configurações e características existentes do projeto que não precisem ser alteradas para realizar a tarefa. Não remova, substitua ou modifique elementos existentes sem necessidade ou sem autorização. Evite alterações que possam prejudicar o funcionamento de outras partes do projeto.

	REGRA 10. Proteger os dados contra perdas ou alterações indevidas: não apague, sobrescreva ou modifique dados importantes sem que essa alteração esteja prevista na solicitação do usuário ou tenha sido autorizada por ele.
	Mesmo quando a alteração estiver prevista na solicitação, se identificar riscos de perda não previstos, informe ao usuário o que poderá ser afetado, explique os possíveis riscos e aguarde sua autorização antes de prosseguir, conforme as Regras 14 e 21.

	REGRA 11. Proteger as configurações do projeto: não altere configurações essenciais do projeto por iniciativa própria sem necessidade ou autorização. Quando identificar a necessidade de realizar uma alteração não solicitada pelo usuário, informe o que pretende alterar, explique os possíveis impactos e aguarde sua autorização antes de prosseguir.

	REGRA 12. Proteger as dependências do projeto: não remova, substitua ou atualize bibliotecas e dependências por iniciativa própria, sem necessidade ou autorização. Quando identificar a necessidade de realizar uma alteração não solicitada pelo usuário, analise os possíveis impactos, informe o que poderá ser afetado e aguarde sua autorização antes de prosseguir.

	REGRA 13. Proteger informações confidenciais: não exponha, compartilhe ou disponibilize senhas, chaves de API, tokens, credenciais de acesso ou outras informações confidenciais do projeto.

	REGRA 14. Consultar antes de operações irreversíveis: antes de executar qualquer operação que possa causar perdas de dados ou que seja difícil de reverter, informe ao usuário o que será afetado, explique os possíveis riscos e aguarde sua autorização.
	Essa exigência também se aplica às operações permitidas pela autonomia da Regra 8. A autorização para executar procedimentos operacionais não permite realizar operações irreversíveis ou difíceis de reverter sem a aprovação do usuário.

	REGRA 15. Proteger a estrutura do banco de dados: não crie, modifique ou remova tabelas, colunas, relacionamentos ou outras estruturas existentes por iniciativa própria sem necessidade ou autorização. Quando identificar a necessidade de realizar uma alteração não solicitada pelo usuário, analise os possíveis impactos, informe o que poderá ser afetado e aguarde sua autorização antes de prosseguir.

	REGRA 16. Preservar a integridade dos dados: ao realizar alterações no backend ou no banco de dados, verifique se elas podem provocar perda, duplicação ou inconsistência de informações. Execute as alterações de forma que esses problemas sejam evitados e, quando aplicável, realize testes para verificar a integridade dos dados após a execução.

	REGRA 17. Proteger as alterações no banco de dados: realize alterações na estrutura do banco de dados por meio de migrações controladas e documentadas, seguindo os padrões e ferramentas utilizados pelo projeto. Esta regra complementa a Regra 15, estabelecendo como essas alterações devem ser realizadas. Antes de executar operações que possam causar perda de dados, verifique se existe uma forma adequada de recuperação, informe ao usuário os possíveis riscos e aguarde sua autorização, conforme a Regra 14.

	REGRA 18. Proteger as integrações do sistema: não modifique endpoints, APIs ou comunicações entre serviços por iniciativa própria sem necessidade ou autorização. Quando identificar a necessidade de realizar uma alteração não solicitada pelo usuário, analise os possíveis impactos sobre as integrações e funcionalidades existentes, informe o que poderá ser afetado e aguarde sua autorização antes de prosseguir.

	REGRA 19. Preservar as regras de negócio: não altere validações de negócio, cálculos, processamentos ou outras regras responsáveis pelo funcionamento do sistema por iniciativa própria sem necessidade ou autorização. Quando identificar a necessidade de realizar uma alteração não solicitada pelo usuário, analise os possíveis impactos sobre as funcionalidades existentes, informe o que poderá ser afetado e aguarde sua autorização antes de prosseguir.

	REGRA 20. Proteger o controle de acesso: preserve os mecanismos de autenticação e autorização existentes. Garanta que as permissões de acesso sejam verificadas no backend, e não apenas na interface. Não remova ou enfraqueça essas verificações sem necessidade ou sem autorização.

	REGRA 21. Respeitar os limites da autorização: a solicitação do usuário autoriza apenas as alterações necessárias para realizar o que foi pedido, respeitando as demais regras deste documento. Durante a análise ou execução de uma solicitação, se identificar riscos de danos, perdas ou impactos relevantes não previstos, interrompa a execução, informe ao usuário o que poderá ser afetado, explique os possíveis riscos e aguarde sua autorização antes de prosseguir.

### PARTE 4. ORGANIZAÇÃO DO PROJETO
O objetivo é garantir que os agentes mantenham o projeto organizado, respeitem sua estrutura e não criem arquivos ou documentos desnecessários.


	REGRA 22. Preservar a organização do projeto: Siga a organização de pastas, arquivos e componentes já estabelecida no projeto. Não crie novas estruturas nem reorganize as existentes sem necessidade ou sem autorização.

	REGRA 23. Organizar a criação de arquivos: crie novos arquivos somente quando forem necessários para realizar a tarefa e houver informações suficientes para definir seu conteúdo e sua finalidade. Armazene-os nas pastas correspondentes, respeitando a estrutura e a organização adotadas pelo projeto. Não crie arquivos que comprometam ou prejudiquem elementos existentes.
	A criação de novos tipos de arquivos, estruturas ou documentos que introduzam padrões ou formas de organização ainda não estabelecidos no projeto deverá ser apresentada ao usuário como proposta e dependerá de sua autorização antes da implementação.

	REGRA 24. Priorizar a reutilização e evitar duplicações: antes de criar arquivos, componentes, funções, estruturas ou documentos, verifique se já existem recursos que possam ser reutilizados ou adaptados para atender à necessidade da tarefa. Priorize o aproveitamento desses recursos e evite criar duplicações ou elementos desnecessários.

	REGRA 25. Manter a padronização do projeto: ao criar ou modificar arquivos e componentes, siga os padrões de nomenclatura e as convenções de escrita já adotados no projeto. Mantenha a consistência dos nomes e da escrita, evitando introduzir padrões diferentes dos existentes sem necessidade ou autorização do usuário.

	REGRA 26.  Garantir a padronização e rastreabilidade das alterações: toda seção funcional ou visual criada ou modificada em arquivos que contenham estruturas HTML, JSX ou TSX, incluindo componentes, elementos do Design System e demais estruturas visuais ou funcionais do projeto, deve possuir um comentário de identificação no início, seguindo rigorosamente o padrão estabelecido nesta regra e respeitando a sintaxe de comentários da linguagem utilizada.
	Para esta regra, considera-se seção cada parte identificável do projeto que represente um bloco visual ou uma funcionalidade específica, como Hero, cabeçalho, rodapé, depoimentos ou gerenciamento de usuários. Funções, variáveis e pequenos trechos de código que façam parte de uma seção não devem receber comentários de identificação próprios.
	O comentário deve conter obrigatoriamente os seguintes campos:
		- DATA DE CRIAÇÃO
		- AGENTE
		- DATA DA ALTERAÇÃO
		- ÚLTIMA ALTERAÇÃO
		- SEÇÃO
	A DATA DE CRIAÇÃO e a SEÇÃO devem permanecer inalteradas após a criação do comentário. Sempre que a seção sofrer qualquer modificação, independentemente do tamanho ou da complexidade, o comentário existente deverá ser atualizado, substituindo a DATA DA ALTERAÇÃO, o AGENTE responsável e a descrição da ÚLTIMA ALTERAÇÃO. Não acumule históricos nem crie comentários duplicados para a mesma seção.
	Padrão obrigatório:
		/*
 		* DATA DE CRIAÇÃO: 05/11/2026
 		* AGENTE: Gemini
 		*
 		* DATA DA ALTERAÇÃO: 06/11/2026
 		* ÚLTIMA ALTERAÇÃO: Ajuste na validação de cadastro.
 		*
 		* SEÇÃO: Gerenciamento de usuários
 		*/	
	O nome do agente Gemini foi utilizado apenas como exemplo, mas poderia ser Claude, Chat GPT, GitHub Copilot ou qualquer outro agente. Cada agente deve utilizar seu próprio nome ao realizar alterações.

### PARTE 5. PADRÕES DE DESIGN
O objetivo é garantir que todos os agentes respeitem a identidade visual do Waybit, mantendo consistência entre páginas, componentes e elementos da interface, sem limitar desnecessariamente a liberdade criativa.


	REGRA 27. Respeitar as documentações de design: consulte e siga o Design System, as Skills e as especificações das páginas relacionadas à tarefa. Utilize essas documentações como referência para manter a identidade visual e a consistência da interface, respeitando as orientações gerais e específicas de cada uma. Quando identificar orientações conflitantes ou informações insuficientes, consulte o usuário antes de decidir como proceder.

	REGRA 28. Manter a consistência visual: preserve a identidade visual e a coerência entre páginas, seções e componentes, seguindo os padrões estabelecidos pelo projeto. Novas propostas visuais poderão ser utilizadas desde que não comprometam essa identidade, respeitem as orientações de design existentes e sigam as condições estabelecidas na Regra 32.

	REGRA 29. Garantir a responsividade: garanta que páginas e componentes se adaptem adequadamente a diferentes tamanhos de tela, mantendo a organização visual, a legibilidade e a usabilidade em dispositivos móveis, tablets e desktops. Siga os padrões de responsividade definidos nas documentações do projeto.

	REGRA 30. Respeitar as referências visuais: quando o usuário fornecer imagens, layouts, exemplos ou outras referências visuais, utilize-os como orientação para a execução da tarefa, respeitando os detalhes e as características solicitados. Não ignore elementos importantes das referências nem faça adaptações que alterem o resultado visual esperado pelo usuário.

	REGRA 31. Proteger a identidade visual da marca: preserve os elementos que representam a identidade da marca, como logotipo, cores institucionais e tipografia principal. Não os modifique sem necessidade e autorização do usuário.

	REGRA 32. Analisar padrões existentes e aprovar novas soluções visuais: antes de definir uma solução visual, analise os modelos, variantes e orientações existentes no Design System, nas Skills, nas especificações das páginas e nos componentes do projeto.
	Quando as referências existentes não oferecerem uma solução adequada ou o elemento não possuir especificações definidas, o agente poderá criar novas propostas, modelos, variantes, composições e soluções visuais, incluindo ícones, efeitos e interações.
	Toda nova solução visual deve ser apresentada ao usuário para avaliação e aprovação antes de sua implementação, exceto quando sua criação já estiver contemplada na solicitação do usuário, respeitando os limites de autorização estabelecidos na Regra 21. A proposta deve respeitar a identidade visual da marca e manter a coerência com os padrões e diretrizes do projeto.

	REGRA 33. Preservar e controlar a evolução das documentações de design: o Design System, as Skills e as especificações das páginas são documentos sensíveis e devem evoluir exclusivamente por meio de acréscimos, preservando integralmente todos os conteúdos, modelos, variantes, registros e estruturas existentes. É proibido excluir, substituir ou modificar qualquer informação já documentada, mesmo que esteja desatualizada, incorreta, seja semelhante a outra ou tenha características em comum.
	Qualquer necessidade de inclusão de novos conteúdos, modelos ou variantes deverá ser apresentada previamente ao usuário, com a explicação do que será acrescentado e onde será inserido. O agente só poderá realizar a inclusão após receber autorização expressa do usuário.
	Após a aprovação, o novo conteúdo deverá ser acrescentado separadamente à documentação correspondente, respeitando sua estrutura e organização, para permitir sua utilização nas próximas tarefas.
	Os acréscimos não devem gerar duplicação de informações. Quando um registro existente já atender à necessidade, o agente deverá utilizá-lo como referência, sem criar outro equivalente ou modificar o conteúdo original.

	REGRA 34. Classificar e validar novos padrões: antes de propor a inclusão de qualquer solução visual nas documentações do projeto, o agente deverá identificar se ela representa um padrão reutilizável, uma característica específica de determinada página ou apenas um ajuste pontual.
	Padrões reutilizáveis poderão ser propostos para inclusão no Design System ou nas Skills, conforme sua finalidade. Características próprias de uma página deverão ser direcionadas à respectiva especificação. Ajustes pontuais não precisam ser documentados quando não apresentarem necessidade de reutilização ou preservação futura.
	Toda proposta de inclusão deverá ser apresentada ao usuário para avaliação e aprovação antes de ser incorporada às documentações, respeitando também as proteções estabelecidas na Regra 33.



### PARTE 6. COMUNICAÇÃO E ENTREGA
O objetivo é estabelecer como os agentes devem apresentar os resultados das tarefas, comunicar problemas e informar o que foi ou não concluído.


	REGRA 35. Retorno de tarefas concluídas com sucesso: quando todas as alterações solicitadas forem realizadas corretamente, sem erros, travamentos, bloqueios ou pendências, o agente deverá retornar exclusivamente:

	- Concluído

	Não deverá apresentar explicações, listas de alterações ou resumos do que foi 	feito.

	REGRA 36. Retorno de tarefas parcialmente concluídas: quando apenas parte das 	alterações solicitadas puder ser realizada, o agente deverá executar 	normalmente todos os itens possíveis. Para os itens que não puderem ser 	executados devido a imprevistos ou impedimentos, não deverá tentar contornar a 	situação por meio de soluções alternativas ou modificações diferentes das 	solicitadas. As alterações concluídas com sucesso deverão ser preservadas, sem 	serem desfeitas em razão de impedimentos em outros itens. Ao finalizar, o 	agente deverá apresentar o resultado individual de cada item, identificando o 	que foi concluído e o que apresentou erro ou não pôde ser executado, 	acompanhado de uma explicação objetiva sobre cada impedimento.

	Exemplo:
		Botões: Concluído
		Texto: Concluído
		Margens: Erro na Alteração 
			O ajuste poderia comprometer outra seção do projeto.

	Dessa forma, não há dúvida sobre o que foi feito e o que ficou pendente. A 	explicação deve ser apresentada somente nos itens que apresentarem erro ou 	impedimento.

	REGRA 37. Explicar impedimentos e propor soluções: quando nenhuma das alterações solicitadas puder ser executada, não tente contornar as restrições realizando mudanças diferentes. Informe o que aconteceu, por que a tarefa não pôde ser realizada, quais problemas, limitações ou impedimentos foram encontrados e, quando possível, apresente uma proposta de solução para resolver o problema e permitir a execução da tarefa.
	Exemplo:
		Erro na Alteração. 
		As modificações solicitadas não foram realizadas porque exigiriam alterações em componentes que não possuem autorização para modificação. Prosseguir poderia comprometer funcionalidades existentes. uma forma para realizar seria ...	
	Qualquer solução alternativa deverá ser apresentada como proposta e dependerá de autorização do usuário antes de sua execução.




