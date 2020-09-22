const express=require('express'),
rutas=express.Router(),
equipo=require('./controladorTerreno');

rutas.use('/equipo',equipo);

module.exports=rutas;