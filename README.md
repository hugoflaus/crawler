<h1>Crawler 💻</h1>


## Objetivo
Desenvolver um crawler (coletor) capaz de buscar uma lista de produtos no Mercado Livre.

## 🚀 Tecnologias Utilizadas
- Node.js
- TypeScript
- Winston

## 🚀 💻 Como rodar o projeto 🚀

# Instalar as dependências npm ou yarn
  $ yarn

# Iniciar o projeto
  $ yarn dev:server


## 🚀 Endpoint criado 🚀
post http://localhost:3333/mercadolivre

Body - JSON

{  
 "search": String, `// termo usado na busca`  
 "limit": Int `// número de registros retornados`  
}  
