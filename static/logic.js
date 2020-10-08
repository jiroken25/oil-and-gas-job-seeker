

function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;
  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

function contains(a, obj){
var i = a.length;
while (i--){
  if(arraysEqual( (a[i]) ,obj) ){
    return true;
  }
}
return false;
}

function getColor(d) {
  return d > 100 ? '#FF4000' :
      d > 50  ? '#FF8000' :
      d > 30  ? '#FFBF00' :
      d > 15  ? '#FFFF00' :
      d > 5   ? '#BFFF00' :
      d > 2   ? '#80FF00' :
                  '#40FF00';
}


d3.json("/all").then(function(data){
var job_list = [];
 data.forEach(function(detail){
 job_list.push({name:detail.formatted_address,location:[detail.latlng["lat"],detail.latlng["lng"]],url:detail.url})})

 var coordinate_list = [];
 var job_per_coordinate = [];
 for (var i =0;i<job_list.length;i++){
   
  if (contains(coordinate_list,job_list[i].location)){
    for (var j =0; j < job_per_coordinate.length; j++ ){
      if (arraysEqual( job_per_coordinate[j].coordinate,job_list[i].location)){job_per_coordinate[j].count += 1;
        job_per_coordinate[j].url.push(job_list[i].url)
         }
     }}
    else{
      coordinate_list.push(job_list[i].location)
      job_per_coordinate.push({coordinate:job_list[i].location,url:[job_list[i].url],formatted_address:job_list[i].name,count:1})}
    

    
  }
  console.log(job_per_coordinate)

 // Create a map object
 var myMap = L.map("map", {
   center: [15.5994, -28.6731],
   zoom: 3
 });

 L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
   attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
   maxZoom: 18,
   zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
 }).addTo(myMap);

 // Loop through the cities array and create one marker for each city object
 for (var i = 0; i < job_per_coordinate.length; i++) {

 // Add circles to map
 L.circle(job_per_coordinate[i].coordinate, {
    color: getColor(job_per_coordinate[i].count),
    fillOpacity: 0.75,
    fillColor: getColor(job_per_coordinate[i].count),
  // Adjust radius
    radius: job_per_coordinate[i].count * 1000
   }).bindPopup( "<h3>" + job_per_coordinate[i].formatted_address + "</h3> <hr> <h4>Job Hits: " + job_per_coordinate[i].count + "</h4>").addTo(myMap);
 }



 })


