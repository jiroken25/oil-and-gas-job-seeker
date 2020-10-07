
function init(){d3.json("/all").then(function(data){

var country_list = [];
data.forEach(function(detail){
    if(country_list.includes(detail.country) === false){country_list.push(detail.country)}

})
var sorted_list = country_list.sort();
console.log(sorted_list)

sorted_list.forEach(function(country,index)
{		d3.selectAll("select")
		.append("option")
		.text(country)
        .attr("value", country);})

var skill_list = [];


for (var i =0;i<data.length;i++){
    for(var j=0;j< data[i].skill.length;j++)
     {
         skill_list.push(data[i].skill[j])
                
       }}
     
  
       

var counts_skill = {};

  for(var i=0;i< skill_list.length;i++)
     {
         var key = skill_list[i];
         counts_skill[key] = (counts_skill[key])? counts_skill[key] + 1 : 1 ;
       
       }

 var entries_skill = Object.entries(counts_skill);
        
 var sorted_skills = entries_skill.sort((a, b) => b[1] - a[1]);
 
console.log(sorted_skills)

var worktype_list = [];


for (var i =0;i<data.length;i++){
   
         worktype_list.push(data[i].worktype)
                
   }

   var counts_worktype = {};

  for(var i=0;i< worktype_list.length;i++)
     {
         var key = worktype_list[i];
         counts_worktype[key] = (counts_worktype[key])? counts_worktype[key] + 1 : 1 ;
       
       }

 var entries_worktype = Object.entries(counts_worktype);
        
 var sorted_worktype = entries_worktype.sort((a, b) => b[1] - a[1]);
 

  var data1 = [{
    type: 'bar',
    x: sorted_skills.map(x => x[1]).slice(0,10),
    y: sorted_skills.map(x => x[0]).slice(0,10),
    orientation: 'h'
  }];

  var layout1 = {
    title: 'Top 10 Skills (number of required skills found in the web)',
    yaxis:{autorange:'reversed'},
    margin:{
        l:200
      },
    barmode: 'stack'}
  
  Plotly.newPlot('bar', data1, layout1);
  


  
  var data2 = [{
    values: sorted_worktype.map(x => x[1]),
    labels: sorted_worktype.map(x => x[0]),
    domain: {column: 0},
    name: 'Work Type',
    hoverinfo: 'label+percent+name',
    hole: .4,
    type: 'pie',
    direction: 'clockwise'
  }];
  
  var layout2 = {
    title: 'Job Work Type (%)',
    showlegend: true,
  };
  
  Plotly.newPlot('pie', data2, layout2);
  




        
}




)



}

d3.selectAll("#selDataset").on("change", updatePlotly);

// This function is called when a dropdown menu item is selected
function updatePlotly() {
  // Use D3 to select the dropdown menu
  var dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a variable
  var dataset = "/" + dropdownMenu.property("value");

  d3.json(dataset).then(function(data){

     var skill_list = [];
    
    
    for (var i =0;i<data.length;i++){
        for(var j=0;j< data[i].skill.length;j++)
         {
             skill_list.push(data[i].skill[j])
                    
           }}
         
      
           
    
    var counts_skill = {};
    
      for(var i=0;i< skill_list.length;i++)
         {
             var key = skill_list[i];
             counts_skill[key] = (counts_skill[key])? counts_skill[key] + 1 : 1 ;
           
           }
    
     var entries_skill = Object.entries(counts_skill);
            
     var sorted_skills = entries_skill.sort((a, b) => b[1] - a[1]);
     
    console.log(sorted_skills)
    
    var worktype_list = [];
    
    
    for (var i =0;i<data.length;i++){
       
             worktype_list.push(data[i].worktype)
                    
       }
    
       var counts_worktype = {};
    
      for(var i=0;i< worktype_list.length;i++)
         {
             var key = worktype_list[i];
             counts_worktype[key] = (counts_worktype[key])? counts_worktype[key] + 1 : 1 ;
           
           }
    
     var entries_worktype = Object.entries(counts_worktype);
            
     var sorted_worktype = entries_worktype.sort((a, b) => b[1] - a[1]);
     
    
     var data1 = [{
        type: 'bar',
        x: sorted_skills.map(x => x[1]).slice(0,10),
        y: sorted_skills.map(x => x[0]).slice(0,10),
        orientation: 'h'
      }];
    
      var layout1 = {
        title: 'Top 10 Skills (number of required skills found in the web)',
        yaxis:{autorange:'reversed'},
        margin:{
            l:200
          },
        barmode: 'stack'}
      
      Plotly.newPlot('bar', data1, layout1);
      
    
    
      
      var data2 = [{
        values: sorted_worktype.map(x => x[1]),
        labels: sorted_worktype.map(x => x[0]),
        domain: {column: 0},
        name: 'Work Type',
        hoverinfo: 'label+percent+name',
        hole: .4,
        type: 'pie',
        direction: 'clockwise'
      }];
      
      var layout2 = {
        title: 'Job Work Type (%)',
        showlegend: true,
      };
      
      Plotly.newPlot('pie', data2, layout2);

      
    
    
    
    
            
    }
    
    
    
    
    )

}

init();
