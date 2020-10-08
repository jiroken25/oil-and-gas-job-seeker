# oil-and-gas-job-seeker/Initial notes

## Porject Member: 
Kenjiro Hirota


## Project Goal: 
To visualize job opportunities in oil and gas industries in the world.

## Project Data:
* Data source: https://www.oilandgasjobsearch.com/jobs 

* Data to use: Job title, Location, Recommended Skill, URL


## Data visualization
* Use geocoding to get coordinates from Location information
* Summarise Job information in table to enable sorting by Country
* Use Leaflet.js to show job opportunities (heat map) and clickable link table
* Show the number of job opportunities (recommended skills) for each location. (Location selective)
 => It might be difficult to categorise job title so may use recommended skills to show.


 ## Consideration
 * How and where can I utilise database? 
=> MongoDB to store the info from web-scraping

 * Which JS library to use?=> Investigation: maybe js library related to table visualization

Candidate 1:  https://datatables.net/?ref=hackernoon.com






