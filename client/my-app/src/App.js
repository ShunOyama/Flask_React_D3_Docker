import React from 'react';
import './App.css';
import { useState, useEffect, useRef } from 'react';
import { Channel } from './Components/Channel/Channel'
import { drawChart } from './Components/TrendChart';
import * as d3 from 'd3';

function App() {

  // const [data] = useState([25, 50, 35, 15, 94, 10])
  const svgRef = useRef();

  useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((data) => {
          var test_data = data
          console.log(test_data)
          drawChart(test_data, svgRef)
      }, [])
        }
      )


  return (
    <div className="App">
      <h3>Chart</h3>
      <svg ref = {svgRef}></svg>

    </div>

  );
}

export default App;
