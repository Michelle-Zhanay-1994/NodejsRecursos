const express=require('express');
const body_parser=require('body-parser');
const app=express();
var conection=require('./conexionbase-datos');
const rutas=require('./rutas');
app.use(body_parser.json());
app.use(body_parser.urlencoded({extended:true}));
app.use('/',rutas);
//var http=require("http");
//var server=http.createServer();
function mensaje(peticion,respuesta){
    respuesta.writeHead(200,{'content-type':'text/plain'})
    respuesta.write("Hola Mundo")
    respuesta.end();
}

//app.on('request',mensajejson);
var port = process.env.PORT||300
app.listen(3000,function(){
    console.log("El servidor se inicio correctamente")
});