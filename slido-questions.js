// Agora crie uma função usando os dados dos estudantes passados anteriormente,
//  para mostrar na tela um relatório que diz em qual matéria o estudante foi melhor.
//  Você usará tanto o map quanto, dentro dele, o reduce!

const estudantes = require('./objeto-grandi')

let esperado = [ // o que queremos
    { name: 'Jorge', materia: 'Português' },
    { name: 'Mario', materia: 'Biologia' },
    { name: 'Jorge', materia: 'Português' },
    { name: 'Maria', materia: 'Química' },
    { name: 'Natalia', materia: 'Português' },
    { name: 'Wilson', materia: 'Português' },
]

const relatorio = (arrayEstudantes) => { // Estamos percorendo cada elemento desse array
    let result = arrayEstudantes.map(elemento => { // Usamos o Map para retornar um novo array de objetos
        return {
            nomeEstudante: elemento.nome,
            materia: elemento.materias.reduce(maiorNota).name // Primeira vez a percorrer eu paro aqui
        }            // { name: 'Biologia', nota: 65 }.name
    })

    return result
}

const maiorNota = (accumulator, currentValue) => {
    if (accumulator.nota > currentValue.nota) return accumulator; // comparo o accumulador com o item sendo intereado
    return currentValue; // se nao for maior eu retorno o item atual
}


console.log(relatorio(estudantes))

// Regex pra jogar todos caracteres para minusculos sem acento

.normalize("NFD").replace(/[\u0300-\u036f]/g,'')


// exemplo de else if com ternario
// a > b ? a : a >c ? c : b