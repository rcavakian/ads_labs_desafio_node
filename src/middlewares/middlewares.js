/**
 * Essa função vai validar as requisições antes de serem enviadas a base de dados
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function validacaoTitulo(req, res, next) {
    /* aqui precisa implementar validação do body, params, head e query para depois chamar essa 
    funcao como callback nas funcoes abaixo (get, post, put e delete)
    */ 
   if(!req.body.titulo) {
    return res.status(400).send({ message: "Por favor informe o titulo da tarefa"}) 
   }
   return next()
}

module.exports = { validacaoTitulo }

