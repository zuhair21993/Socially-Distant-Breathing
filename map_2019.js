// https://observablehq.com/d/14135f8fb23e05ab@147
export function define2(runtime, observer) {
  const main = runtime.module();
  const fileAttachments = new Map([["counties-albers-10m.json",new URL("./counties-albers-10m.json",import.meta.url)],["aqi_limited_2019.csv",new URL("./aqi_limited_2019.csv",import.meta.url)]]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  // main.variable(observer()).define(["md"], function(md){return(
  //   md`# Air Quality Index (AQI) - Poor Air Quality Days, 2019.`
  //   )});
  main.variable(observer("chart")).define("chart", ["d3","topojson","us","path","radius","data","format"], function(d3,topojson,us,path,radius,data,format)
{
  const svg = d3.create("svg")
      // .attr("viewBox", [0, 0, 975, 610]);
      .attr("viewBox", [0, 0, 1100, 800]);

  svg.append("path")
      .datum(topojson.feature(us, us.objects.nation))
      .attr("fill", "#ccc")
      .attr("d", path);

  svg.append("path")
      .datum(topojson.mesh(us, us.objects.states, (a, b) => a !== b))
      .attr("fill", "none")
      .attr("stroke", "white")
      .attr("stroke-linejoin", "round")
      .attr("d", path);

  const legend = svg.append("g")
      .attr("fill", "#777")
      .attr("transform", "translate(925,608)")
      .attr("text-anchor", "middle")
      .style("font", "10px sans-serif")
    .selectAll("g")
      .data([1e6, 5e6, 1e7])
    .join("g");

  legend.append("circle")
      .attr("fill", "none")
      .attr("stroke", "#ccc")
      .attr("cy", d => -radius(d))
      .attr("r", radius);

  legend.append("text")
      .attr("y", d => -2 * radius(d))
      .attr("dy", "1.3em")
      .text(d3.format(".1s"));

  svg.append("g")
      .attr("fill", "brown")
      .attr("fill-opacity", 0.5)
      .attr("stroke", "#fff")
      .attr("stroke-width", 0.5)
    .selectAll("circle")
    .data(topojson.feature(us, us.objects.counties).features
        .map(d => (d.value = data.get(d.id), d))
        .sort((a, b) => b.value - a.value))
    .join("circle")
      .attr("transform", d => `translate(${path.centroid(d)})`)
      .attr("r", d => radius(d.value))
    .append("title")
      .text(d => `${d.properties.name}
${format(d.value)}`);

  return svg.node();
}
);
  main.variable(observer("data")).define("data", ["d3","FileAttachment"], async function(d3,FileAttachment){return(
Object.assign(new Map(d3.csvParse(await FileAttachment("aqi_limited_2019.csv").text(), ({id, Unhealthy}) => [id, +Unhealthy])), {title: "Unhealthy days"})
)});
  main.variable(observer("radius")).define("radius", ["d3","data"], function(d3,data){return(
d3.scaleSqrt([0, d3.quantile([...data.values()].sort(d3.ascending), 0.985)], [0, 15])
)});
  main.variable(observer("path")).define("path", ["d3"], function(d3){return(
d3.geoPath()
)});
  main.variable(observer("format")).define("format", ["d3"], function(d3){return(
d3.format(",.0f")
)});
  main.variable(observer("us")).define("us", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("counties-albers-10m.json").json()
)});
  main.variable(observer("topojson")).define("topojson", ["require"], function(require){return(
require("topojson-client@3")
)});
  main.variable(observer("d3")).define("d3", ["require"], function(require){return(
require("d3@5")
)});
  return main;
}
