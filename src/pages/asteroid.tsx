import { stateCurrentAsteroid } from "../utility/index";
import Link from "next/link";

const asteroid = () => {

  const removeCurrentAsteroid = () => {
    stateCurrentAsteroid.length = 0
  }
  return (
    <div>
      <div>
        {stateCurrentAsteroid.map(item => item.name)}
      </div>
      <Link href={'/'}>
        <div onClick={removeCurrentAsteroid}>
          назад
        </div>
      </Link>

    </div>
  )
}

export default asteroid
