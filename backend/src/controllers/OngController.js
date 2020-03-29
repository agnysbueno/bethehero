const generateUniqueId = require('../utils/generateUniqueId');
const connection = require('../database/connection');

module.exports = {
    async index(req, res) {
        const ongs = await connection('ongs').select('*');
    
        return res.json(ongs);
    
    },

    //async: função assíncrona 
    async create(req, res) {
        const {name, email, whatsapp, city, uf} = req.body;
        
        const id = generateUniqueId();

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