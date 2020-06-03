// Ao vincular 'this' aos métodos da sua classe 
// pode criar muito código. A arrow function introduzida 
// no ES6 é uma função com o contexto atual 'this' já vinculado à função. 
// Devido a essa funcionalidade agradável, podemos usar campos de classe 
// pública para vincular isso automaticamente aos nossos métodos.

// O método bind anexa um objeto a uma função, de modo que toda vez que a 
// função é chamada, ela se refere ao objeto vinculado


// Nas classes de componentes React, definimos métodos que se 
// referem a atributos de classe, como props e state. 

// Entretanto, para que nossos métodos 
// tenham acesso a: 
this.state; /* e */ this.props;

// precisamos vincular o contexto React 'this' a esses métodos.
