d3.csv("output/aqi_collapsible.csv").then(data => {
    // console.log(data)
    var states = data.map(d => d.State)
    var years = data.map(d => d.Year)
    
    const distinct = (value, index, self) => {
        return self.indexOf(value) === index;
    }
    const distinctStates = states.filter(distinct)
    // // console.log(distinctStates)
    
    const distinctYears = years.filter(distinct)
    // console.log(distinctYears)

// Filter for State 
    d3.select("#states")
        .selectAll("option")
        .data(distinctStates)
        .enter()
        .append("option")
        .text(function(d) {
            return d
        })
// // Filter for Year 
//     d3.select("#years")
//         .selectAll("option")
//         .data(distinctYears)
//         .enter()
//         .append("option")
//         .text(function(d) {
//             return d
//         })
    
    var filteredValue = d3.select("#states")
    filteredValue.on("change", function() {
        var filteredState = this.value
        // console.log(filteredYear)
        var dataFilter = data.filter(state => state.State == filteredState)
        // console.log(dataFilter)
        dataFilter.forEach(element => {
            element.Days_CO = parseFloat(element.Days_CO)
            element.Days_NO2 = parseFloat(element.Days_NO2)
            element.Days_Ozone = parseFloat(element.Days_Ozone)
            element.Days_SO2 = parseFloat(element.Days_SO2)
            element.Days_PM2_5 = parseFloat(element.Days_PM2_5)
            element.Days_PM10 = parseFloat(element.Days_PM10)
        })
        var filteredYear = dataFilter.map(d => d.Year)
        var filteredCOValues = dataFilter.map(d => d.Days_CO)
        var filteredNO2Values = dataFilter.map(d => d.Days_NO2)
        var filteredOzoneValues = dataFilter.map(d => d.Days_Ozone)
        var filteredSO2Values = dataFilter.map(d => d.Days_SO2)
        var filteredPM2Values = dataFilter.map(d => d.Days_PM2_5)
        var filteredPM10Values = dataFilter.map(d => d.Days_PM10)
        
        // console.log(filteredYear)
// CO_Plot
        var trace = [{
            values: filteredCOValues,
            labels: filteredYear,
            type: 'pie',
            domain: {row:0, column: 0},
            name: 'CO Days ratio',
            hoverinfo: 'label+percent+name',
            hole: 0.6,
            textposition: "outside",
            automargin: true,
            textinfo: 'none',
            opacity: 0.8,
        },
        {
            values: filteredNO2Values,
            labels: filteredYear,
            type: 'pie',
            domain: {row:0, column: 1},
            name: 'NO2 Days ratio',
            hoverinfo: 'label+percent+name',
            hole: 0.6,
            textposition: "outside",
            automargin: true,
            textinfo: 'none',
            opacity: 0.8,
        },
        {
            values: filteredOzoneValues,
            labels: filteredYear,
            type: 'pie',
            domain: {row:0, column: 2},
            name: 'Ozone Days ratio',
            hoverinfo: 'label+percent+name',
            hole: 0.6,
            textposition: "outside",
            automargin: true,
            textinfo: 'none',
            opacity: 0.8,
        },
        {
            values: filteredSO2Values,
            labels: filteredYear,
            type: 'pie',
            domain: {row:1, column: 0},
            name: 'SO2 Days ratio',
            hoverinfo: 'label+percent+name',
            hole: 0.6,
            textposition: "outside",
            automargin: true,
            textinfo: 'none',
            opacity: 0.8,
        },
        {
            values: filteredPM2Values,
            labels: filteredYear,
            type: 'pie',
            domain: {row:1, column: 1},
            name: 'PM2-5 Days ratio',
            hoverinfo: 'label+percent+name',
            hole: 0.6,
            textposition: "outside",
            automargin: true,
            textinfo: 'none',
            opacity: 0.8,
        },
        {
            values: filteredPM10Values,
            labels: filteredYear,
            type: 'pie',
            domain: {row:1, column: 2},
            name: 'PM10 Days ratio',
            hoverinfo: 'label+percent+name',
            hole: 0.6,
            textposition: "outside",
            automargin: true,
            textinfo: 'none',
            opacity: 0.8,
        },
    ]
        
        var plotData = trace
        var layout = {
            title: {
                text: "Days Ratio with AQI",
                font: 
                    {
                    family: "Old Standard TT",
                    size: 40,
                    color: "red"
                }
            },
            annotations: [
                {
                    font: {
                      size: 20,
                    //   color: "red"
                    },
                    showarrow: false,
                    text: 'CO Days',
                    x: 0.10,
                    y: 0.80
                  },
                  {
                    font: {
                      size: 20
                    },
                    showarrow: false,
                    text: 'NO2 Days',
                    x: 0.50,
                    y: 0.80
                  },
                  {
                    font: {
                      size: 20
                    },
                    showarrow: false,
                    text: 'Ozone Days',
                    x: 0.905,
                    y: 0.80
                  },
                  {
                    font: {
                      size: 20
                    },
                    showarrow: false,
                    text: 'SO2 Days',
                    x: 0.10,
                    y: 0.2
                  },
                  {
                    font: {
                      size: 20
                    },
                    showarrow: false,
                    text: 'PM2-5 Days',
                    x: 0.50,
                    y: 0.2
                  },
                  {
                    font: {
                      size: 20
                    },
                    showarrow: false,
                    text: 'PM10 Days',
                    x: 0.9,
                    y: 0.2
                  },
            ],
            height: 600,
            width: 1200,
            grid: {rows: 2, columns: 3},
            // showlegend: false,
        }
        Plotly.newPlot('doughnutPlot', plotData, layout)
    }) 
})