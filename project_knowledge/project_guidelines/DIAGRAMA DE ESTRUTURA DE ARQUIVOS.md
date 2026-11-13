DIAGRAMA DE ESTRUTURA DE ARQUIVOS ( ÁRVORE DE DIRETÓRIOS )


waybit/
│
├── .lovable/
│   ├── plan/
│   └── project.json
│
├── .output/ (artefatos gerados pelo build; ignorados pelo Git)
│   ├── public/
│   │   ├── assets/
│   │   └── robots.txt (copiado de src/robots.txt pelo plugin em vite.config.ts)
│   │
│   └── server/
│
├── .tanstack/
│   └── tmp/
│
├── node_modules/
│
├── project_knowledge/
│   ├── design_sistem/
│   ├── project_documentation/
│   │   └── business/
│   │
│   ├── skills/
│   └── specifications/
│
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── home/
│   │   ├── sections/
│   │   ├── segment/
│   │   └── ui/
│   │
│   ├── data/
│   ├── hooks/
│   ├── lib/
│   ├── routes/
│   ├── robots.txt
│   ├── router.tsx
│   ├── routeTree.gen.ts
│   ├── server.ts
│   ├── start.ts
│   └── styles.css
│
├── .gitignore
├── .prettierignore
├── .prettierrc
├── AGENTS_RULES.md
├── bun.lock
├── bunfig.toml 
├── components.json
├── eslint.config.js
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.json
└── vite.config.ts




DESCRIÇÕES E ENTENDIMENTO DE CADA PASTA

______________________________________________________________________________________________________________________________

**Nome da pasta/arquivo:** `.lovable/`

**Finalidade:**
* rmazenar metadados de integração com o Lovable, permitindo que a plataforma reconheça e trabalhe com o projeto.

**O que deve conter:**
* Arquivos de metadados e suporte utilizados pelo Lovable.
* Subpastas e arquivos criados ou utilizados pela plataforma para integração e sincronização.

**O que não deve conter:**
* Documentação geral do projeto.
* Imagens e arquivos públicos do site.
* Código-fonte da aplicação.
* Arquivos sem relação com a integração com o Lovable.

______________________________________________________________________________________________________________________________

**Nome da pasta/arquivo:** `.lovable/plan/`

**Finalidade:**
* Subpasta que pode armazenar planos utilizados nos fluxos de trabalho do Lovable.

**O que deve conter:**
* Arquivos de planejamento gerados ou utilizados pelo Lovable, quando aplicável.

**O que não deve conter:**
* Documentação geral, código-fonte, imagens ou arquivos públicos do site.

______________________________________________________________________________________________________________________________

**Nome da pasta/arquivo:** `.lovable/project.json`

**Finalidade:**
* Armazenar metadados que identificam informações do projeto para a integração com o Lovable, incluindo a versão do esquema e o template TanStack Start utilizado.

**O que deve conter:**
* Os metadados definidos pelo Lovable para identificação e integração do projeto.

**O que não deve conter:**
* Informações gerais, documentação, configurações sem relação com sua finalidade ou dados inseridos arbitrariamente.

______________________________________________________________________________________________________________________________

**Nome da pasta/arquivo:** `.output/`

**Finalidade:**
* AArmazenar os arquivos gerados durante o processo de build da aplicação, servindo como diretório de saída para a versão construída do projeto.

**O que deve conter:**
* Os arquivos gerados pelo processo de build.
* Os recursos públicos preparados para distribuição.
* Os arquivos necessários para executar a versão gerada da aplicação.

**O que não deve conter:**
* Código-fonte original da aplicação.
* Documentação do projeto.
* Arquivos originais de imagens e outros recursos mantidos como fonte.
* Arquivos criados manualmente para armazenamento permanente.

______________________________________________________________________________________________________________________________

**Nome da pasta/arquivo:** `.output/public/`

**Finalidade:**
* Armazenar os recursos públicos gerados ou copiados durante o build, preparados para distribuição junto à aplicação.

**O que deve conter:**
* Recursos públicos gerados ou copiados durante o build.
* Arquivos como robots.txt, copiado de src/robots.txt pelo plugin copy-robots-txt-to-published-root definido em vite.config.ts.
* Diretórios de recursos, como assets/.

