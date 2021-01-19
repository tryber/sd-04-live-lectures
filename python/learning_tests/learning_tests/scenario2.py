import json


def retrieve_stock_from_json(filepath):
    if not filepath.endswith(".json"):
        raise ValueError("Formato inválido")
    with open(filepath) as stock:
        return json.load(stock)
