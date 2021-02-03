# TrybeFlix

1. Cadastrar ator.

* Se não passar nome retornar o seguinte json 

```js
{ 
  "err": { 
    "code": "invalid_data",
    "message": "Name cannot be blank"
  }
}
```

* Se nome for menor que 10 caracteres retornar a seguinte resposta

```js
{ 
  "err": { 
    "code": "invalid_data",
    "message": "Name should be greater than 3 charecters"
  }
}
```
* Se não passar idade retornar o seguinte json  

```js
{ 
  "err": { 
    "code": "invalid_data",
    "message": "Age cannot be blank"
  }
}
```
* Se a idade não estiver entre 1 e 100 retornar o seguinte json

```js
{ 
  "err": { 
    "code": "invalid_data",
    "message": "Age invalid"
  }
}
```

* Se já existir um ator com o mesmo nome retornar o seguinte json

```js
{ 
  "err": { 
    "code": "already_exists",
    "message": "Actor already exists"
  }
}
```

2. Listar atores

3. Ver detalhes do autor

* Retornar os dados do ator se existir
* Retornar o seguinte json se não exisite

```js
{ 
  "err": { 
    "code": "not_found",
    "message": "Actor not found"
  }
}
```

4. Atualizar ator

* Retornar o objeto se for atualizado com sucesso.
* Retornar o seguinte json se não exisite
* Fazer as mesmas validações do cadastro

```js
{ 
  "err": { 
    "code": "not_found",
    "message": "Actor not found"
  }
}
```

5. Deletar ator

* Retornar o json do objeto que foi deletado.
* Retornar o seguinte json se não exisite

```js
{ 
  "err": { 
    "code": "not_found",
    "message": "Actor not found"
  }
}
```

6. Cadastar filme.

Para cadastrar um filme vamos mandar um json no seguinte formato: 


```js
{ 
  'name': 'Avengers',
  'year': '2012',
  'actors': [
    {
      'actorId': '5f91b969aa924e52869de298',
      'character': 'Tony Stark'
    },
    {
      'actorId': '5f91b969aa924e52869de299',
      'character': 'Thanos'
    }
  ]
}
```

* Validar o nome
* Validar se o ano do filme é um inteiro.
* Validar se o filme já existe
* Validar se os atores existem e se os nomes são válidos (maior que 3 caracteres).

7. Listar filmes

8. Ver detalhes de um filme

9. Atualizar um filme:

* Repetir as validações dos cadastros.

10. Deletar um filme.

Bônus

11. Adicionar um novo ator ao filme.

12. Remover um ator específico do filme.

13. Ao adicionar um filme, alterar o registro na coleção `actors` do ator para adicionar o filme.