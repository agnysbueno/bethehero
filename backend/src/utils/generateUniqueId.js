const crypto = require('crypto');

module.exports = function generateUniqueId() {

    //gerar uma string hexadecimal aleatória de 4 bytes 
    return crypto.randomBytes(4).toString('HEX');

}