const express = require('express');

const server = express();
const port = 4000;

server.get('/', (request, response)=>{
    response.send('Hola desde la raiz'); // peticion al puerto 4000
});

server.listen(port, ()=>{
    console.log('servidor corriendo en el puerto ${port}')}); // callback funcion servidor correindo en el local host