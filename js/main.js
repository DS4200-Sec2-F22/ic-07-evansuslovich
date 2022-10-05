const data = [55000, 48000, 27000, 66000, 90000];
const margins = { left: 50, right: 50, top: 50, bottom: 50 };
const FRAME_HEIGHT = 500;
const FRAME_WIDTH = 200;

const VIS_HEIGHT = FRAME_HEIGHT - margins.top - margins.bottom;
const VIS_WIDTH = FRAME_WIDTH - margins.right - margins.left;



const FRAME3 = d3.select("#vis1")
  .append("svg")
  .attr("height", FRAME_HEIGHT)
  .attr("width", FRAME_WIDTH)
  .attr("class", "frame");


// Define scaling function 

const MAX_Y = d3.max(data, (d) => { return d; })

const Y_SCALE = d3.scaleLinear()
  .domain([0, MAX_Y])
  .range([0, VIS_HEIGHT])

FRAME3.selectAll("points")
  .data(data)
  .enter()
  .append("circle")
  .attr("cx", margins.left)
  .attr("cy", (d) => { return Y_SCALE(d) + margins.top } )
  .attr("r", 5)
  .attr("class", "point");

FRAME3.append("g")
  .attr("transform",
    "translate(" + (VIS_WIDTH + margins.top) + "," + (margins.top) + ")")
  .call(d3.axisLeft(Y_SCALE).ticks(4))
  .attr("font-size", "20px")
