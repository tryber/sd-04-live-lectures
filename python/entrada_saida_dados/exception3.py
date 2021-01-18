import json

with open("video_games.json", mode="r") as file:
    video_games = json.load(file)
    print(len(video_games))
