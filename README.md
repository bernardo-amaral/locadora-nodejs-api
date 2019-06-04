[![Build Status](https://travis-ci.org/bernardo-amaral/nodejs-api-jwt.svg?branch=master)](https://travis-ci.org/bernardo-amaral/nodejs-api-jwt)

# NodeJs API Server

### Pré-requisitos

NodeJs 10+

```
https://nodejs.org/
```

Docker CE

```
https://hub.docker.com/search?offering=community&type=edition
```

## Instalação

- No diretório principal da aplicação execute o seguinte comando:

```
docker-compose up --build
```
- Acesse o container com o comando:

```bash
docker-compose exec -ti nodeapi bash
```

- Dentro do container execute os seguintes comandos:

```node.js
npm run migrate
npm run seed
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

- **Listar jogos disponíveis:**
```
GET http://localhost:3000/api/games?token=
```

## Autor

* **Bernardo Amaral** - [bernardo-amaral](https://github.com/bernardo-amaral).
