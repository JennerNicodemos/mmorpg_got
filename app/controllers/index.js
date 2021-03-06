module.exports.index = function(application, req, res) {
    res.render('index', { validacao: {}, dadosForm: {} });
}

module.exports.autenticar = function(application, req, res) {
    
    let dadosForm = req.body

    req.assert("usuario", "Usuário não pode ser vazio").notEmpty()
    req.assert("senha", "Senha não pode ser vazia").notEmpty()

    let erros = req.validationErrors()

    if(erros) {
        res.render("index", { validacao: erros, dadosForm: dadosForm })
        return
    }

    let connection = application.config.dbConnection
    let UsuariosDAO = new application.app.models.UsuariosDAO(connection)

    UsuariosDAO.autenticar(dadosForm, req, res)

    // res.send("Tudo certo para criar a sessão")
}