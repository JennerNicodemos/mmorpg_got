// Importar o MongoDB
let mongo = require('mongodb')

let connMongoDB = function() {
    console.log('Entrou na função de conexão')
    let db = new mongo.Db (
        'got',
        new mongo.Server(
            'localhost', //String contendp o endereço do servidor
            27017, //porta de conexão
            {}
        ),
        {}
    )
    return db
}

module.exports = function() {
    return connMongoDB
}