**O que não deve conter:**
* Arquivos originais que devem ser mantidos no código-fonte.
* Documentação geral.
* Arquivos que precisam ser editados diretamente durante o desenvolvimento.

______________________________________________________________________________________________________________________________

**Nome da pasta/arquivo:** `.output/server/`

**Finalidade:**
* Armazenar os arquivos gerados para execução da parte de servidor da aplicação.

**O que deve conter:**
* Código e arquivos produzidos pelo processo de build necessários ao funcionamento do servidor.

**O que não deve conter:**
* Código-fonte original, documentação ou arquivos adicionados manualmente.

______________________________________________________________________________________________________________________________

**Nome da pasta/arquivo:** `.tanstack/`

**Finalidade:**
* Armazenar arquivos auxiliares e estruturas geradas ou utilizadas pelas ferramentas do ecossistema TanStack durante o desenvolvimento e a execução do projeto.

**O que deve conter:**
* Arquivos e subpastas gerados ou utilizados pelas ferramentas TanStack.

**O que não deve conter:**
* Documentação geral, imagens, arquivos públicos ou código-fonte criado manualmente sem relação com a ferramenta.

______________________________________________________________________________________________________________________________

**Nome da pasta/arquivo:** `.tanstack/tmp`

**Finalidade:**
* Armazenar arquivos temporários utilizados pelas ferramentas TanStack durante o desenvolvimento e processamento do projeto.

**O que deve conter:**
* Arquivos temporários gerados ou utilizados pelas ferramentas TanStack.

**O que não deve conter:**
* Documentação permanente.
* Código-fonte original da aplicação.
* Arquivos que precisem ser preservados como parte da estrutura do projeto.

______________________________________________________________________________________________________________________________

**Nome da pasta/arquivo:** `node_modules/`

**Finalidade:**
* Armazenar as dependências instaladas do projeto, incluindo bibliotecas e pacotes utilizados pela aplicação e pelas ferramentas de desenvolvimento.

**O que deve conter:**
* Pacotes instalados conforme as dependências declaradas nos arquivos de configuração do projeto.

**O que não deve conter:**
* Código-fonte próprio, imagens, documentação ou arquivos adicionados manualmente.

______________________________________________________________________________________________________________________________

**Nome da pasta/arquivo:** `project_knowledge/`

**Finalidade:**
* Centralizar toda a documentação e o conhecimento necessário para compreender, desenvolver, manter e evoluir o projeto Waybit.

**O que deve conter:**
* Documentação sobre a empresa, marca e produtos.
* Diretrizes gerais do projeto.
* Sistema de identidade visual e padrões de interface.
* Especificações das páginas e funcionalidades.
* Instruções e procedimentos para execução de tarefas pelos agentes.
* Registros de decisões e definições importantes do projeto, quando necessário.

**O que não deve conter:**
* Código-fonte da aplicação.
* Imagens e arquivos públicos utilizados diretamente pelo site.
* Dependências e arquivos gerados pelo build.
* Arquivos temporários de desenvolvimento.

______________________________________________________________________________________________________________________________

**Nome da pasta/arquivo:** `project_knowledge/design_sistem/`

**Finalidade:**
* Centralizar as definições da identidade visual e os padrões de design utilizados no site.

**O que deve conter:**
* Paleta de cores.
* Tipografia e hierarquia textual.
* Padrões de espaçamento.
* Bordas, raios e sombras.
* Botões, elementos visuais e componentes.
* Diretrizes de responsividade.
* Referências visuais da marca.

**O que não deve conter:**
* Informações comerciais, regras de comportamento dos agentes ou especificações exclusivas de uma página.
* Especificações de conteúdo e estrutura de páginas específicas.

______________________________________________________________________________________________________________________________

**Nome da pasta/arquivo:** `project_knowledge/project_documentation/`

**Finalidade:**
* Centralizar a documentação de referência do projeto Waybit, reunindo informações, guias e registros necessários para que os agentes compreendam o projeto, seus produtos, sistemas, estruturas e funcionamento.

**O que deve conter:**
* Documentação institucional e informações gerais sobre o projeto Waybit.
* Guias sobre a organização e a estrutura de arquivos e pastas.
* Documentação sobre a arquitetura e a organização técnica do projeto.
* Descrições dos sistemas, suas funcionalidades, responsabilidades e limitações.
* Registros de decisões e definições gerais importantes para o desenvolvimento e a manutenção.

