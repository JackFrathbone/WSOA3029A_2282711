CreateCircle(1997);

let selectedYear;

function SetYear(i) {
    if (i == 1) {
        selectedYear = 1997;
    }
    else if (i == 2) {
        selectedYear = 2007;
    }
    else if (i == 3) {
        selectedYear = 2017;
    }

    document.getElementById("growingCirceGraphYears").innerHTML = selectedYear;

    CreateCircle(selectedYear);
}

function CreateCircle(circleYear) {
    d3.selectAll('#growingCirceGraph svg').remove();

    if (circleYear == 1997) {
        const circlesvg = d3.select("#growingCirceGraph").
            append("svg")
            .attr("width", 500)
            .attr("height", 500)

        circlesvg.append('circle')
            .attr('cx', 200)
            .attr('cy', 150)
            .attr('r', 100)
            .attr('fill', '#DA121A');

        const circlesvgText = d3.select("#growingCirceGraph").append("svg")

        circlesvg.append('text')
            .attr('x', 200)
            .attr('y', 150)
            .attr('fill', 'white')
            .style("alignment-baseline", "right")
            .style("text-anchor", "middle")
            .style("font-size", '1.5em')
            .text("6")
    }
    else if (circleYear == 2007) {
        circlesvg = d3.select("#growingCirceGraph").
            append("svg")
            .attr("width", 500)
            .attr("height", 500)

        circlesvg.append('circle')
            .attr('cx', 200)
            .attr('cy', 200)
            .attr('r', 150)
            .attr('fill', '#DA121A');

        circlesvgText = d3.select("#growingCirceGraph").append("svg")

        circlesvg.append('text')
            .attr('x', 200)
            .attr('y', 200)
            .attr('fill', 'white')
            .style("alignment-baseline", "right")
            .style("text-anchor", "middle")
            .style("font-size", '2em')
            .text("25")
    }

    else if (circleYear == 2017) {
        circlesvg = d3.select("#growingCirceGraph").
            append("svg")
            .attr("width", 500)
            .attr("height", 500)

        circlesvg.append('circle')
            .attr('cx', 200)
            .attr('cy', 250)
            .attr('r', 200)
            .attr('fill', '#DA121A');

        circlesvgText = d3.select("#growingCirceGraph").append("svg")

        circlesvg.append('text')
            .attr('x', 200)
            .attr('y', 250)
            .attr('fill', 'white')
            .style("alignment-baseline", "right")
            .style("text-anchor", "middle")
            .style("font-size", '3em')
            .text("80+")
    }
}