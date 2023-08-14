import { useState } from "react";
import styles from '@/styles/main/mid.module.css'
import { Asteroid } from "../Asteroid/index";

const options = {year: 'numeric', month: 'short', day: 'numeric'};

export const MidSide = (
  {
    data
  }) => {
  const [toggleDistanceLunar, setToggleDistanceLunar] = useState('Lunar')

  const handlerDistance = (e) => {
    if (e.target.innerText === 'в лунных орбитах') return setToggleDistanceLunar('Lunar')
    return setToggleDistanceLunar('Kilometers')

  }
  return (
    <div className={styles.midContainer}>
      <div className={styles.midContainerTitle}>
        Ближайшие подлёты астероидов
      </div>
      <div className={styles.midDistanceContainer}>
        <div
          className={styles.midDistance}
          onClick={handlerDistance}
        >
          {toggleDistanceLunar === 'Lunar' ? (
            <u
              style={{
                fontWeight: 400
              }}
            >в километрах</u>
          ) : 'в километрах'}

        </div>
        &nbsp;| &nbsp;
        <div
          className={styles.midDistance}
          onClick={handlerDistance}
        >
          {toggleDistanceLunar !== 'Lunar' ? (
            <u style={{
              fontWeight: 400
            }}>в лунных орбитах</u>
          ) : 'в лунных орбитах'}
        </div>
      </div>

      <div>
        {data.map(item => {

          const [toggleCart, setToggleCart] = useState(false)
          const distanceKilometers = Math.round(item.close_approach_data[0].miss_distance.kilometers).toLocaleString("ru-RU")
          const distanceLunar = Math.round(item.close_approach_data[0].miss_distance.lunar).toLocaleString("ru-RU")
          const hazard = item.is_potentially_hazardous_asteroid
          const diameter = Math.round(item.estimated_diameter.meters.estimated_diameter_max)
          const dataFull = new Date(item.close_approach_data[0].close_approach_date_full)
            .toLocaleDateString('ru-RU', options)
            .slice(0, -3);

          const handlerChange = () => {
            setToggleCart(!toggleCart)
          }

          return (
            <Asteroid
              key={item.id}
              name={item.name}
              handlerChange={handlerChange}
              toggleCart={toggleCart}
              dataFull={dataFull}
              diameter={diameter}
              hazard={hazard}
              distanceKilometers={distanceKilometers}
              distanceLunar={distanceLunar}
              toggleDistanceLunar={toggleDistanceLunar}
            />
          )
        })}
      </div>
    </div>
  )
}
