import { useState } from "react";


export const MidSide = ({
                          data
                        }) => {
  console.log(data)
  return (
    <div>
      <div>
        Ближайшие подлёты астероидов
      </div>
      <div>
        в километрах | в лунных орбитах
      </div>

      <div>
        {data.map(item => {
          console.log(item.is_potentially_hazardous_asteroid)

          const distanceKilometers = Math.round(item.close_approach_data[0].miss_distance.kilometers)
          const distanceLunar = Math.round(item.close_approach_data[0].miss_distance.lunar)
          const [toggleDistanceLunar, setToggleDistanceLunar] = useState(false)
          const diameter = Math.round(item.estimated_diameter.meters.estimated_diameter_max)
          const data=item.close_approach_data[0].close_approach_date
          const hazard = String(item.is_potentially_hazardous_asteroid)
          const handlerDistance = () => {
            setToggleDistanceLunar(!toggleDistanceLunar)
          }
          return (
            <div key={item.id}>
              <div>name: {item.name}</div>
              <div>diameter: {diameter}</div>
              <div>data: {data}</div>
              <div
                onClick={handlerDistance}>distance: {toggleDistanceLunar ? distanceLunar : distanceKilometers} {toggleDistanceLunar ? 'лун' : 'км'}</div>
              <div>hazard: {hazard}</div>
              <button>zakazat`</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
