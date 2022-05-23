const mysql = require('mysql');
const { Schema } = mysql;

const ComentarioSchema = new Schema({
    descripcion: { type: String }
});

module.exports = mysql.model('Comentario', ComentarioSchema);