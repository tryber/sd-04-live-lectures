// Vamos testar callbacks. 

// Começaremos mostrando uma forma incorreta de se testar, 
// que leva a um falso positivo e depois iremos refatorá-la 
// para o teste ficar correto


const pokeTips = (callback) => {
    setTimeout(() => {
        callback('Bulbasaur é o melhor pokémon para começar.')
    }, 2000)
}

// O falso positivo acontece porque, na verdade, 
// o Jest ignora o fato do código ser assíncrono.

// test('passando um string', () => {
//     const callback = (data) => {
//         expect(data).toBe('Xablau é o melhor pokémon para começar.')
//     }
//     pokeTips(callback)
// })

// Porque isto acontence ?

// Por padrão, quando o Jest chega ao final do código ele termina, 
// então ele nem chega a chamar a função de callback,
// por isso que podemos escrever qualquer coisa na string
// e o Jest continua dizendo que a função passou com sucesso no teste.

// Como podemos corrigir ?


test('passando um string', (done) => {
    const callback = (data) => {
        expect(data).toBe('Charmander é o melhor pokémon para começar.')
        done();
    }
    pokeTips(callback)
})

// Usando o argumento chamado done(). Esse argumento você coloca 
// normalmente após uma chamada assíncrona, porque o Jest espera 
// a o argumento ser chamado no teste antes de finalizar o teste.

/// testar com expect Assertions