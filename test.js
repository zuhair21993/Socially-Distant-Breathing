d3.csv("output/aqi_collapsible.csv").then(data => {
  // console.log(data)

// Collecting values in variables  
  var states = data.map(d => d.State)
  var countys = data.map(d => d.County)
  var year = data.map(d => d.Year)
  var co_days = data.map(d => d.Days_CO)
  var no2_days = data.map(d => d.Days_NO2)
  var so2_days = data.map(d => d.Days_SO2)
  var ozone_days = data.map(d => d.Days_Ozone)
  var pm2 = data.map(d => d.Days_PM2_5)
  var pm10 = data.map(d => d.Days_PM10)
  // console.log(pm10)

// Collecting unique values from variables defined above 
  var unique_states = [ new Set(states)]
  var unique_countys = [ new Set(countys)]
  var unique_year = [ new Set(year)]
  
  // console.log(unique_year)
})


