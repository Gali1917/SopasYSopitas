const express = require('express');
const mongoose = require('mongoose');
const menuRouter = require('./routes/menuRoute');

//Variable de ambiente
require('dotenv').config();

const app = express();

//Configuracion del CORS
const cors = require('cors');
app.use(cors());

//Definicion del puerto
const port = process.env.PORT || 5005;

//Middleware (Antepone el /api a la ruta)
app.use(express.json());
app.use('/api', menuRouter);

//Importacion body parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: 'true'}));

app.get('/', (req, res) =>{
    res.send('Servidor funcionando.')
});

//Creacion de conexion a MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI)
    .then(() =>{
        console.log("Base de datos conectada")
    })
    .catch((error) =>{
        console.log(error)
    });

//Servidor escuchando
app.listen(port, () =>{
    console.log("Servidor iniciado por el puerto", port)
});