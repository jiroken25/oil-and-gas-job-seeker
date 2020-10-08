from flask import Flask, render_template, redirect, make_response
from flask import jsonify
from flask_pymongo import pymongo
from config import mongo_pass
from bson.json_util import dumps
import json

app = Flask(__name__)

# Use PyMongo to establish Mongo connection
conn = f'mongodb+srv://admin:{mongo_pass}@cluster0.7klhs.mongodb.net/job_data?retryWrites=true&w=majority'
client = pymongo.MongoClient(conn)
db = client.get_database('job_data')
col = pymongo.collection.Collection(db, 'details')

# Route to render index.html template using data from Mongo
@app.route("/")
def home():

    # Find one record of data from the mongo database
    all_data = json.loads(dumps(col.find()))
    print(len(all_data))

    # Return template and data
    return render_template("index.html", reference=all_data)

@app.route("/dashboard")
def dashboard():
    
    # Return template and data
    return render_template("dashboard.html")


@app.route("/map")
def map():
    resp = make_response(render_template("map.html"));
    resp.set_cookie('cookie1', 'value1', samesite='None', secure=True);
    # Return template and data
    return resp



@app.route("/<country>")
def country_data(country):

    country_data = json.loads(dumps(col.find({"country":country})))

    
    return jsonify(country_data)

@app.route("/all")
def all_data():

    all_data = json.loads(dumps(col.find()))

    
    return jsonify(all_data)


if __name__ == "__main__":
    app.run(debug=True)
