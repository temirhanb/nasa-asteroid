import { useState } from "react";

import styles from '@/styles/main/main.module.css'

export const MidSide = ({
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
                fontWeight:400
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
              fontWeight:400
            }}>в лунных орбитах</u>
          ) : 'в лунных орбитах'}
        </div>
      </div>

      <div>
        {data.map(item => {
          const distanceKilometers = Math.round(item.close_approach_data[0].miss_distance.kilometers).toLocaleString("ru-RU")
          const distanceLunar = Math.round(item.close_approach_data[0].miss_distance.lunar).toLocaleString("ru-RU")
          const diameter = Math.round(item.estimated_diameter.meters.estimated_diameter_max)
          const data = item.close_approach_data[0].close_approach_date
          const hazard = String(item.is_potentially_hazardous_asteroid)

          return (
            <div className={styles.asteroid} key={item.id}>
              <div className={styles.asteroidDate}>{data}</div>
              <div className={styles.asteroidDescription}>
                <div>
                  <div>
                    {toggleDistanceLunar !== 'Lunar'
                    ? distanceKilometers
                    : distanceLunar} {toggleDistanceLunar === 'Lunar'
                    ? 'лун'
                    : 'км'}
                  </div>
                </div>
                <div className={styles.asteroidImage}>
                  {diameter < 100?(
                    <img src="/small-asteroid.svg" alt="asteroid"/>
                  ):(
                    <img src="/big-asteroid.svg" alt="asteroid"/>
                  )}
                </div>
                <div>
                  <div className={styles.asteroidName}> {item.name.replace(/[{()}]/g, '')}</div>
                  <div>&#8960; {diameter} M</div>
                </div>
                <div>hazard: {hazard}</div>

                <button>zakazat`</button>
              </div>

            </div>
          )
        })}
      </div>
    </div>
  )
}