**O que não deve conter:**
* Informações comerciais e específicas dos produtos, que devem ficar em business/.
* Regras de comportamento dos agentes.
* Especificações exclusivas de páginas e funcionalidades, destinadas a specifications/.
* Procedimentos específicos para execução de tarefas, destinados a skills/.
* Código-fonte, arquivos de interface e recursos gráficos do projeto.

______________________________________________________________________________________________________________________________

**Nome da pasta/arquivo:** `project_knowledge/project_documentation/business/`

**Finalidade:**
* Centralizar informações sobre a empresa Waybit, seus produtos, sistemas, segmentos de atuação e características comerciais, servindo como referência para a criação e manutenção de conteúdos relacionados ao negócio.

**O que deve conter:**
* Informações institucionais sobre a Waybit.
* Descrições dos produtos e sistemas oferecidos.
* Funcionalidades, características e benefícios dos produtos.
* Informações sobre os segmentos de mercado atendidos.
* Argumentos comerciais, diferenciais e objeções de venda.
* Informações necessárias para a criação de páginas comerciais, landing pages e conteúdos de divulgação.

**O que não deve conter:**
* Documentação sobre arquitetura e organização técnica do projeto.
* Guias de estrutura de arquivos e pastas.
* Regras de comportamento dos agentes.
* Especificações exclusivas de páginas e funcionalidades.
* Procedimentos específicos para execução de tarefas.
* Código-fonte e recursos gráficos do projeto.

______________________________________________________________________________________________________________________________

**Nome da pasta/arquivo:** `project_knowledge/skills/`

**Finalidade:**
* Armazenar instruções e procedimentos especializados que orientam os agentes na execução de determinadas tarefas.

**O que deve conter:**
* Instruções específicas para tarefas recorrentes.
* Procedimentos de implementação.
* Orientações técnicas especializadas.
* Fluxos de trabalho e padrões de execução.

**O que não deve conter:**
* Documentação institucional e comercial do projeto.
* Especificações completas de páginas ou funcionalidades.
* Cópias de diretrizes gerais já documentadas em outras categorias.
* Código-fonte ou arquivos da aplicação que não façam parte de uma Skill.

______________________________________________________________________________________________________________________________

**Nome da pasta/arquivo:** `project_knowledge/specifications/`

**Finalidade:**
* Armazenar especificações detalhadas sobre páginas, funcionalidades e estruturas que devem ser implementadas no projeto.

**O que deve conter:**
* Especificações das páginas do site.
* Estrutura e organização das seções.
* Comportamentos esperados de funcionalidades.
* Requisitos específicos de implementação.

**O que não deve conter:**
* Regras gerais de identidade visual, destinadas a `design_sistem/.`
* Informações institucionais e comerciais, destinadas a `project_documentation/business/.`
* Procedimentos genéricos de desenvolvimento e execução de tarefas, destinados a `skills/.`

______________________________________________________________________________________________________________________________

**Nome da pasta/arquivo:** `src/assets/`

**Finalidade:**
* Armazenar recursos visuais que são importados diretamente pelo código-fonte da aplicação e processados pelo Vite durante o build.

**O que deve conter:**
* Imagens utilizadas por componentes e rotas por meio de imports.
* Logos e banners importados pelo código.
* Recursos visuais que precisam passar pelo processamento do Vite.

**O que não deve conter:**
* Arquivos gerados pelo build.
* Cópias desnecessárias de recursos.
* Arquivos públicos que não precisam ser processados ou importados pelo código.

______________________________________________________________________________________________________________________________

**Nome da pasta/arquivo:** `src/components/`

**Finalidade:**
* Armazenar componentes que constroem a interface visual da aplicação, incluindo elementos reutilizáveis e componentes específicos de páginas ou funcionalidades.

**O que deve conter:**
* Cabeçalhos e rodapés.
* Botões e elementos de interface reutilizáveis.
* Menus e elementos de navegação.
* Seções reutilizáveis.
* Cards, formulários e outros componentes visuais.
* Componentes específicos de funcionalidades.

