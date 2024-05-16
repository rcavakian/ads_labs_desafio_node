/**
 * Essa função vai validar as requisições antes de serem enviadas a base de dados
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function validacaoTitulo(req, res, next) {
   if(!req.body.titulo) {
    return res.status(400).send({ message: "Por favor informe o título da tarefa"}) 
   }
   return next()
}

/**
 * Função verifica se foi informado um nome do responsavel, se possui pelo menos tres caracteres e se possui apenas caracteres alfabéticos
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
function validacaoNome(req, res, next) {
    const nome = req.body.nome

    if (!nome || nome.length < 3 || !/^[a-zA-Z]+$/.test(nome)) {
        return res.status(400).send({ message: "Nome informado inválido"})
    }

    return next()
}

/**
 * Função para verificar o ano de nascimento do responsável, permitindo apenas nascidos em 2014 ou antes.
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
function validacaoDataNascimento(req, res, next) { 
    const data_nascimento = parseInt(req.body.data_nascimento.slice(0, 4))

    if (data_nascimento >= 2014) {
        return res.status(400).send({ message: "Responsavel invalido, permitido somente nascidos a partir de 2014"})
    }

    return next()
}
/* aqui precisa implementar validação do body, params, head e query para depois chamar essa 
funcao como callback nas funcoes abaixo (get, post, put e delete)
*/ 

/*
    As seguintes regras de negócio devem ser validadas:
* As tarefas que passaram da data limite não podem ser Nnalizadas posteriormente
* Um responsável deve ser nascido no mínimo em 2014
* Nomes devem ter no mínimo 3 caracteres, permitindo apenas letras ok
*/

module.exports = { validacaoTitulo }

