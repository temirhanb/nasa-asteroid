import Link from "next/link";
import { stateAsteroid } from "../utility/index";
import styles from '@/styles/main/cart.module.css'
import { LeftSide } from "../component/MainPage/LeftSide/index";

const Cart = () => {

  const handlerClick = () => {
    stateAsteroid.length = 0;
  }
  if (stateAsteroid.length === 0) {
    return (
      <div className={styles.container}>
        <div className={styles.title}>Корзина пуста &#9785;</div>
        <LeftSide/>
        <Link href={'/'}>
          <div className={styles.buttonTransparent}>
            <span>Назад</span>
          </div>
        </Link>
      </div>
    )
  }
  return (
    <div className={styles.container}>
      <div className={styles.title}>Список выбранных астероидов</div>
      <LeftSide/>
      {stateAsteroid.map(item => {
        console.log(item)
        return (
          <div className={styles.asteroid}>
            <div>Название: {item.name}</div>
            <div>Диаметр: {item.diameter}</div>
            <div>Расстояние: {item.distanceLunar}</div>
            <div>Дата приближения: {item.dataFull}</div>
            <div>Опасен: {item.hazard ? 'да' : 'нет'}</div>
          </div>
        )
      })}
      <div className={styles.buttonContainer}>
        <Link href={'/'}>
          <div className={styles.button} onClick={handlerClick}>
            <span>Уничтожить</span>
          </div>
        </Link>
        <Link href={'/'}>
          <div className={styles.buttonTransparent}>
            <span>Назад</span>
          </div>
        </Link>
      </div>

    </div>
  )
}

export default Cart
