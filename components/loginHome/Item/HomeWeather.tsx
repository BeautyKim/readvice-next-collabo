import { useEffect, useState } from "react"

export function HomeWeather(){
    const [ weather, setWeather ] = useState({})
    const [ location, setLocation ] = useState('')


    return(
        <div className="flex">
            {/* {location.loaded
        ? JSON.stringify(location.coordinates?.lng)
      : "Location data not available yet."} */}
            <div className="weather">

            </div>
        </div>
    )
}