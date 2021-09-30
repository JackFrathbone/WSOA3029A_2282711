const pieData = { GP: 61, "WC": 100, "KZN": 16 }

const pieWidth = 400,
    pieHeight = 400,
    pieMargin = 0;

const radius = Math.min(pieWidth, pieHeight) / 2 - pieMargin;

const svg = d3.select("#gamePieGraph")
    .append("svg")
    .attr("width", pieWidth)
    .attr("height", pieHeight)
    .append("g")
    .attr("transform", `translate(${pieWidth / 2}, ${pieHeight / 2})`);

const color = d3.scaleOrdinal()
    .range(["#DA121A", "#00891F", "#0075FF", "#5FB500"])

const pie = d3.pie()
    .value(function (d) { return d[1] })
const data_ready = pie(Object.entries(pieData))

const arcGenerator = d3.arc()
    .innerRadius(0)
    .outerRadius(radius)

svg
    .selectAll('whatever')
    .data(data_ready)
    .join('path')
    .attr('d', d3.arc()
        .innerRadius(0)
        .outerRadius(radius)
    )
    .attr('fill', function (d) { return (color(d.data[1])) })
    .attr("stroke", "black")
    .style("stroke-width", "2px")
    .style("opacity", 0.7)

svg
    .selectAll('mySlices')
    .data(data_ready)
    .join('text')
    .text(function (d) { return d.data[0] + " (" + d.data[1] + ")" })
    .attr("transform", function (d) { return `translate(${arcGenerator.centroid(d)})` })
    .style("alignment-baseline", "right")
    .style("text-anchor", "middle")
    .style("font-size", '1.5em')
    .style('fill', 'white')