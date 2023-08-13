import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useQuery } from "react-query";
import { fetchNasa } from "../api/index";

const inter = Inter({subsets: ['latin']})

export default function Home() {

  const {data, isLoading, isError} = useQuery('data', fetchNasa)
  console.log(data)
  return (
    <div className={styles.main}>
      hello world
    </div>
  )
}
