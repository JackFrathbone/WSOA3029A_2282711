const cityData = [
    { city: 'Johannesburg', score: 44 },
    { city: 'Cape Town', score: 50 },
    { city: 'Durban', score: 6 },
    { city: 'Port Elizabeth', score: 2 },
    { city: 'George', score: 1 },
    { city: 'Pretoria', score: 3 }
]

const provinceData = [
    { city: 'Gauteng', score: 47 },
    { city: 'Western Cape', score: 51 },
    { city: 'KwaZulu-Natal', score: 6 },
    { city: 'Eastern Cape', score: 2 },
]


let showProvinceData = false;

function SwitchData() {

    showProvinceData = !showProvinceData;

    if (showProvinceData == true) {
        CreateGraph(provinceData);
        document.getElementById("geoBarPlotsButton").innerHTML = "Show Data By City";
        document.getElementById("geoBarPlotsHeading").innerHTML = "Total Number of Game And Animation Studios by Province, 2018 [2]";
    } else {
        CreateGraph(cityData);
        document.getElementById("geoBarPlotsButton").innerHTML = "Show Data By Province";
        document.getElementById("geoBarPlotsHeading").innerHTML = "Total Number of Game And Animation Studios by City, 2018 [1]";
    }

}

function CreateGraph(currentData) {
    document.getElementById("geoBarPlotsInside").innerHTML = "";

    const width = 900;
    const height = 450;

    const margin = { top: 50, bottom: 50, left: 50, right: 50 };

    const svg = d3.select('#geoBarPlotsInside')
        .append('svg')
        .classed("svg-container", true)
        .attr('width', width - margin.left - margin.right)
        .attr('height', height - margin.top - margin.bottom)
        .attr("viewBox", [0, 0, width, height])
        .attr("preserveAspectRatio", "xMinYMin meet");

    const x = d3.scaleBand()
        .domain(d3.range(currentData.length))
        .range([margin.left, width - margin.right])
        .padding(0.1)

    const y = d3.scaleLinear()
        .domain([0, 55])
        .range([height - margin.bottom, margin.top])

    svg
        .append("g")
        .attr("fill", '#DA121A')
        .selectAll("rect")
        .data(currentData.sort((a, b) => d3.descending(a.score, b.score)))
        .join("rect")
        .attr("x", (d, i) => x(i))
        .attr("y", d => y(d.score))
        .attr('title', (d) => d.score)
        .attr("class", "rect")
        .attr("height", d => y(0) - y(d.score))
        .attr("width", x.bandwidth())

    function yAxis(g) {
        g.attr("transform", `translate(${margin.left}, 0)`)
            .call(d3.axisLeft(y).ticks(null, currentData.format))
            .attr("font-size", '20px')
    }

    function xAxis(g) {
        g.attr("transform", `translate(0,${height - margin.bottom})`)
            .call(d3.axisBottom(x).tickFormat(i => currentData[i].city))
            .attr("font-size", '20px')
    }

    svg.append("g").call(xAxis);
    svg.append("g").call(yAxis);
    svg.node();
}

CreateGraph(cityData);
