import styles from '@/styles/main/main.module.css'
import { useQuery } from "react-query";
import { fetchNasa } from "../api/index";
import { LeftSide } from "../component/MainPage/LeftSide/index";
import { MidSide } from "../component/MainPage/MidSide/index";
import { Title } from "../component/MainPage/Title/index";

export default function Home() {

  const currentDate = new Date().toJSON().slice(0, 10);
  const {data, isLoading, isError} = useQuery(['data',currentDate], ()=>fetchNasa(currentDate))

  if (isLoading) {
    return (
      <div>
        Загрузка...
      </div>
    )
  }

  const asteroidData = data.near_earth_objects[currentDate]
  return (
    <div className={styles.page}>
      <Title/>
      <div className={styles.main}>
        <LeftSide/>
        <MidSide
          data={asteroidData}
        />
      </div>
    </div>
  )
}
