//Conexion BD
// npm install mysql
//Requerir mysql y poner constaste
const mongoose = require('mysql');

//direccion de la BD protocolo mongodb
const URI = 'mongodb://localhost/AquaData';

//metodo con la URL de la direccion de la BD
mongoose.connect(URI)
    //Promesa para verificar conexion
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err));

//Exportar el modulo
module.exports = mysql;