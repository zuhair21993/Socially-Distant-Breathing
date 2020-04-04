// Create a map object
var myMap = L.map("map_2018", {
  center: [40.09, -75.71],
  zoom: 7
});

L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets-basic",
  accessToken: API_KEY
}).addTo(myMap);

//START OF CHANGES
var legend = L.control({ position: "bottomleft" });

legend.onAdd = function(map) {
  var div = L.DomUtil.create("div", "legend");
  div.innerHTML += "<h3>2018 AQI MAP LEGEND</h3>";
  div.innerHTML += "<h5>STATES</h5>";
  div.innerHTML += '<i style="color: #800080"><span>New York</i></span><br>';
  div.innerHTML += '<i style="color: #CCCC00"><span>New Jersey</i></span><br>';
  div.innerHTML += '<i style="color: #00FFFF"><span>Connecticut</i></span><br>';
  div.innerHTML += "<h5>AQI STATUS</h5>";
  div.innerHTML += '<i style="color: #008000"><span>Good</i></span><br>';
  div.innerHTML += '<i style="color: #FFA500"><span>Warning</i></span><br>';
  div.innerHTML += '<i style="color: #FF0000"><span>Bad</i></span><br>';
  return div;
};
legend.addTo(myMap);
// END OF CHANGES

// Define a marker functions
function markerSize(gooddays) {
  return gooddays * 50;
}
function markerColor(baddays) {
  if (baddays < 1) {  
    return ("green");
  }
  else if (baddays < 5) {
    return ("orange");
   }
   else {
     return ("red");            
   }
}
function outerColor(state) {
  if (state === "NY") {  
    return ("purple");
  }
  else if (state === "NJ") {
    return ("#FFFF00");
   }
   else {
     return ("#00FFFF");            
   }
}
// Each county object contains the city's name, location and population
var counties = [
  {
    name: "Albany County, NY",
    location: [42.6526, -73.7562],
    gooddays: 80,
    moderatedays: 19.45,
    baddays: 0.55,
    state: "NY"
  },
  {
    name: "Bronx County, NY",
    location: [40.8370, -73.8654],
    gooddays: 78.36,
    moderatedays: 19.18,
    baddays: 2.46,
    state: "NY"
  },
  {
    name: "Chautauqua County, NY",
    location: [42.2539, -79.5045],
    gooddays: 85.91,
    moderatedays: 12.98,
    baddays: 1.1,
    state: "NY"
  },
  {
    name: "Dutchess County, NY",
    location: [41.7003, -73.9210],
    gooddays: 93.96,
    moderatedays: 5.49,
    baddays: 0.55,
    state: "NY"
  },
  {
    name: "Erie County, NY",
    location: [42.880230, -78.878738],
    gooddays: 75.62,
    moderatedays: 23.83,
    baddays: 0.55,
    state: "NY"
  },
  {
    name: "Essex County, NY",
    location: [44.2161611, -73.5909662],
    gooddays: 87.4,
    moderatedays: 12.05,
    baddays: 0.55,
    state: "NY"
  },
  {
    name: "Franklin County, NY",
    location: [44.848660, -74.294899],
    gooddays: 100,
    moderatedays: 0,
    baddays: 0,
    state: "NY"
  },
  {
    name: "Hamilton County, NY",
    location: [43.4795, -74.3798],
    gooddays: 96.92,
    moderatedays: 3.08,
    baddays: 0,
    state: "NY"
  },  
  {
    name: "Herkimer County, NY",
    location: [43.41, -74.96],
    gooddays: 95.16,
    moderatedays: 4.84,
    baddays: 0,
    state: "NY"
  },
  {
    name: "Jefferson County, NY",
    location: [43.974785, -75.910759],
    gooddays: 93.31,
    moderatedays: 6.08,
    baddays: 0.61,
    state: "NY"
  },
  {
    name: "Kings County, NY",
    location: [40.650002, -73.949997],
    gooddays: 90.41,
    moderatedays: 9.59,
    baddays: 0,
    state: "NY"
  },  
  {
    name: "Monroe County, NY",
    location: [43.161030, -77.610924],
    gooddays: 82.46,
    moderatedays: 16.44,
    baddays: 1.1,
    state: "NY"
  },    
  {
    name: "Nassau County, NY",
    location: [40.749229, -73.641113],
    gooddays: 93.15,
    moderatedays: 6.85,
    baddays: 0,
    state: "NY"
  },   
  {
    name: "New York County, NY",
    location: [40.7128, -74.0059],
    gooddays: 69.86,
    moderatedays: 27.12,
    baddays: 3.01,
    state: "NY"
  },
  {
    name: "Niagara County, NY",
    location: [43.1706128, -78.6903098],
    gooddays: 91.87,
    moderatedays: 7.81,
    baddays: 0.31,
    state: "NY"
  }, 
  {
    name: "Oneida County, NY",
    location: [43.100903, -75.232664],
    gooddays: 95.33,
    moderatedays: 4.67,
    baddays: 0,
    state: "NY"
  }, 
  {
    name: "Onondaga County, NY",
    location: [43.088947, -76.154480],
    gooddays: 87.4,
    moderatedays: 12.05,
    baddays: 0.55,
    state: "NY"
  }, 
  {
    name: "Orange County, NY",
    location: [41.40204, -74.32432],
    gooddays: 88.49,
    moderatedays: 11.23,
    baddays: 0.27,
    state: "NY"
  }, 
  {
    name: "Oswego County, NY",
    location: [43.455345, -76.510498],
    gooddays: 92.57,
    moderatedays: 7.14,
    baddays: 0.29,
    state: "NY"
  }, 
  {
    name: "Putnam County, NY",
    location: [41.43009, -73.68013],
    gooddays: 94.32,
    moderatedays: 5.11,
    baddays: 0.57,
    state: "NY"
  }, 
  {
    name: "Queens County, NY",
    location: [40.742054, -73.769417],
    gooddays: 78.9,
    moderatedays: 18.91,
    baddays: 2.19,
    state: "NY"
  }, 
  {
    name: "Richmond County, NY",
    location: [40.579021, -74.151535],
    gooddays: 78.79,
    moderatedays: 19.56,
    baddays: 1.65,
    state: "NY"
  }, 
  {
    name: "Rockland County, NY",
    location: [41.147594, -73.989304],
    gooddays: 87.67,
    moderatedays: 10.69,
    baddays: 1.64,
    state: "NY"
  }, 
  {
    name: "Saratoga County, NY",
    location: [43.004333316, -73.850663264],
    gooddays: 94.46,
    moderatedays: 5.26,
    baddays: 0.28,
    state: "NY"
  }, 
  {
    name: "Seneca County, NY",
    location: [42.90479, -76.86274],
    gooddays: 100,
    moderatedays: 0,
    baddays: 0,
    state: "NY"
  }, 
  {
    name: "St. Lawrence County, NY",
    location: [44.59562, -75.16909],
    gooddays: 78.55,
    moderatedays: 18.39,
    baddays: 3.06,
    state: "NY"
  }, 
  {
    name: "Steuben County, NY",
    location: [42.3370164, -77.3177577],
    gooddays: 90.3,
    moderatedays: 9.7,
    baddays: 0,
    state: "NY"
  }, 
  {
    name: "Suffolk County, NY",
    location: [40.91704, -72.66204],
    gooddays: 82.19,
    moderatedays: 14.8,
    baddays: 3.01,
    state: "NY"
  }, 
  {
    name: "Tompkins County, NY",
    location: [42.443962, -76.501884],
    gooddays: 90.66,
    moderatedays: 8.79,
    baddays: 0.55,
    state: "NY"
  }, 
  {
    name: "Wayne County, NY",
    location: [43.06423, -76.99025],
    gooddays: 87.87,
    moderatedays: 10.46,
    baddays: 1.67,
    state: "NY"
  }, 
  {
    name: "Westchester County, NY",
    location: [41.033985, -73.762909],
    gooddays: 86.57,
    moderatedays: 10.14,
    baddays: 3.29,
    state: "NY"
  }, 
  {
    name: "Atlantic County, NJ",
    location: [39.4523385, -74.7276626],
    gooddays: 89.59,
    moderatedays: 10.14,
    baddays: 0.27,
    state: "NJ"
  }, 
  {
    name: "Bergen County, NJ",
    location: [40.887797, -74.047978],
    gooddays: 58.63,
    moderatedays: 37.53,
    baddays: 3.84,
    state: "NJ"
  }, 
  {
    name: "Camden County, NJ",
    location: [39.925945, -75.119621],
    gooddays: 64.93,
    moderatedays: 33.7,
    baddays: 1.37,
    state: "NJ"
  }, 
  {
    name: "Cumberland County, NJ",
    location: [39.429564, -75.230461],
    gooddays: 83.56,
    moderatedays: 16.44,
    baddays: 0,
    state: "NJ"
  }, 
  {
    name: "Essex County, NJ",
    location: [40.735657, -74.172363],
    gooddays: 76.1,
    moderatedays: 22.8,
    baddays: 1.1,
    state: "NJ"
  }, 
  {
    name: "Gloucester County, NJ",
    location: [40.991253, -74.059843],
    gooddays: 80.8,
    moderatedays: 16.67,
    baddays: 2.54,
    state: "NJ"
  }, 
  {
    name: "Hudson County, NJ",
    location: [40.728157, -74.077644],
    gooddays: 69.86,
    moderatedays: 16.67,
    baddays: 2.47,
    state: "NJ"
  }, 
  {
    name: "Hunterdon County, NJ",
    location: [40.56955, -74.63294],
    gooddays: 77.56,
    moderatedays: 21.02,
    baddays: 1.42,
    state: "NJ"
  }, 
  {
    name: "Mercer County, NJ",
    location: [40.217052, -74.742935],
    gooddays: 77.53,
    moderatedays: 20.55,
    baddays: 1.92,
    state: "NJ"
  }, 
  {
    name: "Middlesex County, NJ",
    location: [40.48622, -74.45182],
    gooddays: 77.26,
    moderatedays: 21.1,
    baddays: 1.64,
    state: "NJ"
  }, 
  {
    name: "Monmouth County, NJ",
    location: [40.2136754, -74.3000878],
    gooddays: 89.8,
    moderatedays: 10.2,
    baddays: 0,
    state: "NJ"
  }, 
  {
    name: "Morris County, NJ",
    location: [40.796768, -74.481544],
    gooddays: 88.49,
    moderatedays: 10.14,
    baddays: 1.37,
    state: "NJ"
  }, 
  {
    name: "Ocean County, NJ",
    location: [39.954639, -74.198456],
    gooddays: 84.81,
    moderatedays: 12.9,
    baddays: 2.29,
    state: "NJ"
  }, 
  {
    name: "Passaic County, NJ",
    location: [40.914745, -74.162827],
    gooddays: 84.12,
    moderatedays: 14.8,
    baddays: 1.08,
    state: "NJ"
  }, 
  {
    name: "Union County, NJ",
    location: [40.666058, -74.200974],
    gooddays: 69.59,
    moderatedays: 30.41,
    baddays: 0,
    state: "NJ"
  }, 
  {
    name: "Warren County, NJ",
    location: [40.82982, -75.07767],
    gooddays: 82.35,
    moderatedays: 17.37,
    baddays: 0.28,
    state: "NJ"
  }, 
  {
    name: "Fairfield County, CT",
    location: [41.186390, -73.195557],
    gooddays: 70.68,
    moderatedays: 23.56,
    baddays: 5.75,
    state: "CT"
  }, 
  {
    name: "Hartford County, CT",
    location: [41.763710, -72.685097],
    gooddays: 80.27,
    moderatedays: 19.18,
    baddays: 0.55,
    state: "CT"
  }, 
  {
    name: "Litchfield County, CT",
    location: [41.745704, -73.189238],
    gooddays: 87.88,
    moderatedays: 11.02,
    baddays: 1.1,
    state: "CT"
  }, 
  {
    name: "Middlesex County, CT",
    location: [41.56232, -72.65065],
    gooddays: 80.77,
    moderatedays: 15.38,
    baddays: 3.85,
    state: "CT"
  }, 
  {
    name: "New Haven County, CT",
    location: [41.310726, -72.929916],
    gooddays: 75.62,
    moderatedays: 20.55,
    baddays: 3.83,
    state: "CT"
  }, 
  {
    name: "New London County, CT",
    location: [41.355423, -72.102760],
    gooddays: 90.16,
    moderatedays: 7.94,
    baddays: 1.9,
    state: "CT"
  }, 
  {
    name: "Tolland County, CT",
    location: [41.86676, -72.44953],
    gooddays: 88.73,
    moderatedays: 9.39,
    baddays: 1.88,
    state: "CT"
  }, 
  {
    name: "Windham County, CT",
    location: [41.9257629, -71.9104934],
    gooddays: 92.74,
    moderatedays: 5.59,
    baddays: 1.67,
    state: "CT"
  }
];

// Loop through the array and create one marker for each county
for (var i = 0; i < counties.length; i++) {
  L.circle(counties[i].location, {
    fillOpacity: 0.75,
    color: outerColor(counties[i].state),
    fillColor: markerColor(counties[i].baddays),
    radius: markerSize(counties[i].gooddays)
  }).bindPopup("<h1>" + counties[i].name + "</h1> <hr> <h3>Percent Good Days: " + counties[i].gooddays + "%</h3> <hr> <h3>\
  Percent Mediocre Days: " + counties[i].moderatedays + "%</h3> <hr> <h3>Percent Bad Days: " + counties[i].baddays + "%</h3>").addTo(myMap);
}