**O que não deve conter:**
* Páginas completas que pertencem ao sistema de rotas.
* Dados separados da interface.
* Documentação do projeto.
* Arquivos de recursos visuais que devem ficar em `src/assets/`.

______________________________________________________________________________________________________________________________

**Nome da pasta/arquivo:** `src/components/home/`

**Finalidade:**
* Armazenar componentes visuais utilizados na construção da página inicial (Home), incluindo seções, elementos reutilizáveis e componentes específicos de suas funcionalidades.

**O que deve conter:**
* Cabeçalho e rodapé específicos da Home, caso existam.
* Seções da página inicial.
* Cards e elementos visuais.
* Formulários e botões específicos da Home.
* Componentes reutilizáveis dentro da própria Home.

**O que não deve conter:**
* Páginas completas pertencentes ao sistema de rotas.
* Dados separados da interface.
* Documentação do projeto.
* Arquivos de recursos visuais que devem ficar em `src/assets/`.
* Componentes compartilhados globalmente que devem ficar em `src/components/`.

______________________________________________________________________________________________________________________________

**Nome da pasta/arquivo:** `src/components/sections/`

**Finalidade:**
* Armazenar componentes que representam seções completas da interface e que podem ser reutilizados em diferentes páginas da aplicação.

**O que deve conter:**
* Seções de apresentação e introdução.
* Seções de benefícios e funcionalidades.
* Seções de estatísticas.
* Seções de depoimentos.
* Seções de planos e preços.
* Seções de chamadas para ação (CTA).
* Seções de perguntas frequentes (FAQ).
* Outras estruturas visuais reutilizáveis entre páginas.

**O que não deve conter:**
* Páginas completas pertencentes ao sistema de rotas.
* Componentes exclusivos da Home (devem ficar em `home/`).
* Cabeçalhos, rodapés e menus globais (devem ficar em `components/`).
* Dados separados da interface.
* Documentação do projeto.
* Arquivos de recursos visuais que devem ficar em `src/assets/.`

______________________________________________________________________________________________________________________________

**Nome da pasta/arquivo:** `src/components/segment/`

**Finalidade:**
* Armazenar componentes visuais específicos dos segmentos de atuação da aplicação, agrupando elementos, seções e funcionalidades desenvolvidos para atender às particularidades de cada segmento.

**O que deve conter:**
* Componentes específicos do segmento Food.
* Componentes específicos do segmento Varejo.
* Componentes específicos do segmento Autocenter.
* Seções e elementos visuais exclusivos de cada segmento.
* Cards, formulários e elementos de apresentação específicos.
* Componentes reutilizáveis dentro de cada segmento.

**O que não deve conter:**
* Páginas completas pertencentes ao sistema de rotas.
* Componentes globais ou compartilhados entre segmentos (devem ficar em `components/` ou `sections/`).
* Dados separados da interface.
* Documentação do projeto.
* Arquivos de recursos visuais que devem ficar em `src/assets/`.

______________________________________________________________________________________________________________________________

**Nome da pasta/arquivo:** `src/components/ui/`

**Finalidade:**
* Armazenar componentes fundamentais e reutilizáveis da interface visual, utilizados na construção de diferentes páginas e funcionalidades da aplicação, mantendo consistência visual e evitando duplicação de código.

**O que deve conter:**
* Botões e variações de botões.
* Inputs e campos de formulário.
* Selects e caixas de seleção.
* Modais e caixas de diálogo.
* Tooltips e elementos de ajuda.
* Badges e indicadores visuais.
* Cards genéricos.
* Abas, acordeões e componentes de interação.
* Elementos básicos de navegação.
* Outros componentes visuais reutilizáveis.

**O que não deve conter:**
* Páginas completas pertencentes ao sistema de rotas.
* Seções completas de páginas.
* Componentes exclusivos da Home.
* Componentes específicos dos segmentos Food, Varejo e Autocenter.
* Dados separados da interface.
* Documentação do projeto.
* Arquivos de recursos visuais que devem ficar em src/assets/

______________________________________________________________________________________________________________________________

**Nome da pasta/arquivo:** `src/data/`

**Finalidade:**
* Centralizar os dados e conteúdos utilizados pela aplicação, mantendo essas informações separadas dos componentes que as apresentam.

