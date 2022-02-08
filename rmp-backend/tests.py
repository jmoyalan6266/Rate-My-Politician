import unittest
import json

import app

class APITests(unittest.TestCase):

    def test_get_states1(self):
        all_states = json.loads(app.get_states().data)
        self.assertEqual(len(all_states), 50)
    
    def test_get_states2(self):
        all_states = json.loads(app.get_states().data)
        fields = ['chronically_homeless','data_year', 'dem_margin', 'diabetes_prevalence', 'governor_name', 'index', 'landscape_background_url', 'map_image_url', 'median_age', 'median_income', 'name', 'num_representatives', 'population', 'poverty_rate', 'property_value', 'senator1', 'senator2', 'skyline_background_url', 'state_flag_url', 'state_seal_url', 'twitter']
        for state in all_states:
            keys = list(state.keys())
            self.assertEqual(keys, fields)
    
    def test_get_state1(self):
        state = json.loads(app.get_state(0).data)
        self.assertEqual(state['name'], 'Alabama')
    
    def test_get_state2(self):
        state = json.loads(app.get_state(10).data)
        self.assertEqual(state['population'], 1420491)

    def test_get_state_name1(self):
        state = json.loads(app.get_state_name('California').data)
        self.assertEqual(state['name'], 'California')
    
    def test_get_state_name1(self):
        state = json.loads(app.get_state_name('Texas').data)
        self.assertEqual(state['population'], 28701845)

    # def test_get_state_news1(self):
    #     news = json.loads(app.get_state_news('Arkansas').data)
    #     self.assertEqual(list(news.keys()), ['articles', 'status', 'totalResults'])

    # def test_get_state_news2(self):
    #     news = json.loads(app.get_state_news('Colorado').data)
    #     self.assertEqual(len(news['articles']), 4)

    def test_get_politicians1(self):
        all_politicians = json.loads(app.get_politicans().data)
        self.assertEqual(len(all_politicians), 586)
    
    def test_get_politicians2(self):
        all_politicians = json.loads(app.get_politicans().data)
        fields = ['email', 'facebook', 'index', 'name', 'office', 'office_city', 'party', 'phone_number', 'photoURL', 'state', 'twitter', 'website']
        for politician in all_politicians:
            keys = list(politician.keys())
            self.assertEqual(keys, fields)
    
    def test_get_politician1(self):
        politician = json.loads(app.get_politican(302).data)
        self.assertEqual(politician['name'], 'Emanuel Cleaver')

    def test_get_politician2(self):
        politician = json.loads(app.get_politican(101).data)
        self.assertEqual(politician['party'], 'Democratic Party')
    
    # def test_get_politician_news1(self):
    #     news = json.loads(app.get_politician_news('Ted Cruz').data)
    #     self.assertEqual(list(news.keys()), ['articles', 'status', 'totalResults'])
    
    # def test_get_politician_news2(self):
    #     news = json.loads(app.get_politician_news('Nancy Pelosi').data)
    #     self.assertEqual(len(news['articles']), 4)
    
    def test_get_sources1(self):
        all_sources = json.loads(app.get_sources().data)
        self.assertEqual(len(all_sources), 101)
    
    def test_get_sources2(self):
        all_sources = json.loads(app.get_sources().data)
        fields = ['city', 'company_rank', 'company_type', 'description', 'employees', 'foundedYear', 'index', 'logo', 'name', 'state', 'twitter', 'twitter_bio', 'twitter_followers']
        for source in all_sources:
            keys = list(source.keys())
            self.assertEqual(keys, fields)
    
    def test_get_source1(self):
        source = json.loads(app.get_source(10).data)
        self.assertEqual(source['employees'], 958.0)

    def test_get_source2(self):
        source = json.loads(app.get_source(99).data)
        self.assertEqual(source['twitter'], 'dispatchalerts')

if __name__ == "__main__":
    with app.app.app_context():
        unittest.main()