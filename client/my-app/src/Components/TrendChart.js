import React from 'react'
import * as d3 from 'd3';
import { nest } from 'd3-collection';
import { useState, useEffect, useRef } from 'react';


export function drawChart(data, svgRef){

    
    
    // Parse the date / time
    // var parseTime = d3.timeParse("%d-%b-%y");
    // data.date = data.date.map(timeString => (Date.parse(timeString)));
    
    data.forEach(function(d) {
        d.date = Date.parse(d.date);
        d.value = d.meantemp;
    });

    // Set up the dimensions of the chart area
    var margin = {top: 20, right: 20, bottom: 30, left: 50},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

    console.log(width, height)

    // Set up the scales
    var x = d3.scaleTime().range([0, width]);
    var y = d3.scaleLinear().range([height, 0]);

    // Define the line
    const valueline = d3.line()
                        .x(function(d) { return x(d.date); })
                        .y(function(d) { return y(d.meantemp); });

    // Add the SVG element
    var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
  

    // Scale the range of the data
    x.domain(d3.extent(data, function(d) { return d.date; }));
    y.domain([0, d3.max(data, function(d) { return d.meantemp; })]);
    

    // Add the X Axis
    svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x))
    .append("text")
    .attr("fill", "black")
    .attr("x", (width - margin.left - margin.right) / 2 + margin.left)
    .attr("y", 100)
    .attr("text-anchor", "middle")
    .attr("font-size", "10pt")
    .attr("font-weight", "bold")
    .text("X Label");

    // Add the Y Axis
    svg.append("g")
    .call(d3.axisLeft(y))
    

    // Add the valueline path
    svg.append("path")
    .data([data])
    .attr("class", "line")
    .attr('stroke', 'black')
    .attr("d", valueline)
    .attr('fill', 'none')
    

    }

  