**O que deve conter:**
* Listas de informações utilizadas no site.
* Conteúdos textuais estruturados.
* Dados de cards, menus e seções.
* Informações de produtos e funcionalidades utilizadas pela interface.
* Configurações e estruturas de dados estáticos.
* Arquivos que alimentam componentes e páginas.

**O que não deve conter:**
* Componentes visuais.
* Páginas e rotas.
* Estilos CSS.
* Documentação geral do projeto.
* Imagens públicas armazenadas como arquivos de conteúdo.

______________________________________________________________________________________________________________________________

**Nome da pasta/arquivo:** `src/hooks/`

**Finalidade:**
* Armazenar Hooks personalizados do React, responsáveis por encapsular lógicas reutilizáveis que podem ser utilizadas por diferentes componentes ou partes da aplicação.


**O que deve conter:**
* Hooks personalizados (custom hooks).
* Lógicas reutilizáveis de estado e ciclo de vida.
* Lógicas de interação e comportamento da interface.
* Controle de eventos e funcionalidades reutilizáveis.
* Lógicas que utilizam Hooks do React.

**O que não deve conter:**
* Componentes visuais ou elementos de interface.
* Funções utilitárias simples que não dependem de Hooks do React.
* Configurações de bibliotecas externas.
* Dados estáticos ou informações de conteúdo.
* Lógicas específicas de componentes ou páginas que não justifiquem a criação de um Hook separado.

______________________________________________________________________________________________________________________________


**Nome da pasta/arquivo:** `src/lib/`

**Finalidade:**
* Armazenar funções utilitárias, configurações técnicas e recursos auxiliares compartilhados que dão suporte ao funcionamento da aplicação.


**O que deve conter:**
* Funções utilitárias reutilizáveis.
* Funções de formatação e conversão de dados.
* Funções auxiliares de validação.
* Configurações de bibliotecas externas.
* Integrações e recursos técnicos compartilhados.
* Constantes técnicas utilizadas em diferentes partes da aplicação, quando não forem dados de conteúdo.

**O que não deve conter:**
* Componentes visuais ou elementos de interface.
* Hooks personalizados do React.
* Páginas ou estruturas de rotas.
* Dados de conteúdo ou informações comerciais do negócio.
* Lógicas específicas de uma página ou componente sem necessidade de compartilhamento.
* Cópias de funções que já existem em outros arquivos.


______________________________________________________________________________________________________________________________

**Nome da pasta/arquivo:** `src/routes/`

**Finalidade:**
* Armazenar os arquivos que definem as páginas e rotas da aplicação, seguindo o sistema de roteamento baseado em arquivos do TanStack Router.

**O que deve conter:**
* Arquivos que definem as páginas do site.
* Arquivo raiz das rotas (`__root.tsx`).
* Componentes e estruturas associados às páginas, quando fizerem parte da implementação da rota.
* Definições de rotas e configurações específicas de cada página.
* Recursos necessários ao funcionamento das páginas dentro do sistema de roteamento.

**O que não deve conter:**
* Configuração principal do roteador, que pertence a `src/router.tsx`.
* Árvore de rotas gerada automaticamente, que pertence a `src/routeTree.gen.ts`.
* Componentes compartilhados que devem ficar em `src/components/`.
* Dados separados da interface que devem ficar em `src/data/`.
* Recursos visuais originais que devem ficar em `src/assets/`.

______________________________________________________________________________________________________________________________

**Nome da pasta/arquivo:** `src/robots.txt`

**Finalidade:**
* Definir as instruções de rastreamento e acesso dos mecanismos de busca e outros robôs ao conteúdo público do site. Essas instruções orientam o rastreamento, mas não garantem a remoção ou exclusão de páginas dos resultados de busca.

**O que deve conter:**
* Regras de permissão e bloqueio de rastreamento.
* Diretivas específicas para mecanismos de busca, quando necessário.
* Referência ao sitemap, caso exista e seja necessário.

**O que não deve conter:**
* Conteúdo de páginas ou informações comerciais.
* Código HTML, CSS ou JavaScript.
* Informações confidenciais ou dados de acesso.
* Regras sem relação com rastreamento e indexação.
* Regras de bloqueio de rastreamento utilizadas como garantia de desindexação ou exclusão de páginas dos resultados de busca.

