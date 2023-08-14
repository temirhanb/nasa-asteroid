import styles from '@/styles/main/main.module.css'


export const LeftSide = () => {
  return (
    <div className={styles.title}>
      <div className={styles.titleName}>
        ARMAGEDON 2023
      </div>
      <div>
        ООО "BISENOV TEAM" если к вам летит астероид то мы идем к вам!
      </div>
      <div className={styles.planetSvgBlock}>
        <img className={styles.planetSvg} src="/planet.svg" alt="picture earth"/>
      </div>
    </div>
  )
}
