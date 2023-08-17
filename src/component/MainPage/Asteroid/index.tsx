import Link from "next/link";
import styles from '@/styles/main/asteroid.module.css'
import { ILocalSate } from "../../../utility/types";

interface IProps {
  localState: ILocalSate[];
  onHandlerAsteroid: () => void;
  setLocalState: (item: ILocalSate[]) => void;
}

export const Asteroid: React.FC<IProps & ILocalSate> = ({
                                                          dataFull,
                                                          id,
                                                          localState,
                                                          setLocalState,
                                                          toggleDistanceLunar,
                                                          distanceKilometers,
                                                          distanceLunar,
                                                          diameter,
                                                          name,
                                                          hazard,
                                                          onHandlerAsteroid
                                                        }) => {


  const findAsteroid = localState.find((item: any) => id === item.id)
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
      const newLocalState = localState.filter((item: any) => id !== item.id)
      return setLocalState(newLocalState)
    }
    return setLocalState([...localState, item])
  }

  return (
    <div className={styles.asteroid}>
      <div className={styles.asteroidDate}>{dataFull}</div>
      <div className={styles.asteroidDescription}>
        <div className={styles.asteroidContainerDistance}>
          <div className={styles.asteroidDistance}>
            {toggleDistanceLunar !== 'Lunar'
              ? distanceKilometers
              : distanceLunar} {toggleDistanceLunar === 'Lunar'
            ? 'лун'
            : 'км'}
          </div>
          <img className={styles.asteroidDistanceImage} src="/arrow.svg" alt="arrow"/>
        </div>
        <div className={styles.asteroidImage}>
          {diameter < 100 ? (
            <img src="/small-asteroid.svg" alt="asteroid"/>
          ) : (
            <img src="/big-asteroid.svg" alt="asteroid"/>
          )}
        </div>
        <div>
          <Link href={'/asteroid'}>
            <div onClick={onHandlerAsteroid} className={styles.asteroidName}> {name.replace(/[{()}]/g, '')}</div>
          </Link>
          <div className={styles.asteroidDiameter}>&#8960; {diameter} м</div>
        </div>
      </div>
      <div className={styles.asteroidFooter}>

        <div
          onClick={handlerChange}
          className={styles.asteroidButton}
        >
          {findAsteroid ? <span style={{color: '#fff'}}>В КОРЗИНЕ</span> : 'ЗАКАЗАТЬ'}
        </div>
        <div className={styles.asteroidHazard}>{hazard ? (<>&#9888; Опасен</>) : null}</div>
      </div>
    </div>
  )
}
