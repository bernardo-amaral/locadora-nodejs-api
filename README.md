# Locadora API Server - NodeJs

### Pré-requisitos

NodeJs 10+

```
https://nodejs.org/
```

Mysql Server 8+

```
https://www.mysql.com/
```

## Instalação

- No diretório principal da aplicação execute o seguinte comando:

```
npm install
```

- Importe o mysql dump database.sql, localizado na raíz do projeto, para sua base de dados.

- Ajuste o arquivo ./app/model/database.js com suas definições de conexão com o banco de dados.

- Após tudo configurado, execute o comando abaixo para iniciar a aplicação:

```
npm start
```

## Como utilizar

- Para utilizar os endpoints do sistema, é necessário estar autenticado para obter o token.
O token terá validade de 24h, após este período ele será automaticamente invalidado. 
Dentro do banco de dados da aplicação, temos uma tabela com todos os access tokens criados, eles também podem ser invalidados via banco de dados.

- O token poderá ser informado nos endpoints de 3 formas, via header da requisição (informando como valor de 'x-access-token'), via parâmetro get ('parâmetro token') ou como parâmetro body da requisição (também definido como 'token').


- **Realizar login:**

```
POST http://localhost:3000/api/login

parâmetros:
- email
- password

resposta: 
Token de acesso

Exemplo:
 - email: bernardo.amaral85@gmail.com
 - password: senha123
```
- **Listar usuários:**
```
GET http://localhost:3000/api/v1/users?token=
```

- **Criar usuários:**
```
POST http://localhost:3000/api/v1/users?token=

parâmetros:
- name
- email
- password
```
- **Obter dados de um usuário:**
```
GET http://localhost:3000/api/v1/users/:userid?token=

parâmetros:
- userId, onde este parâmetro é o valor numérico do id do usuário. 

exemplo: 
GET http://localhost:3000/api/users/456?token=
```
- **Excluir um usuário:**
```
DELETE http://localhost:3000/api/v1/users/:userid?token=

parâmetros:
- userId, onde este parâmetro é o valor numérico do id do usuário. 

exemplo: 
DELETE http://localhost:3000/api/users/456?token=
````

- **Listar filmes disponíveis:**
```
GET http://localhost:3000/api/movies?token=
```

- **Procurar por filmes disponíveis:**
```
GET http://localhost:3000/api/movies/search/:partialName?token=

parâmetros:
- partialName, onde este parâmetro é uma parte do nome do filme no qual você deseja buscar, ou até mesmo o nome completo.

exemplo: 
GET http://localhost:3000/api/movies/search/jurass?token=

Exte exemplo retornará uma lista com todos os filmes que possuem este prefixo.
```

- **Alugar um filme:**
```
GET http://localhost:3000/api/movies/rent/:movieId/:userId?token=

parâmetros:
- movieId, refere-se ao id do filme no qual desejamos alugar;
- userId, refere-se ao id do usuário que está realizando a locação do filme;

exemplo:
GET http://localhost:3000/api/movies/rent/4/123?token=

No exemplo acima, o usuário de id 123 estará alugando o filme de id 4. O filme só permitirá locação caso exista unidades do mesmo no sistema.
```

- **Devolver um filme:**
```
GET http://localhost:3000/api/movies/return/:movieId/:userId?token=

parâmetros:
- movieId, refere-se ao id do filme no qual desejamos devolver;
- userId, refere-se ao id do usuário que está realizando a devolução do filme;

exemplo:
GET http://localhost:3000/api/movies/return/4/123?token=

No exemplo acima, o usuário de id 123 estará retornando o filme de id 4. O sistema só permitirá a devolução de um filme, caso o filme esteja em posse do usuário.
```

## Autor

* **Bernardo Amaral** - [bernardo-amaral](https://github.com/bernardo-amaral).
