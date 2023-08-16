import styles from '@/styles/main/asteroid.module.css'

interface IProps {
  dataFull: string;
  id: string;
  toggleDistanceLunar: string;
  name: string;
  distanceKilometers: number;
  distanceLunar: number;
  diameter: number;
  hazard: boolean;
  localState: any;
  setLocalState: any;
}

export const Asteroid: React.FC<IProps> = ({
                                             dataFull,
                                             id,
                                             localState, setLocalState,
                                             toggleDistanceLunar,
                                             distanceKilometers,
                                             distanceLunar,
                                             diameter,
                                             name,
                                             hazard
                                           }) => {

  const findAsteroid = localState.find(item => id === item.id)
  const handlerChange = () => {
    const item = {
      dataFull,
      id,
      toggleDistanceLunar,
      distanceKilometers,
      distanceLunar,
      diameter,
      name,
      hazard
    }
    if (findAsteroid !== undefined) {
      const newLocalState = localState.filter((item) => id !== item.id)
      return setLocalState(newLocalState)
    }
    return setLocalState([...localState, item])
  }

  return (
    <div className={styles.asteroid}>
      <div className={styles.asteroidDate}>{dataFull}</div>
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
          {diameter < 100 ? (
            <img src="/small-asteroid.svg" alt="asteroid"/>
          ) : (
            <img src="/big-asteroid.svg" alt="asteroid"/>
          )}
        </div>
        <div>
          <div className={styles.asteroidName}> {name.replace(/[{()}]/g, '')}</div>
          <div className={styles.asteroidDiameter}>&#8960; {diameter} м</div>
        </div>
        <div className={styles.asteroidFooter}>

          <div
            onClick={handlerChange}
            className={styles.asteroidButton}
          >
            {findAsteroid ? 'В КОРЗИНЕ' : 'ЗАКАЗАТЬ'}
          </div>
          <div className={styles.asteroidHazard}>{hazard ? (<>&#9888; опасен</>) : null}</div>
        </div>
      </div>
    </div>
  )
}
