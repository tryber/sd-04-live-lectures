import pytest
from tests.test_scenario1 import stock
from learning_tests.scenario3 import recover_expired_drugs


@pytest.fixture
def fake_recover(stock):
    def _fake_recover():
        return stock
    return _fake_recover


def test_when_recover_expired_drugs_excludes_dates_smaller_than_today(fake_recover):
    assert recover_expired_drugs(fake_recover) != fake_recover()
