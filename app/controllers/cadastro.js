module.exports.cadastro = function(application, req, res){
    res.render('cadastro', { validacao: {}, dadosForm: {} } );
}

module.exports.cadastrar = function(application, req, res) {
    
    let dadosForm = req.body

    req.assert('nome', 'Nome não pode ser vazio').notEmpty()
    req.assert('usuario', 'Usuário não pode ser vazio').notEmpty()
    req.assert('senha', 'Senha não pode ser vazio').notEmpty()
    req.assert('casa', 'Casa não pode ser vazio').notEmpty()

    let erros = req.validationErrors()

    if(erros) {
        res.render('cadastro', { validacao: erros , dadosForm: dadosForm } )
        return
    }

    let connection = application.config.dbConnection
    let UsuariosDAO = new application.app.models.UsuariosDAO(connection)
    let JogoDAO = new application.app.models.JogoDAO(connection)
    
    UsuariosDAO.inserirUsuario(dadosForm)
    JogoDAO.gerarParametros(dadosForm.usuario)
    // geração dos parametros

    res.send('Podemos cadastrar')
}