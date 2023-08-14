import axios from "axios";

export const fetchNasa = async (currentDate: string): Promise<any> => {
  const {data} = await axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${currentDate}&end_date=${currentDate}&api_key=Z9bvPJkx9yseLf2fI1LgCDb4D969odP3IwrQMApj`)
  return data
}
