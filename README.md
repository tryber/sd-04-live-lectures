# 31.1 - Arquitetura SOLID

### O que vamos aprender hoje?

* Single responsibility principle;
* Open/Close principle;
* Dependency Inversion Principle;

## Single responsibility principle

uma classe ou função deve ter uma, e apenas uma, tarefa a realizar dentro do seu código;

Exemplo. Como tirar responsabilidade do nosso controller?


## Open/Close principle

você deve ser capaz de estender um comportamento de uma função sem modificar seus comportamentos já existentes;

Exemplo. Se precisarmos adicionar mais validações para nosso modelo, como fazemos isso ser inflar nosso controller?

## Dependency Inversion Principle

q uem usa uma função deve ser capaz de determinar quais outros módulos ela usa em sua lógica.

Exemplo. Se precisarmos definir uma lista de perfis válidos dependeno do controller que estamos acesando, como poderíamos fazer?
