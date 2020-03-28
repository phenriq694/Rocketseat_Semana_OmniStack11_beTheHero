<h1 align="center">
  <img 
    alt="Introdução ao React" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" 
    width="200px"
  />
</h1>
<h2 align="center">
  Be The Hero API
</h2>

Para iniciar a aplicação:
```
yarn start
```
Aplicar as migrations:
```
yarn knex migrate:latest
```
## Rotas:
Para criar um sessão na aplicação:
```
POST '/' 

Request Body
{
  "id": ""
}
```
Para listar todas as ONGs:
```
GET '/ongs'
```
Para cadastrar uma ONG:
```
POST '/ongs' 

Request Body
{
	"name": "",
	"email": "",
	"whatsapp": "",
	"city": "",
	"uf": ""
}
```
Para listar os casos cadastradas por uma determinada ONG:
```
GET '/profile'

Request Header
Authorization = ong_id
```
Para listar todos os casos:
```
GET '/incidents'
```
Para cadastrar um caso:
```
POST '/incidents' 

Request Body
{
	"title": "",
	"description": "",
	"value": 
}

Request Header
Authorization = ong_id
```
Para deletar um caso:
```
DELETE 'incidents/:incident_id'

Request Header
Authorization = ong_id
```

## Bibliotecas:
- knex;
- cors;
- nodemon;
- celebrate;

## Database:
- SQLite;

## Ferramentas:
- Insomnia;
