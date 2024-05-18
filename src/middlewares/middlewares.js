const { isAlpha } = require("validator")
const Tarefa = require("../models/tarefa");


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
    if (!nome) {
        return res.status(400).send({ message: "Nome não informado"})
    }
    if (nome.length < 3) {
        return res.status(400).send({ message: "Nome informado precisa ter pelo menos tres caracteres"})
    }
    if (!isAlpha(nome, 'pt-BR', { ignore: " " })) {
        return res.status(400).send({ message: "Nome informado inválido: somente aceito caracteres alfabéticos"})
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
function validacaoIdadeResponsavel(req, res, next) { 
    const data_nascimento = parseInt(req.body.data_nascimento.slice(0, 4)) 
    if (data_nascimento > 2014) {
        return res.status(400).send({ message: "Responsavel invalido, permitido somente nascidos a partir de 2014"})
    }
    return next()
}

/**
 * Função para verificar se a tarefa está sendo concluida dentro do prazo limite
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
function validacaoDataLimite(req, res, next) { 
    const data_limite = new Date(req.body.data_limite_conclusao)
    const data_atual = new Date()

    if (data_limite < data_atual) {
        return res.status(400).send({ message: "Não é possível concluir essa tarefa: tarefa em atraso" })
    }
    return next()
}

function checkDataLImite(req, res, next) {
    if (!req.body.data_limite_conclusao) {
        return res.status(400).send({ message: "Por favor informe a data limite de conclusão"})
    }
    return next()
}

function validarDataNascimento(req, res, next) {
    if(!req.body.data_nascimento) {
        return res.status(400).send({ message: "Por favor informe a data de nascimento"}) 
    }
    return next()
}


module.exports = { validacaoTitulo, validacaoNome, validacaoDataLimite, validarDataNascimento, validacaoIdadeResponsavel, checkDataLImite }