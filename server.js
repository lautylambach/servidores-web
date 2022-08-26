const Contenedor = require('./Contenedor.js')
const manager = new Contenedor()

const express = require('express')

const app = express();

const server= app.listen(8080, ()=>{
    console.log('server up')
})
server.on("error", error =>(console.log(error)))

app.get('/productos', (request, response)=>{
    manager.getAll()
    .then(result => {
        response.send(result)
    } )
       
})
app.get('/productoRandom', (request,response)=>{
    manager.getAll()
    .then(result => {
        let array = (result)
        let random = Math.floor(Math.random() * array.length)
        let producto = result[random]
        console.log(producto)
        response.send(`<h1>${producto.title}<h1>
                        <p>${producto.price}<p>
                        <img src="${producto.thumbnail}">`)
    } )
    
})
