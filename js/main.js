const data = [55000, 48000, 27000, 66000, 90000];
const margins = { left: 50, right: 50, top: 50, bottom: 50 };
const FRAME_HEIGHT = 200;
const FRAME_WIDTH = 500;

const VIS_HEIGHT = FRAME_HEIGHT - margins.top - margins.bottom;
const VIS_WIDTH = FRAME_WIDTH - margins.right - margins.left;



const FRAME3 = d3.select("#vis1")
  .append("svg")
  .attr("height", FRAME_HEIGHT)
  .attr("width", FRAME_WIDTH)
  .attr("class", "frame");


// Define scaling function 

const MAX_X = d3.max(data, (d) => { return d; })

const X_SCALE = d3.scaleLinear()
  .domain([0, MAX_X])
  .range([0, VIS_WIDTH])

FRAME3.selectAll("points")
  .data(data)
  .enter()
  .append("circle")
  .attr("cx", (d) => { return X_SCALE(d) + margins.left })
  .attr("cy", margins.top)
  .attr("r", 10)
  .attr("class", "point");

FRAME3.append("g")
  .attr("transform",
    "translate(" + margins.left + "," + (VIS_HEIGHT + margins.bottom) + ")")
  .call(d3.axisBottom(X_SCALE).ticks(4))
  .attr("font-size", "20px")
