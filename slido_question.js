// Poderia explicar melhor JSON? O que entendi é que JSON é um objeto, rs.
//  Assim, que é a construção em objeto dos dados de uma aplicação.


// JSON (JavaScript Object Notation) é um formato leve usado para troca de dados. 
// É baseado em um subconjunto da linguagem JavaScript (a maneira como os objetos são criados em JavaScript). const obj = {}
// Um exemplo de onde isso é usado são as respostas dos serviços da web

// JSON é construído em duas estruturas:

// Uma coleção de pares nome / valor. Em vários idiomas, isso é realizado como um objeto, 
// registro, estrutura, dicionário, tabela de hash, lista de chaves ou matriz associativa.
// Uma lista ordenada de valores. Na maioria dos idiomas, isso é realizado 
// como uma matriz, vetor, lista ou sequência.



// Dada função que recebe varios parametros ex: function ex(...param) {}, 
// posso passar uma função como um dos parametros e ai a chamada seria ex: param[1](); ?

function toot(...params) {
    console.log(params)
    params[1]()
}

function xablau(){
    console.log('Xablau')
}

toot('a', xablau, 'c')

// O retorno "resolve" aparece sempre dentro de um IF?

function fetchizinho(url_http) {
    return Promise((resolve, reject) => {

        if (status_code === 200) {
            const xablau = {coxinha}
            return resolve(dadosdesucesso)
        }
    
        if( status_code === 203) {
            const toot = { doot}
            return resolve()
        }
        if (status_code === 500) {
            return reject(errormessage)
        }
    })
  
}

