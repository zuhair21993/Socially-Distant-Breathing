// Create a map object
var myMap = L.map("map_1980", {
  center: [40.09, -75.71],
  zoom: 7
});

L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets-basic",
  accessToken: API_KEY
}).addTo(myMap);

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
    gooddays: 26.86,
    moderatedays: 42.28,
    baddays: 30.86,
    state: "NY"
  },
  {
    name: "Bronx County, NY",
    location: [40.8370, -73.8654],
    gooddays: 50.28,
    moderatedays: 34.86,
    baddays: 14.86,
    state: "NY"
  },
  {
    name: "Broome County, NY",
    location: [42.0986867, -75.9179738],
    gooddays: 59.73,
    moderatedays: 32.33,
    baddays: 7.94,
    state: "NY"
  },
  {
    name: "Chautauqua County, NY",
    location: [42.2539, -79.5045],
    gooddays: 38.46,
    moderatedays: 29.88,
    baddays: 31.66,
    state: "NY"
  },
  {
    name: "Chemung County, NY",
    location: [42.084972, -76.798553],
    gooddays: 81.06,
    moderatedays: 14.76,
    baddays: 4.18,
    state: "NY"
  },
  {
    name: "Dutchess County, NY",
    location: [41.7003, -73.9210],
    gooddays: 67.59,
    moderatedays: 22.16,
    baddays: 10.25,
    state: "NY"
  },
  {
    name: "Erie County, NY",
    location: [42.880230, -78.878738],
    gooddays: 4.11,
    moderatedays: 26.58,
    baddays: 69.31,
    state: "NY"
  },
  {
    name: "Essex County, NY",
    location: [44.2161611, -73.5909662],
    gooddays: 68.37,
    moderatedays: 17.17,
    baddays: 14.46,
    state: "NY"
  },
  {
    name: "Kings County, NY",
    location: [40.650002, -73.949997],
    gooddays: 24.02,
    moderatedays: 48.05,
    baddays: 27.93,
    state: "NY"
  },  
  {
    name: "Monroe County, NY",
    location: [43.161030, -77.610924],
    gooddays: 9.59,
    moderatedays: 32.6,
    baddays: 57.81,
    state: "NY"
  },    
  {
    name: "Nassau County, NY",
    location: [40.749229, -73.641113],
    gooddays: 38.25,
    moderatedays: 43.17,
    baddays: 18.58,
    state: "NY"
  },   
  {
    name: "New York County, NY",
    location: [40.7128, -74.0059],
    gooddays: 2.77,
    moderatedays: 45.15,
    baddays: 52.08,
    state: "NY"
  },
  {
    name: "Niagara County, NY",
    location: [43.1706128, -78.6903098],
    gooddays: 16.16,
    moderatedays: 37.81,
    baddays: 46.03,
    state: "NY"
  }, 
  {
    name: "Oneida County, NY",
    location: [43.100903, -75.232664],
    gooddays: 76.71,
    moderatedays: 14.8,
    baddays: 8.49,
    state: "NY"
  }, 
  {
    name: "Onondaga County, NY",
    location: [43.088947, -76.154480],
    gooddays: 37.26,
    moderatedays: 40.55,
    baddays: 22.19,
    state: "NY"
  }, 
  {
    name: "Queens County, NY",
    location: [40.742054, -73.769417],
    gooddays: 38.33,
    moderatedays: 41.11,
    baddays: 20.56,
    state: "NY"
  }, 
  {
    name: "Rensselaer County, NY",
    location: [42.64258, -73.7429],
    gooddays: 51.81,
    moderatedays: 33.98,
    baddays: 14.21,
    state: "NY"
  }, 
  {
    name: "Richmond County, NY",
    location: [40.579021, -74.151535],
    gooddays: 37.18,
    moderatedays: 43.66,
    baddays: 19.16,
    state: "NY"
  }, 
  {
    name: "Schenectady County, NY",
    location: [43.004333316, -73.850663264],
    gooddays: 66.67,
    moderatedays: 31.95,
    baddays: 1.38,
    state: "NY"
  }, 
  {
    name: "St. Lawrence County, NY",
    location: [44.59562, -75.16909],
    gooddays: 92.86,
    moderatedays: 7.14,
    baddays: 0,
    state: "NY"
  }, 
  {
    name: "Suffolk County, NY",
    location: [40.91704, -72.66204],
    gooddays: 23.5,
    moderatedays: 37.98,
    baddays: 38.52,
    state: "NY"
  }, 
  {
    name: "Warren County, NY",
    location: [43.353627, -73.6771662],
    gooddays: 64.74,
    moderatedays: 24.79,
    baddays: 10.47,
    state: "NY"
  }, 
  {
    name: "Wayne County, NY",
    location: [43.06423, -76.99025],
    gooddays: 90.82,
    moderatedays: 6.65,
    baddays: 2.53,
    state: "NY"
  }, 
  {
    name: "Westchester County, NY",
    location: [41.033985, -73.762909],
    gooddays: 53.97,
    moderatedays: 26.3,
    baddays: 19.72,
    state: "NY"
  }, 
  {
    name: "Atlantic County, NJ",
    location: [39.4523385, -74.7276626],
    gooddays: 35.06,
    moderatedays: 42.38,
    baddays: 22.56,
    state: "NJ"
  }, 
  {
    name: "Bergen County, NJ",
    location: [40.887797, -74.047978],
    gooddays: 44.89,
    moderatedays: 38.08,
    baddays: 17.03,
    state: "NJ"
  }, 
  {
    name: "Burlington County, NJ",
    location: [39.993145, -74.787941],
    gooddays: 33.85,
    moderatedays: 34.77,
    baddays: 31.38,
    state: "NJ"
  }, 
  {
    name: "Camden County, NJ",
    location: [39.925945, -75.119621],
    gooddays: 36.66,
    moderatedays: 33.14,
    baddays: 30.2,
    state: "NJ"
  }, 
  {
    name: "Cumberland County, NJ",
    location: [39.429564, -75.230461],
    gooddays: 51.57,
    moderatedays: 31.71,
    baddays: 16.72,
    state: "NJ"
  }, 
  {
    name: "Essex County, NJ",
    location: [40.735657, -74.172363],
    gooddays: 35.04,
    moderatedays: 45.59,
    baddays: 19.37,
    state: "NJ"
  }, 
  {
    name: "Gloucester County, NJ",
    location: [40.991253, -74.059843],
    gooddays: 24.49,
    moderatedays: 46.94,
    baddays: 28.57,
    state: "NJ"
  }, 
  {
    name: "Hudson County, NJ",
    location: [40.728157, -74.077644],
    gooddays: 32.81,
    moderatedays: 48.26,
    baddays: 18.93,
    state: "NJ"
  }, 
  {
    name: "Hunterdon County, NJ",
    location: [40.56955, -74.63294],
    gooddays: 50.7,
    moderatedays: 16.28,
    baddays: 33.02,
    state: "NJ"
  }, 
  {
    name: "Mercer County, NJ",
    location: [40.217052, -74.742935],
    gooddays: 56.82,
    moderatedays: 18.51,
    baddays: 24.67,
    state: "NJ"
  }, 
  {
    name: "Middlesex County, NJ",
    location: [40.48622, -74.45182],
    gooddays: 37.5,
    moderatedays: 36.28,
    baddays: 26.22,
    state: "NJ"
  }, 
  {
    name: "Monmouth County, NJ",
    location: [40.2136754, -74.3000878],
    gooddays: 41.77,
    moderatedays: 43.35,
    baddays: 14.87,
    state: "NJ"
  }, 
  {
    name: "Morris County, NJ",
    location: [40.796768, -74.481544],
    gooddays: 23.81,
    moderatedays: 54.29,
    baddays: 21.9,
    state: "NJ"
  }, 
  {
    name: "Ocean County, NJ",
    location: [39.954639, -74.198456],
    gooddays: 71.43,
    moderatedays: 28.57,
    baddays: 0,
    state: "NJ"
  }, 
  {
    name: "Passaic County, NJ",
    location: [40.914745, -74.162827],
    gooddays: 75.81,
    moderatedays: 23.11,
    baddays: 1.08,
    state: "NJ"
  }, 
  {
    name: "Salem County, NJ",
    location: [39.568236, -75.472553],
    gooddays: 78.86,
    moderatedays: 16.78,
    baddays: 4.36,
    state: "NJ"
  }, 
  {
    name: "Somerset County, NJ",
    location: [40.497604, -74.4884868],
    gooddays: 62.31,
    moderatedays: 28.97,
    baddays: 8.72,
    state: "NJ"
  }, 
  {
    name: "Union County, NJ",
    location: [40.666058, -74.200974],
    gooddays: 34.59,
    moderatedays: 40.7,
    baddays: 24.71,
    state: "NJ"
  }, 
  {
    name: "Warren County, NJ",
    location: [40.82982, -75.07767],
    gooddays: 64.88,
    moderatedays: 33.78,
    baddays: 1.34,
    state: "NJ"
  }, 
  {
    name: "Fairfield County, CT",
    location: [41.186390, -73.195557],
    gooddays: 9.56,
    moderatedays: 28.42,
    baddays: 62.02,
    state: "CT"
  }, 
  {
    name: "Hartford County, CT",
    location: [41.763710, -72.685097],
    gooddays: 31.42,
    moderatedays: 52.73,
    baddays: 15.85,
    state: "CT"
  }, 
  {
    name: "Litchfield County, CT",
    location: [41.745704, -73.189238],
    gooddays: 57.93,
    moderatedays: 15.85,
    baddays: 26.22,
    state: "CT"
  }, 
  {
    name: "Middlesex County, CT",
    location: [41.56232, -72.65065],
    gooddays: 42.07,
    moderatedays: 23.17,
    baddays: 34.76,
    state: "CT"
  }, 
  {
    name: "New Haven County, CT",
    location: [41.310726, -72.929916],
    gooddays: 42.9,
    moderatedays: 36.61,
    baddays: 20.49,
    state: "CT"
  }, 
  {
    name: "Tolland County, CT",
    location: [41.86676, -72.44953],
    gooddays: 48.65,
    moderatedays: 18.24,
    baddays: 33.11,
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