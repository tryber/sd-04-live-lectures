# array
vegetais = ["Repolho", "Nabo", "Rabanete", "Cenoura"]

# acesso a index
vegetais[0]

# adiciona um elemento ao array
vegetais.append("Couve")
# podemos utilizar a função insert especificando uma posição

# removendo um elemento
vegetais.remove("Nabo")

# removendo o ultimo elemento
vegetais.pop()

# buscando um elemento
vegetais.index('Repolho')

# verificando o tamanho de um array
len(vegetais)

# dicionário (equivalente a objeto em python)
dicionario = {
    "nome": "um objeto",
    "descricao": "de madeira",
    "anos_de_uso": 2,
}

# acessando propriedades (valores atráves de chaves em python)
print(dicionario["nome"])
# não é possível acessar utilizando a notação de ponto: dicionario.nome
dicionario.get("nome", "") # o segundo parâmetro é um valor default

# deletando uma propriedade
del dicionario["descricao"]

# elementos do dicionario
dicionario.items()

# existem outros métodos como .keys() e .values()
# para acesso de chaves e valores em dicionarios
