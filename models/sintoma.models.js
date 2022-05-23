const mysql = require('mysql');
const { Schema } = mysql;

const FallaSchema = new Schema({
    descripcion: { type: String, required: true },
    observacion: { type: String, required: true }
});

module.exports = mysql.model('Sintoma', SintomaSchema);