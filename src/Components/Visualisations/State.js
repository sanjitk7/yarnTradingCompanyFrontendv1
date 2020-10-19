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

function Inq() {
  const [data,setData] = React.useState()
  const [loading, setLoading] = React.useState(true)



React.useEffect(()=>{
  axios.get("http://localhost:4000/visualisations/state-to-inquiries")
  .then((response)=>{
    console.log("res data",response.data)
    setData(response.data)
    setLoading(false)

  }).catch(e=>{
    console.log(e)
  })
},[])

  console.log("hello", data)
  return (<div className="State">
    <XYPlot height={300} width={1200} color="#ff8000" xType="ordinal">
      <VerticalGridLines />
      <HorizontalGridLines />
      <XAxis />
      <YAxis />
      {console.log("dataPdtInq:",data)}
      {!loading && <VerticalBarSeries data={data} />}
    </XYPlot>
    </div>
  );
}

export default Inq;
