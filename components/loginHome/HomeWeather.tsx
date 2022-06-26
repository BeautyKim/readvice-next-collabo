import useGeolocation from "@/hooks/useGeolocation"
import { useEffect, useState } from "react"



export function HomeWeather(){
    const location = useGeolocation()
    const [weather, setWeather] = useState()

    console.log()


    return(
        <div>
            {location.loaded
        ? JSON.stringify(location.coordinates?.lat)
      : "Location data not available yet."}
        </div>
    )
}