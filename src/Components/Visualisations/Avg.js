import React from "react";
import {
  XYPlot,
  VerticalGridLines,
  HorizontalGridLines,
  YAxis,
  XAxis,
  VerticalBarSeries,
} from "react-vis";
import axios from 'axios';


// Average Purchase Size for Each Product

function Avg() {
  const [data,setData] = React.useState()
  const [loading, setLoading] = React.useState(true)



React.useEffect(()=>{
  axios.get("http://localhost:4000/visualisations/avg-pdt-purchase-size")
  .then((response)=>{
    console.log("res data",response.data)
    setData(response.data)
    setLoading(false)

  }).catch(e=>{
    console.log(e)
  })
},[])

  return (<div className="Avg">
    <XYPlot height={300} width={1200} color="#285104" xType="ordinal">
      <VerticalGridLines />
      <HorizontalGridLines />
      <XAxis />
      <YAxis />
      {!loading && <VerticalBarSeries data={data} />}
    </XYPlot>
    </div>
  );
}

export default Avg;
