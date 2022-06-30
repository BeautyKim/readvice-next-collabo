import useGeolocation from "@/hooks/useGeolocation"
import { useEffect, useState } from "react"



export function HomeWeather(){
    const location = useGeolocation()
    const [weather, setWeather] = useState()
    const req = (`http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`)


    return(
        <div>
            {location.loaded
        ? JSON.stringify(location.coordinates?.lat)
      : "Location data not available yet."}
        </div>
    )
}