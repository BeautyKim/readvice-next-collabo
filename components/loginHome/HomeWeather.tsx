import useGeolocation from "@/hooks/useGeolocation"


const HomeWeather: React.FC = () => {
    const location = useGeolocation()
    const lat = location.coordinates?.lat
    const lon = location.coordinates?.lng
    const req = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`)

    console.log(req)


    return(
        <div>
            {location.loaded
        ? JSON.stringify(location.coordinates?.lat)
      : "Location data not available yet."}
        </div>
    )
}
export default HomeWeather