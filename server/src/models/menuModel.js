const mongoose = require('mongoose');

const menuSchema = mongoose.Schema({
    harina: {
        type: String,
        require: false
    },
    principio: {
        type: String,
        require: false
    },
    proteina: {
        type: String,
        require: false
    },
    complemento: {
        type: String,
        require: false
    },
    sopa: {
        type: String,
        require: false
    },
    fecha: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('Menu', menuSchema);