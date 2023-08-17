import Link from "next/link";
import { stateCurrentAsteroid } from "../utility/index";
import styles from '@/styles/main/asteroidPage.module.css'

const options = {year: 'numeric', month: 'short', day: 'numeric'};

const asteroid = () => {

  const removeCurrentAsteroid = () => {
    stateCurrentAsteroid.length = 0
  }
  return (
    <div className={styles.container}>
      <div className={styles.asteroidContainer}>
        {stateCurrentAsteroid.map(item => {
          const dataFull = item.close_approach_data
          const diameter = Math.round(Number(item.estimated_diameter.meters.estimated_diameter_max));
          return (
            <div>
              <div>
                {diameter < 100 ? (
                  <img src="/small-asteroid.svg" alt="asteroid"/>
                ) : (<img src="/big-asteroid.svg" alt="asteroid"/>)}

              </div>
              <div>Имя: {item.name}</div>
              <div>Диаметр: {diameter} м</div>
              <div>{dataFull.map((item) => {
                const dates = item.close_approach_date_full
                const speed = item.relative_velocity.kilometers_per_hour
                const distance = item.miss_distance.kilometers
                const orbit = item.orbiting_body
                const currentDate = new Date(dates)
                  //@ts-ignore
                  .toLocaleDateString('ru-RU',
                    //@ts-ignore
                    options)
                  .slice(0, -3)
                return (
                  <div>
                    <div>Дата сближения: {currentDate}</div>
                    <div>Скорость: {Math.round(Number(speed))} км/ч</div>
                    <div>Расстояние до земли: {Math.round(Number(distance))} км</div>
                    <div>Орбита движения: {orbit}</div>
                  </div>
                )
              })}
              </div>
            </div>
          )
        })}
      </div>
      <Link href={'/'}>
        <div className={styles.buttonTransparent} onClick={removeCurrentAsteroid}>
          Назад
        </div>
      </Link>

    </div>
  )
}

export default asteroid
