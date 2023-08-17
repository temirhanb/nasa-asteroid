import styles from '@/styles/main/asteroid.module.css'
import Link from "next/link";

interface ILocalSate {
  dataFull: string;
  id: string;
  toggleDistanceLunar: string;
  name: string;
  distanceKilometers: string;
  distanceLunar: string;
  diameter: number;
  hazard: boolean;
}

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
          <Link href={'/asteroid'}>
            <div onClick={onHandlerAsteroid} className={styles.asteroidName}> {name.replace(/[{()}]/g, '')}</div>
          </Link>
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
