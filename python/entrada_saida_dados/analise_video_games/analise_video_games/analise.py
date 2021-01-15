import csv


def sales_by_console(video_games):
    sales_grouped_by_console = {}
    for game in video_games:
        console = game["Release"]["Console"]
        sales = game["Metrics"]["Sales"]
        sales_grouped_by_console[console] = sales_grouped_by_console.get(console, 0.0) + sales
    return sales_grouped_by_console


def mean_review_score_by_genre(video_games):
    scores_by_genre = {}
    for game in video_games:
        for genre in game["Metadata"]["Genres"].split(","):
            scores_by_genre[genre] = scores_by_genre.get(genre, [])
            scores_by_genre[genre].append(game["Metrics"]["Review Score"])
    return {
        genre: sum(scores) // len(scores)
        for genre, scores in scores_by_genre.items()
    }


def write_report(data):
    with open("report.csv", "w") as file:
        writer = csv.writer(file)
        for key, value in data.items():
            writer.writerow([key, value])
