// Higher Order Functions = .sort()

// A sort ordena os elementos do array em ordem alfabética. 
// Lembre-se! Quando ela não recebe strings ela ordena o elemento de acordo com sua posição no código Unicode
























// Para ordenar números de forma previsível você deve passar para sort uma função que recebe dois parâmetros
// Ela compara todos os elementos do array, dois a dois, para posicioná-los. 
// Isso significa que os dois parâmetros da função passada são dois elementos quaisquer do array a função funciona assim:
//  - para dois parâmetros a e b
//  - se ela retorna um número negativo, a é menor que b. 
// Caso contrário, a é maior que b. 
// Caso 0 seja retornado, as duas são iguais.