from pymongo import MongoClient


# leitura da entrada padrão do sistema operacional
console = input("Digite o console: ")

with MongoClient() as client:
    db = client.video_games

    metrics_by_year = db.researchs.aggregate([
        # filtra os dados para somente um console
        {"$match": {"Release.Console": console}},
        # agrupa as métricas por ano
        {"$group": {
            "_id": "$Release.Year",
            "sales": {
                "$sum": "$Metrics.Sales"  # as vendas do ano são somadas
            },
            "score": {
                "$avg": "$Metrics.Review Score",  # tiramos uma média
            },
            "genre": {
                "$push": "$Metadata.Genre"  # adicionamos os gêneros do jogo
            }
        }},
        {"$sort": {"sales": -1, "score": -1}},  # ordenamos pelas vendas
    ])

    # exibe as métricas formatadas em tela
    for metric in metrics_by_year:
        # truque para escrever uma string long, quebrando linhas
        print(
            # O ano formatado em 4 caracteres
            f"Year: {metric['_id']:4} "
            # As vendas com 3 dígitos e duas casas decimais
            f"Sales: {metric['sales']:3.2f} (mi/$)"
            # revisão média formatada com 3 dígitos e somente 1 casa decimal
            f"Average Review: {metric['score']:3.1f}"
        )
        # Exibe os gêneros dos jogos daquele ano, com prefixo *
        for genre in metric["genre"]:
            print(f"* {genre}")
