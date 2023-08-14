import styles from '@/styles/main/asteroid.module.css'

interface IProps {
  dataFull: string;
  toggleDistanceLunar: string;
  name: string;
  distanceKilometers: number;
  distanceLunar: number;
  diameter: number;
  handlerChange: (toggle: boolean) => void;
  toggleCart: boolean;
  hazard: boolean;
}

export const Asteroid: React.FC<IProps> = ({
                                             dataFull,
                                             toggleDistanceLunar,
                                             distanceKilometers,
                                             distanceLunar,
                                             diameter,
                                             name,
                                             handlerChange,
                                             toggleCart,
                                             hazard
                                           }) => {
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
            {toggleCart ? 'В КОРЗИНЕ' : 'ЗАКАЗАТЬ'}
          </div>
          <div className={styles.asteroidHazard}>{hazard ? (<>&#9888; опасен</>) : null}</div>
        </div>
      </div>
    </div>
  )
}
