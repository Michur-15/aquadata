const mysql = require('mysql');
const { Schema } = mysql;

const DiagnosticoSchema = new Schema({
    descripcion: { type: String, required: true },
    observacion: { type: String, required: true }
});

module.exports = mysql.model('Diagnostico', DiagnosticoSchema);