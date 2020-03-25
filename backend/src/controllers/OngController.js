const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async index(req, res) {
        const ongs = await connection('ongs').select('*');
    
        return res.json(ongs);
    
    },

    //async: função assíncrona 
    async create(req, res) {
        const {name, email, whatsapp, city, uf} = req.body;
        
        //gerar uma string hexadecimal aleatória de 4 bytes 
        const id = crypto.randomBytes(4).toString('HEX');

        //await: o programa vai esperar a inserção dos dados ser concluída para executar outra ação
        await connection('ongs').insert({
            id,
            name,
            email,  
            whatsapp,
            city,
            uf
        })

        return res.json({id});
    }
};