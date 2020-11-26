# 31.4 - Boas práticas em testes

* Como utilizar o jest no node?
* Como implementar mocks do lado do modelo.
* Como implementar mocks do lado do controller.

## Passos para estruturar um teste

* Arranjo
* Ação
* Resultado

## Stubs e Spies

* Spies : um spy é um objeto que grava as interações com outros objetos. Eles são utilizados quando temos que usar alguma função que chama outra função e sabem dizer quantas vezes uma função foi chamada, quais parâmetros recebeu etc.;
* Stubs (Mocks) : stubs estabelecem um retorno esperado para uma chamada do que se está simulando, com determinados parâmetros. Múltiplos cenários de chamadas diferentes com parâmetros diferentes podem ser simulados.