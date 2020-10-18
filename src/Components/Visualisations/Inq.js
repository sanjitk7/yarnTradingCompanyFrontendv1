import React from "react";
import {
  XYPlot,
  VerticalGridLines,
  HorizontalGridLines,
  YAxis,
  XAxis,
  LineSeries,
} from "react-vis";
import axios from 'axios';

function Inq() {
  const [data,setData] = React.useState()
  const [loading, setLoading] = React.useState(true)



React.useEffect(()=>{
  axios.get("http://localhost:4000/visualisations/product-to-inquiry-count")
  .then((response)=>{
    console.log("res data",response.data)
    setData(response.data)
    setLoading(false)

  }).catch(e=>{
    console.log(e)
  })
},[])

  console.log("hello", data)
  
  return (<div className="Inq">
    <XYPlot height={300} width={300} xType="ordinal">
      <VerticalGridLines />
      <HorizontalGridLines />
      <XAxis />
      <YAxis />
      {console.log("dataPdtInq:",data)}
      {!loading && <LineSeries data={data} />}
    </XYPlot>
    </div>
  );
}

export default Inq;
