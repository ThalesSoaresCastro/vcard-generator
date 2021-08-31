# Vcard-application

## Com Docker:

Por padrão o fastify é vinculado ao localhost, sendo necessário declarar explicitamente
o endereço 0:0:0:0 em listen para que seja possível o acesso no container, alterar:
/vcard-generator-api/server.js

mudar de:
app.listen(port, (err, address) => { ...

para:
app.listen(port,'0.0.0.0', (err,address) => { ...


Rodar docker-compose -p <stack-name> up -d ou apenas docker-compose up -d
A api ficará setada na porta 3000 e o front-end irá estar na porta 5051
Para acessar o front-end: http://localhost:5051

## Sem Docker:

** 1 passo: Inicializar a api(vcard-generator-api) na porta desejada;

** 2 passo: Inicializar o next-app:

executar em modo de desenvolvimento:
- yarn dev ou npm run dev

executar em modo de produção:
- yarn build ou npm run build
- yarn start ou npm run start

Acessar o endereço: http://localhost:5051

