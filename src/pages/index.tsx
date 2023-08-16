import { useQuery } from "react-query";
import { fetchNasa } from "../api/index";
import { LeftSide } from "../component/MainPage/LeftSide/index";
import { MidSide } from "../component/MainPage/MidSide/index";
import { RightSide } from "../component/MainPage/RightSide/index";
import styles from '@/styles/main/main.module.css'
import { useState } from "react";
import { stateAsteroid } from "../utility/index";

export default function Home() {

  const currentDate = new Date().toJSON().slice(0, 10);
  const {data, isLoading, isError} = useQuery(['data', currentDate], () => fetchNasa(currentDate))
  const [localState, setLocalState] = useState(stateAsteroid)

  if (isLoading) {
    return (
      <div>
        Загрузка...
      </div>
    )
  }

  const asteroidData = data.near_earth_objects[currentDate]
  return (
    <div className={styles.main}>
      <LeftSide/>
      <MidSide
        localState={localState} setLocalState={setLocalState}
        data={asteroidData}
      />
      <RightSide localState={localState} setLocalState={setLocalState}/>
    </div>
  )
}
