'use strict';

// Defines constraints for visualization
const constraints = {
    margin: {left: 50, right: 20, top: 10, bottom: 50},
    width: 500,
    height: 500
};

let scaleFunc = {
    x: null,
    y: null
};

let visContainer = generateSVG();  // Appends svg container

d3.csv("./data/iris.csv", generateVisualization);

function generateSVG() {
    let width = constraints.margin.left + constraints.margin.right + constraints.width;
    let height = constraints.margin.top + constraints.margin.bottom + constraints.height;
    return d3.select("#vis")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .append("g")
        .attr("transform", "translate(" + constraints.margin.left + ", " + constraints.margin.top + ")");
}

function generateVisualization() {
    
}