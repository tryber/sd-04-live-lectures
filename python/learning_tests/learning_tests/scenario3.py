from datetime import date
from learning_tests.scenario2 import retrieve_stock_from_json


def recover_drugs_from_file():
    return retrieve_stock_from_json("tests/testdata/stock.json")


def recover_expired_drugs(drugs_recover):
    today = date.today().isoformat()
    return [
        drug for drug in drugs_recover() if drug["data_de_validade"] < today
    ]
