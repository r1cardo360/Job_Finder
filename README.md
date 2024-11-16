# Job Finder

Projeto desenvolvido para gerenciar vagas de emprego, permitindo exibir, buscar e cadastrar vagas em um banco de dados.

## Tecnologias utilizadas
- **Front-end:** HTML, CSS, Bootstrap, JavaScript
- **Back-end:** Node.js com Express
- **Banco de Dados:** SQLite utilizando Sequelize
- **Template Engine:** Handlebars

## Funcionalidades
1. **Página Inicial (Index):**
   - Lista todas as vagas cadastradas.
   - Barra de pesquisa para filtrar vagas específicas.
   - Botões para visualizar detalhes da vaga ou cadastrar uma nova vaga.

2. **Página de Detalhes:**
   - Exibe informações detalhadas sobre a vaga selecionada.
   - Botão para retornar à página inicial.

3. **Página de Cadastro:**
   - Formulário do tipo `POST` para adicionar novas vagas ao banco de dados.
   - Campos para título da vaga, descrição, empresa contratante e salário.

## Como executar o projeto
1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor:
   ```bash
   npm start
   ```
4. Acesse o projeto no navegador em: http://localhost:3000.

## Estrutura do Projeto

### Páginas
- **index.hbs**: Exibe as vagas com filtros e botões de ação.
- **details.hbs**: Exibe detalhes da vaga.
- **addJob.hbs**: Formulário para cadastrar novas vagas.

### Banco de Dados
- Configurado com Sequelize e SQLite.
- Contém tabelas para armazenar vagas de emprego com informações como título, descrição, empresa e salário.

## Objetivo
Este projeto foi criado para demonstrar a aplicação de tecnologias modernas no desenvolvimento web, com foco em CRUD básico para vagas de emprego.

## Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.




