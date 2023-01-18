## SHARENERGY 2023/01

### Funcionalidade do projeto:

* A página inicial começa com ```Login page;```

* O usuário é capaz de se autenticar utilizando username ```desafiosharenergy``` e password ```sh@r3n3rgy```,
após o primeiro acesso o usuário consegue logar automáticamente utilizando o botão de ```Relembre-me.```

* Após login o usuário é capaz de visualizar uma listagem de usuários gerada a partir da api 
```[Random User Generator](https://randomuser.me/).``` ademais o usuário pode utilizar o compo de pesquisa para fazer busca por nome, email ou username e pode paginar os dados.

* O usuário pode navegar na aplicação para a tela ```dog``` com botão refresh que, ao ser clicado, gera uma imagem aleatória de um novo cachorro da api `[Random Dog](https://random.dog/)`. Pode ir para tela `cat` podendo selecionar o status code http qualquer, e trazendo uma imagem da api `[HTTP Cat](https://http.cat/)` relacionada ao status escolhido. Por fim a página de clientes, contem uma lista de cliente sendo capaz de criar novos clientes, deletar cliente, atualizar cliente específico.


<h2> 🛠 Tecnologias front-end </h2>

Ferramentas usadas na construção do projeto:

* React JS com template do typescript
* Styled-components
* Design System: Material UI
* Customs e React Hooks
* React Router DOM
* Integração com API
* Axios

<h2> 🛠 Tecnologias back-end </h2>

* NodeJs
* Typescript
* Express
* Postman
* Mongodb
* Knex
* Paradigma de orientação a objetos
* Arquitetura em camadas


 ### Instruções para rodar aplicação localmente
 
 Clone o projeto

```bash
git clone https://github.com/ViniciusDuarte17/Vinicius-duarte-passo.git
```


Para iniciar o projeto fron-end, por linha de terminal navega até pasta front-sharenergy e inicia o servidor com:
```bash
npm install,
```
Para rodar o projeto com:
```
npm run dev 
```

Para iniciar o projeto back-end, por linha de terminal navega até pasta Back-end e inicia o servidor Instalando as dependências com:

```bash
npm install
```
Para rodar o projeto com:
```
npm run dev 
``` 

OBS: IMPORTANTE `criar um arquivo .env com as variáveis JWT_KEY = valor, ACCESS_TOKEN_EXPIRES_IN = escolha por quantos minutos ou horas o token expira, DB_USER = com seu usuário do momgoDB, DB_PASSWORD = com sua senha do momgoDB`.