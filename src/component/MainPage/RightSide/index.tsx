import styles from '@/styles/main/right.module.css'
import React from "react";
import Link from "next/link";

interface IProps {
  count: number
}

export const RightSide: React.FC<IProps> = ({count = 0}) => {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.title}>Корзина</div>
        <div className={styles.count}>{count} астероида</div>
      </div>
      <div className={styles.button}>
        <Link href={'cart'}>
          <div>Отправить</div>
        </Link>
      </div>
    </div>)
}
