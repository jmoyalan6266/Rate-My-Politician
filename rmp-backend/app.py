from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from newsapi import NewsApiClient
app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://{user}:{password}@{server}/{database}'.format(user='admin', password='&Ma&KoL24YAU', server='rmp-database.cjkvrnrxhqhd.us-east-2.rds.amazonaws.com:3306', database='rmp_db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
ma = Marshmallow(app)

newsapi = NewsApiClient(api_key='696d20d1fe3d47ac9042b020eff115c7')
domains = 'nytimes.com,npr.org,newyorker.com,cnet.com,yahoo.com,bostonglobe.com,dallasnews.com,houstonchronicle.com,texastribune.org,latimes.com,pbs.org,sfgate.com,sacbee.com,theatlantic.com,sandiegouniontribune.com,economist.com,inquirer.com,post-gazette.com,pennlive.com,fox7austin.com,fox5atlanta.com,myfoxboston.com,fox28iowa.com,fox23chicago.com,statesman.com,nypost.com,startribune.com,newsday.com,chicagotribune.com,azcentral.com,nj.com,ajc.com,Inquirer.com,cleveland.com,freep.com,miamiherald.com,Tampabay.com,oregonlive.com,orlandosentinel.com,sandiegouniontribune.com,ocregister.com,stltoday.com,indystar.com,nypost.com,denverpost.com,nydailynews.com,expressnews.com,baltimoresun.com,dailycaller.com,mercurynews.com,jsonline.com,seattletimes.com,abc.com,aljazeera.com,arstechnica.com,apnews.com,axios.com,bloomberg.com,breitbart.com,businessinsider.com,buzzfeed.com,cbsnews.com,engadget.com,ew.com,espn.com,financialpost.com,fortune.com,foxnews.com,google.com,ycombinator.com,mashable.com,medicalnewstoday.com,msnbc.com,mtv.com,nationalgeographic.com,nbcnews.com,news24.com,newscientist.com,newsweek.com,nymag.com,politico.com,polygon.com,reddit.com,reuters.com,rt.com,techcrunch.com,techradar.com,theamericanconservative.com,theglobeandmail.com,thehill.com,huffingtonpost.com,theverge.com,wsj.com,washingtonpost.com,washingtontimes.com,time.com,usatoday.com,vice.com,wired.com,gainesvilletimes.com,charlotteobserver.com,valdostadailytimes.com,dispatch.com,staradvertiser.com'

class States(db.Model):
    index = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), unique=True)
    data_year = db.Column(db.Integer)
    population = db.Column(db.Integer)
    median_income = db.Column(db.Float)
    poverty_rate = db.Column(db.Float)
    dem_margin = db.Column(db.Float)
    property_value = db.Column(db.Integer)
    median_age = db.Column(db.Float)
    state_flag_url = db.Column(db.String(255))
    state_seal_url = db.Column(db.String(255))
    map_image_url = db.Column(db.String(255))
    landscape_background_url = db.Column(db.String(255))
    skyline_background_url = db.Column(db.String(255))
    twitter = db.Column(db.String(255))
    governor_name = db.Column(db.String(255))
    num_representatives = db.Column(db.Integer)
    senator1 = db.Column(db.String(255))
    senator2 = db.Column(db.String(255))
    chronically_homeless = db.Column(db.Integer)
    diabetes_prevalence = db.Column(db.Float)

    def __init__(self, name, data_year, population, median_income, poverty_rate, dem_margin, property_value, median_age, state_flag_url, state_seal_url, map_image_url, landscape_background_url, skyline_background_url, twitter_url, governor_name, num_representatives, senator1, senator2, chronically_homeless, diabetes_prevalence):
        self.name = name
        self.data_year = data_year
        self.population = population
        self.median_income = median_income
        self.poverty_rate = poverty_rate
        self.dem_margin = dem_margin
        self.property_value = property_value
        self.median_age = median_age
        self.state_flag_url = state_flag_url
        self.state_seal_url = state_seal_url
        self.map_image_url = map_image_url
        self.landscape_background_url = landscape_background_url
        self.skyline_background_url = skyline_background_url
        self.twitter = twitter_url
        self.governor_name = governor_name
        self.num_representatives = num_representatives
        self.senator1 = senator1
        self.senator2 = senator2
        self.chronically_homeless = chronically_homeless
        self.diabetes_prevalence = diabetes_prevalence

class StatesSchema(ma.SQLAlchemySchema):
    class Meta:
        fields = ('index', 'name', 'data_year', 'population', 'median_income', 'poverty_rate', 'dem_margin', 'property_value', 'median_age', 'state_flag_url', 'state_seal_url', 'map_image_url', 'landscape_background_url', 'skyline_background_url', 'twitter', 'governor_name', 'num_representatives', 'senator1', 'senator2', 'chronically_homeless', 'diabetes_prevalence')

