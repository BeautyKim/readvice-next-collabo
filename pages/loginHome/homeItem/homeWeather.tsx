import React, { useEffect } from 'react'

const HomeWeatherPage = () => {

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=37.4923615&lon=127.0292881&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`
    console.log(process.env.NEXT_PUBLIC_WEATHER_API_KEY)
    // const Weather = async() => {
    //     try{
    //         const res = await axios.get(
    //             // `https://api.openweathermap.org/data/2.5/weather?lat=37.4923615&lon=127.0292881&appid=d351853e64ce964ac79f4401e643ff00`)
                
    //         console.log(res.data)
    //     }
    //         catch (err) {
    //         console.error(err)
    //     }
    // }
    
    // useEffect(() => {
    //     Weather()
    // }, [])

  return (
    <></>
  )
}

export default HomeWeatherPage