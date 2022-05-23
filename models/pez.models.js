const mongoose = require('mysql');
const { Schema } = mongoose;

const MotoSchema = new Schema({
    especie: { type: String, required: true },
    nombre: { type: String, required: true },
});

module.exports = mysql.model('Pez', PezSchema);