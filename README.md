# Instalando projeto com fastify

## Comandos

### Dependências gerais
- npm i fastify 

### Dependências de desenvolvimento

-- npm i typescript tsx -D

**OBS:** *O tsx precisa ser configurado no package.json*

```json
"scripts": {
  "dev": "tsx watch src/server.ts",
}
```

## Configurações do servidor

**Para configurar um servidor de desenvolvimento, basta entrar no site do [fastify](https://fastify.io) e copiar o código lá descrito em um arquivo *server.ts***


# RF (Requisitos Funcionais)

[x] O usuário deve poder criar uma nova transação;
[x] O usuário deve poder obter um resumo da sua conta;
[x] O usuário deve poder listar todas as transações que já ocorreram;
[x] O usuário deve poder visualizar uma transação única;


# RN (Regras de Negócio)

[x] A transação pode ser de dois tipos
    1. crédito, que somará ao valor total
    2. débito, que subtrairá do valor total
[x] Deve ser possível identificarmos o usuário entre entre as requisições
[x] O usuário só pode visualizar transações o qual ele criou;