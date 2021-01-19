import json

from analise_video_games.analise import sales_by_console, mean_review_score_by_genre, write_report


STARTER_MENU = """
Escolha uma opção de relatório:
1 - Relatório de vendas por console
2 - Relatório de média de nota de revisão por gênero
3 - Sair
"""

SECONDARY_MENU = """
Onde vai escrever os dados?
1 - tela
2 - arquivo
"""


def menu():

    with open("video_games.json") as file:
        video_games = json.load(file)

    report_option = input(STARTER_MENU)
    data = {}
    if report_option == "1":
        data = sales_by_console(video_games)
    elif report_option == "2":
        data = mean_review_score_by_genre(video_games)
    elif report_option == "3":
        print("Até mais")
        return
    else:
        print("Opção inválida", file=sys.stderr)
        return

    write_data_option = input(SECONDARY_MENU)
    if write_data_option == "1":
        print(data)
    elif write_data_option == "2":
        write_report(data)
    else:
        print("Opção de escrita inválida", file=stderr)


if __name__ == "__main__":
    menu()
