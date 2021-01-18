import json

try:
    file = open("video_games.json", "r")
    video_games = json.load(file)
except OSError:
    # será executado caso haja uma exceção
    print("arquivo inexistente")
else:
    # será executado se tudo ocorrer bem no try
    print("arquivo manipulado com sucesso")
finally:
    file.close()
    # será sempre executado, independentemente de erro
    print("Tentativa de abrir arquivo. Arquivo fechado")
