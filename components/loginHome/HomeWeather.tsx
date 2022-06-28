import useGeolocation from "@/hooks/useGeolocation"
import { useEffect, useState } from "react"



export function HomeWeather(){
    const location = useGeolocation()
    const [weather, setWeather] = useState()
    // const req = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location.coordinates?.lat}&lon=${location.coordinates?.lng}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`).then(json())


    return(
        <div>
            {location.loaded
        ? JSON.stringify(location.coordinates?.lat)
      : "Location data not available yet."}
        </div>
    )
}