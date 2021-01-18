from pymongo import MongoClient
from spider_quote import get_all_quotes, get_all_authors


with MongoClient() as client:
    db = client.catalogue  # o banco de dados catalogue será criado se não existir

    quotes = db.quotes  # a coleção quotes será criada se não existir
    authors = db.authors  # a coleção authors será criada se não existir

    all_quotes = get_all_quotes()
    quotes.insert_many(all_quotes)  # o insert_many recebe uma lista e a adiciona à coleção

    first_author, *others = get_all_authors()  # desempacotamento
    authors.insert(first_author)
    authors.insert_many(others)

    # vamos testar a leitura agora?
    print(authors.count_documents())
    query = {
      "author": "Albert Einstein"
    }
    for quote in quotes.find(query):
        print(quote)
