// array
var vegetais = ['Repolho', 'Nabo', 'Rabanete', 'Cenoura'];

// acesso a index
vegetais[0];

// adiciona um elemento ao array
vegetais.push('Couve');

// removendo um elemento
const index = vegetais.indexOf('Nabo');
vegetais = vegetais.splice(index, 1);

// removendo o ultimo elemento
vegetais.pop();

// buscando um elemento
vegetais.indexOf('Repolho');

// tamanho de um array
vegetais.length


// objeto
var objeto = {
    nome: "um objeto",
    descricao: "de madeira",
    anosDeUso: 2,
};

// acessando propriedades
console.log(objeto.nome);
console.log(objeto["nome"]);
// undefined se não existir

// deletando uma propriedade
delete objeto.descricao;

// elementos do objeto
Object.entries(objeto)
