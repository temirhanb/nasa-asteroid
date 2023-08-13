import axios from "axios";

export  const fetchNasa = async ()=>{
  const {data} =await axios.get('https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=Z9bvPJkx9yseLf2fI1LgCDb4D969odP3IwrQMApj')
  return data
}
