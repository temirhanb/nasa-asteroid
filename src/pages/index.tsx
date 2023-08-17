import { useEffect, useState } from "react";
import axios from "axios";
import { LeftSide } from "../component/MainPage/LeftSide/index";
import { MidSide } from "../component/MainPage/MidSide/index";
import { RightSide } from "../component/MainPage/RightSide/index";
import { stateAsteroid } from "../utility/index";
import styles from '@/styles/main/main.module.css'
import { IAsteroid } from "../utility/types";


export default function Home() {

  const currentDateFormat = new Date().toJSON().slice(0, 10);
  const [prevDate, setPrevDate] = useState(currentDateFormat)
  const [currentData, setCurrentData]: any = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const [localState, setLocalState] = useState(stateAsteroid)

  const scrollHandler = (e:any) => {
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
      setIsLoading(true)
    }
  }

  useEffect(() => {
    if (isLoading) {
      axios.get(prevDate)
        .then(res => {
          const newArray:any = Object.values(res.data.near_earth_objects)[0]
          setCurrentData([...currentData, ...newArray])
          setPrevDate(res.data.links.prev)
        })
        .finally(() => setIsLoading(false))
    }
  }, [isLoading])

  useEffect(() => {
    axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${currentDateFormat}&end_date=${currentDateFormat}&api_key=Z9bvPJkx9yseLf2fI1LgCDb4D969odP3IwrQMApj`)
      .then(res => {
        setPrevDate(res.data.links.prev)
        setCurrentData(Object.values(res.data.near_earth_objects)[0])
      })
    document.addEventListener('scroll', scrollHandler)
    return () => {
      document.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  if (currentData.length === 0) {
    return (
      <div className={styles.main}>
        <LeftSide/>
        <div>
          Загрузка...
        </div>
        <RightSide localState={localState}/>
      </div>
    )
  }

  return (
    <div className={styles.main}>
      <LeftSide/>
      <div>
        <MidSide
          localState={localState}
          setLocalState={setLocalState}
          data={currentData}
        />
        {isLoading ? "Загрузка..." : null}
      </div>
        <RightSide localState={localState}/>
    </div>
  )
}
