import styles from '@/styles/main/main.module.css'


export const LeftSide = () => {
  return (
    <div>
      <div className={styles.planetSvgBlock}>
        <img className={styles.planetSvg} src="/planet.svg" alt="picture earth"/>
      </div>
    </div>
  )
}
