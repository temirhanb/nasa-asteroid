import styles from '@/styles/main/right.module.css'
import React from "react";
import Link from "next/link";
import { stateAsteroid } from "../../../utility/index";
import { ILocalSate } from "../../../utility/types";

interface IProps {
  localState: ILocalSate[];
}

export const RightSide: React.FC<IProps> = ({localState}) => {

  const count = localState.length;

  const handlerClick = () => {
    stateAsteroid.push(...localState)
  }
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.title}>Корзина</div>
        <div className={styles.count}>{count} астероида</div>
      </div>
      <div onClick={handlerClick} className={styles.button}>
        <Link href={'cart'}>
          <div>Отправить</div>
        </Link>
      </div>
    </div>)
}