______________________________________________________________________________________________________________________________

**Nome da pasta/arquivo:** `src/router.tsx`

**Finalidade:**
* Configurar o roteador principal da aplicação, conectando a árvore de rotas gerada pelo TanStack Router aos recursos globais necessários para seu funcionamento.

**O que deve conter:**
* Configuração e criação do roteador.
* Integração com a árvore de rotas gerada.
* Configurações globais do roteamento.
* Contextos e integrações necessários para o funcionamento das rotas.

**O que não deve conter:**
* Implementação das páginas e seus componentes visuais.
* Definições manuais da árvore de rotas.
* Estilos ou regras visuais.
* Lógicas específicas de páginas que devem permanecer em seus respectivos arquivos.

______________________________________________________________________________________________________________________________

**Nome da pasta/arquivo:** `src/routeTree.gen.ts`

**Finalidade:**
* Armazenar a árvore de rotas gerada automaticamente pelo TanStack Router, utilizada pelo roteador principal para reconhecer e conectar as rotas da aplicação.

**O que deve conter:**
* Definições geradas automaticamente a partir dos arquivos de rotas.
* Informações sobre a estrutura e a conexão entre as rotas.

**O que não deve conter:**
* Definições manuais de rotas.
* Código ou configurações inseridos manualmente.
* Implementações de páginas ou componentes.

______________________________________________________________________________________________________________________________


**Nome da pasta/arquivo:** `src/server.ts`

**Finalidade:**
* Definir a entrada personalizada do servidor da aplicação, controlando o processamento das requisições e o tratamento de determinadas respostas durante a execução do servidor.

**O que deve conter:**
* Implementação da entrada personalizada do servidor.
* Tratamentos específicos de requisições e respostas.
* Integrações necessárias ao funcionamento do servidor.
* Tratamentos personalizados de erros, quando necessários.

**O que não deve conter:**
* Componentes visuais da aplicação.
* Implementações de páginas ou rotas.
* Estilos globais.
* Lógicas de interface que pertencem ao cliente.

______________________________________________________________________________________________________________________________

**Nome da pasta/arquivo:** `src/start.ts`

**Finalidade:**
* Configurar a inicialização do TanStack Start, definindo recursos e comportamentos globais relacionados à execução da aplicação no ambiente cliente e servidor.

**O que deve conter:**
* Configuração da instância do TanStack Start.
* Definições de middlewares.
* Configurações de tratamento de erros.
* Configurações relacionadas à proteção e ao processamento de requisições.

**O que não deve conter:**
* Componentes visuais.
* Implementações de páginas.
* Estilos e regras de aparência.
* Lógicas específicas de funcionalidades que pertencem a outras partes da aplicação.


______________________________________________________________________________________________________________________________

**Nome da pasta/arquivo:** `src/styles.css`

**Finalidade:**
* Centralizar os estilos globais da aplicação, estabelecendo as regras de apresentação compartilhadas pelas páginas e componentes.

**O que deve conter:**
* Estilos globais da aplicação.
* Variáveis CSS e tokens visuais.
* Configurações de tipografia global.
* Estilos básicos de elementos HTML.
* Regras globais de responsividade.
* Importações de estilos e bibliotecas utilizadas pelo projeto.

**O que não deve conter:**
* Implementações de componentes React.
* Lógicas JavaScript ou TypeScript.
* Estilos específicos de componentes que já possuem arquivos próprios de estilização, quando aplicável.
* Regras visuais que contrariem o Design System definido em `project_knowledge/design_sistem/`, sem justificativa ou definição específica aprovada.

______________________________________________________________________________________________________________________________

**Orientação geral — arquivos de dependências**

Esses arquivos fazem parte da configuração técnica do projeto e são responsáveis por definir, controlar e manter as dependências, ferramentas e configurações do ambiente de desenvolvimento.

Os agentes devem preservá-los e não devem modificá-los, excluí-los, recriá-los ou substituí-los sem necessidade justificada e autorização.

Antes de qualquer alteração, devem verificar a configuração existente, identificar o gerenciador de pacotes utilizado e considerar os possíveis impactos no ambiente de desenvolvimento, na instalação das dependências e no funcionamento do projeto. Em caso de dúvida, devem consultar as regras definidas em AGENTS_RULES.md.