class Politicians(db.Model):
    index = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), unique=True)
    party = db.Column(db.String(255))
    photoURL = db.Column(db.String(255))
    office = db.Column(db.String(255))
    office_city = db.Column(db.String(255))
    state = db.Column(db.String(255))
    phone_number = db.Column(db.String(255))
    website = db.Column(db.String(255))
    email = db.Column(db.String(255))
    twitter = db.Column(db.String(255))
    facebook = db.Column(db.String(255))

    def __init__(self, name, party, photoURL, office, office_city, state, phone_number, website, email, twitter, facebook):
        self.name = name
        self.party = party
        self.photoURL = photoURL
        self.office = office
        self.office_city = office_city
        self.state = state
        self.phone_number = phone_number
        self.website = website
        self.email = email
        self.twitter = twitter
        self.facebook = facebook

class PoliticiansSchema(ma.SQLAlchemySchema):
    class Meta:
        fields = ('index', 'name', 'party', 'photoURL', 'office', 'office_city', 'state', 'phone_number', 'website', 'email', 'twitter', 'facebook')

class Sources(db.Model):
    index = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), unique=True)
    logo = db.Column(db.String(255))
    employees = db.Column(db.Integer)
    foundedYear = db.Column(db.Integer)
    city = db.Column(db.String(255))
    state = db.Column(db.String(255))
    twitter = db.Column(db.String(255))
    twitter_bio = db.Column(db.Text)
    twitter_followers = db.Column(db.Integer)
    company_rank = db.Column(db.Integer)
    company_type = db.Column(db.String(15))
    description = db.Column(db.Text)

    def __init__(self, name, logo, employees, foundedYear, city, state, twitter, twitter_bio, twitter_followers, company_rank, company_type, description):
        self.name = name
        self.logo = logo
        self.employees = employees
        self.foundedYear = foundedYear
        self.city = city
        self.state = state
        self.twitter = twitter
        self.twitter_bio = twitter_bio
        self.twitter_followers = twitter_followers
        self.company_rank = company_rank
        self.company_type = company_type
        self.description = description

class SourcesSchema(ma.SQLAlchemySchema):
    class Meta:
        fields = ('index', 'name', 'logo', 'employees', 'foundedYear', 'city', 'state', 'twitter', 'twitter_bio', 'twitter_followers', 'company_rank', 'company_type', 'description')

state_schema = StatesSchema()
states_schema = StatesSchema(many=True)
politician_schema = PoliticiansSchema()
politicians_schema = PoliticiansSchema(many=True)
source_schema = SourcesSchema()
sources_schema = SourcesSchema(many=True)

# NOTE: This route is needed for the default EB health check route
@app.route('/')
def home():
    return "ok"

#Get all States
@app.route('/api/states', methods=['GET'])
def get_states():
    all_states = States.query.all()
    result = states_schema.dump(all_states)
    return jsonify(result)

#Get single State
@app.route('/api/states/<int:index>', methods=['GET'])
def get_state(index):
    state = States.query.get(index)
    return state_schema.jsonify(state)

#Get single State by name
@app.route('/api/states/<string:name>', methods=['GET'])
def get_state_name(name):
    state = States.query.filter(States.name == name).one_or_none()
    return state_schema.jsonify(state)

#Get news articles for a state
@app.route('/api/states/<string:name>/news', methods=['GET'])
def get_state_news(name):
    articles = newsapi.get_everything(q=name, domains=domains, page_size=20, sort_by='relevancy')
    return jsonify(articles)

#Get all Politicians
@app.route('/api/politicians', methods=['GET'])
def get_politicans():
    all_politicians = Politicians.query.all()
    result = politicians_schema.dump(all_politicians)
    return jsonify(result)

#Get single Politician
@app.route('/api/politicians/<int:index>', methods=['GET'])
def get_politican(index):
  politician = Politicians.query.get(index)
  return politician_schema.jsonify(politician)

#Get single Politician by name
@app.route('/api/politicians/<string:name>', methods=['GET'])
def get_politican_name(name):
    politician = Politicians.query.filter(Politicians.name == name).first()
    return politician_schema.jsonify(politician)

#Get news articles for a politician
@app.route('/api/politicians/<string:name>/news', methods=['GET'])
def get_politician_news(name):
    articles = newsapi.get_everything(q=name, domains=domains, page_size=20, sort_by='relevancy')
    return jsonify(articles)

#Get all Sources
@app.route('/api/sources', methods=['GET'])
def get_sources():
    all_sources = Sources.query.all()
    result = sources_schema.dump(all_sources)
    return jsonify(result)

#Get single Source
@app.route('/api/sources/<int:index>', methods=['GET'])
def get_source(index):
  source = Sources.query.get(index)
  return source_schema.jsonify(source)

#Get single Source by name
@app.route('/api/sources/<string:name>', methods=['GET'])
def get_source_name(name):
    source = Sources.query.filter(Sources.name.contains(name)).first()
    return source_schema.jsonify(source)

if __name__ == '__main__':
    app.run(port=8080)