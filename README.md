# oil-and-gas-job-seeker/Initial notes

## Porject Member: 
Kenjiro Hirota


## Project Goal: 
To visualize job opportunities in oil and gas industries in the world.

## Data Source:
* Data source: https://www.oilandgasjobsearch.com/jobs

* Data storage: Mongo DB Atlas (Cloud)

* Application: Python - Flask

* JS library: D3, Plotly, leaflet, DataTable(https://datatables.net/)

* Web Design: Bootstrap


## ETL
* Extract & Transform (project.ipynb)

    1. Use Splinter and Beautiful Soup to get URL list of each job and position, location and required skills of each job.

    2. Get coordinate information of each location using Google Geocoding.

    3. Use Pandas to clean up the data from 1 and 2.

    4. Save file to csv. 

* Transform & Load (mongodb.ipynb)

    1. Make Connection to Mongodb atlas

    2. Read csv usign Pandas and convert string(due to csv file) to list/dictionary.

    3. Covert pandas df to dict(json) and upload to MongoDB atlas

## Flask app
* home (DataTable)

    Get dat from MongoDB Atlas and then create table using D3 and format it using DataTable.

* Dashboard: 

    Get all data / each country data using flask jsonify and create graphs of required skills and worktype

* Map:

    Get all data usign flask jsonify and count how many jobs found in each point (lat/lng) and plot the data in the map to show the nubmer of jobs in one place.


## Screen Shot
![Home](/screenshots/home.png)

![Dashboard](/screenshots/dashboard.png)

![Map](/screenshots/map.png)


