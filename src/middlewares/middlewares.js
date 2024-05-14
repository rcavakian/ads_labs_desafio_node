/**
 * Essa função vai validar as requisições antes de serem enviadas a base de dados
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function validacaoTitulo(req, res, next) {
   if(!req.body.titulo) {
    return res.status(400).send({ message: "Por favor informe o titulo da tarefa"}) 
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
* Nomes devem ter no mínimo 3 caracteres, permitindo apenas letras
*/

module.exports = { validacaoTitulo }

